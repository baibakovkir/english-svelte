import{s as oe,n as te,r as ae,h as ne,o as ie}from"../chunks/scheduler.Bj67otkU.js";import{S as ue,i as le,e as H,t as C,s as R,H as se,c as M,a as D,b as X,d as B,f as q,B as _e,n as I,g as fe,h as T,A as $,j}from"../chunks/index.CjQoJbwm.js";var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},re={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(y){(function(){var g=function(){this.init()};g.prototype={init:function(){var e=this||r;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator=typeof window<"u"&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||r;if(e=parseFloat(e),t.ctx||w(),typeof e<"u"&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),l=0;l<o.length;l++){var s=t._howls[n]._soundById(o[l]);s&&s._node&&(s._node.volume=s._volume*e)}return t}return t._volume},mute:function(e){var t=this||r;t.ctx||w(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),l=0;l<o.length;l++){var s=t._howls[n]._soundById(o[l]);s&&s._node&&(s._node.muted=e?!0:s._muted)}return t},stop:function(){for(var e=this||r,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||r,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&typeof e.ctx.close<"u"&&(e.ctx.close(),e.ctx=null,w()),e},codecs:function(e){return(this||r)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||r;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if(typeof Audio<"u")try{var t=new Audio;typeof t.oncanplaythrough>"u"&&(e._canPlayEvent="canplay")}catch{e.noAudio=!0}else e.noAudio=!0;try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch{}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||r,t=null;try{t=typeof Audio<"u"?new Audio:null}catch{return e}if(!t||typeof t.canPlayType!="function")return e;var n=t.canPlayType("audio/mpeg;").replace(/^no$/,""),o=e._navigator?e._navigator.userAgent:"",l=o.match(/OPR\/(\d+)/g),s=l&&parseInt(l[0].split("/")[1],10)<33,a=o.indexOf("Safari")!==-1&&o.indexOf("Chrome")===-1,c=o.match(/Version\/(.*?) /),v=a&&c&&parseInt(c[1],10)<15;return e._codecs={mp3:!!(!s&&(n||t.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!n,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||r;if(!(e._audioUnlocked||!e.ctx)){e._audioUnlocked=!1,e.autoUnlock=!1,!e._mobileUnloaded&&e.ctx.sampleRate!==44100&&(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var o=new Audio;o._unlocked=!0,e._releaseHtml5Audio(o)}catch{e.noAudio=!0;break}for(var l=0;l<e._howls.length;l++)if(!e._howls[l]._webAudio)for(var s=e._howls[l]._getSoundIds(),a=0;a<s.length;a++){var c=e._howls[l]._soundById(s[a]);c&&c._node&&!c._node._unlocked&&(c._node._unlocked=!0,c._node.load())}e._autoResume();var v=e.ctx.createBufferSource();v.buffer=e._scratchBuffer,v.connect(e.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof e.ctx.resume=="function"&&e.ctx.resume(),v.onended=function(){v.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var A=0;A<e._howls.length;A++)e._howls[A]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||r;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=new Audio().play();return t&&typeof Promise<"u"&&(t instanceof Promise||typeof t.then=="function")&&t.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var t=this||r;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(!(!e.autoSuspend||!e.ctx||typeof e.ctx.suspend>"u"||!r.usingWebAudio)){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio){for(var n=0;n<e._howls[t]._sounds.length;n++)if(!e._howls[t]._sounds[n]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var o=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(o,o)}},3e4),e}},_autoResume:function(){var e=this;if(!(!e.ctx||typeof e.ctx.resume>"u"||!r.usingWebAudio))return e.state==="running"&&e.ctx.state!=="interrupted"&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):e.state==="suspended"||e.state==="running"&&e.ctx.state==="interrupted"?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):e.state==="suspending"&&(e._resumeAfterSuspend=!0),e}};var r=new g,u=function(e){var t=this;if(!e.src||e.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}t.init(e)};u.prototype={init:function(e){var t=this;return r.ctx||w(),t._autoplay=e.autoplay||!1,t._format=typeof e.format!="string"?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload=typeof e.preload=="boolean"||e.preload==="metadata"?e.preload:!0,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src=typeof e.src!="string"?e.src:[e.src],t._volume=e.volume!==void 0?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:e.xhr&&e.xhr.withCredentials?e.xhr.withCredentials:!1},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=r.usingWebAudio&&!t._html5,typeof r.ctx<"u"&&r.ctx&&r.autoUnlock&&r._unlockAudio(),r._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t._preload!=="none"&&t.load(),t},load:function(){var e=this,t=null;if(r.noAudio){e._emit("loaderror",null,"No audio support.");return}typeof e._src=="string"&&(e._src=[e._src]);for(var n=0;n<e._src.length;n++){var o,l;if(e._format&&e._format[n])o=e._format[n];else{if(l=e._src[n],typeof l!="string"){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}o=/^data:audio\/([^;,]+);/i.exec(l),o||(o=/\.([^.]+)$/.exec(l.split("?",1)[0])),o&&(o=o[1].toLowerCase())}if(o||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),o&&r.codecs(o)){t=e._src[n];break}}if(!t){e._emit("loaderror",null,"No codec support for selected audio sources.");return}return e._src=t,e._state="loading",window.location.protocol==="https:"&&t.slice(0,5)==="http:"&&(e._html5=!0,e._webAudio=!1),new i(e),e._webAudio&&f(e),e},play:function(e,t){var n=this,o=null;if(typeof e=="number")o=e,e=null;else{if(typeof e=="string"&&n._state==="loaded"&&!n._sprite[e])return null;if(typeof e>"u"&&(e="__default",!n._playLock)){for(var l=0,s=0;s<n._sounds.length;s++)n._sounds[s]._paused&&!n._sounds[s]._ended&&(l++,o=n._sounds[s]._id);l===1?e=null:o=null}}var a=o?n._soundById(o):n._inactiveSound();if(!a)return null;if(o&&!e&&(e=a._sprite||"__default"),n._state!=="loaded"){a._sprite=e,a._ended=!1;var c=a._id;return n._queue.push({event:"play",action:function(){n.play(c)}}),c}if(o&&!a._paused)return t||n._loadQueue("play"),a._id;n._webAudio&&r._autoResume();var v=Math.max(0,a._seek>0?a._seek:n._sprite[e][0]/1e3),A=Math.max(0,(n._sprite[e][0]+n._sprite[e][1])/1e3-v),k=A*1e3/Math.abs(a._rate),x=n._sprite[e][0]/1e3,F=(n._sprite[e][0]+n._sprite[e][1])/1e3;a._sprite=e,a._ended=!1;var G=function(){a._paused=!1,a._seek=v,a._start=x,a._stop=F,a._loop=!!(a._loop||n._sprite[e][2])};if(v>=F){n._ended(a);return}var h=a._node;if(n._webAudio){var L=function(){n._playLock=!1,G(),n._refreshBuffer(a);var P=a._muted||n._muted?0:a._volume;h.gain.setValueAtTime(P,r.ctx.currentTime),a._playStart=r.ctx.currentTime,typeof h.bufferSource.start>"u"?a._loop?h.bufferSource.noteGrainOn(0,v,86400):h.bufferSource.noteGrainOn(0,v,A):a._loop?h.bufferSource.start(0,v,86400):h.bufferSource.start(0,v,A),k!==1/0&&(n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),k)),t||setTimeout(function(){n._emit("play",a._id),n._loadQueue()},0)};r.state==="running"&&r.ctx.state!=="interrupted"?L():(n._playLock=!0,n.once("resume",L),n._clearTimer(a._id))}else{var V=function(){h.currentTime=v,h.muted=a._muted||n._muted||r._muted||h.muted,h.volume=a._volume*r.volume(),h.playbackRate=a._rate;try{var P=h.play();if(P&&typeof Promise<"u"&&(P instanceof Promise||typeof P.then=="function")?(n._playLock=!0,G(),P.then(function(){n._playLock=!1,h._unlocked=!0,t?n._loadQueue():n._emit("play",a._id)}).catch(function(){n._playLock=!1,n._emit("playerror",a._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),a._ended=!0,a._paused=!0})):t||(n._playLock=!1,G(),n._emit("play",a._id)),h.playbackRate=a._rate,h.paused){n._emit("playerror",a._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}e!=="__default"||a._loop?n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),k):(n._endTimers[a._id]=function(){n._ended(a),h.removeEventListener("ended",n._endTimers[a._id],!1)},h.addEventListener("ended",n._endTimers[a._id],!1))}catch(W){n._emit("playerror",a._id,W)}};h.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(h.src=n._src,h.load());var N=window&&window.ejecta||!h.readyState&&r._navigator.isCocoonJS;if(h.readyState>=3||N)V();else{n._playLock=!0,n._state="loading";var E=function(){n._state="loaded",V(),h.removeEventListener(r._canPlayEvent,E,!1)};h.addEventListener(r._canPlayEvent,E,!1),n._clearTimer(a._id)}}return a._id},pause:function(e){var t=this;if(t._state!=="loaded"||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),o=0;o<n.length;o++){t._clearTimer(n[o]);var l=t._soundById(n[o]);if(l&&!l._paused&&(l._seek=t.seek(n[o]),l._rateSeek=0,l._paused=!0,t._stopFade(n[o]),l._node))if(t._webAudio){if(!l._node.bufferSource)continue;typeof l._node.bufferSource.stop>"u"?l._node.bufferSource.noteOff(0):l._node.bufferSource.stop(0),t._cleanBuffer(l._node)}else(!isNaN(l._node.duration)||l._node.duration===1/0)&&l._node.pause();arguments[1]||t._emit("pause",l?l._id:null)}return t},stop:function(e,t){var n=this;if(n._state!=="loaded"||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),l=0;l<o.length;l++){n._clearTimer(o[l]);var s=n._soundById(o[l]);s&&(s._seek=s._start||0,s._rateSeek=0,s._paused=!0,s._ended=!0,n._stopFade(o[l]),s._node&&(n._webAudio?s._node.bufferSource&&(typeof s._node.bufferSource.stop>"u"?s._node.bufferSource.noteOff(0):s._node.bufferSource.stop(0),n._cleanBuffer(s._node)):(!isNaN(s._node.duration)||s._node.duration===1/0)&&(s._node.currentTime=s._start||0,s._node.pause(),s._node.duration===1/0&&n._clearSound(s._node))),t||n._emit("stop",s._id))}return n},mute:function(e,t){var n=this;if(n._state!=="loaded"||n._playLock)return n._queue.push({event:"mute",action:function(){n.mute(e,t)}}),n;if(typeof t>"u")if(typeof e=="boolean")n._muted=e;else return n._muted;for(var o=n._getSoundIds(t),l=0;l<o.length;l++){var s=n._soundById(o[l]);s&&(s._muted=e,s._interval&&n._stopFade(s._id),n._webAudio&&s._node?s._node.gain.setValueAtTime(e?0:s._volume,r.ctx.currentTime):s._node&&(s._node.muted=r._muted?!0:e),n._emit("mute",s._id))}return n},volume:function(){var e=this,t=arguments,n,o;if(t.length===0)return e._volume;if(t.length===1||t.length===2&&typeof t[1]>"u"){var l=e._getSoundIds(),s=l.indexOf(t[0]);s>=0?o=parseInt(t[0],10):n=parseFloat(t[0])}else t.length>=2&&(n=parseFloat(t[0]),o=parseInt(t[1],10));var a;if(typeof n<"u"&&n>=0&&n<=1){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"volume",action:function(){e.volume.apply(e,t)}}),e;typeof o>"u"&&(e._volume=n),o=e._getSoundIds(o);for(var c=0;c<o.length;c++)a=e._soundById(o[c]),a&&(a._volume=n,t[2]||e._stopFade(o[c]),e._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(n,r.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=n*r.volume()),e._emit("volume",a._id))}else return a=o?e._soundById(o):e._sounds[0],a?a._volume:0;return e},fade:function(e,t,n,o){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"fade",action:function(){l.fade(e,t,n,o)}}),l;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),n=parseFloat(n),l.volume(e,o);for(var s=l._getSoundIds(o),a=0;a<s.length;a++){var c=l._soundById(s[a]);if(c){if(o||l._stopFade(s[a]),l._webAudio&&!c._muted){var v=r.ctx.currentTime,A=v+n/1e3;c._volume=e,c._node.gain.setValueAtTime(e,v),c._node.gain.linearRampToValueAtTime(t,A)}l._startFadeInterval(c,e,t,n,s[a],typeof o>"u")}}return l},_startFadeInterval:function(e,t,n,o,l,s){var a=this,c=t,v=n-t,A=Math.abs(v/.01),k=Math.max(4,A>0?o/A:o),x=Date.now();e._fadeTo=n,e._interval=setInterval(function(){var F=(Date.now()-x)/o;x=Date.now(),c+=v*F,c=Math.round(c*100)/100,v<0?c=Math.max(n,c):c=Math.min(n,c),a._webAudio?e._volume=c:a.volume(c,e._id,!0),s&&(a._volume=c),(n<t&&c<=n||n>t&&c>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,a.volume(n,e._id),a._emit("fade",e._id))},k)},_stopFade:function(e){var t=this,n=t._soundById(e);return n&&n._interval&&(t._webAudio&&n._node.gain.cancelScheduledValues(r.ctx.currentTime),clearInterval(n._interval),n._interval=null,t.volume(n._fadeTo,e),n._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e=this,t=arguments,n,o,l;if(t.length===0)return e._loop;if(t.length===1)if(typeof t[0]=="boolean")n=t[0],e._loop=n;else return l=e._soundById(parseInt(t[0],10)),l?l._loop:!1;else t.length===2&&(n=t[0],o=parseInt(t[1],10));for(var s=e._getSoundIds(o),a=0;a<s.length;a++)l=e._soundById(s[a]),l&&(l._loop=n,e._webAudio&&l._node&&l._node.bufferSource&&(l._node.bufferSource.loop=n,n&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop,e.playing(s[a])&&(e.pause(s[a],!0),e.play(s[a],!0)))));return e},rate:function(){var e=this,t=arguments,n,o;if(t.length===0)o=e._sounds[0]._id;else if(t.length===1){var l=e._getSoundIds(),s=l.indexOf(t[0]);s>=0?o=parseInt(t[0],10):n=parseFloat(t[0])}else t.length===2&&(n=parseFloat(t[0]),o=parseInt(t[1],10));var a;if(typeof n=="number"){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"rate",action:function(){e.rate.apply(e,t)}}),e;typeof o>"u"&&(e._rate=n),o=e._getSoundIds(o);for(var c=0;c<o.length;c++)if(a=e._soundById(o[c]),a){e.playing(o[c])&&(a._rateSeek=e.seek(o[c]),a._playStart=e._webAudio?r.ctx.currentTime:a._playStart),a._rate=n,e._webAudio&&a._node&&a._node.bufferSource?a._node.bufferSource.playbackRate.setValueAtTime(n,r.ctx.currentTime):a._node&&(a._node.playbackRate=n);var v=e.seek(o[c]),A=(e._sprite[a._sprite][0]+e._sprite[a._sprite][1])/1e3-v,k=A*1e3/Math.abs(a._rate);(e._endTimers[o[c]]||!a._paused)&&(e._clearTimer(o[c]),e._endTimers[o[c]]=setTimeout(e._ended.bind(e,a),k)),e._emit("rate",a._id)}}else return a=e._soundById(o),a?a._rate:e._rate;return e},seek:function(){var e=this,t=arguments,n,o;if(t.length===0)e._sounds.length&&(o=e._sounds[0]._id);else if(t.length===1){var l=e._getSoundIds(),s=l.indexOf(t[0]);s>=0?o=parseInt(t[0],10):e._sounds.length&&(o=e._sounds[0]._id,n=parseFloat(t[0]))}else t.length===2&&(n=parseFloat(t[0]),o=parseInt(t[1],10));if(typeof o>"u")return 0;if(typeof n=="number"&&(e._state!=="loaded"||e._playLock))return e._queue.push({event:"seek",action:function(){e.seek.apply(e,t)}}),e;var a=e._soundById(o);if(a)if(typeof n=="number"&&n>=0){var c=e.playing(o);c&&e.pause(o,!0),a._seek=n,a._ended=!1,e._clearTimer(o),!e._webAudio&&a._node&&!isNaN(a._node.duration)&&(a._node.currentTime=n);var v=function(){c&&e.play(o,!0),e._emit("seek",o)};if(c&&!e._webAudio){var A=function(){e._playLock?setTimeout(A,0):v()};setTimeout(A,0)}else v()}else if(e._webAudio){var k=e.playing(o)?r.ctx.currentTime-a._playStart:0,x=a._rateSeek?a._rateSeek-a._seek:0;return a._seek+(x+k*Math.abs(a._rate))}else return a._node.currentTime;return e},playing:function(e){var t=this;if(typeof e=="number"){var n=t._soundById(e);return n?!n._paused:!1}for(var o=0;o<t._sounds.length;o++)if(!t._sounds[o]._paused)return!0;return!1},duration:function(e){var t=this,n=t._duration,o=t._soundById(e);return o&&(n=t._sprite[o._sprite][1]/1e3),n},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,n=0;n<t.length;n++)t[n]._paused||e.stop(t[n]._id),e._webAudio||(e._clearSound(t[n]._node),t[n]._node.removeEventListener("error",t[n]._errorFn,!1),t[n]._node.removeEventListener(r._canPlayEvent,t[n]._loadFn,!1),t[n]._node.removeEventListener("ended",t[n]._endFn,!1),r._releaseHtml5Audio(t[n]._node)),delete t[n]._node,e._clearTimer(t[n]._id);var o=r._howls.indexOf(e);o>=0&&r._howls.splice(o,1);var l=!0;for(n=0;n<r._howls.length;n++)if(r._howls[n]._src===e._src||e._src.indexOf(r._howls[n]._src)>=0){l=!1;break}return p&&l&&delete p[e._src],r.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,o){var l=this,s=l["_on"+e];return typeof t=="function"&&s.push(o?{id:n,fn:t,once:o}:{id:n,fn:t}),l},off:function(e,t,n){var o=this,l=o["_on"+e],s=0;if(typeof t=="number"&&(n=t,t=null),t||n)for(s=0;s<l.length;s++){var a=n===l[s].id;if(t===l[s].fn&&a||!t&&a){l.splice(s,1);break}}else if(e)o["_on"+e]=[];else{var c=Object.keys(o);for(s=0;s<c.length;s++)c[s].indexOf("_on")===0&&Array.isArray(o[c[s]])&&(o[c[s]]=[])}return o},once:function(e,t,n){var o=this;return o.on(e,t,n,1),o},_emit:function(e,t,n){for(var o=this,l=o["_on"+e],s=l.length-1;s>=0;s--)(!l[s].id||l[s].id===t||e==="load")&&(setTimeout((function(a){a.call(this,t,n)}).bind(o,l[s].fn),0),l[s].once&&o.off(e,l[s].fn,l[s].id));return o._loadQueue(e),o},_loadQueue:function(e){var t=this;if(t._queue.length>0){var n=t._queue[0];n.event===e&&(t._queue.shift(),t._loadQueue()),e||n.action()}return t},_ended:function(e){var t=this,n=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var o=!!(e._loop||t._sprite[n][2]);if(t._emit("end",e._id),!t._webAudio&&o&&t.stop(e._id,!0).play(e._id),t._webAudio&&o){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=r.ctx.currentTime;var l=(e._stop-e._start)*1e3/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),l)}return t._webAudio&&!o&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),r._autoSuspend()),!t._webAudio&&!o&&t.stop(e._id,!0),t},_clearTimer:function(e){var t=this;if(t._endTimers[e]){if(typeof t._endTimers[e]!="function")clearTimeout(t._endTimers[e]);else{var n=t._soundById(e);n&&n._node&&n._node.removeEventListener("ended",t._endTimers[e],!1)}delete t._endTimers[e]}return t},_soundById:function(e){for(var t=this,n=0;n<t._sounds.length;n++)if(e===t._sounds[n]._id)return t._sounds[n];return null},_inactiveSound:function(){var e=this;e._drain();for(var t=0;t<e._sounds.length;t++)if(e._sounds[t]._ended)return e._sounds[t].reset();return new i(e)},_drain:function(){var e=this,t=e._pool,n=0,o=0;if(!(e._sounds.length<t)){for(o=0;o<e._sounds.length;o++)e._sounds[o]._ended&&n++;for(o=e._sounds.length-1;o>=0;o--){if(n<=t)return;e._sounds[o]._ended&&(e._webAudio&&e._sounds[o]._node&&e._sounds[o]._node.disconnect(0),e._sounds.splice(o,1),n--)}}},_getSoundIds:function(e){var t=this;if(typeof e>"u"){for(var n=[],o=0;o<t._sounds.length;o++)n.push(t._sounds[o]._id);return n}else return[e]},_refreshBuffer:function(e){var t=this;return e._node.bufferSource=r.ctx.createBufferSource(),e._node.bufferSource.buffer=p[t._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,r.ctx.currentTime),t},_cleanBuffer:function(e){var t=this,n=r._navigator&&r._navigator.vendor.indexOf("Apple")>=0;if(!e.bufferSource)return t;if(r._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),n))try{e.bufferSource.buffer=r._scratchBuffer}catch{}return e.bufferSource=null,t},_clearSound:function(e){var t=/MSIE |Trident\//.test(r._navigator&&r._navigator.userAgent);t||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(e){this._parent=e,this.init()};i.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++r._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,n=r._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=typeof r.ctx.createGain>"u"?r.ctx.createGainNode():r.ctx.createGain(),e._node.gain.setValueAtTime(n,r.ctx.currentTime),e._node.paused=!0,e._node.connect(r.masterGain)):r.noAudio||(e._node=r._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(r._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=t._src,e._node.preload=t._preload===!0?"auto":t._preload,e._node.volume=n*r.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++r._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,t=e._parent;t._duration=Math.ceil(e._node.duration*10)/10,Object.keys(t._sprite).length===0&&(t._sprite={__default:[0,t._duration*1e3]}),t._state!=="loaded"&&(t._state="loaded",t._emit("load"),t._loadQueue()),e._node.removeEventListener(r._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,t=e._parent;t._duration===1/0&&(t._duration=Math.ceil(e._node.duration*10)/10,t._sprite.__default[1]===1/0&&(t._sprite.__default[1]=t._duration*1e3),t._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var p={},f=function(e){var t=e._src;if(p[t]){e._duration=p[t].duration,d(e);return}if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),o=new Uint8Array(n.length),l=0;l<n.length;++l)o[l]=n.charCodeAt(l);_(o.buffer,e)}else{var s=new XMLHttpRequest;s.open(e._xhr.method,t,!0),s.withCredentials=e._xhr.withCredentials,s.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(a){s.setRequestHeader(a,e._xhr.headers[a])}),s.onload=function(){var a=(s.status+"")[0];if(a!=="0"&&a!=="2"&&a!=="3"){e._emit("loaderror",null,"Failed loading audio file with status: "+s.status+".");return}_(s.response,e)},s.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete p[t],e.load())},m(s)}},m=function(e){try{e.send()}catch{e.onerror()}},_=function(e,t){var n=function(){t._emit("loaderror",null,"Decoding audio data failed.")},o=function(l){l&&t._sounds.length>0?(p[t._src]=l,d(t,l)):n()};typeof Promise<"u"&&r.ctx.decodeAudioData.length===1?r.ctx.decodeAudioData(e).then(o).catch(n):r.ctx.decodeAudioData(e,o,n)},d=function(e,t){t&&!e._duration&&(e._duration=t.duration),Object.keys(e._sprite).length===0&&(e._sprite={__default:[0,e._duration*1e3]}),e._state!=="loaded"&&(e._state="loaded",e._emit("load"),e._loadQueue())},w=function(){if(r.usingWebAudio){try{typeof AudioContext<"u"?r.ctx=new AudioContext:typeof webkitAudioContext<"u"?r.ctx=new webkitAudioContext:r.usingWebAudio=!1}catch{r.usingWebAudio=!1}r.ctx||(r.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(r._navigator&&r._navigator.platform),t=r._navigator&&r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),n=t?parseInt(t[1],10):null;if(e&&n&&n<9){var o=/safari/.test(r._navigator&&r._navigator.userAgent.toLowerCase());r._navigator&&!o&&(r.usingWebAudio=!1)}r.usingWebAudio&&(r.masterGain=typeof r.ctx.createGain>"u"?r.ctx.createGainNode():r.ctx.createGain(),r.masterGain.gain.setValueAtTime(r._muted?0:r._volume,r.ctx.currentTime),r.masterGain.connect(r.ctx.destination)),r._setup()}};y.Howler=r,y.Howl=u,typeof Q<"u"?(Q.HowlerGlobal=g,Q.Howler=r,Q.Howl=u,Q.Sound=i):typeof window<"u"&&(window.HowlerGlobal=g,window.Howler=r,window.Howl=u,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(r){var u=this;if(!u.ctx||!u.ctx.listener)return u;for(var i=u._howls.length-1;i>=0;i--)u._howls[i].stereo(r);return u},HowlerGlobal.prototype.pos=function(r,u,i){var p=this;if(!p.ctx||!p.ctx.listener)return p;if(u=typeof u!="number"?p._pos[1]:u,i=typeof i!="number"?p._pos[2]:i,typeof r=="number")p._pos=[r,u,i],typeof p.ctx.listener.positionX<"u"?(p.ctx.listener.positionX.setTargetAtTime(p._pos[0],Howler.ctx.currentTime,.1),p.ctx.listener.positionY.setTargetAtTime(p._pos[1],Howler.ctx.currentTime,.1),p.ctx.listener.positionZ.setTargetAtTime(p._pos[2],Howler.ctx.currentTime,.1)):p.ctx.listener.setPosition(p._pos[0],p._pos[1],p._pos[2]);else return p._pos;return p},HowlerGlobal.prototype.orientation=function(r,u,i,p,f,m){var _=this;if(!_.ctx||!_.ctx.listener)return _;var d=_._orientation;if(u=typeof u!="number"?d[1]:u,i=typeof i!="number"?d[2]:i,p=typeof p!="number"?d[3]:p,f=typeof f!="number"?d[4]:f,m=typeof m!="number"?d[5]:m,typeof r=="number")_._orientation=[r,u,i,p,f,m],typeof _.ctx.listener.forwardX<"u"?(_.ctx.listener.forwardX.setTargetAtTime(r,Howler.ctx.currentTime,.1),_.ctx.listener.forwardY.setTargetAtTime(u,Howler.ctx.currentTime,.1),_.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),_.ctx.listener.upX.setTargetAtTime(p,Howler.ctx.currentTime,.1),_.ctx.listener.upY.setTargetAtTime(f,Howler.ctx.currentTime,.1),_.ctx.listener.upZ.setTargetAtTime(m,Howler.ctx.currentTime,.1)):_.ctx.listener.setOrientation(r,u,i,p,f,m);else return d;return _},Howl.prototype.init=function(r){return function(u){var i=this;return i._orientation=u.orientation||[1,0,0],i._stereo=u.stereo||null,i._pos=u.pos||null,i._pannerAttr={coneInnerAngle:typeof u.coneInnerAngle<"u"?u.coneInnerAngle:360,coneOuterAngle:typeof u.coneOuterAngle<"u"?u.coneOuterAngle:360,coneOuterGain:typeof u.coneOuterGain<"u"?u.coneOuterGain:0,distanceModel:typeof u.distanceModel<"u"?u.distanceModel:"inverse",maxDistance:typeof u.maxDistance<"u"?u.maxDistance:1e4,panningModel:typeof u.panningModel<"u"?u.panningModel:"HRTF",refDistance:typeof u.refDistance<"u"?u.refDistance:1,rolloffFactor:typeof u.rolloffFactor<"u"?u.rolloffFactor:1},i._onstereo=u.onstereo?[{fn:u.onstereo}]:[],i._onpos=u.onpos?[{fn:u.onpos}]:[],i._onorientation=u.onorientation?[{fn:u.onorientation}]:[],r.call(this,u)}}(Howl.prototype.init),Howl.prototype.stereo=function(r,u){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(r,u)}}),i;var p=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof u>"u")if(typeof r=="number")i._stereo=r,i._pos=[r,0,0];else return i._stereo;for(var f=i._getSoundIds(u),m=0;m<f.length;m++){var _=i._soundById(f[m]);if(_)if(typeof r=="number")_._stereo=r,_._pos=[r,0,0],_._node&&(_._pannerAttr.panningModel="equalpower",(!_._panner||!_._panner.pan)&&g(_,p),p==="spatial"?typeof _._panner.positionX<"u"?(_._panner.positionX.setValueAtTime(r,Howler.ctx.currentTime),_._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),_._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):_._panner.setPosition(r,0,0):_._panner.pan.setValueAtTime(r,Howler.ctx.currentTime)),i._emit("stereo",_._id);else return _._stereo}return i},Howl.prototype.pos=function(r,u,i,p){var f=this;if(!f._webAudio)return f;if(f._state!=="loaded")return f._queue.push({event:"pos",action:function(){f.pos(r,u,i,p)}}),f;if(u=typeof u!="number"?0:u,i=typeof i!="number"?-.5:i,typeof p>"u")if(typeof r=="number")f._pos=[r,u,i];else return f._pos;for(var m=f._getSoundIds(p),_=0;_<m.length;_++){var d=f._soundById(m[_]);if(d)if(typeof r=="number")d._pos=[r,u,i],d._node&&((!d._panner||d._panner.pan)&&g(d,"spatial"),typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(r,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(u,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):d._panner.setPosition(r,u,i)),f._emit("pos",d._id);else return d._pos}return f},Howl.prototype.orientation=function(r,u,i,p){var f=this;if(!f._webAudio)return f;if(f._state!=="loaded")return f._queue.push({event:"orientation",action:function(){f.orientation(r,u,i,p)}}),f;if(u=typeof u!="number"?f._orientation[1]:u,i=typeof i!="number"?f._orientation[2]:i,typeof p>"u")if(typeof r=="number")f._orientation=[r,u,i];else return f._orientation;for(var m=f._getSoundIds(p),_=0;_<m.length;_++){var d=f._soundById(m[_]);if(d)if(typeof r=="number")d._orientation=[r,u,i],d._node&&(d._panner||(d._pos||(d._pos=f._pos||[0,0,-.5]),g(d,"spatial")),typeof d._panner.orientationX<"u"?(d._panner.orientationX.setValueAtTime(r,Howler.ctx.currentTime),d._panner.orientationY.setValueAtTime(u,Howler.ctx.currentTime),d._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):d._panner.setOrientation(r,u,i)),f._emit("orientation",d._id);else return d._orientation}return f},Howl.prototype.pannerAttr=function(){var r=this,u=arguments,i,p,f;if(!r._webAudio)return r;if(u.length===0)return r._pannerAttr;if(u.length===1)if(typeof u[0]=="object")i=u[0],typeof p>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),r._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:r._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:r._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:r._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:r._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:r._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:r._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:r._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:r._panningModel});else return f=r._soundById(parseInt(u[0],10)),f?f._pannerAttr:r._pannerAttr;else u.length===2&&(i=u[0],p=parseInt(u[1],10));for(var m=r._getSoundIds(p),_=0;_<m.length;_++)if(f=r._soundById(m[_]),f){var d=f._pannerAttr;d={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:d.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:d.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:d.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:d.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:d.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:d.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:d.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:d.panningModel};var w=f._panner;w||(f._pos||(f._pos=r._pos||[0,0,-.5]),g(f,"spatial"),w=f._panner),w.coneInnerAngle=d.coneInnerAngle,w.coneOuterAngle=d.coneOuterAngle,w.coneOuterGain=d.coneOuterGain,w.distanceModel=d.distanceModel,w.maxDistance=d.maxDistance,w.refDistance=d.refDistance,w.rolloffFactor=d.rolloffFactor,w.panningModel=d.panningModel}return r},Sound.prototype.init=function(r){return function(){var u=this,i=u._parent;u._orientation=i._orientation,u._stereo=i._stereo,u._pos=i._pos,u._pannerAttr=i._pannerAttr,r.call(this),u._stereo?i.stereo(u._stereo):u._pos&&i.pos(u._pos[0],u._pos[1],u._pos[2],u._id)}}(Sound.prototype.init),Sound.prototype.reset=function(r){return function(){var u=this,i=u._parent;return u._orientation=i._orientation,u._stereo=i._stereo,u._pos=i._pos,u._pannerAttr=i._pannerAttr,u._stereo?i.stereo(u._stereo):u._pos?i.pos(u._pos[0],u._pos[1],u._pos[2],u._id):u._panner&&(u._panner.disconnect(0),u._panner=void 0,i._refreshBuffer(u)),r.call(this)}}(Sound.prototype.reset);var g=function(r,u){u=u||"spatial",u==="spatial"?(r._panner=Howler.ctx.createPanner(),r._panner.coneInnerAngle=r._pannerAttr.coneInnerAngle,r._panner.coneOuterAngle=r._pannerAttr.coneOuterAngle,r._panner.coneOuterGain=r._pannerAttr.coneOuterGain,r._panner.distanceModel=r._pannerAttr.distanceModel,r._panner.maxDistance=r._pannerAttr.maxDistance,r._panner.refDistance=r._pannerAttr.refDistance,r._panner.rolloffFactor=r._pannerAttr.rolloffFactor,r._panner.panningModel=r._pannerAttr.panningModel,typeof r._panner.positionX<"u"?(r._panner.positionX.setValueAtTime(r._pos[0],Howler.ctx.currentTime),r._panner.positionY.setValueAtTime(r._pos[1],Howler.ctx.currentTime),r._panner.positionZ.setValueAtTime(r._pos[2],Howler.ctx.currentTime)):r._panner.setPosition(r._pos[0],r._pos[1],r._pos[2]),typeof r._panner.orientationX<"u"?(r._panner.orientationX.setValueAtTime(r._orientation[0],Howler.ctx.currentTime),r._panner.orientationY.setValueAtTime(r._orientation[1],Howler.ctx.currentTime),r._panner.orientationZ.setValueAtTime(r._orientation[2],Howler.ctx.currentTime)):r._panner.setOrientation(r._orientation[0],r._orientation[1],r._orientation[2])):(r._panner=Howler.ctx.createStereoPanner(),r._panner.pan.setValueAtTime(r._stereo,Howler.ctx.currentTime)),r._panner.connect(r._node),r._paused||r._parent.pause(r._id,!0).play(r._id,!0)}})()})(re);function de(y){let g,r,u=y[0].post.title+"",i,p,f,m,_,d=y[0].post.content+"",w,e,t,n=y[1]?"Pause":"Play",o,l,s,a,c,v=y[5]._muted?"Unmute":"Mute",A,k,x,F,G,h,L=(y[4]/60>=1?`${Math.floor(y[4]/60)}:${y[4]%60<10?"0":""}${(y[4]%60).toFixed(0)}`:y[4].toFixed(0))+"",V,N,E=(y[3]/60>=1?`${Math.floor(y[3]/60)}:${y[3]%60<10?"0":""}${(y[3]%60).toFixed(0)}`:y[3].toFixed(0))+"",P,W,K;return{c(){g=H("section"),r=H("h1"),i=C(u),p=R(),f=H("div"),m=H("div"),_=new se(!1),w=R(),e=H("div"),t=H("button"),o=C(n),l=R(),s=H("input"),a=R(),c=H("button"),A=C(v),k=R(),x=H("input"),G=R(),h=H("span"),V=C(L),N=C(" / "),P=C(E),this.h()},l(b){g=M(b,"SECTION",{class:!0});var S=D(g);r=M(S,"H1",{class:!0});var J=D(r);i=X(J,u),J.forEach(B),p=q(S),f=M(S,"DIV",{class:!0});var U=D(f);m=M(U,"DIV",{class:!0});var Y=D(m);_=_e(Y,!1),w=q(Y),e=M(Y,"DIV",{});var O=D(e);t=M(O,"BUTTON",{});var z=D(t);o=X(z,n),z.forEach(B),l=q(O),s=M(O,"INPUT",{type:!0,min:!0,max:!0,step:!0}),a=q(O),c=M(O,"BUTTON",{});var ee=D(c);A=X(ee,v),ee.forEach(B),k=q(O),x=M(O,"INPUT",{type:!0,min:!0,max:!0,step:!0}),G=q(O),h=M(O,"SPAN",{});var Z=D(h);V=X(Z,L),N=X(Z," / "),P=X(Z,E),Z.forEach(B),O.forEach(B),Y.forEach(B),U.forEach(B),S.forEach(B),this.h()},h(){I(r,"class","initial__title"),_.a=w,I(s,"type","range"),I(s,"min","0"),I(s,"max","1"),I(s,"step","0.01"),s.value=y[2],I(x,"type","range"),I(x,"min","0"),I(x,"max","1"),I(x,"step","0.01"),x.value=F=y[4]/y[3],I(m,"class","initial__box"),I(f,"class","initial__about"),I(g,"class","initial")},m(b,S){fe(b,g,S),T(g,r),T(r,i),T(g,p),T(g,f),T(f,m),_.m(d,m),T(m,w),T(m,e),T(e,t),T(t,o),T(e,l),T(e,s),T(e,a),T(e,c),T(c,A),T(e,k),T(e,x),T(e,G),T(e,h),T(h,V),T(h,N),T(h,P),W||(K=[$(t,"click",y[6]),$(s,"input",y[7]),$(c,"click",y[8]),$(x,"input",y[9])],W=!0)},p(b,[S]){S&1&&u!==(u=b[0].post.title+"")&&j(i,u),S&1&&d!==(d=b[0].post.content+"")&&_.p(d),S&2&&n!==(n=b[1]?"Pause":"Play")&&j(o,n),S&4&&(s.value=b[2]),S&24&&F!==(F=b[4]/b[3])&&(x.value=F),S&16&&L!==(L=(b[4]/60>=1?`${Math.floor(b[4]/60)}:${b[4]%60<10?"0":""}${(b[4]%60).toFixed(0)}`:b[4].toFixed(0))+"")&&j(V,L),S&8&&E!==(E=(b[3]/60>=1?`${Math.floor(b[3]/60)}:${b[3]%60<10?"0":""}${(b[3]%60).toFixed(0)}`:b[3].toFixed(0))+"")&&j(P,E)},i:te,o:te,d(b){b&&B(g),W=!1,ae(K)}}}function ce(y,g,r){let{data:u}=g,i=!1,p=.5,f=0,m=0;const _=new re.Howl({src:[u.post.link],html5:!0,volume:p,onplay:()=>{r(1,i=!0);const n=setInterval(()=>{r(4,m=_.seek()+.01)},1e3);ne(()=>{clearInterval(n)})},onpause:()=>{r(1,i=!1),r(4,m=_.seek())},onend:()=>{r(1,i=!1),r(4,m=_.seek())},onseek:()=>{r(4,m=_.seek())},onload:()=>{r(3,f=_.duration())}});_.on("play",()=>{const n=()=>{r(4,m=_.updateCurrentTime())};_.on("play",n),_.on("seek",n),_.on("stop",n)});function d(){i?_.pause():_.play()}function w(n){r(2,p=parseFloat(n.target.value)),_.volume(p)}function e(){_.mute(!_._muted)}function t(n){const o=parseFloat(n.target.value)*f;_.seek(o)}return ie(()=>{r(3,f=_.duration())}),ne(()=>{_.unload()}),y.$$set=n=>{"data"in n&&r(0,u=n.data)},[u,i,p,f,m,_,d,w,e,t]}class ve extends ue{constructor(g){super(),le(this,g,ce,de,oe,{data:0})}}export{ve as component};