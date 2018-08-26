	function $(x){
		return document.querySelector(x);
	}

	function create(el){
		return document.createElement(el);
	}

	function node(str){
		return document.createTextNode(str);
	} 

	function make_modal(isrc){
		var main = create('div')
		main.classList.add('modal')
		main.setAttribute('id','leaveModal')

		var content = create('div')
		content.classList.add('modal-content')

		var head = create('div')
		head.classList.add('modal-header')

		var span = create('span')
		span.classList.add('close')

		var body = create('div')
		body.classList.add('modal-body')

		body.innerHTML += '<img class="modal-image" src="'+isrc+'" alt="Offer Image"/>'
	}

	function open_modal(){
		modal.style.display = "block" 
		mcookie('modal','opened',1)
	}

	function close_modal(){
		modal.style.display = "none" 
	}
	
	var modal = document.querySelector('#leaveModal')
	var span = document.querySelector('.close')
	span.addEventListener("click",function(){
		close_modal()
	})

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
