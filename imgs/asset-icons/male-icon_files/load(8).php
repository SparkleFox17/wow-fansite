var isCompatible=function(){if(navigator.appVersion.indexOf('MSIE')!==-1&&parseFloat(navigator.appVersion.split('MSIE')[1])<6){return false;}return true;};var startUp=function(){mw.config=new mw.Map(true);mw.loader.addSource({"local":{"loadScript":"/load.php","apiScript":"/api.php"},"common":{"loadScript":"https://slot1-images.wikia.nocookie.net/__load/-/","apiScript":"/api.php"}});mw.loader.register([["site",1562092200,[],"site"],["noscript",1202225400,[],"noscript"],["startup",1605388500,[],"startup"],["user",1202225400,[],"user"],["user.groups",1202225400,[],"user"],["user.options",1605388500,[],"private"],["user.cssprefs",1605388500,["mediawiki.user"],"private"],["user.tokens",1202225400,[],"private"],["filepage",1202225400],["mediawiki.language.data",1586698200,["mediawiki.language.init"]],["skins.monobook",1605275100,[],null,"common"],["jquery",1605275100,[],null,"common"],["jquery.appear",1605275100,[],null,"common"],["jquery.arrowSteps",1605275100,[],null,"common"],[
"jquery.async",1605275100,[],null,"common"],["jquery.autoEllipsis",1605275100,["jquery.highlightText"],null,"common"],["jquery.byteLength",1605275100,[],null,"common"],["jquery.byteLimit",1605275100,["jquery.byteLength"],null,"common"],["jquery.checkboxShiftClick",1605275100,[],null,"common"],["jquery.client",1605275100,[],null,"common"],["jquery.collapsibleTabs",1605275100,[],null,"common"],["jquery.color",1605275100,["jquery.colorUtil"],null,"common"],["jquery.colorUtil",1605275100,[],null,"common"],["jquery.cookie",1605275100,[],null,"common"],["jquery.delayedBind",1605275100,[],null,"common"],["jquery.expandableField",1605275100,["jquery.delayedBind"],null,"common"],["jquery.farbtastic",1605275100,["jquery.colorUtil"],null,"common"],["jquery.footHovzer",1605275100,[],null,"common"],["jquery.form",1605275100,[],null,"common"],["jquery.getAttrs",1605275100,[],null,"common"],["jquery.highlightText",1605275100,[],null,"common"],["jquery.hoverIntent",1605275100,[],null,"common"],[
"jquery.json",1605275100,[],null,"common"],["jquery.localize",1605275100,[],null,"common"],["jquery.makeCollapsible",1605275100,[],null,"common"],["jquery.messageBox",1605275100,[],null,"common"],["jquery.mockjax",1605275100,[],null,"common"],["jquery.mw-jump",1605275100,[],null,"common"],["jquery.mwExtension",1605275100,[],null,"common"],["jquery.placeholder",1605275100,[],null,"common"],["jquery.qunit",1605275100,[],null,"common"],["jquery.qunit.completenessTest",1605275100,["jquery.qunit"],null,"common"],["jquery.spinner",1605275100,[],null,"common"],["jquery.suggestions",1605275100,["jquery.autoEllipsis"],null,"common"],["jquery.tabIndex",1605275100,[],null,"common"],["jquery.tablesorter",1605275100,["jquery.mwExtension"],null,"common"],["jquery.textSelection",1605275100,[],null,"common"],["jquery.validate",1605275100,[],null,"common"],["jquery.xmldom",1605275100,[],null,"common"],["jquery.tipsy",1605275100,[],null,"common"],["jquery.ui.core",1605275100,["jquery"],"jquery.ui",
"common"],["jquery.ui.widget",1605275100,[],"jquery.ui","common"],["jquery.ui.mouse",1605275100,["jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.position",1605275100,[],"jquery.ui","common"],["jquery.ui.draggable",1605275100,["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.droppable",1605275100,["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget","jquery.ui.draggable"],"jquery.ui","common"],["jquery.ui.resizable",1605275100,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.selectable",1605275100,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.sortable",1605275100,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.accordion",1605275100,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.autocomplete",1605275100,["jquery.ui.core","jquery.ui.widget","jquery.ui.position"],"jquery.ui","common"],[
"jquery.ui.button",1605275100,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.datepicker",1605275100,["jquery.ui.core"],"jquery.ui","common"],["jquery.ui.dialog",1605275100,["jquery.ui.core","jquery.ui.widget","jquery.ui.button","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.position","jquery.ui.resizable"],"jquery.ui","common"],["jquery.ui.progressbar",1605275100,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.slider",1605275100,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.tabs",1605275100,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.effects.core",1605275100,["jquery"],"jquery.ui","common"],["jquery.effects.blind",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.bounce",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.clip",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.drop",1605275100,[
"jquery.effects.core"],"jquery.ui","common"],["jquery.effects.explode",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.fade",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.fold",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.highlight",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.pulsate",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.scale",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.shake",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.slide",1605275100,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.transfer",1605275100,["jquery.effects.core"],"jquery.ui","common"],["mediawiki",1605275100,[],null,"common"],["mediawiki.api",1605275100,["mediawiki.util"],null,"common"],["mediawiki.api.category",1605275100,["mediawiki.api","mediawiki.Title"],null,"common"],["mediawiki.api.edit",
1605275100,["mediawiki.api","mediawiki.Title"],null,"common"],["mediawiki.api.parse",1605275100,["mediawiki.api"],null,"common"],["mediawiki.api.titleblacklist",1605275100,["mediawiki.api","mediawiki.Title"],null,"common"],["mediawiki.api.watch",1605275100,["mediawiki.api","mediawiki.user"],null,"common"],["mediawiki.debug",1605275100,["jquery.footHovzer"],null,"common"],["mediawiki.debug.init",1605275100,["mediawiki.debug"],null,"common"],["mediawiki.feedback",1605275100,["mediawiki.api.edit","mediawiki.Title","mediawiki.jqueryMsg","jquery.ui.dialog"],null,"common"],["mediawiki.htmlform",1605275100,[],null,"common"],["mediawiki.Title",1605275100,["jquery.byteLength","mediawiki.util"],null,"common"],["mediawiki.Uri",1605275100,[],null,"common"],["mediawiki.user",1605275100,["jquery.cookie"],null,"common"],["mediawiki.util",1605275100,["jquery.client","jquery.cookie","jquery.messageBox","jquery.mwExtension"],null,"common"],["mediawiki.action.edit",1605275100,["jquery.textSelection",
"jquery.byteLimit"],null,"common"],["mediawiki.action.view.redirect",1605275100,["jquery.client"],null,"common"],["mediawiki.action.history",1605275100,["jquery.ui.button"],"mediawiki.action.history","common"],["mediawiki.action.history.diff",1605275100,[],"mediawiki.action.history","common",["sass"]],["mediawiki.action.view.dblClickEdit",1605275100,["mediawiki.util","mediawiki.page.startup"],null,"common"],["mediawiki.action.view.metadata",1605275100,[],null,"common"],["mediawiki.action.view.rightClickEdit",1605275100,[],null,"common"],["mediawiki.action.watch.ajax",1605275100,["mediawiki.api.watch","mediawiki.util"],null,"common"],["mediawiki.language",1605275100,["mediawiki.language.data","mediawiki.cldr"],null,"common"],["mediawiki.cldr",1605275100,["mediawiki.libs.pluralruleparser"],null,"common"],["mediawiki.libs.pluralruleparser",1605275100,[],null,"common"],["mediawiki.language.init",1605275100,[],null,"common"],["mediawiki.jqueryMsg",1605275100,["mediawiki.util",
"mediawiki.language"],null,"common"],["mediawiki.language.months",1605275100,["mediawiki.language"],null,"common"],["mediawiki.language.names",1566822600,["mediawiki.language.init"]],["mediawiki.libs.jpegmeta",1605275100,[],null,"common"],["mediawiki.page.ready",1605275100,["jquery.checkboxShiftClick","jquery.makeCollapsible","jquery.mw-jump","mediawiki.util"],null,"common"],["mediawiki.page.startup",1605275100,["jquery.client","mediawiki.util"],null,"common"],["mediawiki.special",1605275100,[],null,"common"],["mediawiki.special.block",1605275100,["mediawiki.util"],null,"common"],["mediawiki.special.changeemail",1605275100,["mediawiki.util"],null,"common"],["mediawiki.special.changeslist",1605275100,["jquery.makeCollapsible"],null,"common"],["mediawiki.special.movePage",1605275100,["jquery.byteLimit"],null,"common"],["mediawiki.special.preferences",1605275100,[],null,"common"],["mediawiki.special.recentchanges",1605275100,["mediawiki.special"],null,"common"],["mediawiki.special.search"
,1605275100,[],null,"common"],["mediawiki.special.undelete",1605275100,[],null,"common"],["mediawiki.special.upload",1605275100,["mediawiki.libs.jpegmeta","mediawiki.util"],null,"common"],["mediawiki.special.javaScriptTest",1605275100,["jquery.qunit"],null,"common"],["test.sinonjs",1605275100,[],null,"common"],["mediawiki.tests.qunit.testrunner",1605388500,["jquery.qunit","jquery.qunit.completenessTest","mediawiki.page.startup","mediawiki.page.ready","test.sinonjs"],null,"common"],["mediawiki.legacy.ajax",1605275100,["mediawiki.util","mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.commonPrint",1605275100,[],null,"common"],["mediawiki.legacy.config",1605275100,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.IEFixes",1605275100,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.mwsuggest",1605275100,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.preview",1605275100,["mediawiki.legacy.wikibits"],null,"common"],[
"mediawiki.legacy.protect",1605275100,["mediawiki.legacy.wikibits","jquery.byteLimit"],null,"common"],["mediawiki.legacy.shared",1605275100,[],null,"common"],["mediawiki.legacy.upload",1605275100,["jquery.spinner","mediawiki.util"],null,"common"],["mediawiki.legacy.wikibits",1605275100,["mediawiki.util","wikia.importScript"],null,"common"],["mediawiki.legacy.wikiprintable",1605275100,[],null,"common"],["amd",1605275100,[],null,"common"],["amd.shared",1202225400,["wikia.cache","wikia.cookies","wikia.document","wikia.geo","wikia.fbLocale","wikia.loader","wikia.location","wikia.log","wikia.mw","wikia.nirvana","wikia.querystring","wikia.history","wikia.throbber","wikia.thumbnailer","wikia.tracker","wikia.window","wikia.abTest","underscore"],null,"common"],["wikia.window",1605275100,["amd"],null,"common"],["wikia.cache",1605275100,["amd","wikia.window"],null,"common"],["wikia.document",1605275100,["amd","wikia.window"],null,"common"],["wikia.location",1605275100,["amd","wikia.window"],null,
"common"],["wikia.nirvana",1605275100,["amd"],null,"common"],["wikia.mw",1605275100,["amd","wikia.window"],null,"common"],["wikia.fbLocale",1605275100,["wikia.geo"],null,"common"],["wikia.loader",1605275100,["amd","wikia.window","wikia.mw","wikia.nirvana","wikia.fbLocale"],null,"common"],["wikia.querystring",1605275100,["amd","wikia.window"],null,"common"],["wikia.history",1605275100,["amd","wikia.window"],null,"common"],["wikia.cookies",1605275100,["amd","wikia.window"],null,"common"],["wikia.log",1605275100,["amd","wikia.querystring","wikia.cookies"],null,"common"],["wikia.abTest",1605275100,["amd","wikia.window"],null,"common"],["wikia.thumbnailer",1605275100,["amd"],null,"common"],["wikia.geo",1605275100,["amd","wikia.cookies","wikia.querystring"],null,"common"],["wikia.tracker",1605275100,["amd","wikia.window","wikia.log","wikia.tracker.stub"],null,"common"],["wikia.tracker.stub",1605275100,["amd","wikia.window"],null,"common"],["wikia.throbber",1605275100,["amd"],null,"common"],[
"underscore",1605275100,["amd"],null,"common"],["wikia.aim",1605275100,["amd"],null,"common"],["wikia.uniqueId",1605275100,["amd"],null,"common"],["wikia.modernizr",1605388500,["amd","modernizr"],null,"common"],["wikia.mustache",1605275100,["amd"],null,"common"],["wikia.underscore",1605275100,["amd","wikia.window"],null,"common"],["wikia.stickyElement",1605275100,["amd","wikia.window","wikia.document","wikia.underscore"],null,"common"],["wikia.jquery.ui",1605275100,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse","jquery.ui.position","jquery.ui.draggable","jquery.ui.droppable","jquery.ui.sortable","jquery.ui.autocomplete","jquery.ui.slider","jquery.ui.tabs","jquery.ui.datepicker"],"jquery.ui","common"],["jquery.mustache",1605275100,["wikia.mustache"],null,"common"],["jquery.autocomplete",1605275100,[],null,"common"],["jquery.dataTables",1605275100,[],null,"common"],["jquery.timeago",1605275100,[],null,"common"],["wikia.yui",1605275100,[],"yui","common"],["wikia.importScript",
1605275100,[],null,"common"],["wikia.article.edit",1605275100,["wikia.tracker"],null,"common"],["ext.semanticforms.maps",1605275100],["jquery.uls.data",1605275100],["jquery.i18n",1605275100,["mediawiki.libs.pluralruleparser"]],["ext.math.mathjax",1605275100,[],"ext.math.mathjax"],["ext.math.mathjax.enabler",1605275100],["ext.wikia.TimeAgoMessaging",1605275100,["jquery.timeago","mediawiki.jqueryMsg"]],["ext.designSystem",1202225400],["ext.bannerNotifications",1202225400],["ext.quickTools",1605275100,["mediawiki.user","mediawiki.util"]],["ext.createUserPage",1605275100,["mediawiki.user","mediawiki.util"]],["ext.quickAdopt",1605275100,["mediawiki.util","ext.createUserPage"]],["ext.wikia.authPreferences",1605275100],["ext.wikia.facebookTags",1605275100,[],null,"common"],["ext.wikia.multiLookup",1605275100],["ext.wikia.ListGlobalUsers",1605275100],["ext.geshi.local",1202225400],["ext.siteWideMessages.anon",1605275100],["ext.scribunto",1605275100],["ext.scribunto.edit",1605275100,[
"ext.scribunto","mediawiki.api"]],["ext.wikia.InfoboxBuilder",1605275100,[],null,"local",["sass"]],["ext.semanticforms.main",1605275100,["jquery.ui.core","jquery.ui.autocomplete","jquery.ui.button","jquery.ui.sortable","jquery.ui.widget","ext.semanticforms.fancybox","ext.semanticforms.autogrow","mediawiki.util","ext.semanticforms.select2"]],["ext.semanticforms.browser",1605275100],["ext.semanticforms.fancybox",1605275100,["ext.semanticforms.browser"]],["ext.semanticforms.dynatree",1605275100,["jquery.ui.widget"]],["ext.semanticforms.autogrow",1605275100],["ext.semanticforms.popupformedit",1605275100,["ext.semanticforms.browser"]],["ext.semanticforms.autoedit",1605275100],["ext.semanticforms.submit",1605275100],["ext.semanticforms.collapsible",1605275100],["ext.semanticforms.imagepreview",1605275100],["ext.semanticforms.checkboxes",1605275100],["ext.semanticforms.datepicker",1605275100,["jquery.ui.datepicker","ext.semanticforms.main"]],["ext.semanticforms.regexp",1605275100,[
"ext.semanticforms.main"]],["ext.semanticforms.select2",1605275100,["ext.semanticforms","mediawiki.jqueryMsg"]],["ext.semanticforms.jsgrid",1605275100,["jquery.ui.sortable"]],["ext.semanticforms",1605275100],["ext.semanticforms.SF_CreateProperty",1605275100],["ext.semanticforms.SF_PageSchemas",1605275100],["ext.semanticforms.SF_CreateTemplate",1605275100],["ext.semanticforms.SF_CreateClass",1605275100],["ext.semanticforms.SF_CreateForm",1605275100],["ext.semanticdrilldown.main",1605275100,["jquery.ui.autocomplete","jquery.ui.button"]],["ext.semanticdrilldown.info",1605275100],["ext.jquery.easing",1605275100],["ext.jquery.fancybox",1605275100,["ext.jquery.easing"]],["ext.jquery.jqgrid",1605275100,["jquery.ui.core"]],["ext.jquery.flot",1605275100],["ext.jquery.jStorage",1605275100,["jquery.json"],"ext.smw"],["ext.srf",1605275100,[],"ext.srf"],["ext.srf.util",1605275100,["ext.srf","ext.jquery.jStorage"],"ext.srf"],["ext.srf.util.grid",1605275100,["jquery.ui.tabs","ext.srf.util",
"ext.jquery.jqgrid"],"ext.srf"],["ext.jquery.sparkline",1605275100],["ext.srf.sparkline",1605275100,["ext.srf.util","ext.jquery.sparkline"],"ext.srf"],["ext.dygraphs.combined",1605275100],["ext.srf.dygraphs",1605275100,["jquery.client","jquery.async","ext.srf.util","ext.smw.tooltip","ext.dygraphs.combined"]],["ext.jquery.listnav",1605275100],["ext.jquery.listmenu",1605275100],["ext.jquery.pajinate",1605275100],["ext.srf.listwidget",1605275100,["ext.srf.util"]],["ext.srf.listwidget.alphabet",1202225400,["ext.srf.listwidget","ext.jquery.listnav"]],["ext.srf.listwidget.menu",1202225400,["ext.srf.listwidget","ext.jquery.listmenu"]],["ext.srf.listwidget.pagination",1202225400,["ext.srf.listwidget","ext.jquery.pajinate"]],["ext.jquery.dynamiccarousel",1605275100],["ext.srf.pagewidget.carousel",1605275100,["ext.jquery.dynamiccarousel","ext.srf.util"]],["ext.jquery.jqplot.core",1605275100],["ext.jquery.jqplot.excanvas",1605275100],["ext.jquery.jqplot.json",1605275100],[
"ext.jquery.jqplot.cursor",1605275100],["ext.jquery.jqplot.logaxisrenderer",1605275100],["ext.jquery.jqplot.mekko",1605275100],["ext.jquery.jqplot.bar",1605275100,["ext.jquery.jqplot.core"]],["ext.jquery.jqplot.pie",1605275100,["ext.jquery.jqplot.core"]],["ext.jquery.jqplot.bubble",1605275100,["ext.jquery.jqplot.core"]],["ext.jquery.jqplot.donut",1605275100,["ext.jquery.jqplot.pie"]],["ext.jquery.jqplot.pointlabels",1605275100],["ext.jquery.jqplot.highlighter",1605275100],["ext.jquery.jqplot.enhancedlegend",1605275100],["ext.jquery.jqplot.trendline",1605275100],["ext.srf.jqplot.themes",1605275100,["jquery.client"]],["ext.srf.jqplot.cursor",1202225400,["ext.srf.jqplot.bar","ext.jquery.jqplot.cursor"]],["ext.srf.jqplot.enhancedlegend",1202225400,["ext.srf.jqplot.bar","ext.jquery.jqplot.enhancedlegend"]],["ext.srf.jqplot.pointlabels",1202225400,["ext.srf.jqplot.bar","ext.jquery.jqplot.pointlabels"]],["ext.srf.jqplot.highlighter",1202225400,["ext.srf.jqplot.bar",
"ext.jquery.jqplot.highlighter"]],["ext.srf.jqplot.trendline",1202225400,["ext.srf.jqplot.bar","ext.jquery.jqplot.trendline"]],["ext.srf.jqplot.chart",1605275100,["jquery.async","ext.srf.util","ext.srf.jqplot.themes"]],["ext.srf.jqplot.bar",1605275100,["ext.jquery.jqplot.bar","ext.srf.jqplot.chart"]],["ext.srf.jqplot.pie",1605275100,["ext.jquery.jqplot.pie","ext.srf.jqplot.chart"]],["ext.srf.jqplot.bubble",1605275100,["ext.jquery.jqplot.bubble","ext.srf.jqplot.chart"]],["ext.srf.jqplot.donut",1605275100,["ext.jquery.jqplot.donut","ext.srf.jqplot.chart"]],["ext.smile.timeline",1605275100],["ext.srf.timeline",1605275100,["ext.smile.timeline","mediawiki.legacy.wikibits"]],["ext.d3.core",1605275100],["ext.d3.layout.cloud",1605275100,["ext.d3.core"]],["ext.srf.d3.common",1605275100,["ext.srf.util"]],["ext.srf.d3.chart.treemap",1605275100,["ext.d3.core","ext.srf.d3.common"]],["ext.srf.d3.chart.bubble",1605275100,["ext.d3.core","ext.srf.d3.common"]],["ext.srf.jquery.progressbar",1605275100],[
"ext.srf.jit",1605275100],["ext.srf.jitgraph",1605275100,["mediawiki.legacy.wikibits","ext.srf.jquery.progressbar","ext.srf.jit"]],["ext.jquery.jcarousel",1605275100],["ext.jquery.responsiveslides",1605275100],["ext.srf.gallery.carousel",1605275100,["ext.srf.util","ext.jquery.jcarousel"]],["ext.srf.gallery.slideshow",1605275100,["ext.srf.util","ext.jquery.responsiveslides"]],["ext.srf.gallery.overlay",1605275100,["ext.srf.util","ext.jquery.fancybox"]],["ext.srf.gallery.redirect",1605275100,["ext.srf.util"]],["ext.jquery.fullcalendar",1605275100],["ext.jquery.gcal",1605275100],["ext.srf.eventcalendar",1605275100,["jquery.ui.core","jquery.ui.widget","ext.smw.tooltip","ext.srf.util","ext.jquery.fullcalendar"]],["ext.srf.eventcalendar.gcal",1202225400,["ext.srf.eventcalendar","ext.jquery.gcal"]],["ext.srf.filtered",1605275100],["ext.srf.filtered.list-view",1605275100,["ext.srf.filtered"]],["ext.srf.filtered.calendar-view",1605275100,["ext.srf.filtered","ext.jquery.fullcalendar"]],[
"ext.srf.filtered.value-filter",1605275100,["ext.srf.filtered"]],["ext.srf.filtered.distance-filter",1605275100,["ext.srf.filtered","jquery.ui.slider"]],["ext.srf.slideshow",1605275100,["mediawiki.legacy.ajax"]],["ext.jquery.tagcanvas.excanvas",1605275100],["ext.jquery.tagcanvas",1605275100],["ext.srf.tagcloud.sphere",1605275100,["jquery.async","jquery.client","ext.srf.util","ext.jquery.tagcanvas"]],["ext.srf.tagcloud.wordcloud",1605275100,["jquery.async","ext.d3.layout.cloud","ext.srf.d3.common"]],["ext.srf.flot.core",1605275100],["ext.srf.timeseries.flot",1605275100,["jquery.async","ext.jquery.flot","ext.srf.util","ext.srf.flot.core"]],["ext.categoryTree",1605275100],["ext.categoryTree.css",1605275100],["ext.checkUser",1605275100,["mediawiki.util"]],["ext.cite",1605275100,["jquery.tooltip"]],["jquery.tooltip",1605275100],["ext.wikia.ajaxpoll",1605275100,[],null,"local",["sass"]],["ext.wikia.GoogleTagManager",1202225400],["ext.wikia.WMU",1605275100,["wikia.yui","jquery.aim"]],[
"ext.wikia.LinkSuggest",1605275100,["jquery.ui.autocomplete"]],["ext.wikia.ListUsers",1605275100,["jquery.ui.autocomplete","jquery.dataTables"],null,"local",["sass"]],["ext.tabber",1605275100],["ext.nuke",1605275100],["ext.wikia.Disucssions.migration",1605275100],["ext.userLogin",1202225400],["ext.UserProfilePage.Lightbox",1605275100,["mediawiki.jqueryMsg"],null,"local",["sass"]],["ext.renameuser.modal",1605275100,["mediawiki.util"]],["ext.Chat2.ChatBanModal",1605275100],["ext.Chat2.ChatWidget",1202225400],["ext.Chat2.ChatBanList",1605275100,["jquery.dataTables","wikia.nirvana"],null,"local",["sass"]],["ext.Chat2",1202225400,["mediawiki.jqueryMsg"]],["ext.AdminDashboard",1202225400],["wikia.ext.abtesting",1588608000,[],null,"common"],["wikia.ext.abt3sting",1588608000,[],null,"common"],["wikia.ext.abtest",1605275100],["wikia.ext.abtesting.edit.styles",1605275100,[],null,"local",["sass"]],["wikia.ext.abtesting.edit",1605275100],["oojs",1605275100],["oojs-ui",1605275100,["oojs",
"oojs-ui.styles"]],["oojs-ui.styles",1605275100],["jquery.visibleText",1605275100],["Base64.js",1605275100],["easy-deflate.core",1605275100,["Base64.js"]],["easy-deflate.deflate",1605275100,["easy-deflate.core"]],["unicodejs",1605275100],["unicodejs.wordbreak",1202225400,["unicodejs"]],["papaparse",1605275100],["rangefix",1605275100],["ext.visualEditor.viewPageTarget.init",1605275100,["jquery.client","mediawiki.page.startup","mediawiki.Title","mediawiki.Uri","mediawiki.util","user.options","ext.visualEditor.track"]],["ext.visualEditor.viewPageTarget.noscript",1605275100],["ext.visualEditor.viewPageTarget",1605275100,["ext.visualEditor.base","ext.visualEditor.mediawiki","ext.visualEditor.core.desktop","jquery.placeholder","mediawiki.feedback","mediawiki.jqueryMsg","mediawiki.util"]],["ext.visualEditor.mobileViewTarget",1605275100,["ext.visualEditor.base","ext.visualEditor.mediawiki.mobile","ext.visualEditor.core.mobile","ext.visualEditor.mwimage.core"]],["ext.visualEditor.ve",1605275100
],["ext.visualEditor.track",1605275100,["ext.visualEditor.ve"]],["ext.visualEditor.base",1605275100,["oojs","oojs-ui","unicodejs","rangefix","ext.visualEditor.ve"]],["ext.visualEditor.mediawiki",1605275100,["jquery.visibleText","jquery.byteLength","jquery.client","mediawiki.api","mediawiki.language","mediawiki.Title","mediawiki.Uri","mediawiki.user","mediawiki.util","easy-deflate.deflate","user.options","user.tokens","ext.visualEditor.base","ext.visualEditor.track"]],["ext.visualEditor.mediawiki.mobile",1605275100,["ext.visualEditor.mediawiki","ext.visualEditor.core.mobile"]],["ext.visualEditor.standalone",1605275100,["ext.visualEditor.base","jquery.i18n"]],["ext.visualEditor.data",1605275100,["ext.visualEditor.base"]],["ext.visualEditor.core",1605275100,["unicodejs","papaparse","jquery.uls.data","ext.visualEditor.base"]],["ext.visualEditor.core.desktop",1605275100,["ext.visualEditor.core"]],["ext.visualEditor.core.mobile",1605275100,["ext.visualEditor.core"]],[
"ext.visualEditor.mwcore",1605275100,["ext.visualEditor.core","mediawiki.Title","mediawiki.action.history.diff","mediawiki.user","mediawiki.util","mediawiki.jqueryMsg","jquery.autoEllipsis","jquery.byteLimit"]],["ext.visualEditor.mwformatting",1605275100,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwimage.core",1605275100,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwimage",1605275100,["ext.visualEditor.mwimage.core"]],["ext.visualEditor.mwlink",1605275100,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwmeta",1605275100,["ext.visualEditor.mwcore","ext.visualEditor.mwlink"]],["ext.visualEditor.mwreference.core",1605275100,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwreference",1605275100,["ext.visualEditor.mwreference.core","ext.visualEditor.mwtransclusion"]],["ext.visualEditor.mwtransclusion.core",1605275100,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwtransclusion",1605275100,["ext.visualEditor.mwtransclusion.core","mediawiki.jqueryMsg","mediawiki.language"]],[
"ext.visualEditor.language",1605275100,["ext.visualEditor.core","mediawiki.language.names"]],["ext.visualEditor.mwalienextension",1605275100,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwgallery",1605275100,["ext.visualEditor.mwcore"]],["ext.visualEditor.experimental",1202225400,["ext.visualEditor.language","ext.visualEditor.mwalienextension"]],["ext.visualEditor.wikia.viewPageTarget.init",1605275100,["jquery.client","jquery.byteLength","mediawiki.Title","mediawiki.Uri","mediawiki.util","user.options","ext.visualEditor.track"]],["ext.visualEditor.wikia.oasisViewPageTarget",1605275100,["ext.visualEditor.viewPageTarget"]],["ext.visualEditor.wikia.core",1605275100,["ext.visualEditor.core.desktop","ext.visualEditor.mwimage","ext.visualEditor.mwmeta"]],["ext.closeMyAccount",1605275100,[],null,"local",["sass"]],["ext.TwitterTag",1605275100],["ext.wikia.VKTag",1605275100],["ext.ArticleVideo.jw",1605275100],["ext.fandomComMigration",1202225400],["ext.wikiaOrgMigration",1202225400],[
"ext.wikia.CategoryPage3.categoryLayoutSelector.scripts",1605275100],["ext.wikia.AffiliateService",1605275100,[],null,"local",["sass"]],["ext.hydralytics.styles",1605275100,[],null,"local",["sass"]],["ext.hydralytics.scripts",1605275100,["mediawiki.language"]],["ext.maps.common",1605275100,[],"ext.maps"],["ext.maps.coord",1605275100,[],"ext.maps"],["ext.maps.resizable",1202225400,["jquery.ui.resizable"],"ext.maps"],["mapeditor",1605275100,["ext.maps.common","jquery.ui.autocomplete","jquery.ui.slider","jquery.ui.dialog"],"ext.maps"],["ext.maps.services",1605275100,["ext.maps.common","ext.maps.coord"],"ext.maps"],["ext.maps.googlemaps3",1605275100,["ext.maps.common"],"ext.maps"],["ext.maps.gm3.markercluster",1605275100,[],"ext.maps"],["ext.maps.gm3.markerwithlabel",1605275100,[],"ext.maps"],["ext.maps.gm3.geoxml",1605275100,[],"ext.maps/geoxml3"],["ext.maps.gm3.earth",1605275100,[],"ext.maps"],["ext.maps.openlayers",1605275100,["ext.maps.common"],"ext.maps"],["ext.maps.leaflet",
1605275100,["ext.maps.common"],"ext.maps"],["ext.maps.leaflet.fullscreen",1605275100,["ext.maps.leaflet"],"ext.maps"],["ext.maps.leaflet.markercluster",1605275100,["ext.maps.leaflet"],"ext.maps"],["ext.maps.leaflet.providers",1605275100,["ext.maps.leaflet"],"ext.maps"],["ext.sm.common",1605275100,[],"ext.semanticmaps"],["ext.sm.googlemaps3ajax",1605275100,["ext.maps.googlemaps3","ext.sm.common"],"ext.semanticmaps"],["ext.sm.fi.leafletajax",1605275100,["ext.maps.leaflet","ext.sm.common"],"ext.semanticmaps"],["ext.sm.fi.openlayersajax",1605275100,["ext.maps.openlayers","ext.sm.common"],"ext.semanticmaps"],["ext.smw",1605275100,["ext.jquery.async"],"ext.smw"],["ext.smw.style",1605275100,["ext.smw.tooltip.styles"],"ext.smw"],["ext.jquery.async",1605275100,[],"ext.smw"],["ext.jquery.md5",1605275100,[],"ext.smw"],["ext.smw.dataItem",1605275100,["ext.smw","mediawiki.Title","mediawiki.Uri"],"ext.smw"],["ext.smw.dataValue",1605275100,["ext.smw.dataItem"],"ext.smw"],["ext.smw.data",1605275100,[
"ext.smw.dataItem","ext.smw.dataValue"],"ext.smw"],["ext.smw.query",1605275100,["ext.smw","mediawiki.util"],"ext.smw"],["ext.smw.api",1605275100,["mediawiki.util","ext.smw.data","ext.smw.query","ext.jquery.jStorage","ext.jquery.md5"],"ext.smw"],["ext.jquery.autocomplete",1605275100,[],"ext.smw"],["ext.jquery.qtip.styles",1605275100,[],"ext.smw"],["ext.jquery.qtip",1605275100,["ext.jquery.qtip.styles"],"ext.smw"],["ext.smw.tooltip.styles",1605275100,["ext.jquery.qtip.styles"],"ext.smw"],["ext.smw.tooltip",1605275100,["ext.smw.tooltip.styles","ext.smw","ext.jquery.qtip"],"ext.smw"],["ext.smw.tooltips",1202225400,["ext.smw.style","ext.smw.tooltip"],"ext.smw"],["ext.smw.autocomplete",1605275100,["jquery.ui.autocomplete"],"ext.smw"],["ext.smw.ask",1605275100,["ext.smw.tooltip","ext.smw.style"],"ext.smw"],["ext.smw.browse",1605275100,["ext.smw.style","ext.smw.autocomplete"],"ext.smw"],["ext.smw.property",1605275100,["mediawiki.util","ext.jquery.autocomplete"],"ext.smw"]]);mw.config.set({
"wgLoadScript":"/load.php","debug":!1,"skin":"oasis","stylepath":"https://slot1-images.wikia.nocookie.net/__cb1605275757522/common/skins","wgUrlProtocols":"\\/\\/|ftp\\:\\/\\/|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|svn\\:\\/\\/|telnet\\:\\/\\/|worldwind\\:\\/\\/|xmpp\\:","wgArticlePath":"/wiki/$1","wgScriptPath":"","wgScriptExtension":".php","wgScript":"/index.php","wgVariantArticlePath":!1,"wgActionPaths":{},"wgServer":"https://wowwiki.fandom.com","wgUserLanguage":"en","wgContentLanguage":"en","wgVersion":"1.19.24","wgEnableAPI":!0,"wgEnableWriteAPI":!0,"wgDefaultDateFormat":"mdy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgMainPageTitle":"Portal:Main","wgFormattedNamespaces":{"-2":"Media","-1":
"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"WoWWiki","5":"WoWWiki talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk","110":"Forum","111":"Forum talk","112":"Guild","113":"Guild talk","114":"Server","115":"Server talk","116":"Portal","117":"Portal talk","118":"Quest","119":"Quest talk","302":"Property","303":"Property talk","304":"Type","305":"Type talk","306":"Form","307":"Form talk","308":"Concept","309":"Concept talk","370":"Filter","371":"Filter talk","500":"User blog","501":"User blog comment","502":"Blog","503":"Blog talk","828":"Module","829":"Module talk","1200":"Message Wall","1201":"Thread","1202":"Message Wall Greeting","2000":"Board","2001":"Board Thread","2002":"Topic"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"wowwiki":4,"wowwiki_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,
"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"forum":110,"forum_talk":111,"guild":112,"guild_talk":113,"server":114,"server_talk":115,"portal":116,"portal_talk":117,"quest":118,"quest_talk":119,"property":302,"property_talk":303,"type":304,"type_talk":305,"form":306,"form_talk":307,"concept":308,"concept_talk":309,"filter":370,"filter_talk":371,"user_blog":500,"user_blog_comment":501,"blog":502,"blog_talk":503,"module":828,"module_talk":829,"message_wall":1200,"thread":1201,"message_wall_greeting":1202,"board":2000,"board_thread":2001,"topic":2002,"ww":4,"wt":5,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgSiteName":"WoWWiki","wgFileExtensions":["png","gif","jpg","jpeg","ico","pdf","svg","odt","ods","odp","odg","odc","odf","odi","odm","ogg","ogv","oga"],"wgDBname":"wowwiki","wgFileCanRotate":!0,"wgAvailableSkins":{"oasis":"Oasis","wikiamobile":"WikiaMobile"},"wgExtensionAssetsPath":"/extensions","wgCookiePrefix":"wikicities",
"wgResourceLoaderMaxQueryLength":-1,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":" %!\"$\x26\'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgSassParams":{"background-dynamic":"false","background-image":"https://vignette.wikia.nocookie.net/wowwiki/images/5/50/Wiki-background/revision/latest?cb=20171101165654","background-image-height":"886","background-image-width":"2100","color-body":"#9c8491","color-body-middle":"#bacdd8","color-buttons":"#ffc33e","color-community-header":"#ffc33e","color-header":"#2d2d2d","color-links":"#70b8ff","color-page":"#2d2d2d","oasisTypography":1,"page-opacity":"90","widthType":0},"wgFandomBaseDomain":"fandom.com","wgWikiaOrgBaseDomain":"wikia.org","wgWikiaBaseDomainRegex":"((wikia\\.(com|org)|fandom\\.com)|(wikia|fandom)-dev\\.(com|us|pl))","wgServicesExternalDomain":"https://services.fandom.com/","wgRecommendedVideoABTestPlaylist":"","wgJSMessagesCB":"1605275757522.0.0","wgVisualEditorConfig":{"disableForAnons":!1,"preferenceModules":{
"visualeditor-enable-experimental":"ext.visualEditor.experimental","visualeditor-enable-language":"ext.visualEditor.language"},"namespaces":[0,112,114,118,2,14,4],"pluginModules":["ext.visualEditor.wikia.core"],"defaultUserOptions":{"betatempdisable":0,"enable":1,"defaultthumbsize":180,"visualeditor-enable-experimental":0,"visualeditor-enable-language":0},"blacklist":{"msie":null,"android":[["\x3c",3]],"firefox":[["\x3c=",14]],"opera":[["\x3c",12]],"blackberry":null,"silk":null},"skins":["oasis"],"tabPosition":"before","tabMessages":{"edit":null,"editsource":"visualeditor-ca-classiceditor","create":null,"createsource":"visualeditor-ca-classiceditor","editlocaldescriptionsource":"visualeditor-ca-editlocaldescriptionsource","createlocaldescriptionsource":"visualeditor-ca-createlocaldescriptionsource","editsection":null,"editsectionsource":"visualeditor-ca-editsource-section","editappendix":null,"editsourceappendix":null,"createappendix":null,"createsourceappendix":null,
"editsectionappendix":null,"editsectionsourceappendix":null},"showBetaWelcome":!1,"enableTocWidget":!1},"wgCommunityPageDisableTopContributors":!1,"smw-config":{"version":"2.4.6","settings":{"smwgQMaxLimit":10000,"smwgQMaxInlineLimit":500,"namespace":{"Property":302,"Property_talk":303,"Concept":308,"Concept_talk":309,"":0,"Talk":1,"User":2,"User_talk":3,"Project":4,"Project_talk":5,"File":6,"File_talk":7,"MediaWiki":8,"MediaWiki_talk":9,"Template":10,"Template_talk":11,"Help":12,"Help_talk":13,"Category":14,"Category_talk":15,"Guild":112,"Server":114,"Quest":118,"Filter":370,"Filter_talk":371}},"formats":{"table":"table","list":"list","ol":"ol","ul":"ul","broadtable":"broadtable","category":"category","embedded":"embedded","template":"template","count":"count","debug":"debug","feed":"feed","csv":"csv","dsv":"dsv","json":"json","rdf":"rdf","googlemaps3":"googlemaps3","leaflet":"leaflet","openlayers":"openlayers","kml":"kml","gallery":"gallery","icalendar":"icalendar","vcard":
"vcard","bibtex":"bibtex","calendar":"calendar","eventcalendar":"eventcalendar","eventline":"eventline","timeline":"timeline","outline":"outline","jqplotchart":"jqplotchart","jqplotseries":"jqplotseries","sum":"sum","average":"average","min":"min","max":"max","median":"median","product":"product","tagcloud":"tagcloud","valuerank":"valuerank","array":"array","tree":"tree","ultree":"ultree","oltree":"oltree","d3chart":"d3chart","latest":"latest","earliest":"earliest","filtered":"filtered","slideshow":"slideshow","timeseries":"timeseries","sparkline":"sparkline","listwidget":"listwidget","pagewidget":"pagewidget","dygraphs":"dygraphs"}}});mw.loader.state({"jquery":"ready"});window.preMwLdrSt&&mw.loader.state(window.preMwLdrSt);if(window.preMwLdrStA){for(var i=0;i<window.preMwLdrStA.length;i++)mw.loader.state(window.preMwLdrStA[i]);};};if(isCompatible()){document.write(
"\x3cscript src=\"https://slot1-images.wikia.nocookie.net/__load/-/debug%3Dfalse%26lang%3Den%26only%3Dscripts%26skin%3Doasis%26version%3D1605275757522-20201113T134500Z/jquery,mediawiki\"\x3e\x3c/script\x3e");}delete isCompatible;;

/* cache key: wowwiki:resourceloader:filter:minify-js:7:ac4f0c5eaea81b3f992f649eab5ba6d9 */