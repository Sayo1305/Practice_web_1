console.log("working");
const nav = document.querySelector('.navbar');
const img = document.querySelectorAll('.Section3Img');
const section6card = document.querySelectorAll('.Section6Card');
const Section5Right1  = document.querySelectorAll('.Section5Right1');
const Section4Img = document.querySelectorAll('.Section4Img');
const Section7 = document.querySelectorAll('.Section7');
const  observer = new IntersectionObserver(entries =>{
      entries.forEach(entry=>{
            entry.target.classList.toggle("appear" , entry.isIntersecting)
            if(entry.isIntersecting) observer.unobserve(entry.target);
      })
},{
      threshold: 1,
})

const  CardObserverFadein = new IntersectionObserver(entries =>{
      entries.forEach(entry=>{
            entry.target.classList.toggle("fade_in" ,  entry.isIntersecting);
            if(entry.isIntersecting) CardObserverFadein.unobserve(entry.target);
      })
},{
      threshold: 1,
})

// Observers-----------------------------------

img.forEach(img =>{
      observer.observe(img);
})

section6card.forEach(sectioncard =>{
      CardObserverFadein.observe(sectioncard);
})

Section4Img.forEach(m=>{
      observer.observe(m);
})

Section5Right1.forEach(m =>{
      CardObserverFadein.observe(m);
})

Section7.forEach(m=>{
      CardObserverFadein.observe(m);
})

//---------------------------------------------

window.addEventListener('scroll' , ()=>{
      //console.log(window.scrollY);
      if(window.scrollY > 0)
      {
            nav.classList.add('box-shadow');
            document.querySelector('#navrepo').classList.add('box-shadow');
            console.log("trigger");
      }else{
            document.querySelector('#navrepo').classList.remove('box-shadow');
            nav.classList.remove('box-shadow');
      }
})
