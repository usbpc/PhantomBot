!function(){function e(e,s){e=e.toLowerCase(),s=s.toLowerCase(),$.inidb.exists("pricecom",s)&&parseInt($.inidb.get("pricecom",s))>0&&($.isMod(e)||($.inidb.incr("points",e,$.inidb.get("pricecom",s)),$.inidb.SaveAll()))}function s(e,s,a,i,m){var n,r,o,e=e+"",t=s.getSender(),d=s.getArgs();if(-1!=e.indexOf("(touser)"))if(d.length<1)r=t;else{if(!$.userExists(d[0]))return $.whisperPrefix(t)+$.lang.get("customcommands.touser.offline",d[0]);r=d[0]}if(-1!=e.indexOf("(price)")&&(o=null==$.inidb.get("pricecom",a)?0:$.inidb.get("pricecom",a)),-1!=e.indexOf("(count)")&&$.inidb.incr("commandCount",a,1),i)for(n in i){var c=new RegExp("/"+i[n].replace(/([\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|])/g,"\\$&")+"/","ig");e=e.replace(c,m[n])}return e.match(/\(sender\)|\(touser\)|\(@sender\)|\(baresender\)|\(random\)|\(pointname\)|\(uptime\)|\(game\)|\(status\)|\(follows\)|\(count\)|\(price\)/)?e.replace("(sender)",$.username.resolve(s.getSender())).replace("(touser)",$.username.resolve(r)).replace("(@sender)","@"+$.username.resolve(s.getSender())).replace("(baresender)",s.getSender()).replace("(random)",$.username.resolve($.randElement($.users)[0])).replace("(pointname)",$.pointNameMultiple).replace("(uptime)",$.getStreamUptime($.channelName)).replace("(game)",$.getGame($.channelName)).replace("(status)",$.getStatus($.channelName)).replace("(follows)",$.getFollows($.channelName)).replace("(count)",$.inidb.get("commandCount",a)).replace("(price)",o):e}function a(e,s){return $.isAdmin(e)?!0:$.getCommandGroup(s)>=$.getUserGroupId(e)}function i(e){return parseInt($.inidb.exists("pricecom",e)?$.inidb.get("pricecom",e):0)}function m(){var e,s=$.inidb.GetKeyList("command","");for(e in s)$.commandExists(s[e])||$.registerChatCommand("./commands/customCommands.js",s[e],7)}function n(){var e,s,a=$.inidb.GetKeyList("aliases","");for(s in a)$.commandExists(a[s])||(e=$.inidb.get("aliases",a[s]),$.registerChatCommand("./commands/customCommands.js",a[s],$.getCommandGroup(e)))}$.bind("command",function(e){var a=e.getSender().toLowerCase(),i=($.username.resolve(a,e.getTags()),e.getCommand()),m=e.getArgs(),n=e.getArguments(),r=m[0],o=m[1];if(i.equalsIgnoreCase("addcom")){if(!$.isModv3(a,e.getTags()))return void $.say($.whisperPrefix(a)+$.modMsg);if(!r||!o)return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.add.usage"));r=m[0].replace("!",""),n=n.substring(n.indexOf(m[0])+m[0].length()+1),$.inidb.set("command",r,n),$.registerChatCommand("./commands/customCommands.js",r),$.logEvent("./commands/customCommands.js",28,a+" added command !"+r+' with the message "'+n+'"'),$.say($.whisperPrefix(a)+$.lang.get("customcommands.add.success",r))}if(i.equalsIgnoreCase("editcom")){if(!$.isModv3(a,e.getTags()))return void $.say($.whisperPrefix(a)+$.modMsg);if(r=m[0].replace("!",""),!r||!o)return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.edit.usage"));if(!$.commandExists(r))return void $.say($.whisperPrefix(a)+$.lang.get("cmd.404",r));n=n.substring(n.indexOf(m[0])+m[0].length()+1),$.inidb.set("command",r,n),$.registerChatCommand("./commands/customCommands.js",r),$.logEvent("./commands/customCommands.js",28,a+" edited the command !"+r+' with the message "'+n+'"'),$.say($.whisperPrefix(a)+$.lang.get("customcommands.edit.success",r))}if(i.equalsIgnoreCase("delcom")){if(!$.isModv3(a,e.getTags()))return void $.say($.whisperPrefix(a)+$.modMsg);if(!m[0])return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.delete.usage"));if(r=m[0].replace("!",""),!r)return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.delete.usage"));if(!$.inidb.exists("command",r))return void $.say($.whisperPrefix(a)+$.lang.get("cmd.404",r));$.inidb.del("command",r),$.inidb.del("permcom",r),$.unregisterChatCommand("./commands/customCommands.js",r),$.logEvent("./commands/customCommands.js",28,a+" deleted the command !"+r),$.say($.whisperPrefix(a)+$.lang.get("customcommands.delete.success",r))}if(i.equalsIgnoreCase("aliascom")){if(!$.isModv3(a,e.getTags()))return void $.say($.whisperPrefix(a)+$.modMsg);if(!r||!o)return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.alias.usage"));if(!$.commandExists(r))return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.alias.error.target404"));if(r=m[0].replace("!",""),o=m[1].replace("!",""),$.inidb.exists("aliases",o))return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.alias.error"));$.inidb.set("aliases",o,r),$.registerChatCommand("./commands/customCommands.js",o),$.logEvent("customCommands.js",59,a+' added alias "!'+o+'" for "!'+r+'"'),$.say($.whisperPrefix(a)+$.lang.get("customcommands.alias.success",r,o))}if(i.equalsIgnoreCase("delalias")){if(!$.isModv3(a,e.getTags()))return void $.say($.whisperPrefix(a)+$.modMsg);if(!r||!o)return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.alias.delete.usage"));if(!$.inidb.exists("alias",r))return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.alias.delete.error.alias.404"));r=m[0].replace("!",""),$.unregisterChatCommand(r),$.inidb.del("aliases",r),$.logEvent("customCommands.js",56,a+" deleted alias !"+r),$.say($.whisperPrefix(a)+$.lang.get("customcommands.delete.success",r))}if(i.equalsIgnoreCase("permcom")){if(!$.isAdmin(a))return void $.say($.whisperPrefix(a)+$.adminMsg);if(!r||!o)return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.set.perm.usage"));r=m[0].replace("!","");var t=m[1];if(isNaN(parseInt(t))&&(t=$.getGroupIdByName(t)),!$.commandExists(r))return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.set.perm.404",r));$.inidb.set("permcom",r,t),$.say($.whisperPrefix(a)+$.lang.get("customcommands.set.perm.success",r,$.getGroupNameById(t))),$.updateCommandGroup(r,t)}if(i.equalsIgnoreCase("pricecom")){if(!$.isAdmin(a))return void $.say($.whisperPrefix(a)+$.adminMsg);if(!r||!o)return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.set.price.usage"));if(!$.commandExists(r))return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.set.price.error.404"));if(isNaN(parseInt(o))||parseInt(o)<0)return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.set.price.error.invalid"));r=m[0].replace("!",""),$.inidb.set("pricecom",r,o),list=$.inidb.GetKeyList("aliases","");for(d in list)for(d in list)$.inidb.get("aliases",list[d]).equalsIgnoreCase(r)&&$.inidb.set("pricecom",list[d],o);$.say($.whisperPrefix(a)+$.lang.get("customcommands.set.price.success",r,o,$.pointNameMultiple))}if(i.equalsIgnoreCase("listtags")){if(!$.isAdmin(a))return void $.say($.whisperPrefix(a)+$.adminMsg);$.say($.whisperPrefix(a)+"Command tags: (sender), (@sender), (baresender), (random), (uptime), (game), (status), (follows), (count), (touser), (price), (pointname)")}if(i.equalsIgnoreCase("commands")){var d,c=$.inidb.GetKeyList("command",""),g="";for(d in c)g+="!",g+=c[d],g+=", ";if(0!=g.length)return void $.say($.whisperPrefix(a)+$.lang.get("customcommands.cmds",g))}$.inidb.exists("command",i.toLowerCase())&&(o=$.inidb.get("command",i.toLowerCase()),$.say(s(o,e,i.toLowerCase())))}),$.bind("initReady",function(){$.bot.isModuleEnabled("./commands/customCommands.js")&&(m(),n(),$.registerChatCommand("./commands/customCommands.js","addcom",2),$.registerChatCommand("./commands/customCommands.js","pricecom",2),$.registerChatCommand("./commands/customCommands.js","aliascom",2),$.registerChatCommand("./commands/customCommands.js","delalias",2),$.registerChatCommand("./commands/customCommands.js","delcom",2),$.registerChatCommand("./commands/customCommands.js","editcom",2),$.registerChatCommand("./commands/customCommands.js","permcom",1),$.registerChatCommand("./commands/customCommands.js","listtags",2),$.registerChatCommand("./commands/customCommands.js","commands",7))}),$.returnCommandCost=e,$.replaceCommandTags=s,$.permCom=a,$.getCommandPrice=i}();
