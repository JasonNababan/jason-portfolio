(() => {
  'use strict';
  const welcome = document.querySelector('#welcome-dialog');
  const choices = [...welcome.querySelectorAll('[data-lens]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let selected = 'engineering';
  let returnFocus;
  let introTimer;
  const initialRole=document.querySelector('.hero-role').innerHTML;
  const initialAction=document.querySelector('.hero-actions a').innerHTML;
  const lenses = {
    engineering: {note:'Start with the engineer.\nStay for everything in between.',tag:'a signal worth following.',role:'Engineer. Curious problem-solver.',sub:'From “what if?” to working hardware.',cta:'Explore the engineering'},
    venture: {note:'Start with the story.\nMeet the people behind the idea.',tag:'every idea needs a good story.',role:'Storyteller. Cultivator co-founder.',sub:'Turning technical ideas into human stories.',cta:'Meet Cultivator'},
    creative: {note:'Start with a creative detour.\nSee what happens when curiosity leads.',tag:'there’s room for a little play.',role:'Creative thinker. Builder of useful things.',sub:'Always up for a good “what if?”',cta:'Find a creative detour'}
  };
  function openWelcome(trigger) {
    if(welcome.open) return;
    returnFocus = trigger || document.querySelector('.hero-actions a');
    document.body.classList.add('welcome-open');
    welcome.showModal();
    welcome.scrollTop = 0;
    choices.find(b=>b.dataset.lens===selected)?.focus({preventScroll:true});
  }
  choices.forEach(button=>button.addEventListener('click',()=>{
    selected = button.dataset.lens;
    choices.forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});
    document.querySelector('#lens-note').textContent=lenses[selected].note;
    document.querySelector('.welcome-photo-tag').textContent=lenses[selected].tag;
    welcome.dataset.lens=selected;
  }));
  function enter(skip=false) {
    const filter=document.querySelector(`[data-filter="${skip?'all':selected}"]`);
    filter?.click();
    if(!skip) {
      const lens=lenses[selected];
      const role=document.querySelector('.hero-role');
      role.replaceChildren(document.createTextNode(lens.role),document.createElement('br'));
      const sub=document.createElement('span');sub.textContent=lens.sub;role.append(sub);
      document.querySelector('.hero-actions a').innerHTML=lens.cta+' <span>↓</span>';
    } else {
      document.querySelector('.hero-role').innerHTML=initialRole;
      document.querySelector('.hero-actions a').innerHTML=initialAction;
    }
    welcome.close();
    document.querySelector('#home').scrollIntoView({behavior:'instant',block:'start'});
    document.querySelector('.hero-copy').classList.remove('intro-reveal');
    requestAnimationFrame(()=>document.querySelector('.hero-copy').classList.add('intro-reveal'));
    document.querySelector('.hero-actions a').focus({preventScroll:true});
  }
  document.querySelector('#enter-portfolio').addEventListener('click',()=>enter());
  document.querySelector('#skip-intro').addEventListener('click',()=>enter(true));
  welcome.addEventListener('close',()=>{
    document.body.classList.remove('welcome-open');
    returnFocus?.focus({preventScroll:true});
  });
  document.querySelectorAll('[data-replay-intro]').forEach(button=>button.addEventListener('click',()=>openWelcome(button)));
  document.querySelector('.skip').addEventListener('click',()=>{clearTimeout(introTimer);if(welcome.open)welcome.close();});
  welcome.addEventListener('pointermove',event=>{
    if(reducedMotion.matches||event.pointerType!=='mouse')return;
    const rect=welcome.getBoundingClientRect();
    welcome.style.setProperty('--welcome-tilt',`${((event.clientX-rect.left)/rect.width-.5)*5}deg`);
  });
  welcome.addEventListener('pointerleave',()=>welcome.style.setProperty('--welcome-tilt','0deg'));
  if(!location.hash||location.hash==='#home')introTimer=setTimeout(()=>{
    if(!location.hash||location.hash==='#home')openWelcome();
  },reducedMotion.matches?0:1550);
  const moments={
    champions:{title:'The moment it got real.',image:'hult-champions.jpg',alt:'Cultivator on stage holding the Hult Prize Taiwan national champion award',caption:'The 2026 Taiwan national competition. A shared milestone for the Cultivator team.'},
    team:{title:'Four people. One shared idea.',image:'hult-team.jpg',alt:'Cultivator teammates beside the Hult Prize letters',caption:'Together at Hult Prize Taiwan, 2026. There is a whole team behind the work.'},
    conversations:{title:'The conversations in between.',image:'hult-conversations.jpg',alt:'Jason and teammates speaking with other attendees at Hult Prize Taiwan',caption:'A lot of the useful questions happen away from the stage.'}
  };
  document.querySelectorAll('[data-moment]').forEach(button=>button.addEventListener('click',()=>{
    const m=moments[button.dataset.moment];
    document.dispatchEvent(new CustomEvent('portfolio:open',{detail:{trigger:button,html:`<div class="dialog-body"><p class="eyebrow">HULT PRIZE TAIWAN / 2026</p><h2 id="dialog-title">${m.title}</h2><p class="intro">${m.caption}</p><img src="assets/${m.image}" alt="${m.alt}"></div>`}}));
  }));
})();
