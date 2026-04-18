var ffau = new Ffau()

window.addEventListener('load', function load(event) {
	ffau.renderBlockly(document.getElementById('blocklyDiv'),document.getElementById('toolbox'))
	ffau.addEvent()
	ffau.ffauWorkspace.clear()
	ffau.ffauWorkspace.render()
	$('#btn_preview').on("click", function() {
		$("#toggle").toggle("slide")
	})
	$('#btn_copy').on("click", function() {
		var range = document.createRange();  
		range.selectNode(document.getElementById('code_html'));  
		window.getSelection().addRange(range);
		document.execCommand("copy")
	})
	$('#btn_redo').on('click', function(){
		ffau.redo()
	})
	$('#btn_undo').on('click', function(){
		ffau.undo()
	})
	$('#btn_save').on('click', function(){
		ffau.downloadXML()
	})
	$('#btn_saveHTML').on('click', function(){
		ffau.downloadHTML()
	})
	$('#btn_new').on('click', function(){
		ffau.ffauWorkspace.clear()
		ffau.ffauWorkspace.render()
	})	
	$('#btn_open').on('click', function(){
		$('#loadText').click()
	})
	$('#loadText').on('change', function(){
		var input = document.getElementById('loadText')
		var fileReader = new FileReader()
		fileReader.onload = () => {
			ffau.setXML(fileReader.result)
			input.value = null
		}
		fileReader.readAsText(input.files[0])
	})
	$('#lien1').on('click', function(){
		ffau.clearWorkspace()
		$.get("../examples/html/hello.www", function(data) { 
			if (data) {
				var xml = Blockly.Xml.textToDom(data);
				Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
			}
		}, 'text')
	})
	$('#lien2').on('click', function(){
		ffau.clearWorkspace()
		$.get("../examples/html/ia.www", function(data) { 
			if (data) {
				var xml = Blockly.Xml.textToDom(data);
				Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
			}
		}, 'text')
	})
	$('#lien3').on('click', function(){
		ffau.clearWorkspace()
		$.get("../examples/html/gafam.www", function(data) { 
			if (data) {
				var xml = Blockly.Xml.textToDom(data);
				Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
			}
		}, 'text')
	})
	$('#lien4').on('click', function(){
		ffau.clearWorkspace()
		$.get("../examples/html/zen.www", function(data) { 
			if (data) {
				var xml = Blockly.Xml.textToDom(data);
				Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
			}
		}, 'text')
	})
	$('#lien5').on('click', function(){
		ffau.clearWorkspace()
		$.get("../examples/html/complexe.www", function(data) { 
			if (data) {
				var xml = Blockly.Xml.textToDom(data);
				Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
			}
		}, 'text')
	})
	$('#btn_media1').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('audios')
		rootBlock.setFieldValue("acqua.mp3", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media2').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("allume.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media3').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('video_file')
		rootBlock.setFieldValue("aube.mp4", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media4').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("beige.gif", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media5').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("college.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media6').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("earth.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media7').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("eteint.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media8').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("neuronne.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media9').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("ordinateur.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media10').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("portable.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media11').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("zen.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
})
