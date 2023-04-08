let clicked = false;
let toggle = ()=>{
    if(clicked == false){
    document.getElementById('nav').classList.add('nav1');
    clicked= true;
    }
    else{
    document.getElementById('nav').classList.remove('nav1');
    clicked= false;
    }
    

}



