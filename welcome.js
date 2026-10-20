(() => {
  'use strict';
  const welcome = document.querySelector('#welcome-dialog');
  const choices = [...welcome.querySelectorAll('[data-project-route]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let returnFocus;
  let introTimer;
  function openWelcome(trigger) {
    if(welcome.open) return;
    returnFocus = trigger || document.querySelector('.hero-actions a');
    document.body.classList.add('welcome-open');
    welcome.showModal();
    welcome.scrollTop = 0;
    choices[0]?.focus({preventScroll:true});
  }
  choices.forEach(link=>link.addEventListener('click',()=>{
    clearTimeout(introTimer);
    welcome.close();
  }));
  function enter() {
    document.querySelector('[data-filter="all"]').click();
    welcome.close();
    document.querySelector('#home').scrollIntoView({behavior:'instant',block:'start'});
    document.querySelector('.hero-copy').classList.remove('intro-reveal');
    requestAnimationFrame(()=>document.querySelector('.hero-copy').classList.add('intro-reveal'));
    document.querySelector('.hero-actions a').focus({preventScroll:true});
  }
  document.querySelector('#enter-portfolio').addEventListener('click',()=>enter());
  document.querySelector('#skip-intro').addEventListener('click',()=>enter());
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
