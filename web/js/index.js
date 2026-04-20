var ffau = new Ffau()
var theme = "light"

document.addEventListener('DOMContentLoaded', () => {
	ffau.renderBlockly(document.getElementById('blocklyDiv'),document.getElementById('toolbox'))
	ffau.addEvent()
	ffau.ffauWorkspace.clear()
	ffau.ffauWorkspace.render()
	document.querySelector('#btn_copy').addEventListener("click", function() {
		navigator.clipboard.writeText(Blockly.html.workspaceToCode(ffau.ffauWorkspace))
		document.querySelector('.modal').classList.remove('is-active')
	})
	document.querySelector('#btn_redo').addEventListener('click', function(){
		ffau.redo()
	})
	document.querySelector('#btn_undo').addEventListener('click', function(){
		ffau.undo()
	})
	document.querySelector('#btn_save').addEventListener('click', function(){
		ffau.downloadXML()
	})
	document.querySelector('#btn_saveHTML').addEventListener('click', function(){
		ffau.downloadHTML()
		document.querySelector('.modal').classList.remove('is-active')
	})
	document.querySelector('#btn_new').addEventListener('click', function(){
		ffau.ffauWorkspace.clear()
		ffau.ffauWorkspace.render()
	})	
	document.querySelector('#btn_open').addEventListener('click', function(){
		document.querySelector('#loadText').click()
	})
	document.querySelector('#loadText').addEventListener('change', function(){
		var input = document.getElementById('loadText')
		var fileReader = new FileReader()
		fileReader.onload = () => {
			ffau.setXML(fileReader.result)
			input.value = null
		}
		fileReader.readAsText(input.files[0])
	})
	document.querySelector('#lien1').addEventListener('click', function(){
		ffau.clearWorkspace()
		fetch("examples/hello.www")
			.then(response => response.text())
			.then(data => { 
				if (data) {
					var xml = Blockly.utils.xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			})
			.catch( error => { 
				console.log(error)
		  })
	})
	document.querySelector('#lien2').addEventListener('click', function(){
		ffau.clearWorkspace()
		fetch("examples/ia.www")
			.then(response => response.text())
			.then(data => { 
				if (data) {
					var xml = Blockly.utils.xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			})
			.catch( error => { 
				console.log(error)
		  })
	})
	document.querySelector('#lien3').addEventListener('click', function(){
		ffau.clearWorkspace()
		fetch("examples/gafam.www")
			.then(response => response.text())
			.then(data => { 
				if (data) {
					var xml = Blockly.utils.xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			})
			.catch( error => { 
				console.log(error)
		  })
	})
	document.querySelector('#lien4').addEventListener('click', function(){
		ffau.clearWorkspace()
		fetch("examples/zen.www")
			.then(response => response.text())
			.then(data => { 
				if (data) {
					var xml = Blockly.utils.xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			})
			.catch( error => { 
				console.log(error)
		  })
	})
	document.querySelector('#lien5').addEventListener('click', function(){
		ffau.clearWorkspace()
		fetch("examples/complexe.www")
			.then(response => response.text())
			.then(data => { 
				if (data) {
					var xml = Blockly.utils.xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			})
			.catch( error => { 
				console.log(error)
		  })
	})
	document.querySelector('#btn_media1').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('audios')
		rootBlock.setFieldValue("acqua.mp3", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media2').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("allume.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media3').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('video_file')
		rootBlock.setFieldValue("aube.mp4", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media4').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("beige.gif", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media5').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("college.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media6').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("earth.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media7').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("eteint.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media8').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("neuronne.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media9').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("ordinateur.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media10').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("portable.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	document.querySelector('#btn_media11').addEventListener('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("zen.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
})