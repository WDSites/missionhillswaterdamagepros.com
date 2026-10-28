(function(){
var btn=document.querySelector('.menu-toggle'),menu=document.getElementById('mobilemenu');
if(!btn||!menu)return;
function setOpen(o){menu.classList.toggle('open',o);btn.setAttribute('aria-expanded',o?'true':'false');btn.innerHTML=o?'&#10005;':'&#9776;';document.documentElement.style.overflow=o?'hidden':'';}
btn.addEventListener('click',function(){setOpen(!menu.classList.contains('open'));});
window.addEventListener('resize',function(){if(window.innerWidth>900)setOpen(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
})();
