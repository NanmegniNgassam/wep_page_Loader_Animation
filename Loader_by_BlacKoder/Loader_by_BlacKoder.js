let loadingBar = document.getElementById('loading');
let interface = document.getElementById('disappear');
let finalScreen = document.getElementById('finalScreen');

let load1=0; //it makes that the loading Bar always starts at his beginning

let run = setInterval(loading, 3);// It calls loading function every 3 milliseconds

function loading(){
    //Ensure us that the loading will stop when the loadingBar is fufilled
    if(load1<100){
        load1=load1+0.2;
        load = load1 + "%";
        loadingBar.style.width =load;
    }
    else{
        interface.style.opacity="0";
        finalScreen.style.opacity="100%";
        clearInterval(run);
    }
}

//made by BlacKoder. Thanks using it!







