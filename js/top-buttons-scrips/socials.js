    const height = $("#imgContainer").outerHeight(true)/2; 
    const width =  $("#imgContainer").outerWidth(true)/2;
    const socialIconss = $(".socialIcons");

    const socialIconssHeight = $("#1").outerHeight(true) / 2;
    const socialIconssWidth = $("#1").outerWidth(true) / 2;

    const seperationAngle = 1000;
    var angle = 0;
    var radius = -40;

    $("#imgContainer").mouseenter(function(){
        const interval = setInterval(function() {
            if(radius < 40){
                radius += 3;
            }
    }, 10);
    })
    
    //numberOfPoints = 360;
    //for(var i=0; i <= numberOfPoints; i++){
    //    var position = socialIcons(i);
    //    var point = document.createElement("div");
    //    point.className = "point";
    //    point.style.transform = "translate("+position+")";
    //    document.getElementById("imgContainer").appendChild(point);
    //}

    const interval = setInterval(function() {
        angle += 0.005;
        for(var i = 0; i < socialIconss.length; i++){
            var position = socialIcons(angle + (seperationAngle * i), radius);
            document.getElementsByClassName("socialIcons")[i].style.transform = "translate("+position+")";
        }
    }, 10);

    function socialIcons(angle, radius){ 
        var x = ((width + radius) * Math.sin(angle) - width - socialIconssWidth); 
        var y = ((height + radius) * Math.cos(angle) + height - socialIconssHeight); 
        var position = x +"px,"+y+"px";
        return position;     
    }





