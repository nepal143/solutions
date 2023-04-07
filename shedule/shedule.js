let previous = '0';
let clicked = (a)=>{
    if(previous != '0'){
        document.getElementById(previous).classList.remove('clicked');
        document.getElementById(previous).classList.add('container-time');
    }
    document.getElementById(a).classList.add('clicked');
    document.getElementById(a).classList.remove('container-time');
    previous = a ;
}