function getParamValue(name){var regex=RegExp('[&?]'+name+'=([^&]*)');var h=document.location.href,m=regex.exec(h);if(m){try{return decodeURIComponent(m[1]);}catch(someError){}}return null;}function setCookie(name,value,exdays){value=name+"="+escape(value);if(exdays!==null){var d=new Date();value+=";expires="+d.setDate(d.getDate()+exdays).toGMTString();}document.cookie=value;}function getCookie(name){var c=document.cookie;if(c.length>0){var s=c.indexOf(name+"=");if(s!==-1){var e=c.indexOf(";",s=s+name.length+1);return unescape(c.substring(s,(e!==-1)?e:e=c.length));}}return"";}if(!window.addEventListener){window.addEventListener=window.addEventListener||function(event,callBack){event=(event==="load")?"onreadystatechange":"on"+event;if(event==="onreadystatechange"){callBack.readyStateCheck=callBack.readyStateCheck||function(e){if(self.readyState==="loaded"){callBack(e);}};}this.attachEvent(event,(callBack.readyStateCheck||callBack));};}if(!window.removeEventListener){window.
removeEventListener=window.removeEventListener||function(event,callBack){event=(event==="load")?"onreadystatechange":"on"+event;this.detachEvent(event,(callBack.readyStateCheck||callBack));};}var ajaxIndicator='https://images.wikia.nocookie.net/__cb1/wowwiki/images/0/0e/Progressbar.gif';window.wwImportArticles={type:'script',debug:!0,articles:['MediaWiki:jquery-ui/jquery.effects.js','u:dev:MediaWiki:AjaxRC/code.js','MediaWiki:Countdown/code.js','MediaWiki:FloatingToc/code.js','MediaWiki:Wikiaapp.js','MediaWiki:Map/code.js','MediaWiki:SlideShow/code.js','MediaWiki:UserTags/code.js',]};var wowheadLinks=$('.wikia-wowhead-tooltip').length-1;$('.wikia-wowhead-tooltip').each(function(index){var rel=$(this).attr('data-rel');$('a',this).attr('rel',rel);if(index===wowheadLinks){$.getScript('//static.wowhead.com/widgets/power.js',function(){wowhead_tooltips={"colorlinks":!0,"iconizelinks":!0,"renamelinks":!0};});}});var tooltipsOn=!0;var $tfb;var $ttfb;var $htt;function hideTip(){$tfb.
html("").removeClass("tooltip-ready").addClass("hidden").css("visibility","hidden");}function displayTip(e){$htt.not(":empty").removeClass("hidden").addClass("tooltip-ready");moveTip(e);$htt.not(":empty").css("visibility","visible");}function moveTip(e){var newTop=e.clientY+((e.clientY>($(window).height()/2))?-($htt.not(".hidden").innerHeight()+20):20);var newLeft=e.clientX+((e.clientX>($(window).width()/2))?-($htt.not(".hidden").innerWidth()+20):20);$htt.not(".hidden").css({"position":"fixed","top":newTop+"px","left":newLeft+"px"});}function showTip(e){$t=$(this);$p=$t.parent();if($p.hasClass("selflink")==false){$t.removeAttr("title");$p.removeAttr("title");$tfb.load("/wiki/"+$t.data("tt").replace(/ /g,"_").replace(/\?/g,"%3F")+"?action=render div.tooltip-content",function(){if($tfb.html()=="")$tfb.html('<div class="tooltip-content"><b>Error</b><br />This target either has no tooltip<br />or was not intended to have one.</div>');$tfb.find(".tooltip-content").css("display","");
displayTip(e);});}}function hideTemplateTip(){$ttfb.html("").removeClass("tooltip-ready").addClass("hidden");}function showTemplateTip(e){$ttfb.html('<div class="tooltip-content">'+$(this).next().html()+'</div>');displayTip(e);}function eLink(db,nm){dbs=new Array("https://us.battle.net/wow/en/search?q=","https://www.wowhead.com/?search=","https://www.wowdb.com/search?search=");dbTs=new Array("Armory","Wowhead","WoWDB");dbHs=new Array("&real; ","&omega; ","&piv; ");el='<a href="'+dbs[db]+nm+'" target="_blank" title="'+dbTs[db]+'">'+dbHs[db]+'</a>';return el;}function ttBind(){$t=$(this);$p=$t.parent();if($p.hasClass("selflink")==false){$t.data("tt",$p.attr("title").replace(" (page does not exist)","").replace("?","%3F")).mouseover(showTip).mouseout(hideTip).mousemove(moveTip);if($p.hasClass("new")){els='<sup><span class="plainlinks fromWikia">';y=($t.hasClass("itemlink"))?0:1;z=($t.hasClass("achievementlink"))?3:3;for(x=y;x<z;x++)els+=eLink(x,$t.data("tt").replace("Quest:",""));$p.after
(els+'</span></sup>');}}}function ttMouseOver(foo){if(tooltipsOn&&getCookie("wiki-tiploader")!="no"){$("#WikiaArticle").mouseover(hideTip);$("#WikiaArticle").append('<div id="tfb" class="htt"></div><div id="templatetfb" class="htt"><div>');$tfb=$("#tfb");$ttfb=$("#templatetfb");$htt=$("#tfb,#templatetfb");if(foo==1){$("#WikiaArticle span.ajaxttlink").each(ttBind);}$("#WikiaArticle span.tttemplatelink").mouseover(showTemplateTip).mouseout(hideTemplateTip).mousemove(moveTip);}}function wwScribbleMaps(){$("#WikiaArticle div.wwSM").each(function(){var mapID=$(this).attr("class").replace("wwSM map-",""),width=$(this).width(),height=$(this).height();if(mapID.length>20)mapID="";if(width<=0)width=550;if(height<=0)height=Math.floor(width/11*8);$(this).html('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+
'" id="smwidget" align="middle"><param name="allowFullScreen" value="true" /><param name="FlashVars" value="id='+mapID+'&p=true&mt=false&d=true&z=true" /><param name="movie" value="https://widgets.scribblemaps.com/wowsmwidget.swf"/><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><embed src="https://widgets.scribblemaps.com/wowsmwidget.swf" FlashVars="id='+mapID+'&p=true&mt=false&d=true&z=true" "quality="high" bgcolor="#000000" width="'+width+'" height="'+height+'" name="smwidget" align="middle" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" /></object>');});}function smwToggleFacts(){if($("#SMWFactToggle").text()=="hide"){$("#mw-data-after-content table.smwfacttable tr").hide();setCookie("hideSMWFacts","true");$("#SMWFactToggle").text("show");}else{$("#mw-data-after-content table.smwfacttable tr").show();setCookie("hideSMWFacts","false");$("#SMWFactToggle").text("hide");}}function
smwInitPage(){if($("#mw-data-after-content table.smwfacttable tr").length==0){$("#mw-data-after-content div.smwfact").hide();}else{$("#mw-data-after-content span.smwrdflink").after('<span style="float:right;">[<a href="javascript:;" onClick="smwToggleFacts();" id="SMWFactToggle">hide</a>] &nbsp;</span>');}if(getCookie("hideSMWFacts")=="true"){smwToggleFacts();}}function wwTwitterFeedInit(){var twitters=$(".twitter-timeline");if(twitters.length==0)return;twitters.each(function(){var feed=$(this);var w=feed.data('tt-width');if(w)feed.attr('width',w);var h=feed.data('tt-height');if(h)feed.attr('height',h);var a=feed.data('tt-id');if(a)feed.attr('href','https://twitter.com/'+a);});if($("#twitter-wjs").length==0){$(window.document.head).append('<script id="twitter-wjs" src="https://platform.twitter.com/widgets.js"></script>');}}function wwGoogleChartInit(){var charts=$(".ww-googlechart");if(charts.length==0)return;charts.each(function(){var chart=$(this);var w=chart.data('gc-width');var h=
chart.data('gc-height');var o=chart.data('gc-options');if(o){o='https://chart.apis.google.com/chart?'+o;$('<a href="'+o+'"><img width="'+w+'" height="'+h+'" src="'+o+'"/></a>').appendTo(chart);}});}function wwRequireImageLicense(){if(wgPageName!="Special:Upload"||getParamValue("wpDestFile")!=null)return;$wpu=$("#mw-upload-form").find("[name=wpUpload]").not("#wpUpload");$wpu.attr("disabled","true");$("#wpLicense").change(function(){if($("#wpLicense").val()){$wpu.removeAttr("disabled");}else{$wpu.attr("disabled","true");}});}function wwDuplicateImages(gf){if($("#mw-dupimages").length==0)return;var dil=window.ww.dil=window.ww.dil||[];$.getJSON('/api.php?action=query&generator=allimages&prop=duplicatefiles&gailimit=500&format=json'+((gf)?('&gaifrom='+gf):''),function(data){if(!data.query)return;var pages=data.query.pages,output="";for(pageID in pages){var dils=","+dil.join();if(dils.indexOf(","+pages[pageID].title)==-1&&pages[pageID].title.indexOf("File::")==-1&&pages[pageID].
duplicatefiles){output+="<h3><a href='/"+pages[pageID].title+"'>"+pages[pageID].title+"</a></h3>\n<ul>\n";for(x=0;x<pages[pageID].duplicatefiles.length;x++){output+="<li><a href='/File:"+pages[pageID].duplicatefiles[x].name+"'>File:"+pages[pageID].duplicatefiles[x].name+"</a></li>\n";dil.push("File:"+pages[pageID].duplicatefiles[x].name.replace(/_/g," "));}output+="</ul>\n\n"}}$("#mw-dupimages").append(output);if(data["query-continue"])setTimeout("wwDuplicateImages('"+data["query-continue"].allimages.gaifrom+"');",5000);});}function wwGuildList(){if($("#gslist").length==0)return;function sortDays(a,b){return b.substring(b.indexOf(";")+1)-a.substring(a.indexOf(";")+1);}var dateRE=/(\d{4})-(\d\d)-(\d\d).*/,tsDate=new Date(),today=new Date();var pArr=[];$.getJSON("https://www.wowwiki.com/api.php?action=query&generator=categorymembers&gcmlimit=500&gcmsort=timestamp&gcmdir=desc&gcmtitle=Category:Guild_stubs&prop=revisions&rvprop=timestamp&format=json&callback=?",function(data){if(!data.
query)return;var pages=data.query.pages;for(pageID in pages){var timestamp=pages[pageID].revisions[0].timestamp;var dateREd=dateRE.exec(timestamp);tsDate.setFullYear(dateREd[1],dateREd[2]-1,dateREd[3]);var daysElapsed=Math.round((today-tsDate)/86400000);pArr[pArr.length]=pages[pageID].title+";"+daysElapsed;}var pArr2=pArr.sort(sortDays);var gslBuffer="<ul>";for(n in pArr2){var guild=pArr2[n].substring(0,pArr2[n].indexOf(";"));var daysE=pArr2[n].substring(pArr2[n].indexOf(";")+1);daysE=(daysE<0)?0:daysE;daysE=(daysE>29)?'<span style="color:red;">('+daysE+' days)</span>':'('+daysE+' days)';gslBuffer+='<li><a href="/'+guild+'" title="'+guild+'">'+guild+'</a> '+daysE+' - <a href="/'+guild+'?action=history">History</a> &bull; <a href="/'+guild+'?action=delete">Delete</a></li>';}gslBuffer+="</ul>";$("#gslist").html(gslBuffer);});}(function(){window.ww=window.ww||{};wwTwitterFeedInit();wwGoogleChartInit();}());$(function(){if(wgPageName=="Special:Upload"){wwRequireImageLicense();}if(
wgPageName=="WoWWiki:Guild_list"){wwGuildList();}if(wgPageName=="WoWWiki:Duplicate_image_search"){wwDuplicateImages();}if(wgUserName!=null){$(".insertusername").html(wgUserName);}if($("#mw-data-after-content").length>0){smwInitPage();}ttMouseOver(1);wwScribbleMaps();$('a[href*="modelviewer"]').attr({target:'_blank'});});(function(){var loaders=window.wwLoaders;if(!loaders)return;for(var i=0,l=loaders.length;i<l;i++){var loader=loaders[i];if(typeof loader=='function'){loader();}}}());(function(){var imports=window.wwImportArticles;if(!imports)return;var articles=imports.articles;if(!articles||articles.length==0)return;importArticles(imports);}());;importArticles({type:"script",articles:["MediaWiki:Wikia.js/jsSlider.js"]});$('.GamesArrowLeft').click(function(){scroll=$('#GamesCarousel').scrollLeft();$('#GamesCarousel').animate({'scrollLeft':scroll-540},1000);});$('.GamesArrowRight').click(function(){scroll=$('#GamesCarousel').scrollLeft();$('#GamesCarousel').animate({'scrollLeft':scroll+
540},1000);});$('.GamesArrowLeft-gold').click(function(){scroll=$('#GamesCarousel').scrollLeft();$('#GamesCarousel').animate({'scrollLeft':scroll-540},1000);});$('.GamesArrowRight-gold').click(function(){scroll=$('#GamesCarousel').scrollLeft();$('#GamesCarousel').animate({'scrollLeft':scroll+540},1000);});;;mw.loader.state({"site":"ready"});

/* cache key: wowwiki:resourceloader:filter:minify-js:7:e4b75544e09bedb536c4551dc1df3a85 */