!function(){function e(){return 0!=r.length}function t(){for(var e,t=s.split(","),n=[],o=0;o<t.length;o++)e="(\\b"+t[o]+"\\b)",n.push(new RegExp(e,"g"));r=n,$.consoleLn("Built "+r.length+" regular expressions for emote handling.")}function n(){return r}function o(t){var n,o=0;if(!e())return 0;for(var s=0;s<r.length;s++)n=t.match(r[s]),o+=null==n?0:n.length;return o}var s=$.inidb.exists("emotecache","emotes")?$.inidb.get("emotecache","emotes"):"",r=[];""!=s&&t(),$.bind("emotesGet",function(e){$.bot.isModuleEnabled("./handlers/emotesHandler.js")&&(s=e.getEmotes(),$.writeToFile(s,"emotesString",!1),$.consoleLn("New emotes have been pushed from the Core."),$.inidb.set("emotecache","emotes",s),t())}),$.emotesHandler={emotesLoaded:e,getEmotesRegExp:n,getEmotesMatchCount:o}}();
