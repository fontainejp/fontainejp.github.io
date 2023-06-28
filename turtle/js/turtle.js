var urlFile = getStringParamFromUrl('url', '')

function getStringParamFromUrl(name, defaultValue){
	var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'))
	return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue
}
function update(){
	document.getElementById('sortieJS').value = Blockly.JavaScript.workspaceToCode(workspace)
}
function loadTurtle(file){
	var xml = Blockly.Xml.textToDom(file)
	workspace.clear()
	Blockly.Xml.domToWorkspace(xml, workspace)
	workspace.render()
}

window.addEventListener('load', function load(event){
	Neutralino.init()
	$('[rel="tooltip"]').tooltip({trigger: "hover"})
	$('[data-toggle="tooltip"]').tooltip()
	workspace = Blockly.inject('blocklyDiv',{
		sounds:false,
		media: 'media/',
		toolbox: document.getElementById('toolbox'),
		zoom: {controls: true}
	})
	workspace.addChangeListener(update)
	if (urlFile){
		var file = urlFile.split("\\")
		var id = file.length - 1 
		$('#span_file').text(" - " + file[id])
		if (urlFile.endsWith("ttl")){
			$.get( urlFile, function(data){
				if (data) loadTurtle(data)
			}, 'text')
		}
	}
	$('#btn_redo').on('click', function(){
		workspace.undo(1)
	})
	$('#btn_undo').on('click', function(){
		workspace.undo(0)
	})
	$('#btn_print').on('click', function(){
		var code = $('#leSVG').prop('outerHTML')
		Neutralino.os.showSaveDialog('Enregistrer', {
			defaultPath: "capture",
			filters: [{name: 'Fichier SVG', extensions: ['svg']}]
		}).then((result) => {
			Neutralino.filesystem.writeFile(result+".svg", code)			
		})
	})
	$('#btn_save').on('click', function(){
		var code = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace))
		Neutralino.os.showSaveDialog('Enregistrer', {
			defaultPath: "turtle",
			filters: [{name: 'Fichier TTL', extensions: ['ttl']}]
		}).then((result) => {
			Neutralino.filesystem.writeFile(result+".ttl", code)
			var tab = result.split("\/")
			Neutralino.window.setTitle(NL_APPID + ' - ' + tab[tab.length - 1])
		})
	})
	$('#btn_new').on('click', function(){
		if (window.confirm(Blockly.Msg.discard)) workspace.clear()
		Neutralino.window.setTitle(NL_APPID)
		eval("effaceDessin();toto=1;totos[toto].t=0;totos[toto].teleport(320,320);")
	})
	$('#btn_open').on('click', function(){
		$('#loadText').click()
	})
	$('#loadText').on('change', function(event){
		var files = event.target.files;
		if (files.length !=1) return;
		var fileReader = new FileReader()
		fileReader.onloadend = function(event) {
			var target = event.target
			if (target.readyState == 2) loadTurtle(target.result)
		}
		fileReader.readAsText(files[0])
		var name = files[0].name.split("\.")
		Neutralino.window.setTitle(NL_APPID + ' - ' + name[0])
	})
	$('#lien_carre').on('click', function(){
		if (window.confirm(Blockly.Msg['discard'])) 
			$.get("./examples/carre.ttl", function(data) { 
				if (data) loadTurtle(data)
			}, 'text')
		Neutralino.window.setTitle(NL_APPID + ' - carre')
	})
	$('#lien_etoile5').on('click', function(){
		if (window.confirm(Blockly.Msg['discard'])) 
			$.get("./examples/etoile5.ttl", function(data) { 
				if (data) loadTurtle(data)
			}, 'text')
		Neutralino.window.setTitle(NL_APPID + ' - etoile5')
	})
	$('#lien_maison').on('click', function(){
		if (window.confirm(Blockly.Msg['discard'])) 
			$.get("./examples/maison.ttl", function(data) { 
				if (data) loadTurtle(data)
			}, 'text')
		Neutralino.window.setTitle(NL_APPID + ' - maison')
	})
	$('#btn_exe').on("click", function(){
		try {
			eval($("#sortieJS").val())
		} catch (e) {
			$('#message_body').append(e)
			$('#message').modal('show')
		}
	})
	$('#message').on('hidden.bs.modal', function(event) {
		$("#message_body").empty()
	})
})