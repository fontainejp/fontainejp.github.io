function loadBF(file) {
	$.get(file, function(data){ 
		if (data) {
			var xml = Blockly.Xml.textToDom(data)
			mainWorkspace.clear()
			Blockly.Xml.domToWorkspace(xml, mainWorkspace)
			mainWorkspace.render()
			var elem = xml.getElementsByTagName("language")[0]
			var node = elem.childNodes[0]
			localStorage.setItem("code_bf", node.nodeValue)
		}
	}, 'text')
}

window.addEventListener('load', function load(event){
	$('#btn_games').on("click", function() {
		window.open("games/index.html","_blank", null);
	})
	$('#btn_html').on("click", function() {
		window.open("ffau.html","_blank", null);
	})
	$('#btn_redo').on('click', function(){
		mainWorkspace.undo(1)
	})
	$('#btn_undo').on('click', function(){
		mainWorkspace.undo(0)
	})
	$('#btn_print').on('click', function(){
		var ws = mainWorkspace.svgBlockCanvas_.cloneNode(true);
		ws.removeAttribute("width");
		ws.removeAttribute("height");
		ws.removeAttribute("transform");
		var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
		styleElem.textContent = Blockly.Css.CONTENT.join('') ;
		ws.insertBefore(styleElem, ws.firstChild);
		var bbox = mainWorkspace.svgBlockCanvas_.getBBox();
		var canvas = document.createElement( "canvas" );
		canvas.width = Math.ceil(bbox.width+10);
		canvas.height = Math.ceil(bbox.height+10);
		var ctx = canvas.getContext( "2d" );
		ctx.fillStyle = 'rgb(255, 255, 255)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		var xml = new XMLSerializer().serializeToString(ws);
		xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="' + bbox.x + ' ' + bbox.y + ' '  + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
		var img = new Image();
		var code = btoa(unescape(encodeURIComponent(xml)));
		img.setAttribute( "src", 'data:image/svg+xml;base64,' + code);
		img.onload = function() {
			ctx.drawImage( img, 5, 5 );
			var canvasdata = canvas.toDataURL("image/png",1);
			var datenow = Date.now();
			var a = document.createElement("a");
			a.download = "capture"+datenow+".png";
			a.href = canvasdata;
			document.body.appendChild(a);
			a.click();
		}	
	})
	$('#btn_save').on('click', function(){
		var xml = Blockly.Xml.workspaceToDom(mainWorkspace)
		var new_element = document.createElement("language")
		new_element.appendChild(document.createTextNode(editor.getValue()))
		xml.insertBefore(new_element, xml.childNodes[0])
		var code = Blockly.Xml.domToPrettyText(xml)
		var datenow = Date.now()
		var filename = "block"+datenow+".bf"
		var element = document.createElement('a')
		element.setAttribute('href', 'data:text/bf;charset=utf-8,' + encodeURIComponent(code))
		element.setAttribute('download', filename)
		element.style.display = 'none'
		document.body.appendChild(element)
		element.click()
		document.body.removeChild(element)
	})
	$('#btn_new').on('click', function(){
		mainWorkspace.clear()
		var rootBlock = mainWorkspace.newBlock('factory_base')
		rootBlock.initSvg()
		rootBlock.render()
		rootBlock.setMovable(false)
		rootBlock.setDeletable(false)
	})
	$('#btn_open').on('click', function(){
		$('#load').click()
	})
	$('#load').on("change", function(event) {
		var files = event.target.files
		if (files.length != 1) return
		var reader = new FileReader()
		reader.onloadend = function(event) {
			var target = event.target
			if (target.readyState == 2) {
				try {
					var xml = Blockly.Xml.textToDom(target.result)
				} catch (e) {
					alert(MSG['xmlError']+'\n' + e)
					return
				}
				mainWorkspace.clear()
				Blockly.Xml.domToWorkspace(xml,mainWorkspace)
				mainWorkspace.render()
				var elem = xml.getElementsByTagName("language")[0]
				var node = elem.childNodes[0]
				localStorage.setItem("code_bf", node.nodeValue)
			}
		}
		reader.readAsText(files[0])
	})
	$('#lien1').on('click', function(){
		loadBF("./examples/factory/model1.bf")
		$("#exampleModal").modal("hide")
	})
	$('#lien2').on('click', function(){
		loadBF("./examples/factory/model2.bf")
		$("#exampleModal").modal("hide")
	})
	$('#lien3').on('click', function(){
		loadBF("./examples/factory/model3.bf")
		$("#exampleModal").modal("hide")
	})
	$('#lien4').on('click', function(){
		loadBF("./examples/factory/model4.bf")
		$("#exampleModal").modal("hide")
	})
	$('#btn_open_code').on('click', function(){
		var code = localStorage.getItem("code_bf")
		editor.setValue(code,1)
	})
})