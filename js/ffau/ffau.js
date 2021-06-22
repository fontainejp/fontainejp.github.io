var ffau = new Ffau()
function initFFAU() {
	ffau.ffauWorkspace.clear()
	var rootBlock = ffau.ffauWorkspace.newBlock('html')
	rootBlock.initSvg()
	rootBlock.render()
	rootBlock.setDeletable(false)
}

window.addEventListener('load', function load(event) {
	window.localStorage.contentHTML = "on" 
	$('#btn_search').addClass("hidden")
	ffau.renderBlockly(document.getElementById('blocklyDiv'),document.getElementById('toolbox'))
	ffau.addEvent()
	initFFAU()
	$('#btn_redo').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.redo()
		} else {
			editor.redo()
		}
	})
	$('#btn_undo').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.undo()
		} else {
			editor.undo()
		}
	})
	$('#btn_print').on('click', function(){
		ffau.workspace_capture()
	})
	$('#btn_save').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.downloadXML()
		} else {
			ffau.downloadHTML()
		}
	})
	$('#btn_new').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.clearWorkspace()
			initFFAU()
		} else {
			editor.setValue('<!DOCTYPE HTML>\n<html lang="fr">\n<head>\n<meta charset="utf-8">\n</head>\n<body>\n\n</body>\n</html>',1)
		}
	})	
	$('#btn_search').on('click', function(){
		editor.execCommand("find")
	})
	$('#btn_factory').on('click', function(){
		window.open("factory.html","_blank", null)
	})
	$('#btn_games').on('click', function(){
		window.open("games/index.html","_blank", null)
	})
	$('#btn_open').on('click', function(){
		$('#loadText').click()
	})
	$('#loadText').on('change', function(){
		var input = document.getElementById('loadText')
		var fileReader = new FileReader()
		if (window.localStorage.contentHTML=="on") {
			fileReader.onload = () => {
				ffau.setXML(fileReader.result)
				input.value = null
			}
		} else {
			fileReader.onload = () => {
				editor.setValue(fileReader.result,1)
				input.value = null
			}
		}
		fileReader.readAsText(input.files[0])
	})
	$('#lien1').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.clearWorkspace()
			$.get("./examples/html/hello.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/html/hello.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien2').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.clearWorkspace()
			$.get("./examples/html/ia.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/html/ia.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien3').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.clearWorkspace()
			$.get("./examples/html/gafam.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/html/gafam.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien4').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.clearWorkspace()
			$.get("./examples/html/zen.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/html/zen.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien5').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.clearWorkspace()
			$.get("./examples/html/complexe.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/html/complexe.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#codeORblock').on("change", function() {
		var data = document.getElementById('blockly_r').srcdoc
		if (window.localStorage.contentHTML=="on") {
			editor.setValue(data,1)
			$('a[href="#content_code"]').tab('show')
			$('#btn_print').addClass("hidden")
			$('#btn_search').removeClass("hidden")
			window.localStorage.contentHTML="off"
		} else {
			$('a[href="#blocklyDiv"]').tab('show')
			$('#btn_print').removeClass("hidden")
			$('#btn_search').addClass("hidden")
			window.localStorage.contentHTML="on"
		}
	})
})