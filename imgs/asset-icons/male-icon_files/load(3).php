var slideNumber=1;function rightCaption(){if(slideNumber==1){$('#caption1').animate({'opacity':'0'},{queue:!1,duration:500}).hide()
$('#caption2').show().animate({'opacity':'1'},{queue:!1,duration:500})}else if(slideNumber==2){$('#caption2').animate({'opacity':'0'},{queue:!1,duration:500}).hide()
$('#caption3').show().animate({'opacity':'1'},{queue:!1,duration:500})}else if(slideNumber==3){$('#caption3').animate({'opacity':'0'},{queue:!1,duration:500}).hide()
$('#caption4').show().animate({'opacity':'1'},{queue:!1,duration:500})}else if(slideNumber==4){$('#caption4').animate({'opacity':'0'},{queue:!1,duration:500}).hide()
$('#caption1').show().animate({'opacity':'1'},{queue:!1,duration:500})}}function leftCaption(){if(slideNumber==1){$('#caption1').animate({'opacity':'0'},{queue:!1,duration:500}).hide()
$('#caption4').show().animate({'opacity':'1'},{queue:!1,duration:500})}else if(slideNumber==2){$('#caption2').animate({'opacity':'0'},{queue:!1,duration:500}).hide()
$('#caption1').show().animate({'opacity':'1'},{queue:!1,duration:500})}else if(slideNumber==3){$('#caption3').animate({'opacity':'0'},{queue:!1,duration:500}).hide()
$('#caption2').show().animate({'opacity':'1'},{queue:!1,duration:500})}else if(slideNumber==4){$('#caption4').animate({'opacity':'0'},{queue:!1,duration:500}).hide()
$('#caption3').show().animate({'opacity':'1'},{queue:!1,duration:500})}}function hideCaption(){if($('#caption'+slideNumber).text()==""){$('#captionBorder').animate({'opacity':'0'},{queue:!1,duration:0})}else{$('#captionBorder').animate({'opacity':'1'},{queue:!1,duration:0})}}$('#slideRight').click(function(){if($('#jsSlider').is(':animated')){}else{if(parseInt($('#jsSlider').css('margin-left'),10)>-2004){$('#jsSlider').animate({'margin-left':'-=668px'},{queue:!1,duration:500});rightCaption()
slideNumber+=1;hideCaption()}else{$('#jsSlider').animate({'margin-left':'+=2004px'},{queue:!1,duration:500});rightCaption()
slideNumber-=3;hideCaption()}}});$('#slideLeft').click(function(){if($('#jsSlider').is(':animated')){}else{if(parseInt($('#jsSlider').css('margin-left'),10)<0){$('#jsSlider').animate({'margin-left':'+=668px'},{queue:!1,duration:500});leftCaption()
slideNumber-=1;hideCaption()}else{$('#jsSlider').animate({'margin-left':'-=2004px'},{queue:!1,duration:500});leftCaption()
slideNumber+=3;hideCaption()}}});var scrolltimer=window.setInterval(autoScroll,6000);function autoScroll(){if($('#jsSlider').is(':animated')){}else{if(parseInt($('#jsSlider').css('margin-left'),10)>-2004){$('#jsSlider').animate({'margin-left':'-=668px'},{queue:!1,duration:500});rightCaption()
slideNumber+=1;hideCaption()}else{$('#jsSlider').animate({'margin-left':'+=2004px'},{queue:!1,duration:500});rightCaption()
slideNumber-=3;hideCaption()}}}$('#jsSlider').on("mouseenter",function(){scrolltimer=window.clearInterval(scrolltimer)}).on("mouseleave",function(){scrolltimer=window.setInterval(autoScroll,6000);});;;mw.loader.state({"wikia.fake.articles.f8c346b4befe3d0332e1cd744b1694b8":"ready"});

/* cache key: wowwiki:resourceloader:filter:minify-js:7:cf6089e40fe29c9e9f385a13e465cddd */