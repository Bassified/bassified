document.documentElement.classList.add('js');
var cs=document.querySelectorAll('.chip'),ws=document.querySelectorAll('.work');
cs.forEach(function(b){b.onclick=function(){cs.forEach(function(x){x.setAttribute('aria-pressed',x===b)});var f=b.dataset.f;
if(f==='web'){document.getElementById('websites').scrollIntoView();return}
ws.forEach(function(w){w.hidden=!(f==='all'||w.dataset.c===f)})}});
var io=new IntersectionObserver(function(e){e.forEach(function(x,i){if(x.isIntersecting){setTimeout(function(){x.target.classList.add('in')},(i%3)*110);io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
var t=document.querySelector('.track'),nx=document.querySelector('.arr.n'),pv=document.querySelector('.arr.p');
if(t&&nx&&pv){nx.onclick=function(){t.scrollBy({left:t.clientWidth*.7,behavior:'smooth'})};
pv.onclick=function(){t.scrollBy({left:-t.clientWidth*.7,behavior:'smooth'})}}
var lb=document.getElementById('lb');
if(lb){ws.forEach(function(w){w.onclick=function(){lb.querySelector('img').src=w.querySelector('img').src;lb.classList.add('on')}});
lb.onclick=function(){lb.classList.remove('on')};
document.onkeydown=function(e){if(e.key==='Escape')lb.classList.remove('on')}}
