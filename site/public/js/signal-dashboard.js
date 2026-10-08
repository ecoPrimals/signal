// signal-dashboard.js — Dashboard + entity topology loaders
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
      // Geography
      var gel=document.getElementById('d-geo');
      gel.innerHTML='';
      (d.geography||[]).forEach(function(g){
        var pct=Math.round(g.requests/d.total_requests*100);
        gel.innerHTML+='<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:50px;font-size:0.8rem">'+g.country+'</span><div style="background:#30363d;height:14px;flex:1;border-radius:2px;overflow:hidden"><div style="background:#ff6b35;height:100%;width:'+pct+'%"></div></div><span style="font-size:0.75rem;color:#888;width:60px;text-align:right">'+g.requests+'</span></div>';
      });
    }).catch(function(){});
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
