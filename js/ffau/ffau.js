var ffau = new Ffau()

window.addEventListener('load', function load(event) {
	window.localStorage.contentHTML = "on" 
	$('#btn_search').addClass("hidden")
	ffau.renderBlockly(document.getElementById('blocklyDiv'),document.getElementById('toolbox'))
	ffau.addEvent()
	/*var messageDiv = document.getElementById('messageDIV')
	var quitDiv = '<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
	function ftp_ok() {
		$("#configHTMLModal").modal("hide")
	}
	function ftp_put() {
		messageDiv.style.color = '#009000'
		messageDiv.innerHTML = 'Téléchargement : OK ' + quitDiv
	}
	$('#btn_valid_config_ffau').on('click', function(){
		localStorage.setItem('host',$('#inputHost').val())
		localStorage.setItem('portFtp',$('#inputPort').val())
		localStorage.setItem('id',$('#inputId').val())
		localStorage.setItem('pwd',$('#inputPwd').val())
		ftp_connect.innerHTML = 'accès au serveur <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		Ftp.auth(localStorage.getItem('id'), localStorage.getItem('pwd'), function (err) {
			if (err) {
				ftp_connect.innerHTML = '<i class="fa fa-chain-broken fa-1_5x" style="color: red"></i> déconnecté'
				return console.log(err)
			}
			ftp_connect.innerHTML = '<i class="fa fa-link fa-1_5x" style="color: green"></i> connecté<br>'+Ftp.features
			setTimeout(ftp_ok, 3000)
		})	
	})
	$('#btn_ftp').on('click', function(){
		$("#message").modal("show")
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = 'Téléchargement <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		var data = '<!DOCTYPE HTML>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <title> </title>\n    <link rel="stylesheet" href="css/bootstrap.min.3.3.6.css">\n    <link rel="stylesheet" href="css/fontawesome.css">\n  </head>\n  <body>\n'+document.getElementById('blockly_r').innerHTML+'  </body>\n</html>'
		fs.writeFile('./compilation/html/page.html', data, function(err){
			if (err) return console.log(err)
			Ftp.auth(localStorage.getItem('id'), localStorage.getItem('pwd'), function (err) {
				if (err) {
					messageDiv.style.color = '#ff0000'
					messageDiv.innerHTML = err.toString() + quitDiv
				}
				console.log(Ftp.features)
				messageDiv.style.color = '#000000'
				messageDiv.innerHTML = 'Connecté<br>Téléchargement <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
				Ftp.put('./compilation/html/page.html', "page.html", function(err){
					if (err) return console.log(err)
					ftp_put()
				})
			})
		})
	})*/
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
			$.get("./examples/hello.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/hello.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien2').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.clearWorkspace()
			$.get("./examples/simple.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/simple.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien3').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.clearWorkspace()
			$.get("./examples/complexe.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/complexe.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien4').on('click', function(){
		if (window.localStorage.contentHTML=="on") {
			ffau.clearWorkspace()
			$.get("./examples/bootstrap.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/bootstrap.html", function(data) { 
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
			document.getElementById('blockly_r').style.borderLeft = "0px"
			window.localStorage.contentHTML="off"
		} else {
			$('a[href="#blocklyDiv"]').tab('show')
			$('#btn_print').removeClass("hidden")
			$('#btn_search').addClass("hidden")
			document.getElementById('blockly_r').style.borderLeft = "gray 1px solid"
			window.localStorage.contentHTML="on"
		}
	})
})