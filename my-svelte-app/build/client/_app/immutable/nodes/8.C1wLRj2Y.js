import{s as Z,r as $,o as j,e as K}from"../chunks/scheduler.CQWhEZFA.js";import{S as J,i as U,e as P,k as z,s as L,t as C,c as H,a as B,l as ee,f as D,d as F,b as q,n as T,g as te,h as k,o as ne,A as G,j as N,p as re,r as oe,u as ae}from"../chunks/index.UGgirURG.js";import{L as ie}from"../chunks/LinkAnimated.Ds9hYhPy.js";var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(b){(function(){var A=function(){this.init()};A.prototype={init:function(){var e=this||r;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator=typeof window<"u"&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||r;if(e=parseFloat(e),t.ctx||g(),typeof e<"u"&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),i=0;i<o.length;i++){var l=t._howls[n]._soundById(o[i]);l&&l._node&&(l._node.volume=l._volume*e)}return t}return t._volume},mute:function(e){var t=this||r;t.ctx||g(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),i=0;i<o.length;i++){var l=t._howls[n]._soundById(o[i]);l&&l._node&&(l._node.muted=e?!0:l._muted)}return t},stop:function(){for(var e=this||r,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||r,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&typeof e.ctx.close<"u"&&(e.ctx.close(),e.ctx=null,g()),e},codecs:function(e){return(this||r)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||r;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if(typeof Audio<"u")try{var t=new Audio;typeof t.oncanplaythrough>"u"&&(e._canPlayEvent="canplay")}catch{e.noAudio=!0}else e.noAudio=!0;try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch{}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||r,t=null;try{t=typeof Audio<"u"?new Audio:null}catch{return e}if(!t||typeof t.canPlayType!="function")return e;var n=t.canPlayType("audio/mpeg;").replace(/^no$/,""),o=e._navigator?e._navigator.userAgent:"",i=o.match(/OPR\/(\d+)/g),l=i&&parseInt(i[0].split("/")[1],10)<33,a=o.indexOf("Safari")!==-1&&o.indexOf("Chrome")===-1,c=o.match(/Version\/(.*?) /),m=a&&c&&parseInt(c[1],10)<15;return e._codecs={mp3:!!(!l&&(n||t.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!n,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!m&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!m&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||r;if(!(e._audioUnlocked||!e.ctx)){e._audioUnlocked=!1,e.autoUnlock=!1,!e._mobileUnloaded&&e.ctx.sampleRate!==44100&&(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var o=new Audio;o._unlocked=!0,e._releaseHtml5Audio(o)}catch{e.noAudio=!0;break}for(var i=0;i<e._howls.length;i++)if(!e._howls[i]._webAudio)for(var l=e._howls[i]._getSoundIds(),a=0;a<l.length;a++){var c=e._howls[i]._soundById(l[a]);c&&c._node&&!c._node._unlocked&&(c._node._unlocked=!0,c._node.load())}e._autoResume();var m=e.ctx.createBufferSource();m.buffer=e._scratchBuffer,m.connect(e.ctx.destination),typeof m.start>"u"?m.noteOn(0):m.start(0),typeof e.ctx.resume=="function"&&e.ctx.resume(),m.onended=function(){m.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var y=0;y<e._howls.length;y++)e._howls[y]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||r;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=new Audio().play();return t&&typeof Promise<"u"&&(t instanceof Promise||typeof t.then=="function")&&t.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var t=this||r;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(!(!e.autoSuspend||!e.ctx||typeof e.ctx.suspend>"u"||!r.usingWebAudio)){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio){for(var n=0;n<e._howls[t]._sounds.length;n++)if(!e._howls[t]._sounds[n]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var o=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(o,o)}},3e4),e}},_autoResume:function(){var e=this;if(!(!e.ctx||typeof e.ctx.resume>"u"||!r.usingWebAudio))return e.state==="running"&&e.ctx.state!=="interrupted"&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):e.state==="suspended"||e.state==="running"&&e.ctx.state==="interrupted"?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):e.state==="suspending"&&(e._resumeAfterSuspend=!0),e}};var r=new A,s=function(e){var t=this;if(!e.src||e.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}t.init(e)};s.prototype={init:function(e){var t=this;return r.ctx||g(),t._autoplay=e.autoplay||!1,t._format=typeof e.format!="string"?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload=typeof e.preload=="boolean"||e.preload==="metadata"?e.preload:!0,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src=typeof e.src!="string"?e.src:[e.src],t._volume=e.volume!==void 0?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:e.xhr&&e.xhr.withCredentials?e.xhr.withCredentials:!1},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=r.usingWebAudio&&!t._html5,typeof r.ctx<"u"&&r.ctx&&r.autoUnlock&&r._unlockAudio(),r._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t._preload!=="none"&&t.load(),t},load:function(){var e=this,t=null;if(r.noAudio){e._emit("loaderror",null,"No audio support.");return}typeof e._src=="string"&&(e._src=[e._src]);for(var n=0;n<e._src.length;n++){var o,i;if(e._format&&e._format[n])o=e._format[n];else{if(i=e._src[n],typeof i!="string"){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}o=/^data:audio\/([^;,]+);/i.exec(i),o||(o=/\.([^.]+)$/.exec(i.split("?",1)[0])),o&&(o=o[1].toLowerCase())}if(o||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),o&&r.codecs(o)){t=e._src[n];break}}if(!t){e._emit("loaderror",null,"No codec support for selected audio sources.");return}return e._src=t,e._state="loading",window.location.protocol==="https:"&&t.slice(0,5)==="http:"&&(e._html5=!0,e._webAudio=!1),new u(e),e._webAudio&&d(e),e},play:function(e,t){var n=this,o=null;if(typeof e=="number")o=e,e=null;else{if(typeof e=="string"&&n._state==="loaded"&&!n._sprite[e])return null;if(typeof e>"u"&&(e="__default",!n._playLock)){for(var i=0,l=0;l<n._sounds.length;l++)n._sounds[l]._paused&&!n._sounds[l]._ended&&(i++,o=n._sounds[l]._id);i===1?e=null:o=null}}var a=o?n._soundById(o):n._inactiveSound();if(!a)return null;if(o&&!e&&(e=a._sprite||"__default"),n._state!=="loaded"){a._sprite=e,a._ended=!1;var c=a._id;return n._queue.push({event:"play",action:function(){n.play(c)}}),c}if(o&&!a._paused)return t||n._loadQueue("play"),a._id;n._webAudio&&r._autoResume();var m=Math.max(0,a._seek>0?a._seek:n._sprite[e][0]/1e3),y=Math.max(0,(n._sprite[e][0]+n._sprite[e][1])/1e3-m),S=y*1e3/Math.abs(a._rate),I=n._sprite[e][0]/1e3,w=(n._sprite[e][0]+n._sprite[e][1])/1e3;a._sprite=e,a._ended=!1;var x=function(){a._paused=!1,a._seek=m,a._start=I,a._stop=w,a._loop=!!(a._loop||n._sprite[e][2])};if(m>=w){n._ended(a);return}var h=a._node;if(n._webAudio){var O=function(){n._playLock=!1,x(),n._refreshBuffer(a);var M=a._muted||n._muted?0:a._volume;h.gain.setValueAtTime(M,r.ctx.currentTime),a._playStart=r.ctx.currentTime,typeof h.bufferSource.start>"u"?a._loop?h.bufferSource.noteGrainOn(0,m,86400):h.bufferSource.noteGrainOn(0,m,y):a._loop?h.bufferSource.start(0,m,86400):h.bufferSource.start(0,m,y),S!==1/0&&(n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),S)),t||setTimeout(function(){n._emit("play",a._id),n._loadQueue()},0)};r.state==="running"&&r.ctx.state!=="interrupted"?O():(n._playLock=!0,n.once("resume",O),n._clearTimer(a._id))}else{var R=function(){h.currentTime=m,h.muted=a._muted||n._muted||r._muted||h.muted,h.volume=a._volume*r.volume(),h.playbackRate=a._rate;try{var M=h.play();if(M&&typeof Promise<"u"&&(M instanceof Promise||typeof M.then=="function")?(n._playLock=!0,x(),M.then(function(){n._playLock=!1,h._unlocked=!0,t?n._loadQueue():n._emit("play",a._id)}).catch(function(){n._playLock=!1,n._emit("playerror",a._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),a._ended=!0,a._paused=!0})):t||(n._playLock=!1,x(),n._emit("play",a._id)),h.playbackRate=a._rate,h.paused){n._emit("playerror",a._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}e!=="__default"||a._loop?n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),S):(n._endTimers[a._id]=function(){n._ended(a),h.removeEventListener("ended",n._endTimers[a._id],!1)},h.addEventListener("ended",n._endTimers[a._id],!1))}catch(Y){n._emit("playerror",a._id,Y)}};h.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(h.src=n._src,h.load());var Q=window&&window.ejecta||!h.readyState&&r._navigator.isCocoonJS;if(h.readyState>=3||Q)R();else{n._playLock=!0,n._state="loading";var X=function(){n._state="loaded",R(),h.removeEventListener(r._canPlayEvent,X,!1)};h.addEventListener(r._canPlayEvent,X,!1),n._clearTimer(a._id)}}return a._id},pause:function(e){var t=this;if(t._state!=="loaded"||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),o=0;o<n.length;o++){t._clearTimer(n[o]);var i=t._soundById(n[o]);if(i&&!i._paused&&(i._seek=t.seek(n[o]),i._rateSeek=0,i._paused=!0,t._stopFade(n[o]),i._node))if(t._webAudio){if(!i._node.bufferSource)continue;typeof i._node.bufferSource.stop>"u"?i._node.bufferSource.noteOff(0):i._node.bufferSource.stop(0),t._cleanBuffer(i._node)}else(!isNaN(i._node.duration)||i._node.duration===1/0)&&i._node.pause();arguments[1]||t._emit("pause",i?i._id:null)}return t},stop:function(e,t){var n=this;if(n._state!=="loaded"||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),i=0;i<o.length;i++){n._clearTimer(o[i]);var l=n._soundById(o[i]);l&&(l._seek=l._start||0,l._rateSeek=0,l._paused=!0,l._ended=!0,n._stopFade(o[i]),l._node&&(n._webAudio?l._node.bufferSource&&(typeof l._node.bufferSource.stop>"u"?l._node.bufferSource.noteOff(0):l._node.bufferSource.stop(0),n._cleanBuffer(l._node)):(!isNaN(l._node.duration)||l._node.duration===1/0)&&(l._node.currentTime=l._start||0,l._node.pause(),l._node.duration===1/0&&n._clearSound(l._node))),t||n._emit("stop",l._id))}return n},mute:function(e,t){var n=this;if(n._state!=="loaded"||n._playLock)return n._queue.push({event:"mute",action:function(){n.mute(e,t)}}),n;if(typeof t>"u")if(typeof e=="boolean")n._muted=e;else return n._muted;for(var o=n._getSoundIds(t),i=0;i<o.length;i++){var l=n._soundById(o[i]);l&&(l._muted=e,l._interval&&n._stopFade(l._id),n._webAudio&&l._node?l._node.gain.setValueAtTime(e?0:l._volume,r.ctx.currentTime):l._node&&(l._node.muted=r._muted?!0:e),n._emit("mute",l._id))}return n},volume:function(){var e=this,t=arguments,n,o;if(t.length===0)return e._volume;if(t.length===1||t.length===2&&typeof t[1]>"u"){var i=e._getSoundIds(),l=i.indexOf(t[0]);l>=0?o=parseInt(t[0],10):n=parseFloat(t[0])}else t.length>=2&&(n=parseFloat(t[0]),o=parseInt(t[1],10));var a;if(typeof n<"u"&&n>=0&&n<=1){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"volume",action:function(){e.volume.apply(e,t)}}),e;typeof o>"u"&&(e._volume=n),o=e._getSoundIds(o);for(var c=0;c<o.length;c++)a=e._soundById(o[c]),a&&(a._volume=n,t[2]||e._stopFade(o[c]),e._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(n,r.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=n*r.volume()),e._emit("volume",a._id))}else return a=o?e._soundById(o):e._sounds[0],a?a._volume:0;return e},fade:function(e,t,n,o){var i=this;if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"fade",action:function(){i.fade(e,t,n,o)}}),i;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),n=parseFloat(n),i.volume(e,o);for(var l=i._getSoundIds(o),a=0;a<l.length;a++){var c=i._soundById(l[a]);if(c){if(o||i._stopFade(l[a]),i._webAudio&&!c._muted){var m=r.ctx.currentTime,y=m+n/1e3;c._volume=e,c._node.gain.setValueAtTime(e,m),c._node.gain.linearRampToValueAtTime(t,y)}i._startFadeInterval(c,e,t,n,l[a],typeof o>"u")}}return i},_startFadeInterval:function(e,t,n,o,i,l){var a=this,c=t,m=n-t,y=Math.abs(m/.01),S=Math.max(4,y>0?o/y:o),I=Date.now();e._fadeTo=n,e._interval=setInterval(function(){var w=(Date.now()-I)/o;I=Date.now(),c+=m*w,c=Math.round(c*100)/100,m<0?c=Math.max(n,c):c=Math.min(n,c),a._webAudio?e._volume=c:a.volume(c,e._id,!0),l&&(a._volume=c),(n<t&&c<=n||n>t&&c>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,a.volume(n,e._id),a._emit("fade",e._id))},S)},_stopFade:function(e){var t=this,n=t._soundById(e);return n&&n._interval&&(t._webAudio&&n._node.gain.cancelScheduledValues(r.ctx.currentTime),clearInterval(n._interval),n._interval=null,t.volume(n._fadeTo,e),n._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e=this,t=arguments,n,o,i;if(t.length===0)return e._loop;if(t.length===1)if(typeof t[0]=="boolean")n=t[0],e._loop=n;else return i=e._soundById(parseInt(t[0],10)),i?i._loop:!1;else t.length===2&&(n=t[0],o=parseInt(t[1],10));for(var l=e._getSoundIds(o),a=0;a<l.length;a++)i=e._soundById(l[a]),i&&(i._loop=n,e._webAudio&&i._node&&i._node.bufferSource&&(i._node.bufferSource.loop=n,n&&(i._node.bufferSource.loopStart=i._start||0,i._node.bufferSource.loopEnd=i._stop,e.playing(l[a])&&(e.pause(l[a],!0),e.play(l[a],!0)))));return e},rate:function(){var e=this,t=arguments,n,o;if(t.length===0)o=e._sounds[0]._id;else if(t.length===1){var i=e._getSoundIds(),l=i.indexOf(t[0]);l>=0?o=parseInt(t[0],10):n=parseFloat(t[0])}else t.length===2&&(n=parseFloat(t[0]),o=parseInt(t[1],10));var a;if(typeof n=="number"){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"rate",action:function(){e.rate.apply(e,t)}}),e;typeof o>"u"&&(e._rate=n),o=e._getSoundIds(o);for(var c=0;c<o.length;c++)if(a=e._soundById(o[c]),a){e.playing(o[c])&&(a._rateSeek=e.seek(o[c]),a._playStart=e._webAudio?r.ctx.currentTime:a._playStart),a._rate=n,e._webAudio&&a._node&&a._node.bufferSource?a._node.bufferSource.playbackRate.setValueAtTime(n,r.ctx.currentTime):a._node&&(a._node.playbackRate=n);var m=e.seek(o[c]),y=(e._sprite[a._sprite][0]+e._sprite[a._sprite][1])/1e3-m,S=y*1e3/Math.abs(a._rate);(e._endTimers[o[c]]||!a._paused)&&(e._clearTimer(o[c]),e._endTimers[o[c]]=setTimeout(e._ended.bind(e,a),S)),e._emit("rate",a._id)}}else return a=e._soundById(o),a?a._rate:e._rate;return e},seek:function(){var e=this,t=arguments,n,o;if(t.length===0)e._sounds.length&&(o=e._sounds[0]._id);else if(t.length===1){var i=e._getSoundIds(),l=i.indexOf(t[0]);l>=0?o=parseInt(t[0],10):e._sounds.length&&(o=e._sounds[0]._id,n=parseFloat(t[0]))}else t.length===2&&(n=parseFloat(t[0]),o=parseInt(t[1],10));if(typeof o>"u")return 0;if(typeof n=="number"&&(e._state!=="loaded"||e._playLock))return e._queue.push({event:"seek",action:function(){e.seek.apply(e,t)}}),e;var a=e._soundById(o);if(a)if(typeof n=="number"&&n>=0){var c=e.playing(o);c&&e.pause(o,!0),a._seek=n,a._ended=!1,e._clearTimer(o),!e._webAudio&&a._node&&!isNaN(a._node.duration)&&(a._node.currentTime=n);var m=function(){c&&e.play(o,!0),e._emit("seek",o)};if(c&&!e._webAudio){var y=function(){e._playLock?setTimeout(y,0):m()};setTimeout(y,0)}else m()}else if(e._webAudio){var S=e.playing(o)?r.ctx.currentTime-a._playStart:0,I=a._rateSeek?a._rateSeek-a._seek:0;return a._seek+(I+S*Math.abs(a._rate))}else return a._node.currentTime;return e},playing:function(e){var t=this;if(typeof e=="number"){var n=t._soundById(e);return n?!n._paused:!1}for(var o=0;o<t._sounds.length;o++)if(!t._sounds[o]._paused)return!0;return!1},duration:function(e){var t=this,n=t._duration,o=t._soundById(e);return o&&(n=t._sprite[o._sprite][1]/1e3),n},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,n=0;n<t.length;n++)t[n]._paused||e.stop(t[n]._id),e._webAudio||(e._clearSound(t[n]._node),t[n]._node.removeEventListener("error",t[n]._errorFn,!1),t[n]._node.removeEventListener(r._canPlayEvent,t[n]._loadFn,!1),t[n]._node.removeEventListener("ended",t[n]._endFn,!1),r._releaseHtml5Audio(t[n]._node)),delete t[n]._node,e._clearTimer(t[n]._id);var o=r._howls.indexOf(e);o>=0&&r._howls.splice(o,1);var i=!0;for(n=0;n<r._howls.length;n++)if(r._howls[n]._src===e._src||e._src.indexOf(r._howls[n]._src)>=0){i=!1;break}return f&&i&&delete f[e._src],r.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,o){var i=this,l=i["_on"+e];return typeof t=="function"&&l.push(o?{id:n,fn:t,once:o}:{id:n,fn:t}),i},off:function(e,t,n){var o=this,i=o["_on"+e],l=0;if(typeof t=="number"&&(n=t,t=null),t||n)for(l=0;l<i.length;l++){var a=n===i[l].id;if(t===i[l].fn&&a||!t&&a){i.splice(l,1);break}}else if(e)o["_on"+e]=[];else{var c=Object.keys(o);for(l=0;l<c.length;l++)c[l].indexOf("_on")===0&&Array.isArray(o[c[l]])&&(o[c[l]]=[])}return o},once:function(e,t,n){var o=this;return o.on(e,t,n,1),o},_emit:function(e,t,n){for(var o=this,i=o["_on"+e],l=i.length-1;l>=0;l--)(!i[l].id||i[l].id===t||e==="load")&&(setTimeout((function(a){a.call(this,t,n)}).bind(o,i[l].fn),0),i[l].once&&o.off(e,i[l].fn,i[l].id));return o._loadQueue(e),o},_loadQueue:function(e){var t=this;if(t._queue.length>0){var n=t._queue[0];n.event===e&&(t._queue.shift(),t._loadQueue()),e||n.action()}return t},_ended:function(e){var t=this,n=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var o=!!(e._loop||t._sprite[n][2]);if(t._emit("end",e._id),!t._webAudio&&o&&t.stop(e._id,!0).play(e._id),t._webAudio&&o){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=r.ctx.currentTime;var i=(e._stop-e._start)*1e3/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),i)}return t._webAudio&&!o&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),r._autoSuspend()),!t._webAudio&&!o&&t.stop(e._id,!0),t},_clearTimer:function(e){var t=this;if(t._endTimers[e]){if(typeof t._endTimers[e]!="function")clearTimeout(t._endTimers[e]);else{var n=t._soundById(e);n&&n._node&&n._node.removeEventListener("ended",t._endTimers[e],!1)}delete t._endTimers[e]}return t},_soundById:function(e){for(var t=this,n=0;n<t._sounds.length;n++)if(e===t._sounds[n]._id)return t._sounds[n];return null},_inactiveSound:function(){var e=this;e._drain();for(var t=0;t<e._sounds.length;t++)if(e._sounds[t]._ended)return e._sounds[t].reset();return new u(e)},_drain:function(){var e=this,t=e._pool,n=0,o=0;if(!(e._sounds.length<t)){for(o=0;o<e._sounds.length;o++)e._sounds[o]._ended&&n++;for(o=e._sounds.length-1;o>=0;o--){if(n<=t)return;e._sounds[o]._ended&&(e._webAudio&&e._sounds[o]._node&&e._sounds[o]._node.disconnect(0),e._sounds.splice(o,1),n--)}}},_getSoundIds:function(e){var t=this;if(typeof e>"u"){for(var n=[],o=0;o<t._sounds.length;o++)n.push(t._sounds[o]._id);return n}else return[e]},_refreshBuffer:function(e){var t=this;return e._node.bufferSource=r.ctx.createBufferSource(),e._node.bufferSource.buffer=f[t._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,r.ctx.currentTime),t},_cleanBuffer:function(e){var t=this,n=r._navigator&&r._navigator.vendor.indexOf("Apple")>=0;if(!e.bufferSource)return t;if(r._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),n))try{e.bufferSource.buffer=r._scratchBuffer}catch{}return e.bufferSource=null,t},_clearSound:function(e){var t=/MSIE |Trident\//.test(r._navigator&&r._navigator.userAgent);t||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var u=function(e){this._parent=e,this.init()};u.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++r._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,n=r._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=typeof r.ctx.createGain>"u"?r.ctx.createGainNode():r.ctx.createGain(),e._node.gain.setValueAtTime(n,r.ctx.currentTime),e._node.paused=!0,e._node.connect(r.masterGain)):r.noAudio||(e._node=r._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(r._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=t._src,e._node.preload=t._preload===!0?"auto":t._preload,e._node.volume=n*r.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++r._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,t=e._parent;t._duration=Math.ceil(e._node.duration*10)/10,Object.keys(t._sprite).length===0&&(t._sprite={__default:[0,t._duration*1e3]}),t._state!=="loaded"&&(t._state="loaded",t._emit("load"),t._loadQueue()),e._node.removeEventListener(r._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,t=e._parent;t._duration===1/0&&(t._duration=Math.ceil(e._node.duration*10)/10,t._sprite.__default[1]===1/0&&(t._sprite.__default[1]=t._duration*1e3),t._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var f={},d=function(e){var t=e._src;if(f[t]){e._duration=f[t].duration,_(e);return}if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),o=new Uint8Array(n.length),i=0;i<n.length;++i)o[i]=n.charCodeAt(i);p(o.buffer,e)}else{var l=new XMLHttpRequest;l.open(e._xhr.method,t,!0),l.withCredentials=e._xhr.withCredentials,l.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(a){l.setRequestHeader(a,e._xhr.headers[a])}),l.onload=function(){var a=(l.status+"")[0];if(a!=="0"&&a!=="2"&&a!=="3"){e._emit("loaderror",null,"Failed loading audio file with status: "+l.status+".");return}p(l.response,e)},l.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete f[t],e.load())},v(l)}},v=function(e){try{e.send()}catch{e.onerror()}},p=function(e,t){var n=function(){t._emit("loaderror",null,"Decoding audio data failed.")},o=function(i){i&&t._sounds.length>0?(f[t._src]=i,_(t,i)):n()};typeof Promise<"u"&&r.ctx.decodeAudioData.length===1?r.ctx.decodeAudioData(e).then(o).catch(n):r.ctx.decodeAudioData(e,o,n)},_=function(e,t){t&&!e._duration&&(e._duration=t.duration),Object.keys(e._sprite).length===0&&(e._sprite={__default:[0,e._duration*1e3]}),e._state!=="loaded"&&(e._state="loaded",e._emit("load"),e._loadQueue())},g=function(){if(r.usingWebAudio){try{typeof AudioContext<"u"?r.ctx=new AudioContext:typeof webkitAudioContext<"u"?r.ctx=new webkitAudioContext:r.usingWebAudio=!1}catch{r.usingWebAudio=!1}r.ctx||(r.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(r._navigator&&r._navigator.platform),t=r._navigator&&r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),n=t?parseInt(t[1],10):null;if(e&&n&&n<9){var o=/safari/.test(r._navigator&&r._navigator.userAgent.toLowerCase());r._navigator&&!o&&(r.usingWebAudio=!1)}r.usingWebAudio&&(r.masterGain=typeof r.ctx.createGain>"u"?r.ctx.createGainNode():r.ctx.createGain(),r.masterGain.gain.setValueAtTime(r._muted?0:r._volume,r.ctx.currentTime),r.masterGain.connect(r.ctx.destination)),r._setup()}};b.Howler=r,b.Howl=s,typeof E<"u"?(E.HowlerGlobal=A,E.Howler=r,E.Howl=s,E.Sound=u):typeof window<"u"&&(window.HowlerGlobal=A,window.Howler=r,window.Howl=s,window.Sound=u)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(r){var s=this;if(!s.ctx||!s.ctx.listener)return s;for(var u=s._howls.length-1;u>=0;u--)s._howls[u].stereo(r);return s},HowlerGlobal.prototype.pos=function(r,s,u){var f=this;if(!f.ctx||!f.ctx.listener)return f;if(s=typeof s!="number"?f._pos[1]:s,u=typeof u!="number"?f._pos[2]:u,typeof r=="number")f._pos=[r,s,u],typeof f.ctx.listener.positionX<"u"?(f.ctx.listener.positionX.setTargetAtTime(f._pos[0],Howler.ctx.currentTime,.1),f.ctx.listener.positionY.setTargetAtTime(f._pos[1],Howler.ctx.currentTime,.1),f.ctx.listener.positionZ.setTargetAtTime(f._pos[2],Howler.ctx.currentTime,.1)):f.ctx.listener.setPosition(f._pos[0],f._pos[1],f._pos[2]);else return f._pos;return f},HowlerGlobal.prototype.orientation=function(r,s,u,f,d,v){var p=this;if(!p.ctx||!p.ctx.listener)return p;var _=p._orientation;if(s=typeof s!="number"?_[1]:s,u=typeof u!="number"?_[2]:u,f=typeof f!="number"?_[3]:f,d=typeof d!="number"?_[4]:d,v=typeof v!="number"?_[5]:v,typeof r=="number")p._orientation=[r,s,u,f,d,v],typeof p.ctx.listener.forwardX<"u"?(p.ctx.listener.forwardX.setTargetAtTime(r,Howler.ctx.currentTime,.1),p.ctx.listener.forwardY.setTargetAtTime(s,Howler.ctx.currentTime,.1),p.ctx.listener.forwardZ.setTargetAtTime(u,Howler.ctx.currentTime,.1),p.ctx.listener.upX.setTargetAtTime(f,Howler.ctx.currentTime,.1),p.ctx.listener.upY.setTargetAtTime(d,Howler.ctx.currentTime,.1),p.ctx.listener.upZ.setTargetAtTime(v,Howler.ctx.currentTime,.1)):p.ctx.listener.setOrientation(r,s,u,f,d,v);else return _;return p},Howl.prototype.init=function(r){return function(s){var u=this;return u._orientation=s.orientation||[1,0,0],u._stereo=s.stereo||null,u._pos=s.pos||null,u._pannerAttr={coneInnerAngle:typeof s.coneInnerAngle<"u"?s.coneInnerAngle:360,coneOuterAngle:typeof s.coneOuterAngle<"u"?s.coneOuterAngle:360,coneOuterGain:typeof s.coneOuterGain<"u"?s.coneOuterGain:0,distanceModel:typeof s.distanceModel<"u"?s.distanceModel:"inverse",maxDistance:typeof s.maxDistance<"u"?s.maxDistance:1e4,panningModel:typeof s.panningModel<"u"?s.panningModel:"HRTF",refDistance:typeof s.refDistance<"u"?s.refDistance:1,rolloffFactor:typeof s.rolloffFactor<"u"?s.rolloffFactor:1},u._onstereo=s.onstereo?[{fn:s.onstereo}]:[],u._onpos=s.onpos?[{fn:s.onpos}]:[],u._onorientation=s.onorientation?[{fn:s.onorientation}]:[],r.call(this,s)}}(Howl.prototype.init),Howl.prototype.stereo=function(r,s){var u=this;if(!u._webAudio)return u;if(u._state!=="loaded")return u._queue.push({event:"stereo",action:function(){u.stereo(r,s)}}),u;var f=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof s>"u")if(typeof r=="number")u._stereo=r,u._pos=[r,0,0];else return u._stereo;for(var d=u._getSoundIds(s),v=0;v<d.length;v++){var p=u._soundById(d[v]);if(p)if(typeof r=="number")p._stereo=r,p._pos=[r,0,0],p._node&&(p._pannerAttr.panningModel="equalpower",(!p._panner||!p._panner.pan)&&A(p,f),f==="spatial"?typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(r,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):p._panner.setPosition(r,0,0):p._panner.pan.setValueAtTime(r,Howler.ctx.currentTime)),u._emit("stereo",p._id);else return p._stereo}return u},Howl.prototype.pos=function(r,s,u,f){var d=this;if(!d._webAudio)return d;if(d._state!=="loaded")return d._queue.push({event:"pos",action:function(){d.pos(r,s,u,f)}}),d;if(s=typeof s!="number"?0:s,u=typeof u!="number"?-.5:u,typeof f>"u")if(typeof r=="number")d._pos=[r,s,u];else return d._pos;for(var v=d._getSoundIds(f),p=0;p<v.length;p++){var _=d._soundById(v[p]);if(_)if(typeof r=="number")_._pos=[r,s,u],_._node&&((!_._panner||_._panner.pan)&&A(_,"spatial"),typeof _._panner.positionX<"u"?(_._panner.positionX.setValueAtTime(r,Howler.ctx.currentTime),_._panner.positionY.setValueAtTime(s,Howler.ctx.currentTime),_._panner.positionZ.setValueAtTime(u,Howler.ctx.currentTime)):_._panner.setPosition(r,s,u)),d._emit("pos",_._id);else return _._pos}return d},Howl.prototype.orientation=function(r,s,u,f){var d=this;if(!d._webAudio)return d;if(d._state!=="loaded")return d._queue.push({event:"orientation",action:function(){d.orientation(r,s,u,f)}}),d;if(s=typeof s!="number"?d._orientation[1]:s,u=typeof u!="number"?d._orientation[2]:u,typeof f>"u")if(typeof r=="number")d._orientation=[r,s,u];else return d._orientation;for(var v=d._getSoundIds(f),p=0;p<v.length;p++){var _=d._soundById(v[p]);if(_)if(typeof r=="number")_._orientation=[r,s,u],_._node&&(_._panner||(_._pos||(_._pos=d._pos||[0,0,-.5]),A(_,"spatial")),typeof _._panner.orientationX<"u"?(_._panner.orientationX.setValueAtTime(r,Howler.ctx.currentTime),_._panner.orientationY.setValueAtTime(s,Howler.ctx.currentTime),_._panner.orientationZ.setValueAtTime(u,Howler.ctx.currentTime)):_._panner.setOrientation(r,s,u)),d._emit("orientation",_._id);else return _._orientation}return d},Howl.prototype.pannerAttr=function(){var r=this,s=arguments,u,f,d;if(!r._webAudio)return r;if(s.length===0)return r._pannerAttr;if(s.length===1)if(typeof s[0]=="object")u=s[0],typeof f>"u"&&(u.pannerAttr||(u.pannerAttr={coneInnerAngle:u.coneInnerAngle,coneOuterAngle:u.coneOuterAngle,coneOuterGain:u.coneOuterGain,distanceModel:u.distanceModel,maxDistance:u.maxDistance,refDistance:u.refDistance,rolloffFactor:u.rolloffFactor,panningModel:u.panningModel}),r._pannerAttr={coneInnerAngle:typeof u.pannerAttr.coneInnerAngle<"u"?u.pannerAttr.coneInnerAngle:r._coneInnerAngle,coneOuterAngle:typeof u.pannerAttr.coneOuterAngle<"u"?u.pannerAttr.coneOuterAngle:r._coneOuterAngle,coneOuterGain:typeof u.pannerAttr.coneOuterGain<"u"?u.pannerAttr.coneOuterGain:r._coneOuterGain,distanceModel:typeof u.pannerAttr.distanceModel<"u"?u.pannerAttr.distanceModel:r._distanceModel,maxDistance:typeof u.pannerAttr.maxDistance<"u"?u.pannerAttr.maxDistance:r._maxDistance,refDistance:typeof u.pannerAttr.refDistance<"u"?u.pannerAttr.refDistance:r._refDistance,rolloffFactor:typeof u.pannerAttr.rolloffFactor<"u"?u.pannerAttr.rolloffFactor:r._rolloffFactor,panningModel:typeof u.pannerAttr.panningModel<"u"?u.pannerAttr.panningModel:r._panningModel});else return d=r._soundById(parseInt(s[0],10)),d?d._pannerAttr:r._pannerAttr;else s.length===2&&(u=s[0],f=parseInt(s[1],10));for(var v=r._getSoundIds(f),p=0;p<v.length;p++)if(d=r._soundById(v[p]),d){var _=d._pannerAttr;_={coneInnerAngle:typeof u.coneInnerAngle<"u"?u.coneInnerAngle:_.coneInnerAngle,coneOuterAngle:typeof u.coneOuterAngle<"u"?u.coneOuterAngle:_.coneOuterAngle,coneOuterGain:typeof u.coneOuterGain<"u"?u.coneOuterGain:_.coneOuterGain,distanceModel:typeof u.distanceModel<"u"?u.distanceModel:_.distanceModel,maxDistance:typeof u.maxDistance<"u"?u.maxDistance:_.maxDistance,refDistance:typeof u.refDistance<"u"?u.refDistance:_.refDistance,rolloffFactor:typeof u.rolloffFactor<"u"?u.rolloffFactor:_.rolloffFactor,panningModel:typeof u.panningModel<"u"?u.panningModel:_.panningModel};var g=d._panner;g||(d._pos||(d._pos=r._pos||[0,0,-.5]),A(d,"spatial"),g=d._panner),g.coneInnerAngle=_.coneInnerAngle,g.coneOuterAngle=_.coneOuterAngle,g.coneOuterGain=_.coneOuterGain,g.distanceModel=_.distanceModel,g.maxDistance=_.maxDistance,g.refDistance=_.refDistance,g.rolloffFactor=_.rolloffFactor,g.panningModel=_.panningModel}return r},Sound.prototype.init=function(r){return function(){var s=this,u=s._parent;s._orientation=u._orientation,s._stereo=u._stereo,s._pos=u._pos,s._pannerAttr=u._pannerAttr,r.call(this),s._stereo?u.stereo(s._stereo):s._pos&&u.pos(s._pos[0],s._pos[1],s._pos[2],s._id)}}(Sound.prototype.init),Sound.prototype.reset=function(r){return function(){var s=this,u=s._parent;return s._orientation=u._orientation,s._stereo=u._stereo,s._pos=u._pos,s._pannerAttr=u._pannerAttr,s._stereo?u.stereo(s._stereo):s._pos?u.pos(s._pos[0],s._pos[1],s._pos[2],s._id):s._panner&&(s._panner.disconnect(0),s._panner=void 0,u._refreshBuffer(s)),r.call(this)}}(Sound.prototype.reset);var A=function(r,s){s=s||"spatial",s==="spatial"?(r._panner=Howler.ctx.createPanner(),r._panner.coneInnerAngle=r._pannerAttr.coneInnerAngle,r._panner.coneOuterAngle=r._pannerAttr.coneOuterAngle,r._panner.coneOuterGain=r._pannerAttr.coneOuterGain,r._panner.distanceModel=r._pannerAttr.distanceModel,r._panner.maxDistance=r._pannerAttr.maxDistance,r._panner.refDistance=r._pannerAttr.refDistance,r._panner.rolloffFactor=r._pannerAttr.rolloffFactor,r._panner.panningModel=r._pannerAttr.panningModel,typeof r._panner.positionX<"u"?(r._panner.positionX.setValueAtTime(r._pos[0],Howler.ctx.currentTime),r._panner.positionY.setValueAtTime(r._pos[1],Howler.ctx.currentTime),r._panner.positionZ.setValueAtTime(r._pos[2],Howler.ctx.currentTime)):r._panner.setPosition(r._pos[0],r._pos[1],r._pos[2]),typeof r._panner.orientationX<"u"?(r._panner.orientationX.setValueAtTime(r._orientation[0],Howler.ctx.currentTime),r._panner.orientationY.setValueAtTime(r._orientation[1],Howler.ctx.currentTime),r._panner.orientationZ.setValueAtTime(r._orientation[2],Howler.ctx.currentTime)):r._panner.setOrientation(r._orientation[0],r._orientation[1],r._orientation[2])):(r._panner=Howler.ctx.createStereoPanner(),r._panner.pan.setValueAtTime(r._stereo,Howler.ctx.currentTime)),r._panner.connect(r._node),r._paused||r._parent.pause(r._id,!0).play(r._id,!0)}})()})(W);function ue(b){let A,r,s,u,f,d,v,p,_,g,e=V(b[3])+"",t,n,o=V(b[2])+"",i,l,a,c,m,y,S,I;return s=new ie({props:{link:"/video/"+b[0].post.slug,name:"Далее"}}),{c(){A=P("section"),r=P("div"),z(s.$$.fragment),u=L(),f=P("button"),d=L(),v=P("input"),_=L(),g=P("span"),t=C(e),n=C(" / "),i=C(o),l=L(),a=P("button"),c=L(),m=P("input"),this.h()},l(w){A=H(w,"SECTION",{class:!0});var x=B(A);r=H(x,"DIV",{class:!0});var h=B(r);ee(s.$$.fragment,h),u=D(h),f=H(h,"BUTTON",{class:!0}),B(f).forEach(F),d=D(h),v=H(h,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),_=D(h),g=H(h,"SPAN",{class:!0});var O=B(g);t=q(O,e),n=q(O," / "),i=q(O,o),O.forEach(F),l=D(h),a=H(h,"BUTTON",{class:!0}),B(a).forEach(F),c=D(h),m=H(h,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),h.forEach(F),x.forEach(F),this.h()},h(){T(f,"class","audio__button__play"),T(v,"class","audio__input__range audio__input__range_time"),T(v,"type","range"),T(v,"min","0"),T(v,"max","1"),T(v,"step","0.01"),v.value=p=b[3]/b[2],T(g,"class","audio__time"),T(a,"class","audio__button__mute"),T(m,"class","audio__input__range audio__input__range_volume"),T(m,"type","range"),T(m,"min","0"),T(m,"max","1"),T(m,"step","0.01"),m.value=b[1],T(r,"class","audio__player-box"),T(A,"class","audio")},m(w,x){te(w,A,x),k(A,r),ne(s,r,null),k(r,u),k(r,f),k(r,d),k(r,v),k(r,_),k(r,g),k(g,t),k(g,n),k(g,i),k(r,l),k(r,a),k(r,c),k(r,m),y=!0,S||(I=[G(f,"click",b[4]),G(v,"input",b[7]),G(a,"click",b[6]),G(m,"input",b[5])],S=!0)},p(w,[x]){const h={};x&1&&(h.link="/video/"+w[0].post.slug),s.$set(h),(!y||x&12&&p!==(p=w[3]/w[2]))&&(v.value=p),(!y||x&8)&&e!==(e=V(w[3])+"")&&N(t,e),(!y||x&4)&&o!==(o=V(w[2])+"")&&N(i,o),(!y||x&2)&&(m.value=w[1])},i(w){y||(re(s.$$.fragment,w),y=!0)},o(w){oe(s.$$.fragment,w),y=!1},d(w){w&&F(A),ae(s),S=!1,$(I)}}}function V(b){const A=Math.floor(b/60),r=Math.floor(b%60);return`${A}:${r<10?"0":""}${r}`}function se(b,A,r){let{data:s}=A,u=!1,f=.5,d=0,v=0,p;const _=new W.Howl({src:[s.post.link],html5:!0,volume:f,onplay:()=>{u=!0,p=setInterval(()=>{r(3,v=_.seek()+.01)},1e3)},onpause:()=>{u=!1,r(3,v=_.seek())},onend:()=>{u=!1,r(3,v=_.seek())},onseek:()=>{r(3,v=_.seek())},onload:()=>{r(2,d=_.duration())},onmute:()=>{o()}});function g(){u?_.pause():_.play(),console.log(_._muted)}function e(i){r(1,f=parseFloat(i.target.value)),_.volume(f)}function t(){_.mute(!_._muted)}function n(i){const l=parseFloat(i.target.value)*d;_.seek(l)}function o(){const i=document.querySelector(".audio__button__mute");_._muted?i.classList.add("audio__button__mute_active"):i.classList.remove("audio__button__mute_active")}return j(()=>{r(2,d=_.duration()),p=setInterval(()=>{r(3,v=_.seek()+.01)},1e3)}),K(()=>{clearInterval(p),_.unload()}),b.$$set=i=>{"data"in i&&r(0,s=i.data)},[s,f,d,v,g,e,t,n]}class de extends J{constructor(A){super(),U(this,A,se,ue,Z,{data:0})}}export{de as component};
