'use strict';

var BlocklyDuino = {};
BlocklyDuino.selectedToolbox = "toolbox_arduino_all";
BlocklyDuino.selectedCard = "uno";
BlocklyDuino.content = "on";
BlocklyDuino.contentHTML = "on";
BlocklyDuino.theme = "sqlserver";
BlocklyDuino.size = "14px";
BlocklyDuino.workspace = null;
BlocklyDuino.prog_ino = "// C-C++\n\nvoid setup() {\n\n}\nvoid loop() {\n\n}";
BlocklyDuino.prog_py = "# Python\n\nwhile True:\n  \n";

BlocklyDuino.init = function() {
	Code.initLanguage();
	BlocklyDuino.loadConfig();
	BlocklyDuino.workspace = Blockly.inject('content_blocks',{grid:{snap:true},sounds:false,media:'media/',toolbox:BlocklyDuino.buildToolbox(),zoom:{controls:true,wheel:true}});
	var bTD = document.getElementsByClassName('blocklyToolboxDiv');
	if ($("#toolboxes").val()=="toolbox_fresnel_all") {
		bTD[0].style.width = "290px"
	} else {
		bTD[0].style.width = "160px"
	}
	BlocklyDuino.bindFunctions();
	BlocklyDuino.workspace.render();
	BlocklyDuino.workspace.addChangeListener(BlocklyDuino.renderArduinoCodePreview);
	BlocklyDuino.loadFile();
	$('[data-toggle="tooltip"]').tooltip();
	window.addEventListener('unload', BlocklyDuino.backupBlocks, false)
};
BlocklyDuino.loadFile = function () {
	var urlFile = BlocklyDuino.getStringParamFromUrl('url', '');
	if (window.localStorage.content=="off") {
		if (window.localStorage.prog == "arduino") {
			$.get(urlFile + ".ino", function(data) { 
				editor.session.setMode("ace/mode/c_cpp");
				editor.setValue(data,1)
			}, 'text')
		} else {
			$.get(urlFile + ".py", function(data) { 
				editor.session.setMode("ace/mode/python");
				editor.setValue(data,1)
			}, 'text')
		}
	}
	if (urlFile.endsWith(".py")) {
		$.get(urlFile, function(data) { 
			$('#codeORblock').bootstrapToggle("off");
			$('a[href="#content_code"]').tab('show');
			$('#btn_print').addClass("hidden");
			$('#btn_preview').addClass("hidden");
			$('#btn_search').removeClass("hidden");
			window.localStorage.content="off";
			editor.session.setMode("ace/mode/python");
			editor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true
			});
			editor.setValue(data,1)
		}, 'text')
	}
	if (urlFile.endsWith(".ino")) {
		$.get(urlFile, function(data) { 
			$('#codeORblock').bootstrapToggle("off");
			$('a[href="#content_code"]').tab('show');
			$('#btn_print').addClass("hidden");
			$('#btn_preview').addClass("hidden");
			$('#btn_search').removeClass("hidden");
			window.localStorage.content="off";
			editor.session.setMode("ace/mode/c_cpp");
			editor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true
			});
			editor.setValue(data,1)
		}, 'text')
	}
	var loadOnce = null;
	try {loadOnce = window.localStorage.loadOnceBlocks;} catch (e) {}
	if (urlFile) {
		$.get( urlFile, function(data) { BlocklyDuino.loadBlocks(data)}, 'text')
	} else {
		BlocklyDuino.loadBlocks()
	}
};
BlocklyDuino.renderArduinoCodePreview = function() {
	var prog = window.localStorage.prog;
	if (prog != "python") {
		$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
	} else {
		$('#pre_previewArduino').text(Blockly.Python.workspaceToCode(BlocklyDuino.workspace));
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'py'));
	}
};
BlocklyDuino.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};
BlocklyDuino.addReplaceParamToUrl = function(url, param, value) {
	var re = new RegExp("([?&])" + param + "=.*?(&|$)", "i");
	var separator = url.indexOf('?') !== -1 ? "&" : "?";
	if (url.match(re)) {
		return url.replace(re, '$1' + param + "=" + value + '$2');
	}
	else {
		return url + separator + param + "=" + value;
	}
};
BlocklyDuino.loadBlocks = function(defaultXml) {
	if (defaultXml) {
		var xml = Blockly.Xml.textToDom(defaultXml);
		Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace);
	} else {
		var loadOnce = null;
		try {
			loadOnce = window.localStorage.loadOnceBlocks;
		} catch (e) {}
		if (loadOnce != null) {
			delete window.localStorage.loadOnceBlocks;
			var xml = Blockly.Xml.textToDom(loadOnce);
			Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace );
		}
	}
};
BlocklyDuino.load = function (event) {
	var files = event.target.files;
	if (files.length != 1) {
		return;
	}
	var reader = new FileReader();
	reader.onloadend = function(event) {
		var target = event.target;
		if (target.readyState == 2) {
			if (files[0].name.endsWith("ino")) {
				$('#codeORblock').bootstrapToggle("off");
				$('a[href="#content_code"]').tab('show');
				$('#btn_print').addClass("hidden");
				$('#btn_preview').addClass("hidden");
				$('#btn_search').removeClass("hidden");
				window.localStorage.content="off";
				editor.session.setMode("ace/mode/c_cpp");
				editor.setOptions({
					enableBasicAutocompletion: true,
					enableSnippets: true,
					enableLiveAutocompletion: true
				});
				editor.setValue(target.result,1)
			}
			if (files[0].name.endsWith("py")) {
				$('#codeORblock').bootstrapToggle("off");
				$('a[href="#content_code"]').tab('show');
				$('#btn_print').addClass("hidden");
				$('#btn_preview').addClass("hidden");
				$('#btn_search').removeClass("hidden");
				window.localStorage.content="off";
				editor.session.setMode("ace/mode/python");
				editor.setOptions({
					enableBasicAutocompletion: true,
					enableSnippets: true,
					enableLiveAutocompletion: true
				});
				editor.setValue(target.result,1)
			}
			try {
				var xml = Blockly.Xml.textToDom(target.result);
			} catch (e) {
				alert(Blockly.Msg['xmlError']+'\n' + e);
				return;
			}
			BlocklyDuino.workspace.clear();
			Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace);
			BlocklyDuino.workspace.render();
			var elem = xml.getElementsByTagName("toolbox")[0];
			if (elem != undefined) {
				var node = elem.childNodes[0];
				window.localStorage.toolbox = node.nodeValue;
				$("#toolboxes").val(node.nodeValue);
				var search = window.location.search;
				search = search.replace(/([?&]url=)[^&]*/, '');
				window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
			}
		}
	};
	reader.readAsText(files[0]);
};
BlocklyDuino.backupBlocks = function () {
  if (typeof Blockly != 'undefined' && window.localStorage) {
    var xml = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.localStorage.loadOnceBlocks = text;
  }
};
BlocklyDuino.backupCode = function () {
	window.localStorage.code = editor.getValue()
};
BlocklyDuino.loadConfig = function () {
	var card = window.localStorage.card;
	var content = window.localStorage.content;
	var prog = window.localStorage.prog;
	var theme = window.localStorage.theme;
	var size = window.localStorage.size;
	if (card === undefined) {
		window.localStorage.card = BlocklyDuino.selectedCard;
		window.localStorage.prog = profile[BlocklyDuino.selectedCard].prog;
		window.localStorage.toolbox = BlocklyDuino.selectedToolbox;
		document.getElementById("card_name").textContent = profile[BlocklyDuino.selectedCard]['description'];
		$('#arduino_card_mini_picture').attr("src", profile[BlocklyDuino.selectedCard]['picture']);
		$("#toolboxes").val(BlocklyDuino.selectedToolbox);
		BlocklyDuino.loadToolboxDefinition(BlocklyDuino.selectedToolbox);
		$('#btn_flash').addClass("hidden")
	} else {
		var toolbox = window.localStorage.toolbox;
		BlocklyDuino.selectedToolbox = toolbox;
		document.getElementById("card_name").textContent = profile[card]['description'];
		$('#arduino_card_mini_picture').attr("src", profile[card]['picture']);
		$("#toolboxes").val(toolbox);
		BlocklyDuino.loadToolboxDefinition(toolbox);
		if (card == "microbit") {$('#btn_flash').removeClass("hidden")} else {$('#btn_flash').addClass("hidden")}
	}
	if (content === undefined) {
		window.localStorage.content = BlocklyDuino.content;
		$('#codeORblock').bootstrapToggle(BlocklyDuino.content);
		$('#btn_search').addClass("hidden")
	} else {
		$('#codeORblock').bootstrapToggle(content);
		if (content=="off") {
			$('a[href="#content_code"]').tab('show');
			$('#btn_search').removeClass("hidden")
		}
		$('#btn_search').addClass("hidden")
	}
	if ((theme === undefined)||(theme=="sqlserver")) {
		$('#theme').val(BlocklyDuino.theme);
		BlocklyDuino.theme_sqlserver();
		window.localStorage.theme = BlocklyDuino.theme;
	} else {
		$('#theme').val("monokai");
		BlocklyDuino.theme_monokai();	
		editor.setTheme('ace/theme/monokai');	
		window.localStorage.theme = "monokai";
	}
	if (size === undefined) {
		$('#fontsize').val(BlocklyDuino.size);
		window.localStorage.size = BlocklyDuino.size
	} else {
		$('#fontsize').val(size);
		document.getElementById('content_code').style.fontSize = size
	}
};
BlocklyDuino.discard = function () {
  if (window.localStorage.content == "on") {
	if (window.location.search!="") {
		BlocklyDuino.workspace.clear();
		window.location.search = "";
	} else {
		BlocklyDuino.workspace.clear();
		BlocklyDuino.workspace.render();
	}
  } else if (window.localStorage.prog == "arduino"){
	editor.setValue(BlocklyDuino.prog_ino,1)
  } else {
	editor.setValue(BlocklyDuino.prog_py,1)
  }
};
BlocklyDuino.Undo = function () {
	if (window.localStorage.content == "on") {
		Blockly.mainWorkspace.undo(0)
	} else {
		editor.undo()
	}
};
BlocklyDuino.Redo = function () {
	if (window.localStorage.content == "on") {
		Blockly.mainWorkspace.undo(1)
	} else {
		editor.redo()
	}
};
BlocklyDuino.search = function() {
	editor.execCommand("find")
};
BlocklyDuino.copy = function() {
	var range = document.createRange();  
	range.selectNode(document.getElementById('pre_previewArduino'));  
	window.getSelection().addRange(range);
	document.execCommand("copy")
};
BlocklyDuino.hexlify = function(script) {
        function hexlify(ar) {
            var result = '';
            for (var i = 0; i < ar.length; ++i) {
                if (ar[i] < 16) {
                    result += '0';
                }
                result += ar[i].toString(16);
            }
            return result;
        }
        // add header, pad to multiple of 16 bytes
        var data = new Uint8Array(4 + script.length + (16 - (4 + script.length) % 16));
        data[0] = 77; // 'M'
        data[1] = 80; // 'P'
        data[2] = script.length & 0xff;
        data[3] = (script.length >> 8) & 0xff;
        for (var i = 0; i < script.length; ++i) {
            data[4 + i] = script.charCodeAt(i);
        }
        // TODO check data.length < 0x2000
        // convert to .hex format
        var addr = 0x3e000; // magic start address in flash
        var chunk = new Uint8Array(5 + 16);
        var output = [];
        for (var i = 0; i < data.length; i += 16, addr += 16) {
            chunk[0] = 16; // length of data section
            chunk[1] = (addr >> 8) & 0xff; // high byte of 16-bit addr
            chunk[2] = addr & 0xff; // low byte of 16-bit addr
            chunk[3] = 0; // type (data)
            for (var j = 0; j < 16; ++j) {
                chunk[4 + j] = data[i + j];
            }
            var checksum = 0;
            for (var j = 0; j < 4 + 16; ++j) {
                checksum += chunk[j];
            }
            chunk[4 + 16] = (-checksum) & 0xff;
            output.push(':' + hexlify(chunk).toUpperCase())
        }
        return output.join('\n');
};
BlocklyDuino.getHexFile = function(firmware,code) {
        var hexlified_python = BlocklyDuino.hexlify(code);
        var insertion_point = ":::::::::::::::::::::::::::::::::::::::::::";
        return firmware.replace(insertion_point, hexlified_python);
};
BlocklyDuino.flash_card = function() {
	if (window.localStorage.content == "off") {
		var code = editor.getValue()
	} else {
		var code = $('#pre_previewArduino').text()
	}
	var firmware = $("#firmware").text();
	var output = BlocklyDuino.getHexFile(firmware,code);
    var ua = navigator.userAgent.toLowerCase();
    if((ua.indexOf('safari/') > -1) && (ua.indexOf('chrome') == -1)) {
        alert("Safari has a bug that means your work will be downloaded as an un-named file. Please rename it to something ending in .hex. Alternatively, use a browser such as Firefox or Chrome. They do not suffer from this bug.");
        window.open('data:application/octet;charset=utf-8,' + encodeURIComponent(output), '_newtab');
    } else {
        var datenow = Date.now();
		var filename = "microbit" + datenow + ".hex";
        var element = document.createElement('a');
		element.setAttribute('href', 'data:application/octet;charset=utf-8,' + encodeURIComponent(output));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
    }
};
BlocklyDuino.bindFunctions = function() {
	$('.modal-child').on('show.bs.modal', function () {
		var modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 0);
	}); 
	$('.modal-child').on('hidden.bs.modal', function () {
		var modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 1);
	});
	$('#btn_new').on("click", BlocklyDuino.discard);
	$('#btn_saveXML').on("click", BlocklyDuino.saveXmlFile);
	$('#btn_save').on("click", function () {
		if (window.localStorage.prog == "arduino") {
			BlocklyDuino.saveino()
		} else {
			BlocklyDuino.savepy()
		}
	});
	$('#btn_undo').on("click", BlocklyDuino.Undo);
	$('#btn_redo').on("click", BlocklyDuino.Redo);
	$('#btn_contact').on("click", function () {
		window.open("https://github.com/fontainejp/blocklino/issues/","_blank", null);
	});
	$('#btn_forum').on("click", function () {
		window.open("http://blockly.technologiescollege.fr/forum/index.php","_blank", null);
	});
	$('#btn_site').on("click", function () {
		window.open("http://lesormeaux.net/blocklino/start.html","_blank", null);
	});
	$('#btn_print').on("click", BlocklyDuino.workspace_capture);
	$('#btn_search').on("click", BlocklyDuino.search);
	$('#btn_copy').on("click", BlocklyDuino.copy);
	$('#btn_flash').on("click", BlocklyDuino.flash_card);
	$('#btn_html').on("click", function() {
		window.open("ffau.html","_blank", null);
	});
	$('#btn_factory').on("click", function() {
		window.open("factory.html","_blank", null);
	});
	$('#btn_games').on('click', function(){
		window.open("games/index.html","_blank", null);
	});
	$('#btn_cable').on('click', function(){
		window.open("hackcable/index.html","_blank", null);
	});
	$('#btn_preview').on("click", function() {
		$("#toggle").toggle("slide");
	});
	$('#pre_previewArduino').on("click", function() {
		$("#toggle").toggle("slide");
	});
	$('#toolboxes').on("focus", function() {
		BlocklyDuino.selectedToolbox = $(this).val();
	});
	$('#toolboxes').on("change", BlocklyDuino.changeToolboxDefinition);	
	$('#configModal').on('hidden.bs.modal', function(e) {
		BlocklyDuino.loadToolboxDefinition(BlocklyDuino.selectedToolbox);
	});
	$('#load').on("change", BlocklyDuino.load);
	$('#btn_fakeload').on("click", function() {
		$('#load').click();
	});
	$('#btn_config').on("click", BlocklyDuino.openConfigToolbox);
	$('#select_all').on("click", BlocklyDuino.checkAll);
	$('#btn_valid_config').on("click", BlocklyDuino.changeToolbox);
	$('#codeORblock').on("change", function() {
		if (window.localStorage.prog!="python") {
			editor.session.setMode("ace/mode/c_cpp");
			editor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true
			});
		} else {
			editor.session.setMode("ace/mode/python");
			editor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true
			});
		}
		if (window.localStorage.content=="on") {
			editor.setValue($('#pre_previewArduino').text(),1);
			$('a[href="#content_code"]').tab('show');
			$('#btn_print').addClass("hidden");
			$('#btn_preview').addClass("hidden");
			$('#btn_search').removeClass("hidden");
			window.localStorage.content="off"
		} else {
			$('a[href="#content_blocks"]').tab('show');
			$('#btn_print').removeClass("hidden");
			$('#btn_preview').removeClass("hidden");
			$('#btn_search').addClass("hidden");
			window.localStorage.content="on"
		}
	});
	$('#fontsize').on("change", function(){
		document.getElementById('content_code').style.fontSize = $(this).val();
		window.localStorage.size = $(this).val()
	});
	$('#theme').on("change", BlocklyDuino.apply_theme);
	$(".dropdown-menu a").on("click", function(){
		if (window.localStorage.content == "on") {
			BlocklyDuino.backupBlocks()
		} else {
			BlocklyDuino.backupCode()
		}
		var card = window.localStorage.card;
		var toolbox = window.localStorage.toolbox;
		document.getElementById("card_name").textContent = $(this).text();
		var new_card = $(this).attr("id");
		var new_prog = window.profile[new_card].prog;
		if (window.profile[new_card].cpu != window.profile[card].cpu) {
			if (window.confirm(Blockly.Msg['arduino_card'] + window.profile[new_card].description + ' ?')){
				$('#arduino_card_mini_picture').attr("src", profile[new_card]['picture']);
				if (window.localStorage.content=="off") {
					if (new_prog == "arduino") {
						editor.session.setMode("ace/mode/c_cpp");
						editor.setValue(BlocklyDuino.prog_ino,1)
					} else {
						editor.session.setMode("ace/mode/python");
						editor.setValue(BlocklyDuino.prog_py,1)
					}
				} else {
					if (new_prog != "python") {
						$('#btn_preview').attr('title', Blockly.Msg['btn_preview_ino']);
						$('#btn_save').attr('title', Blockly.Msg['btn_save_ino']);
						$('#btn_flash').addClass("hidden")
						var new_toolbox = "toolbox_arduino_all";
						window.localStorage.prog = new_prog;
						window.localStorage.toolbox = new_toolbox;
						BlocklyDuino.workspace.clear();
						BlocklyDuino.loadToolboxDefinition(new_toolbox);
						Blockly.getMainWorkspace().updateToolbox(BlocklyDuino.buildToolbox());
						BlocklyDuino.workspace.render();
					} else {
						$('#btn_preview').attr('title', Blockly.Msg['btn_preview_py']);
						$('#btn_save').attr('title', Blockly.Msg['btn_save_py']);
						if ( window.profile[new_card].cpu == "cortexM0" ) {
							var new_toolbox = "toolbox_microbit";
							$('#btn_flash').removeClass("hidden")
						} else {
							var new_toolbox = "toolbox_lycee";
							$('#btn_flash').addClass("hidden")
						}					
						window.localStorage.prog = new_prog;
						window.localStorage.toolbox = new_toolbox;
						BlocklyDuino.workspace.clear();
						BlocklyDuino.loadToolboxDefinition(new_toolbox);
						Blockly.getMainWorkspace().updateToolbox(BlocklyDuino.buildToolbox());
						BlocklyDuino.workspace.render()
					}
				}
			} else {
				document.getElementById("card_name").textContent = profile[card]['description'] ;
				return
			}
		}
		window.localStorage.card = new_card;
	})
};
BlocklyDuino.theme_monokai = function () {
	document.getElementById("theme_css").href = "css/blocklino_monokai.css";
	document.getElementById("btn_preview").className = document.getElementById("btn_preview").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_new").className = document.getElementById("btn_new").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_example").className = document.getElementById("btn_example").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_fakeload").className = document.getElementById("btn_fakeload").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_saveXML").className = document.getElementById("btn_saveXML").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_config").className = document.getElementById("btn_config").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_html").className = document.getElementById("btn_html").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_factory").className = document.getElementById("btn_factory").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_card").className = document.getElementById("btn_card").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_boards").className = document.getElementById("btn_boards").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_about").className = document.getElementById("btn_about").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_undo").className = document.getElementById("btn_undo").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_redo").className = document.getElementById("btn_redo").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_print").className = document.getElementById("btn_print").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_flash").className = document.getElementById("btn_flash").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_save").className = document.getElementById("btn_save").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_copy").className = document.getElementById("btn_copy").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_search").className = document.getElementById("btn_search").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_tint").className = document.getElementById("btn_tint").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
};
BlocklyDuino.theme_sqlserver = function () {
	document.getElementById("theme_css").href = "css/blocklino_sqlserver.css";
	document.getElementById("btn_preview").className = document.getElementById("btn_preview").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_new").className = document.getElementById("btn_new").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_example").className = document.getElementById("btn_example").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_fakeload").className = document.getElementById("btn_fakeload").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_saveXML").className = document.getElementById("btn_saveXML").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_config").className = document.getElementById("btn_config").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_html").className = document.getElementById("btn_html").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_factory").className = document.getElementById("btn_factory").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_card").className = document.getElementById("btn_card").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_boards").className = document.getElementById("btn_boards").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_about").className = document.getElementById("btn_about").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_undo").className = document.getElementById("btn_undo").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_redo").className = document.getElementById("btn_redo").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_print").className = document.getElementById("btn_print").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_flash").className = document.getElementById("btn_flash").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_save").className = document.getElementById("btn_save").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_copy").className = document.getElementById("btn_copy").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_search").className = document.getElementById("btn_search").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_tint").className = document.getElementById("btn_tint").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
};
BlocklyDuino.apply_theme = function () {
	var new_theme = $('#theme').val();
	editor.setTheme('ace/theme/' + new_theme);
	window.localStorage.theme = new_theme
	if (new_theme == "monokai") {
		BlocklyDuino.theme_monokai()
	} else {
		BlocklyDuino.theme_sqlserver()
	}
};
BlocklyDuino.checkAll = function () {
    if(this.checked) {
        $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = true;
        });
    } 
      else {
      $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = false;
        });
    }
};
BlocklyDuino.openConfigToolbox = function () {
	var modalbody = $("#modal-body-config");
	var loadIds = window.localStorage.toolboxids;
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}
	modalbody.empty();
	var i=0, n;
	var ligne = "";
	$("#toolbox").children("category").each(function() {
		n = loadIds.search($(this).attr("id"));
		if (n >= 0) {
			ligne = '<input type="checkbox" checked="checked" name="checkbox_' +i+ '" id="checkbox_' +$(this).attr("id")+ '"/> ' +Blockly.Msg[$(this).attr("id")]+ '<br/>';
		} else {
			ligne = '<input type="checkbox" name="checkbox_' +i+ '" id="checkbox_' +$(this).attr("id")+ '"/> ' +Blockly.Msg[$(this).attr("id")]+ '<br/>';
		}
		i++;
		modalbody.append(ligne);
     });
};
BlocklyDuino.changeToolbox = function () {
	BlocklyDuino.backupBlocks();
	var toolboxIds = [];
	$('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
		if (this.checked == true) {
			var xmlid = this.id;
			toolboxIds.push(xmlid.replace("checkbox_", ""));
		}
	});
	window.localStorage.toolboxids = toolboxIds;
	window.localStorage.toolbox = $("#toolboxes").val();
	window.localStorage.size = $('#fontsize').val();
	window.localStorage.theme = $('#theme').val();
	window.location = window.location.href ;
};
BlocklyDuino.buildToolbox = function() {
	var loadIds = window.localStorage.toolboxids;
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}
	window.localStorage.toolboxids = loadIds;
	var xmlValue = '<xml id="toolbox">';	
	var xmlids = loadIds.split(",");
	for (var i = 0; i < xmlids.length; i++) {
		if ($('#'+xmlids[i]).length) {
			xmlValue += $('#'+xmlids[i])[0].outerHTML;
		}
	}
	xmlValue += '</xml>';
	return xmlValue;
};
BlocklyDuino.loadToolboxDefinition = function(toolboxFile) {
	$.ajax({
		type: "GET",
		url: "./toolbox/" + toolboxFile + ".xml",
		dataType: "xml",
		async : false
	}).done(function(data){
		var toolboxXml = '<xml id="toolbox" style="display: none">' + $(data).find('toolbox').html() + '</xml>';
		$("#toolbox").remove();
		$('body').append(toolboxXml);	
		$("xml").find("category").each(function() {
			if (!$(this).attr('id')) {
				$(this).attr('id', $(this).attr('name'));
				$(this).attr('name', Blockly.Msg[$(this).attr('name')])
			}
		})
	}).fail(function(data) {
		$("#toolbox").remove()
	});
	window.localStorage.toolboxids = ''	
};
BlocklyDuino.changeToolboxDefinition =  function (){
	BlocklyDuino.loadToolboxDefinition($("#toolboxes").val());
	BlocklyDuino.openConfigToolbox();
};
BlocklyDuino.workspace_capture = function() {
	var ws = BlocklyDuino.workspace.svgBlockCanvas_.cloneNode(true);
	ws.removeAttribute("width");
	ws.removeAttribute("height");
	ws.removeAttribute("transform");
	var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
	styleElem.textContent = Blockly.Css.CONTENT.join('') ;
	ws.insertBefore(styleElem, ws.firstChild);
	var bbox = BlocklyDuino.workspace.svgBlockCanvas_.getBBox();
	var canvas = document.createElement( "canvas" );
	canvas.width = Math.ceil(bbox.width+10);
	canvas.height = Math.ceil(bbox.height+10);
	var ctx = canvas.getContext( "2d" );
	var xml = new XMLSerializer().serializeToString(ws);
	xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="' + bbox.x + ' ' + bbox.y + ' '  + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
	var img = new Image();
	img.setAttribute( "src", 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(xml))));
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
};
BlocklyDuino.cardPicture_change = function() {
	if ($("#pinout").val()) {
		$('#arduino_card_mini_picture').attr("src", profile[$("#pinout").val()]['picture']);
		document.getElementById("card_connect").textContent=profile[$("#pinout").val()]['usb'];
		document.getElementById("card_cpu").textContent=profile[$("#pinout").val()]['cpu'];
		document.getElementById("card_voltage").textContent=profile[$("#pinout").val()]['voltage'];
		document.getElementById("card_inout").textContent=profile[$("#pinout").val()]['inout'];
	}
};
BlocklyDuino.saveXmlFile = function () {
	if (window.localStorage.content=="on") {
		var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
		var toolbox = window.localStorage.toolbox;
		if (!toolbox) {
			toolbox = $("#toolboxes").val();
		}
		if (toolbox) {
			var newel = document.createElement("toolbox");
			newel.appendChild(document.createTextNode(toolbox));
			xml.insertBefore(newel, xml.childNodes[0]);
		}
		var toolboxids = window.localStorage.toolboxids;
		if (toolboxids === undefined || toolboxids === "") {
			if ($('#defaultCategories').length) {
				toolboxids = $('#defaultCategories').html();
			}
		}
		var data = Blockly.Xml.domToPrettyText(xml);
		var datenow = Date.now();
		var filename = "blocklino"+datenow+".bloc";
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/bloc;charset=utf-8,' + encodeURIComponent(data));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element)
	} else if (window.localStorage.prog=="arduino"){
		var code = editor.getValue();
		var datenow = Date.now();
		var filename = "arduino"+datenow+".ino";
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/ino;charset=utf-8,' + encodeURIComponent(code));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	} else {
		var code = editor.getValue();
		var datenow = Date.now();
		var filename = "python"+datenow+".py";
		var element = document.createElement('a');
		element.setAttribute('href', 'data:py/ino;charset=utf-8,' + encodeURIComponent(code));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}
};
BlocklyDuino.saveino = function() {
    var code = $('#pre_previewArduino').text();
	var datenow = Date.now();
	var filename = "arduino"+datenow+".ino";
 	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/ino;charset=utf-8,' + encodeURIComponent(code));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
};
BlocklyDuino.savepy = function() {
    var code = $('#pre_previewArduino').text();
	var datenow = Date.now();
	var filename = "python"+datenow+".py";
 	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/ino;charset=utf-8,' + encodeURIComponent(code));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
};
Blockly.Variables.flyoutCategory = function(workspace) {
	var variableList = workspace.variableList;
	variableList.sort(goog.string.caseInsensitiveCompare);
	var xmlList = [];
	var button = goog.dom.createDom('button');
	button.setAttribute('text', Blockly.Msg.NEW_VARIABLE);
	button.setAttribute('callbackKey', 'CREATE_VARIABLE');
	Blockly.registerButtonCallback('CREATE_VARIABLE', function(button) {
		Blockly.Variables.createVariable(button.getTargetWorkspace());
	});
	xmlList.push(button);
	if (variableList.length > 0) {
		if (window.localStorage.prog!="python") {
			if (Blockly.Blocks['variables_set_init']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_set_init');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['variables_set']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_set');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['math_change']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'math_change');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['variables_const']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_const');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['base_define_const']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'base_define_const');
				if (Blockly.Blocks['variables_get']) {
					block.setAttribute('gap', 16);
				}
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			for (var i = 0; i < variableList.length; i++) {
			  if (Blockly.Blocks['variables_get']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_get');
				if (Blockly.Blocks['variables_set']) {
				  block.setAttribute('gap', 8);
				}
				var field = goog.dom.createDom('field', null, variableList[i]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			  }
			}
		} else {
			if (Blockly.Blocks['variables_set']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_set');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['math_change']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'math_change');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			for (var i = 0; i < variableList.length; i++) {
			  if (Blockly.Blocks['variables_get']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_get');
				if (Blockly.Blocks['variables_set']) {
				  block.setAttribute('gap', 8);
				}
				var field = goog.dom.createDom('field', null, variableList[i]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			  }
			}
		}
	}
  return xmlList;
};