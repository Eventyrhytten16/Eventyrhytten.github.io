var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){ //check support for HTML5 audio
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.play()
		}
		html5audio.pauseclip=function(){
			//html5audio.pause()
		}
		return html5audio
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
	}
}

var karloff=createsoundbite("audio/Karloff.mp3");
var obeydix=createsoundbite("audio/Obeydix.mp3");
var ulla=createsoundbite("audio/Ulla.mp3");
var wanta=createsoundbite("audio/Want_A_Woman.mp3");
var phree=createsoundbite("audio/Phree.mp3");
var sheblows=createsoundbite("audio/Sheblows.mp3");
var aichen=createsoundbite("audio/Aychen.mp3");
var lolita=createsoundbite("audio/LOLita.mp3");
var lusty=createsoundbite("audio/Lustyfor.mp3");
var darwin=createsoundbite("audio/Darwin_Dick.mp3");
var powerpuff=createsoundbite("audio/Powerpuff.mp3");