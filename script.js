
var counter = 1;
setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if(counter>4){
        counter=1;
    }
},5000);

const parrallax = document.getElementById('parallax');
window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parrallax.style.backgroundPositionY = offset*0.9+'px';
})

//SERVICES 

function showContact(){
    var contactBox = document.querySelectorAll(".purchasebtn");

    for (var i = 0; i < contactBox.length; i++) {
        contactBox[i].innerHTML = "<b>Telefon:</b> 123 123 123<br/>Bukowa 39, Strzegom";
        contactBox[i].style.transform="scale(1.15)";
        contactBox[i].style.boxShadow="1 1 10px 10px rgba(255,255,255,1);"
    }
}



//  SERVICES OPTION MENAGER  //


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', (e)=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('active')

        })
        tabs.forEach(tab=>{
            tab.classList.remove('active')

        })
        tab.classList.add('active')
        target.classList.add('active')       
    })
})


// ICON DIRECT TO NEW PAGE

var fb = document.querySelectorAll('.fb')
fb.forEach(facebook=>{
    facebook.addEventListener('click',()=>{
        window.open('https://www.facebook.com/GGarage-Auto-Detailing-Myjnia-Parowa-112313204292302')
    })
})

var ig = document.querySelectorAll('.insta')
ig.forEach(insta=>{
    insta.addEventListener('click',()=>{
        window.open('https://www.instagram.com/ggarage.autodetailing/')
    })
})


//

if(window.innerWidth>1000){
    const aboutSection = document.querySelectorAll('.observe') 
    const options = {

        rootMargin: '0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return
            }
            else if(entry.target.classList.contains('navObserve')){    
                setTimeout(() => { entry.target.classList.add('appearNav') }, 500);

            }
            else{
                entry.target.classList.add('appear')
            }
        })
    },options)

    aboutSection.forEach((e)=>{
        observer.observe(e)
    })



    const sliders = document.querySelectorAll('.observerSlide')

    const slideOnScroll = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return
            }
            else if(entry.target.classList.contains('xxx')){            
                entry.target.classList.add('slideIn')
            }
            else if(entry.target.classList.contains('socialWrapper')){
                entry.target.classList.add('slideInRightSide')
            }
        })
    },options)

    sliders.forEach(e=>{
        slideOnScroll.observe(e)
    })
}

const slides = document.querySelectorAll('.asd')
const option = {
    threshold: 0,
    rootMargin: '200px'
}

preloadImg = (img) =>{
    const src = img.getAttribute('data-src')
    if(!src){
        return
    }   
    img.src = src;   
}

const imgObserver = new IntersectionObserver((entries,imgObserver)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return
        }else{
            preloadImg(entry.target)
            imgObserver.unobserve(entry.target)
        }
    })
},option)

slides.forEach(e=>{
    imgObserver.observe(e)
})
