function make_modal(isrc){
		var pop = document.createElement('div');
		pop.setAttribute('id','popup');
		pop.classList.add('modal');

		var con = document.createElement('div');
		con.classList.add('modal-content');

		var head = document.createElement('div');
		head.classList.add('modal-header');

		var body = document.createElement('div');
		body.classList.add('modal-body');

		var span = document.createElement('span');
		span.classList.add('close');
		span.innerHTML = "&times;";

		head.appendChild(span);
		body.innerHTML = '<img src="'+isrc+'"/>';

		con.appendChild(head)
		con.appendChild(body)

		pop.appendChild(con)

		$('body').appendChild(pop)
	}
make_modal('index.jpg')

var modal = document.getElementById('popup'); 
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
function $(x){
	return document.querySelector(x);
}

function create(el){
	return document.createElement(el);
}

function node(str){
	return document.createTextNode(str);
} 

function open_modal(){ 
		modal.style.display = "block" 
		mcookie('modal','opened',1)
}

function close_modal(){
		modal.style.display = "none" 
} 

	window.addEventListener("click",function(evt){
		if(evt.target == modal){
			close_modal()
		} 
	})

	function addEvent(obj,evt,fn){
 		if(obj.addEventListener){
 			obj.addEventListener(evt,fn,false)
 		}else if(obj.attachEvent){
 			obj.attachEvent("on"+evt,fn)
 		}
 	}

 	addEvent(document,"mouseout",function(e){
 		e = e ? e:window.event

 		var from = e.relatedTarget || e.toElement

 		if(!from || from.nodeName == 'HTML'){
 			if(rcookie('modal') == null){
 				open_modal() 
 			}
 		}
 	})

 	addEvent(document,"mouseenter",function(e){
 		e = e ? e:window.event

 		var from = e.relatedTarget || e.toElement

 		if(!from || from.nodeName == 'HTML'){
 			close_modal()
 		}
 	})

 	function mcookie(name,val,exp){
 		if(exp){
 			var date = new Date()
 			date.setTime(date.getTime() + (exp*24*60*60*1000))
 			var expires = "; expires="+ date.toGMTString()
 		}else{
 			var expires = ""
 		}

 		document.cookie = name + "=" + val + expires +"; path = /"
 	}
	
	function rcookie(name){
		var nameEQ = name + "="
		var ca = document.cookie.split(';')
		for(var i=0; i<ca.length;i++){
			var c = ca[i]
			while(c.charAt(0) == ' '){
				c = c.substring(1,c.length)
			}
			if(c.indexOf(nameEQ) == 0){
				return c.substring(nameEQ.length,c.length)
			}
		}
		return null
	}

	function ercookie(){
		mcookie(name,"",-1)
	}
