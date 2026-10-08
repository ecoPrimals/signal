// signal-live.js — Live terminal feed + billboard
// Reusable: any primals.eco site with /live and /billboard endpoints
(function(){
  // Billboard
  var bEl=document.getElementById('billboard');
  var bMsg=document.getElementById('billboard-msg');
  if(bEl&&bMsg){
    function loadBillboard(){
      fetch('/billboard',{cache:'no-store'}).then(function(r){return r.text()}).then(function(t){
        t=t.trim();
        if(t&&t.length>0){bEl.style.display='';bMsg.textContent=t;}
        else{bEl.style.display='none';}
      }).catch(function(){});
    }
    loadBillboard();
    setInterval(loadBillboard,10000);
  }
  // Live terminal
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
