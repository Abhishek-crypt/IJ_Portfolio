var toggle=document.querySelector('#dark-mode-toggle');
var toggle_img=document.querySelector('#toggle-img')
var dark_mode=document.querySelector('#dark-mode');
var home=document.querySelector('#home');
var projects=document.querySelector('#projects');
var blogs=document.querySelector('#blogs');


var InitStatus=localStorage.getItem('switch');
checkInitialState()
function checkInitialState(){
if(InitStatus==="true"){
    toggle_img.src="/Images/toggleOff.svg"
    dark_mode.className="dark-mode"
}
else{
    toggle_img.src="/Images/toggle3.svg"
    dark_mode.className="light-mode"
}
}


toggle.addEventListener('click',()=>{
    var status=localStorage.getItem('switch');
    console.log(status)
    if(status==="true"){
        toggle_img.src="/Images/toggle3.svg"
        localStorage.setItem('switch',false);
        dark_mode.className="light-mode"
    }
    else{
        toggle_img.src="/Images/toggleOff.svg"
        localStorage.setItem('switch',true);
        dark_mode.className="dark-mode"
    }
    
})

home.addEventListener('click',() =>{
    checkInitialState()
})
projects.addEventListener('click',()=>{
    checkInitialState()
})
blogs.addEventListener('click',()=>{
    checkInitialState()
})



