// signal-button.js — THE BUTTON entropy collection + provenance trio POST
// Reusable: any primals.eco site with the nft-section HTML structure
(function(){
  var btn=document.getElementById('nft-btn');
  if(!btn)return;
  var fill=document.getElementById('nft-fill'),
      counter=document.getElementById('nft-counter'),
      result=document.getElementById('nft-result'),
      receipt=document.getElementById('nft-receipt'),
      nameInput=document.getElementById('nft-name'),
      events=[], startTime=Date.now(), needed=30, pressed=false;

  function addEvent(t,v){
    if(pressed)return;
    events.push({t:t,v:v,ts:Date.now()-startTime});
    var pct=Math.min(100, events.length/needed*100);
    fill.style.width=pct+'%';
    counter.textContent=events.length+' entropy events';
    if(events.length>=needed && !btn.disabled) return;
    if(events.length>=needed){
      btn.disabled=false;
      btn.style.background='#cc0000';
      btn.style.borderColor='#ff3333';
      btn.style.color='#fff';
      btn.style.cursor='pointer';
      btn.innerHTML='PRESS<br>THE<br>BUTTON';
      btn.onmouseenter=function(){btn.style.background='#ff0000';btn.style.boxShadow='0 0 60px rgba(255,0,0,0.5)';btn.style.transform='scale(1.05)';};
      btn.onmouseleave=function(){btn.style.background='#cc0000';btn.style.boxShadow='none';btn.style.transform='';};
    }
  }

  document.addEventListener('mousemove',function(e){addEvent('m',e.clientX^e.clientY);});
  document.addEventListener('keydown',function(e){addEvent('k',e.keyCode||0);});
  document.addEventListener('scroll',function(){addEvent('s',window.scrollY);});

  btn.addEventListener('click',function(){
    if(btn.disabled||pressed)return;
    pressed=true;
    btn.style.background='#663300';
    btn.style.borderColor='#884400';
    btn.style.color='#ffaa00';
    btn.style.cursor='wait';
    btn.innerHTML='fermenting...';

    var payload=JSON.stringify({
      name: (nameInput&&nameInput.value.trim())||'anonymous artisan',
      events: events.length,
      entropy: events.map(function(e){return e.v;}).join(','),
      duration: Date.now()-startTime,
      source: window.location.hostname
    });

    fetch('https://git.primals.eco/contribute',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:payload
    }).then(function(r){return r.text();}).then(function(html){
      var m=html.match(/<pre[^>]*>([\s\S]*?)<\/pre>/);
      if(m){receipt.textContent=m[1].replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');}
      else{receipt.textContent=html.replace(/<[^>]+>/g,'');}
      result.style.display='block';
      btn.innerHTML='✓';
      btn.style.background='#1a4a1a';
      btn.style.borderColor='#3fb950';
      btn.style.color='#3fb950';
    }).catch(function(e){
      receipt.textContent='Connection to provenance trio failed: '+e.message+'\nTry pressing THE BUTTON directly at https://git.primals.eco/contribute';
      result.style.display='block';
      btn.innerHTML='retry?';
      btn.style.background='#cc0000';
      pressed=false;
    });
  });
})();
