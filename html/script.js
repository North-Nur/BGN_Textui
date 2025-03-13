var timeleft = 2000 
var waiting = false
var IsShown = false
var audio = new Audio('notify.mp3');
audio.volume = 0.2;

$(function(){
    $(".container").fadeOut();
    $(".container").css("animation", "step3 0.5s ease-out", "boat");
    $(".icon").css("animation", "step4 0.5s ease-out", "boat");
    window.addEventListener("message", function(event){
        let v = event.data;
        if (v.message) {
            $(".container").show();
            $(".container").css("animation", "step1 0.5s ease-out", "boat");
            $("#text").html(v.message); 
            
            HelpTimer(2000)
            if (IsShown == false){
                IsShown = true;
                audio.play();
            }
        } else {
            $(".container").fadeOut();
            $(".container").css("animation", "step3 0.5s ease-out", "boat");
        }
    })
})

HelpTimer = (restore) => {
    if(restore != null){
        timeleft = 2000
    }

    if(!waiting){
        waiting = true 
        setTimeout(function(){ 
            timeleft -= 1000  

            if(timeleft == 0){ 
                $(".container").fadeOut();
                $(".container").css("animation", "step3 0.5s ease-out", "boat");
                $(".icon").css("animation", "step4 0.5s ease-out", "boat");
                IsShown = false;
            }

            waiting = false 
            HelpTimer()   
        }, 100) 
    }
}