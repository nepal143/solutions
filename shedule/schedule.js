let previous = '0';
let previousd = 'Tue';
let clicked = (a,b)=>{
    if(previous != '0'){
        document.getElementById(previous).classList.remove('clicked');
        document.getElementById(previous).classList.add('container-time');
    }
    document.getElementById(b).style.display = 'flex' ;
    if(previousd != b){
    document.getElementById(previousd).style.display = 'none' ;
}   
    previousd = b;
    document.getElementById(a).classList.add('clicked');
    document.getElementById(a).classList.remove('container-time');
    previous = a ;
}
