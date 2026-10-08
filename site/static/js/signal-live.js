// signal-live.js — Live terminal feed refresh
// Reusable: any primals.eco site with a /live endpoint
// Billboard is now a self-contained shortcode: {{ billboard() }}
(function(){
  var el=document.getElementById('live-terminal');
  var status=document.getElementById('live-status');
  var pulse=document.getElementById('live-pulse');
  if(!el)return;
  var ok=false;
  function refresh(){
    fetch('/live',{cache:'no-store'}).then(function(r){return r.text()}).then(function(t){
      var lines=t.split('\n');
      el.textContent=lines.slice(-35).join('\n');
      el.scrollTop=el.scrollHeight;
      if(!ok){ok=true;pulse.classList.add('live');}
      var m=t.match(/(\d+\.\d+)\/s\)/);
      status.textContent=m?m[1]+' req/s — live':'live';
    }).catch(function(){
      status.textContent='reconnecting...';
      pulse.classList.remove('live');
      ok=false;
    });
  }
  refresh();
  setInterval(refresh,4000);
})();
