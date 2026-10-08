// signal-dashboard.js — Dashboard + entity topology + epitope organisms + geo subdivision
// Fetches /dashboard.json and /topology.json, populates the dashboard grid
(function(){
  var dash=document.getElementById('dashboard');
  if(!dash)return;
  function loadDash(){
    fetch('/dashboard.json',{cache:'no-store'}).then(function(r){return r.json()}).then(function(d){
      dash.style.display='';
      document.getElementById('d-rps').textContent=d.rps;
      document.getElementById('d-fleet').textContent=d.fleet_ips;
      document.getElementById('d-humans').textContent=d.human_ips;
      document.getElementById('d-pct').textContent=d.fleet_pct+'%';
      var mc=d.timing.machine_confidence;
      var mel=document.getElementById('d-machine');
      mel.textContent=mc;
      mel.style.color=mc==='HIGH'?'#e74c3c':mc==='MEDIUM'?'#f1c40f':'#2ecc71';
      document.getElementById('d-interval').textContent=d.timing.avg_interval_ms+'ms';
      document.getElementById('d-cv').textContent=d.timing.cv+' '+(d.timing.cv<0.15?'(machine)':d.timing.cv<0.5?'(likely machine)':'(collecting...)');
      var pt=d.path_types||{};
      document.getElementById('d-paths').textContent=Object.keys(pt).map(function(k){return k+': '+pt[k]}).join(' · ');
      document.getElementById('d-timing-note').textContent=d.timing.cv<0.15?'CV < 0.15 — this is a machine. Human browsing has CV > 1.0.':'Collecting timing data...';
      // Offenders
      var tb=document.querySelector('#d-offenders tbody');
      tb.innerHTML='';
      (d.top_offenders||[]).slice(0,12).forEach(function(ip){
        var repos=Object.keys(ip.top_repos||{}).slice(0,2).join(', ');
        var tr=document.createElement('tr');
        var cls=ip.is_fleet?'color:#e74c3c':'color:#2ecc71';
        tr.innerHTML='<td style="font-family:monospace;font-size:0.8rem;'+cls+'">'+ip.ip+'</td><td>'+ip.requests+'</td><td>'+ip.org+' ('+ip.country+')</td><td style="font-size:0.75rem">'+repos+'</td>';
        tb.appendChild(tr);
      });
      // Subnets
      var sb=document.querySelector('#d-subnets tbody');
      sb.innerHTML='';
      (d.subnets||[]).slice(0,8).forEach(function(s){
        var tr=document.createElement('tr');
        tr.innerHTML='<td style="font-family:monospace">'+s.subnet+'</td><td>'+s.requests+'</td><td>'+s.unique_ips+'</td><td>'+s.org+' ('+s.country+')</td>';
        sb.appendChild(tr);
      });
      // Targets
      var ttb=document.querySelector('#d-targets tbody');
      ttb.innerHTML='';
      var fake=['batch-processor','queue-worker','proxy-cache','http-proxy','deploy-scripts','graph-engine','auth-service','load-balancer','rate-limiter','service-mesh'];
      (d.targets||[]).slice(0,10).forEach(function(t){
        var tr=document.createElement('tr');
        var name=t.repo;
        var isFake=fake.some(function(f){return name.indexOf(f)>=0});
        var style=isFake?'color:#f1c40f;font-style:italic':'';
        tr.innerHTML='<td style="font-family:monospace;font-size:0.8rem;'+style+'">'+name+(isFake?' (fabricated)':'')+'</td><td>'+t.requests+'</td>';
        ttb.appendChild(tr);
      });

      // ── Epitope Organisms ──
      renderEpitopes(d.epitope_clusters||[], d.epitope_summary||{}, d.total_requests||0);

      // ── Geography with subdivision ──
      renderGeo(d.geography||[], d.total_requests||0, d.subnets||[], d.top_offenders||[], d.asn_types||{});
    }).catch(function(){});
  }

  // ── Epitope Organism Renderer ──
  function renderEpitopes(clusters, summary, total) {
    var el=document.getElementById('d-epitopes');
    if(!el)return;
    el.innerHTML='';
    if(!clusters.length){el.innerHTML='<span style="color:#6e7681">Collecting epitope data...</span>';return;}

    // Summary bar
    var bar=document.createElement('div');
    bar.style.cssText='display:flex;gap:1em;margin-bottom:1em;flex-wrap:wrap;';
    bar.innerHTML='<div style="text-align:center"><div style="font-size:1.8em;color:#58a6ff">'+summary.unique_hashes+'</div><div style="font-size:0.7em;color:#6e7681">organisms</div></div>'
      +'<div style="text-align:center"><div style="font-size:1.8em;color:#e74c3c">'+summary.largest_cluster+'</div><div style="font-size:0.7em;color:#6e7681">largest cluster</div></div>'
      +'<div style="text-align:center"><div style="font-size:1.8em;color:#f1c40f">'+summary.total_hashed+'</div><div style="font-size:0.7em;color:#6e7681">IPs hashed</div></div>'
      +'<div style="text-align:center"><div style="font-size:1.8em;color:#2ecc71">'+summary.clusters_gt1+'</div><div style="font-size:0.7em;color:#6e7681">multi-IP organisms</div></div>';
    el.appendChild(bar);

    // Organism cards
    var grid=document.createElement('div');
    grid.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:0.8em;';

    clusters.forEach(function(c){
      var card=document.createElement('div');
      var isFleet=!c.has_lang&&c.ua_pool_size>1;
      var isMeta=(c.sample_ae||'').indexOf('gzip, deflate, zstd')===0&&!c.has_lang&&c.ua_pool_size>=4;
      var isAnthropic=c.ips===1&&(c.sample_ae||'').indexOf('gzip, br, zstd')===0;
      var isSelf=c.has_lang&&c.ips===1&&(c.sample_ae||'').indexOf('br, zstd')>0;

      var borderColor=isMeta?'#e74c3c':isAnthropic?'#ff6b35':isSelf?'#2ecc71':'#f1c40f';
      var label=isMeta?'Meta (FB-BLOCK)':isAnthropic?'Anthropic':isSelf?'Self (house)':'Unknown organism';

      card.style.cssText='background:#161b22;border:1px solid #21262d;border-left:3px solid '+borderColor+';border-radius:6px;padding:1em;';

      var h='<div style="display:flex;justify-content:space-between;align-items:center">';
      h+='<span style="color:'+borderColor+';font-weight:600;font-size:0.95em">'+label+'</span>';
      h+='<code style="font-size:0.7em;color:#6e7681;background:#0d1117;padding:2px 6px;border-radius:3px">'+c.hash+'</code></div>';

      h+='<div style="font-size:1.6em;color:#c9d1d9;margin:0.3em 0">'+c.ips+' <span style="font-size:0.5em;color:#6e7681">IP'+(c.ips>1?'s':'')+'</span></div>';

      // Behavioral fingerprint bars
      h+='<div style="font-size:0.75em;color:#8b949e;margin-top:0.5em">';
      h+='<div style="display:flex;justify-content:space-between;margin:2px 0"><span>Accept-Encoding</span><code style="color:#c9d1d9;font-size:0.9em">'+(c.sample_ae||'?')+'</code></div>';
      h+='<div style="display:flex;justify-content:space-between;margin:2px 0"><span>UA pool</span><span style="color:'+(c.ua_pool_size>3?'#e74c3c':'#c9d1d9')+'">'+c.ua_pool_size+' string'+(c.ua_pool_size>1?'s':'')+'</span></div>';

      if(c.blame_ratio>0){
        var bpct=Math.round(c.blame_ratio*100);
        h+='<div style="display:flex;justify-content:space-between;margin:2px 0"><span>Blame ratio</span><span style="color:#e74c3c">'+bpct+'% <span style="color:#6e7681">(author mining)</span></span></div>';
        h+='<div style="background:#30363d;height:4px;border-radius:2px;margin:3px 0;overflow:hidden"><div style="background:#e74c3c;height:100%;width:'+bpct+'%"></div></div>';
      }

      h+='<div style="display:flex;justify-content:space-between;margin:2px 0"><span>Accept-Language</span><span style="color:'+(c.has_lang?'#2ecc71':'#e74c3c')+'">'+(c.has_lang?'present':'ABSENT')+'</span></div>';
      h+='</div>';

      // Conserved epitope indicators
      var conserved=[];
      if(!c.has_lang) conserved.push('no-lang');
      if((c.sample_ae||'').indexOf('br')<0) conserved.push('no-brotli');
      if(c.ua_pool_size>3) conserved.push('ua-pool');
      if(c.blame_ratio>0.1) conserved.push('blame');
      if(conserved.length){
        h+='<div style="margin-top:0.5em;display:flex;gap:4px;flex-wrap:wrap">';
        conserved.forEach(function(tag){
          var tc=tag==='blame'?'#e74c3c':tag==='no-brotli'?'#ff6b35':'#f1c40f';
          h+='<span style="font-size:0.65em;background:'+tc+'22;color:'+tc+';padding:1px 6px;border-radius:3px;border:1px solid '+tc+'44">'+tag+'</span>';
        });
        h+='</div>';
      }

      card.innerHTML=h;
      grid.appendChild(card);
    });

    el.appendChild(grid);
  }

  // ── Geographic Subdivision Renderer ──
  // Progressive: country → region → city → org → subnet → fiber
  function renderGeo(geo, total, subnets, offenders, asnTypes) {
    var gel=document.getElementById('d-geo');
    if(!gel)return;
    gel.innerHTML='';

    if(!geo.length){gel.innerHTML='<span style="color:#6e7681">Collecting geographic data...</span>';return;}

    // ASN type summary bar
    if(asnTypes&&Object.keys(asnTypes).length){
      var asnBar=document.createElement('div');
      asnBar.style.cssText='display:flex;gap:8px;margin-bottom:1em;flex-wrap:wrap;';
      var asnTotal=Object.values(asnTypes).reduce(function(a,b){return a+b},0);
      Object.keys(asnTypes).sort(function(a,b){return asnTypes[b]-asnTypes[a]}).forEach(function(t){
        var pct=asnTotal>0?Math.round(asnTypes[t]/asnTotal*100):0;
        var tc=t==='datacenter'?'#e74c3c':t==='cloud'?'#f1c40f':t==='residential'?'#2ecc71':t==='self'?'#58a6ff':'#8b949e';
        asnBar.innerHTML+='<span style="font-size:0.75em;background:'+tc+'18;color:'+tc+';padding:3px 10px;border-radius:4px;border:1px solid '+tc+'33">'+t+': '+pct+'%</span>';
      });
      gel.appendChild(asnBar);
    }

    // Build subnet lookup for enrichment
    var subnetByCountry={};
    (subnets||[]).forEach(function(s){
      var c=s.country||'??';
      if(!subnetByCountry[c]) subnetByCountry[c]=[];
      subnetByCountry[c].push(s);
    });

    geo.forEach(function(g){
      var country=g.country;
      var reqs=g.requests;
      var pct=total>0?Math.round(reqs/total*100):0;
      var regions=g.regions||[];

      var row=document.createElement('div');
      row.style.cssText='margin-bottom:0.8em;';

      // Country bar
      var header=document.createElement('div');
      header.style.cssText='display:flex;align-items:center;gap:8px;cursor:pointer;';
      header.innerHTML='<span style="font-size:0.9em;font-weight:600;color:#c9d1d9;min-width:55px">'+country+'</span>'
        +'<div style="background:#30363d;height:16px;flex:1;border-radius:3px;overflow:hidden;position:relative">'
        +'<div style="background:'+countryColor(country)+';height:100%;width:'+pct+'%;min-width:2px;transition:width 0.5s"></div>'
        +'<span style="position:absolute;right:6px;top:1px;font-size:0.7em;color:#8b949e">'+reqs.toLocaleString()+' · '+pct+'%</span>'
        +'</div>'
        +'<span style="font-size:0.7em;color:#6e7681;cursor:pointer" class="geo-toggle">▶</span>';

      var detail=document.createElement('div');
      detail.style.cssText='display:none;margin-left:63px;margin-top:4px;';

      // Region subdivision (from backend)
      if(regions.length){
        regions.forEach(function(r){
          var rpct=reqs>0?Math.round(r.requests/reqs*100):0;
          var rrow=document.createElement('div');
          rrow.style.cssText='margin-bottom:6px;';

          var rhead=document.createElement('div');
          rhead.style.cssText='display:flex;align-items:center;gap:6px;cursor:pointer;';
          rhead.innerHTML='<span style="font-size:0.8em;color:#c9d1d9;min-width:100px">'+r.region+'</span>'
            +'<div style="background:#21262d;height:10px;flex:1;border-radius:2px;overflow:hidden">'
            +'<div style="background:'+countryColor(country)+'99;height:100%;width:'+rpct+'%"></div>'
            +'</div>'
            +'<span style="font-size:0.65em;color:#6e7681;min-width:60px;text-align:right">'+r.requests.toLocaleString()+'</span>'
            +'<span style="font-size:0.65em;color:#484f58;cursor:pointer" class="reg-toggle">▶</span>';

          var cityDetail=document.createElement('div');
          cityDetail.style.cssText='display:none;margin-left:106px;margin-top:2px;';

          // Cities within region
          (r.cities||[]).forEach(function(c){
            var crow=document.createElement('div');
            crow.style.cssText='display:flex;align-items:center;gap:6px;margin:2px 0;font-size:0.75em;';
            crow.innerHTML='<span style="color:#58a6ff;min-width:90px">'+c.city+'</span>'
              +'<span style="color:#8b949e">'+c.requests.toLocaleString()+' req</span>';
            cityDetail.appendChild(crow);
          });

          rhead.onclick=function(e){
            e.stopPropagation();
            var open=cityDetail.style.display!=='none';
            cityDetail.style.display=open?'none':'block';
            rhead.querySelector('.reg-toggle').textContent=open?'▶':'▼';
          };

          rrow.appendChild(rhead);
          rrow.appendChild(cityDetail);
          detail.appendChild(rrow);
        });
      }

      // Subnet breakdown for this country
      var countrySubnets=subnetByCountry[country]||[];
      if(countrySubnets.length){
        var subHeader=document.createElement('div');
        subHeader.style.cssText='font-size:0.7em;color:#6e7681;margin-top:8px;margin-bottom:3px;text-transform:uppercase;letter-spacing:0.05em;border-top:1px solid #21262d;padding-top:6px;';
        subHeader.textContent='Network blocks ('+countrySubnets.length+')';
        detail.appendChild(subHeader);

        countrySubnets.sort(function(a,b){return b.requests-a.requests}).slice(0,10).forEach(function(s){
          var srow=document.createElement('div');
          srow.style.cssText='display:flex;align-items:center;gap:6px;margin:2px 0;font-size:0.75em;';
          var orgLabel=s.org||'Unknown';
          var cityLabel=s.city?(' · '+s.city):'';
          var asnLabel=s.asn_type?(' · <span style="color:#484f58">'+s.asn_type+'</span>'):'';
          srow.innerHTML='<code style="color:#58a6ff;min-width:100px">'+s.subnet+'</code>'
            +'<span style="color:#8b949e;flex:1">'+orgLabel+cityLabel+asnLabel+'</span>'
            +'<span style="color:#6e7681;min-width:60px;text-align:right">'+s.requests.toLocaleString()+' · '+s.unique_ips+' IP'+(s.unique_ips>1?'s':'')+'</span>';
          detail.appendChild(srow);
        });
      }

      // Progressive resolution note
      var note=document.createElement('div');
      note.style.cssText='font-size:0.6em;color:#484f58;margin-top:8px;font-style:italic;';
      note.textContent='Resolution sharpens as evidence accumulates → country → region → city → ASN → fiber';
      detail.appendChild(note);

      header.onclick=function(){
        var open=detail.style.display!=='none';
        detail.style.display=open?'none':'block';
        header.querySelector('.geo-toggle').textContent=open?'▶':'▼';
      };

      row.appendChild(header);
      row.appendChild(detail);
      gel.appendChild(row);
    });
  }

  function countryColor(c){
    if(c==='US')return '#ff6b35';
    if(c==='IE/US'||c==='IE')return '#e74c3c';
    if(c==='CN')return '#f1c40f';
    return '#58a6ff';
  }
  function orgColor(org){
    if(org.indexOf('Anthropic')>=0)return '#ff6b35';
    if(org.indexOf('Meta')>=0)return '#e74c3c';
    if(org.indexOf('AWS')>=0)return '#f1c40f';
    return '#58a6ff';
  }

  loadDash();
  setInterval(loadDash,8000);
})();

// Entity topology
(function(){
  function loadTopo(){
    fetch('/topology.json',{cache:'no-store'}).then(function(r){return r.json()}).then(function(d){
      if(!d.entities||!d.entities.length)return;
      document.getElementById('entity-topology').style.display='';
      var el=document.getElementById('topo-entities');
      el.innerHTML='';
      d.entities.forEach(function(e){
        if(e.total_requests<2)return;
        var card=document.createElement('div');
        card.className='dash-card';
        var color=e.is_fleet?'#e74c3c':e.is_honest?'#2ecc71':'#f1c40f';
        var honest=e.is_honest?'✓ Honest':'✗ Deceptive';
        var h='<div class="dash-title" style="color:'+color+'">'+e.label+'</div>';
        h+='<div class="dash-big">'+e.total_requests.toLocaleString()+'</div>';
        h+='<div class="dash-sub">requests | '+e.unique_ips+' IPs | '+honest+'</div>';
        h+='<div class="dash-row"><span class="dash-label">Duration</span><span>'+e.duration_hours+'h @ '+e.avg_rps+' RPS</span></div>';
        if(e.chrome_lag>0) h+='<div class="dash-row"><span class="dash-label">Chrome lag</span><span style="color:#f1c40f">'+e.chrome_lag+' versions behind stable</span></div>';
        h+='<div class="dash-row"><span class="dash-label">Sec-Fetch</span><span>'+(e.header_fingerprint.sec_fetch_pct<10?'<span style="color:#e74c3c">ABSENT (not a real browser)</span>':'<span style="color:#2ecc71">PRESENT</span>')+'</span></div>';
        if(e.blame_pct>5) h+='<div class="dash-row"><span class="dash-label">Author tracking</span><span style="color:#e74c3c">'+e.blame_pct+'% blame requests</span></div>';
        var target=e.targets_real_only?'<span style="color:#e74c3c">REAL repos only</span>':e.targets_scatter_only?'<span style="color:#f1c40f">Scatter (fabricated) only</span>':'mixed';
        h+='<div class="dash-row"><span class="dash-label">Targets</span><span>'+target+'</span></div>';
        if(e.ip_rotation) h+='<div class="dash-row"><span class="dash-label">IP strategy</span><span>'+e.ip_rotation.strategy+'</span></div>';
        if(e.timing&&e.timing.classification) h+='<div class="dash-row"><span class="dash-label">Timing</span><span>'+e.timing.mean_interval_ms+'ms (CV='+e.timing.cv+') '+e.timing.classification+'</span></div>';
        if(e.sub_systems&&e.sub_systems.length){
          h+='<div style="margin-top:0.8em;border-top:1px solid #21262d;padding-top:0.5em;">';
          h+='<div style="color:#8b949e;font-size:0.75em;text-transform:uppercase;margin-bottom:0.3em;">Detected Sub-Systems</div>';
          e.sub_systems.forEach(function(ss){
            h+='<div style="margin-bottom:0.4em;"><span style="color:#58a6ff;font-size:0.85em;">⚙ '+ss.name+'</span><br><span style="color:#8b949e;font-size:0.8em;">'+ss.description+'</span></div>';
          });
          h+='</div>';
        }
        card.innerHTML=h;
        el.appendChild(card);
      });
      // Comparative table
      var comp=d.comparative_fingerprints||[];
      if(comp.length>1){
        var ct=document.getElementById('topo-comparative');
        var html='<div class="dash-card" style="grid-column:1/-1;"><div class="dash-title">Comparative Behavioral Fingerprints</div>';
        html+='<div class="dash-sub">Each entity has a unique combination of signals they cannot change without breaking their infrastructure.</div>';
        html+='<table style="width:100%;font-size:0.8em;"><thead><tr><th>Entity</th><th>IPs</th><th>Chrome</th><th>Sec-Fetch</th><th>Accept-Encoding</th><th>Targets</th><th>Honest</th></tr></thead><tbody>';
        comp.forEach(function(c){
          var hc=c.honest?'<span style="color:#2ecc71">✓</span>':'<span style="color:#e74c3c">✗</span>';
          html+='<tr><td>'+c.entity+'</td><td>'+c.ips+'</td><td>'+c.chrome+'</td><td>'+c.sec_fetch+'</td><td style="font-size:0.75em">'+c.accept_encoding+'</td><td>'+c.target_type+'</td><td>'+hc+'</td></tr>';
        });
        html+='</tbody></table></div>';
        ct.innerHTML=html;
      }
    }).catch(function(){});
  }
  loadTopo();
  setInterval(loadTopo,30000);
})();
