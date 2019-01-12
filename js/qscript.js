$("#logo").click(function(){   
    $("#header").css({"right":"0"  ,  "transition":"right .8s linear 0s"  ,"zIndex":"1"  });
    $("#work").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#hobby").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#footer").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
})

$("#headerBtn").click(function(){   
    $("#header").css({"right":"0"  ,  "transition":"right .8s linear 0s"  ,"zIndex":"1"  });
    $("#work").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#hobby").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#footer").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
})

$("#workBtn").click(function(){
    $("#header").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#work").css({"right":"0"  ,  "transition":"right .8s linear 0s"  ,"zIndex":"1"  });
    $("#hobby").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#footer").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
})

$("#hobbyBtn").click(function(){
    $("#header").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#work").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#hobby").css({"right":"0"  ,  "transition":"right .8s linear 0s"  ,"zIndex":"1"  });
    $("#footer").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
})

$("#footerBtn").click(function(){
    $("#header").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#work").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#hobby").css({"right":"-100%"  ,  "transition":"right 0s linear .8s"  ,"zIndex":"0"  });
    $("#footer").css({"right":"0"  ,  "transition":"right .8s linear 0s"  ,"zIndex":"1"  });
})



$(window).resize(function(){
    if ($(window).css("orientation") === "landscape"){
    Resize("landscape");
    }
  });

  
      
