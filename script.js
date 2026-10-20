(() => {
  'use strict';
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeTitle = value => escapeHTML(value).replace(/&lt;br&gt;/g, '<br>');
  const projects = window.PORTFOLIO.projects;
  const projectContainer = $('#projects');
  const dialog = $('#detail-dialog');
  let previousFocus;
  let toastTimeout;
  function toast(message) {
    $('#toast').textContent = message;
    $('#toast').classList.add('visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => $('#toast').classList.remove('visible'), 3500);
  }
  function visual(p) {
    switch (p.visual) {
      case 'farm': return '<img class="project-image" src="assets/farm-visit.jpg" alt="Electrical equipment inspection during a Cultivator farm visit" loading="lazy"><div class="corner-label"><span class="photo-label">CULTIVATOR · FROM THE FIELD</span><span class="photo-label">↗</span></div>';
      case 'wave': return '<svg class="visual-wave" viewBox="0 0 450 150" aria-hidden="true"><path class="w1" d="M0 100L56 20L112 100L168 20L224 100L280 20L336 100L392 20L450 100"/><path class="w2" d="M0 20L56 100L112 20L168 100L224 20L280 100L336 20L392 100L450 20"/><path class="w3" d="M0 130H450"/></svg><span class="visual-caption">A + B → A SMOOTHER SIGNAL</span>';
      case 'vehicle': return '<div class="vehicle-route" aria-hidden="true"></div><div class="robot" aria-hidden="true"><div class="robot-eyes">••</div></div><span class="visual-caption">SENSE → THINK → MOVE</span>';
      case 'solar': return '<div class="sun" aria-hidden="true"><span>:)</span></div><span class="visual-caption">A BRIGHTER WAY TO READ ENERGY</span>';
      case 'ml': return '<div class="ml-dots" aria-hidden="true">'+ '<i></i>'.repeat(35)+'</div><span class="visual-caption">FIND THE PATTERN. ASK ANOTHER QUESTION.</span>';
      case 'obs': return '<div class="obs-window" aria-hidden="true"><div class="obs-bar"><i></i><i></i><i></i></div><div class="cue-bars">'+[20,35,49,65,40,55,30,61,48,25,39,55,35].map(h=>'<i style="--h:'+h+'px"></i>').join('')+'</div><div class="cue-timeline"></div><span>VERSE 01 &nbsp; ▷ &nbsp; CHORUS</span></div>';
      case 'badminton': return '<div class="court-lines" aria-hidden="true"></div><span class="shuttle" aria-hidden="true">♧</span><span class="visual-caption">LESS CLICKING. MORE PLAYING.</span>';
      default: return '<span class="media-flower" aria-hidden="true">✳</span><span class="visual-caption">TELL IT WITH A LITTLE HEART.</span>';
    }
  }
  projectContainer.innerHTML = projects.map(p => `<article class="project ${p.wide?'wide':''}" data-category="${p.category}"><div class="project-visual ${p.color}"><span class="number">${p.number} /</span>${visual(p)}</div><div class="project-info"><p class="eyebrow">${escapeHTML(p.label)}</p><h3>${safeTitle(p.title)}</h3><p class="project-subtitle">${escapeHTML(p.subtitle)}</p><p class="description">${escapeHTML(p.description)}</p><div class="tags">${p.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div><button class="project-open" data-project="${p.id}" aria-label="Read the story: ${escapeHTML(p.title.replace(/<br>/g,' '))}">Read the story <span aria-hidden="true">↗</span></button></div></article>`).join('');
  $('#project-count').textContent = `Showing all ${projects.length} projects and stories.`;
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    $$('[data-filter]').forEach(b => {b.classList.toggle('active',b===button); b.setAttribute('aria-pressed',String(b===button));});
    $$('.project').forEach(card => card.hidden = filter !== 'all' && card.dataset.category !== filter);
    const count = $$('.project:not([hidden])').length;
    $('#project-count').textContent = filter==='all' ? `Showing all ${count} projects and stories.` : `Showing ${count} ${filter === 'creative'?'creative and code':filter} projects and stories.`;
  }));
  function openDialog(html, trigger) {
    previousFocus = trigger || document.activeElement;
    $('#dialog-content').innerHTML = html;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    $('.dialog-close').focus();
  }
  $$('.project-open').forEach(button => button.addEventListener('click', () => {
    const p = projects.find(project => project.id === button.dataset.project);
    const image = p.image ? `<img src="${p.image}" alt="${escapeHTML(p.imageAlt)}">` : '';
    const links = p.links.map(([label,url]) => `<a href="${url}" ${url.startsWith('#')?'data-close-dialog':'target="_blank" rel="noopener"'}>${escapeHTML(label)} ↗</a>`).join('');
    openDialog(`<div class="dialog-body"><p class="eyebrow">${escapeHTML(p.label)}</p><h2 id="dialog-title">${safeTitle(p.title)}</h2><p class="intro">${escapeHTML(p.intro)}</p>${image}${p.sections.map(([title,body])=>`<section><h3>${escapeHTML(title)}</h3><p>${escapeHTML(body)}</p></section>`).join('')}<div class="dialog-links">${links}</div></div>`, button);
    $$('[data-close-dialog]',dialog).forEach(a => a.addEventListener('click',()=>dialog.close()));
  }));
  $('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if(event.target !== dialog) return;
    const r=dialog.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close();
  });
  dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');previousFocus?.focus();});
  $('[data-gallery="farm"]').addEventListener('click',event=>openDialog('<div class="dialog-body"><p class="eyebrow">CULTIVATOR / FIELD NOTES</p><h2 id="dialog-title">Start where the work happens.</h2><p class="intro">A visit to the farm brings the engineering questions into focus: where does a sensor go, what has to survive outdoors, and what would make an alert useful?</p><img src="assets/farm-visit.jpg" alt="Inspecting a farm electrical panel beside an aquaculture pond"><h3>The team behind the idea</h3><p>A page from our October 2026 Cultivator pitch materials.</p><img src="assets/cultivator-team.jpg" alt="Cultivator pitch slide introducing Jason, Frans, Daniel, Jai-Jai, and project advisors"><div class="dialog-links"><a href="https://cultivatortech.com" target="_blank" rel="noopener">Meet Cultivator ↗</a></div></div>', event.currentTarget));
  function confetti() {
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors=['#f4775d','#bfb0ed','#ddec83','#25251f','#fff8ee'];
    for(let i=0;i<40;i++){
      const piece=document.createElement('i');piece.className='confetti';
      piece.style.cssText=`left:${Math.random()*100}%;background:${colors[i%colors.length]};--drift:${Math.random()*240-120}px;--rotation:${Math.random()*900}deg;animation-delay:${Math.random()*.3}s;border-radius:${i%3===0?'50%':'2px'}`;
      document.body.append(piece);setTimeout(()=>piece.remove(),2500);
    }
  }
  $('#hello-sticker').addEventListener('click',()=>{confetti();toast('Hey! Glad you found your way here. ☺');});
  $('#confetti-button').addEventListener('click',()=>{confetti();toast('Here’s to the next good idea.');});
  $('#copy-email').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(window.PORTFOLIO.email);toast('Email copied. Let’s talk!');}
    catch{toast(window.PORTFOLIO.email);}
  });
  $('#year').textContent=new Date().getFullYear();
  let ticking=false;
  function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;$('.progress').style.width=`${max>0?scrollY/max*100:0}%`;ticking=false;}
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateProgress);ticking=true;}},{passive:true});
  updateProgress();
  setTimeout(()=>$('#loader')?.remove(),1500);
  const triangle = x => 1-4*Math.abs(((x%1)+1)%1-.5);
  function updateSignal(){
    const angle=Number($('#phase').value);$('#phase-value').textContent=angle+'°';
    const makePath=fn=>Array.from({length:601},(_,x)=>`${x?'L':'M'}${x},${fn(x).toFixed(2)}`).join('');
    $('#wave-a').setAttribute('d',makePath(x=>70-triangle(x/150)*36));
    $('#wave-b').setAttribute('d',makePath(x=>70-triangle(x/150+angle/360)*36));
    $('#wave-sum').setAttribute('d',makePath(x=>158-(triangle(x/150)+triangle(x/150+angle/360))*17));
    $('#signal').setAttribute('aria-label',`Two triangle signals offset by ${angle} degrees. Their combined ripple ${angle===180?'cancels in this idealized example.':'changes with the offset.'}`);
  }
  $('#phase').addEventListener('input',updateSignal);updateSignal();
  const canvas=$('#doodle'),context=canvas.getContext('2d');
  let drawing=false,color='#b93b2f',last={x:0,y:0};
  function sizeCanvas(){
    const rect=canvas.getBoundingClientRect(),ratio=Math.min(devicePixelRatio||1,2);
    if(rect.width<1) return;
    const snapshot=document.createElement('canvas');snapshot.width=canvas.width;snapshot.height=canvas.height;snapshot.getContext('2d').drawImage(canvas,0,0);
    canvas.width=Math.round(rect.width*ratio);canvas.height=Math.round(rect.height*ratio);
    context.setTransform(ratio,0,0,ratio,0,0);
    if(snapshot.width)context.drawImage(snapshot,0,0,snapshot.width,snapshot.height,0,0,rect.width,rect.height);
    context.lineWidth=3;context.lineCap='round';context.lineJoin='round';
  }
  sizeCanvas();
  new ResizeObserver(sizeCanvas).observe(canvas.parentElement);
  const position=event=>{const r=canvas.getBoundingClientRect();return{x:event.clientX-r.left,y:event.clientY-r.top};};
  canvas.addEventListener('pointerdown',event=>{
    if(event.pointerType==='mouse'&&event.button!==0)return;
    drawing=true;last=position(event);canvas.setPointerCapture(event.pointerId);$('#canvas-hint').hidden=true;
    context.fillStyle=color;context.beginPath();context.arc(last.x,last.y,1.5,0,Math.PI*2);context.fill();
  });
  canvas.addEventListener('pointermove',event=>{if(!drawing)return;const next=position(event);context.strokeStyle=color;context.beginPath();context.moveTo(last.x,last.y);context.lineTo(next.x,next.y);context.stroke();last=next;});
  for(const type of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,()=>drawing=false);
  $$('.swatch').forEach(button=>button.addEventListener('click',()=>{color=button.dataset.color;$$('.swatch').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});}));
  $('#clear-doodle').addEventListener('click',()=>{context.clearRect(0,0,canvas.width,canvas.height);$('#canvas-hint').hidden=false;});
  $('#stamp-doodle').addEventListener('click',()=>{
    $('#canvas-hint').hidden=true;context.fillStyle=color;context.font='55px Georgia';const r=canvas.getBoundingClientRect();context.fillText('✳',25+Math.random()*Math.max(0,r.width-95),65+Math.random()*Math.max(0,r.height-90));
  });
  $('#save-doodle').addEventListener('click',()=>{
    const exportCanvas=document.createElement('canvas');exportCanvas.width=canvas.width;exportCanvas.height=canvas.height;const ctx=exportCanvas.getContext('2d');ctx.fillStyle='#fff8ee';ctx.fillRect(0,0,exportCanvas.width,exportCanvas.height);ctx.drawImage(canvas,0,0);
    exportCanvas.toBlob(blob=>{if(!blob){toast('Could not save the drawing. Please try again.');return;}const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='a-little-curiosity.png';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('A little curiosity, to keep.');},'image/png');
  });
  if(window.PORTFOLIO.video){
    const v=window.PORTFOLIO.video;
    $('#video-feature').innerHTML=`<article class="video-story"><video controls playsinline preload="none" aria-label="Cultivator behind-the-scenes video: university-lake setup" poster="${v.poster}"><source src="${v.src}" type="video/mp4">${v.captions?`<track kind="captions" src="${v.captions}" srclang="en" label="English" default>`:''}</video><div><p class="eyebrow">CULTIVATOR / BEHIND THE SCENES</p><h3>${escapeHTML(v.title)}</h3><p>${escapeHTML(v.description)}</p><a class="text-link" href="${v.src}" download>Download the video ↗</a></div></article>`;
  }
})();
