
function hide(id){
    document.getElementById(id).style.display = 'none';
};

function show(id){
    document.getElementById(id).style.display = 'block';
};



document.getElementById("startButton").addEventListener("click", function(){
    hide("startPage");
});

document.getElementById("restartButton").addEventListener("click", function(){
    show("startPage");
});

