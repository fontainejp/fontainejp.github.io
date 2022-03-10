/*
    Ffau - A blocky-based editor for teaching HTML & CSS .
	Developed by Pal Kerecsenyi, Geza Kerecsenyi and Oli Plant.
	Full details are avaliable at the Github repo: https://github.com/codeddraig/ffau
	Copyright (c) 2017-19 The CodeDdraig Organisation
	THIS IS VERSION 1.2.2
*/
'use strict';
goog.provide('Blockly.html');
goog.require('Blockly.Generator');
var nameFile = "";
  ////////////////
 /*  function  */
////////////////
var URLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var hashRegex = /#([A-z0-9]*)/;

function looseEscape(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function escapeTitle(input) {
    return input.replace(/\s/g, '_')
}

//////////////////////// STRUCTURE ////////////////////////
// balise tag
Blockly.Blocks['balise_text'] = {
    init: function () {
        this.jsonInit({
            "message0": "%1",
            "args0": [
                {
                    "type": "field_input",
                    "name": "_text",
                    "text": "une valeur"
                }
            ],
            "output": "color",
            "colour": "#bbbbbb"
        });
    }
}
Blockly.html['balise_text'] = function (block) {
	return [block.getFieldValue('_text'), Blockly.html.ORDER_ATOMIC]
}
// balise tag
Blockly.Blocks['balise'] = {
    init: function () {
        this.jsonInit({
            "message0": '<%1> %2 %3 </>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "_text",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#4a235a"
        });
    }
}
Blockly.html['balise'] = function (block) {
	var text_content = block.getFieldValue('_text');
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var code = '<' + text_content +  (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</' + text_content + '>\n';
    return code
}
// balise orpheline tag
Blockly.Blocks['balise_orph'] = {
    init:function(){
    this.appendDummyInput()
        .appendField("<")
        .appendField(new Blockly.FieldTextInput(""), "_text")
        .appendField(">");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4a235a")}
}
Blockly.html['balise_orph'] = function (block) {
    var text_content = block.getFieldValue('_text');
    return '<' + text_content + '>\n'
}
// HTML tag
Blockly.Blocks['html'] = {
    init: function () {
        this.jsonInit({
            "message0": '<html> %1 %2 </html>',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "document"
                }
            ],
            "colour": "#4a235a"
        });
    }
}
Blockly.html['html'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var code = '<!DOCTYPE html>\n<html lang="fr">\n' + statements_content + '</html>\n';
    return code
}
// Head tag
Blockly.Blocks['head'] = {init:function(){
    this.jsonInit({
            "message0": '<head> %1 %2 </head>',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "header"
                }
            ],
			"previousStatement": "document",
            "nextStatement": "document",
            "colour": "#4a235a"
        });
	}
}
Blockly.html['head'] = function (block) {
    var text_content = Blockly.html.statementToCode(block, 'content');
    var code = '<head>\n' + text_content + '</head>\n';
    return code
}
// Title tag
Blockly.Blocks['title'] = {
    init:function(){
		this.jsonInit({
            "message0": '<title> %1 </title>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "_text",
                    "text": ""
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        });
	}
}
Blockly.html['title'] = function (block) {
	nameFile = escapeTitle(block.getFieldValue('_text'));
    return '<title>' + nameFile + '</title>\n<meta charset="utf-8">\n';
}
//  bootstrap.css
Blockly.Blocks['bootstrap'] = {
    init:function(){
		this.jsonInit({
            "message0": "<link rel='stylesheet' href='Bootstrap.css'>",
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        })
	}
}
Blockly.html['bootstrap'] = function (block) {
	return '<script src="js/bootstrap.min.3.3.6.js"></script>\n<link rel="stylesheet" href="css/bootstrap.min.3.3.6.css">\n'
}
//  jQuery.js
Blockly.Blocks['jquery'] = {
    init:function(){
		this.jsonInit({
            "message0": "<script src='jquery.js'></script>",
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        })
	}
}
Blockly.html['jquery'] = function (block) {
	return '<script src="js/jquery.min.2.1.3.js"></script>\n'
}
//  FontAwesome.css
Blockly.Blocks['fontawesome'] = {
    init:function(){
		this.jsonInit({
            "message0": "<link rel='stylesheet' href='FontAwesome.css'>",
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        })
	}
}
Blockly.html['fontawesome'] = function (block) {
    return '<link rel="stylesheet" href="css/fontawesome.css">\n';
}
//  Pure.css
Blockly.Blocks['w3'] = {
    init:function(){
		this.jsonInit({
            "message0": "<link rel='stylesheet' href='w3.css'>",
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        })
	}
}
Blockly.html['w3'] = function (block) {
    return '<link rel="stylesheet" href="css/w3.css">\n';
}
// Body tag
Blockly.Blocks['body'] = {
    init: function () {
        this.jsonInit({
            "message0": '<body> %1 %2 </body>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
					"check": ["html", "textcontainer"]
                }
            ],
            "previousStatement": "document",
            "colour": "#4a235a"
        });
    }
}
Blockly.html['body'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var code = '<body' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</body>\n';
    return code
}
// Button tag
Blockly.Blocks['button'] = {
    init: function () {
        this.jsonInit({
            "message0": '<button> %1 %2 </button>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        });
    }
}
Blockly.html['button'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '\n<button' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + statements_content + '</button>\n';
    return code
}
// Icon tag
Blockly.Blocks['icon'] = {
    init: function () {
        this.jsonInit({
            "message0": '<i class=%1> </i> %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "question-circle"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        });
    }
}
Blockly.html['icon'] = function (block) {
    var text_content = block.getFieldValue('content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = ' <i class="fa fa-' + text_content + '"'+ (block_modifier ? " " + block_modifier.trim() : "") +'></i> ';
    return code
}
// Divider tag
Blockly.Blocks['divider'] = {
    init: function () {
        this.jsonInit({
            "message0": '<div> %1 %2 </div>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": [
                        "html",
                        "textcontainer",
                        "form"
                    ]
                }
            ],
            "previousStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "nextStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "colour": "#787746"
        });
    }
}
Blockly.html['divider'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<div' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</div>\n';
    return code
}
// br tag
Blockly.Blocks['linebreak'] = {
    init: function () {
        this.jsonInit({
            "message0": '<br>',
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#4a235a"
        });
    }
}
Blockly.html['linebreak'] = function (block) {
    return "<br>\n";
}
// hr tag
Blockly.Blocks['hline'] = {
    init: function () {
        this.jsonInit({
            "message0": '<hr> %1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#4a235a"
        });
    }
}
Blockly.html['hline'] = function (block) {
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return "<hr" + (block_modifier ? " " + block_modifier.trim() : "") + ">\n";
}
//  link_head
Blockly.Blocks['link_head'] = {
    init:function(){
		this.jsonInit({
            "message0": "<link rel=stylesheet href=%1>",
			"args0": [
                {
                    "type": "field_dropdown",
                    "name": "link",
                    "options": [
                        [
                            "Bootstrap",
                            "https://fontainejp.github.io/css/bootstrap.min.3.3.6.css"
                        ],
                        [
                            "W3",
                            "https://fontainejp.github.io/css/w3.css"
                        ],
                        [
                            "Fontawesome",
							"https://fontainejp.github.io/css/font-awesome.css"
						]
                    ]
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        })
	}
}
Blockly.html['link_head'] = function (block) {
	return '<link rel="stylesheet" href="'+block.getFieldValue("link")+'">\n'
}
//  script_head
Blockly.Blocks['script_head'] = {
    init:function(){
		this.jsonInit({
            "message0": "<script src=%1> </script>",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "script",
                    "options": [
                        [
                            "jQuery",
                            '<script src="https://fontainejp.github.io/js/jquery.min.2.1.3.js"></script>\n'
                        ],
                        [
                            "Bootstrap",
                            '<script src="https://fontainejp.github.io/js/bootstrap.min.3.3.6.js"></script>\n'
                        ],
                        [
                            'openStreetMap',
                            '<link rel="stylesheet" href="https://fontainejp.github.io/css/map.css">\n<link rel="stylesheet" href="https://fontainejp.github.io/css/routing.css">\n<script src="https://fontainejp.github.io/js/map.js"></script>\n<script src="https://fontainejp.github.io/js/esri-leaflet.js"></script>\n<script src="https://fontainejp.github.io/js/esri-leaflet-geocoder.js"></script>\n<script src="https://fontainejp.github.io/js/routing.js"></script>\n<script src="https://fontainejp.github.io/js/html-overlay.js"></script>\n'
                        ],
                        [
                            'jCanvas',
                            '<link rel="stylesheet" href="https://fontainejp.github.io/css/jCanvas.css">\n<script src="https://fontainejp.github.io/js/jCanvas/jcanvas.js"></script>\n<script src="https://fontainejp.github.io/js/jCanvas/global.js"></script>\n<script src="https://fontainejp.github.io/js/jCanvas/brush.js"></script>\n<script src="https://fontainejp.github.io/js/jCanvas/rect.js"></script>\n<script src="https://fontainejp.github.io/js/jCanvas/path.js"></script>\n<script src="https://fontainejp.github.io/js/jCanvas/ellipse.js"></script>\n'
                        ]
                    ]
                }
            ],
			"previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        })
	}
}
Blockly.html['script_head'] = function (block) {
	return block.getFieldValue("script")
}
// textarea
Blockly.Blocks['textarea'] = {
    init: function () {
        this.jsonInit({
            "message0": '<textarea rows=%1 cols=%2> </textarea>%3',
            "args0": [
                {
                    "type": "field_input",
                    "name": "width",
                    "text": "40"
                },
                {
                    "type": "field_input",
                    "name": "height",
                    "text": "16"
                },
				{
                    "type": "input_value",
                    "name": "content"
                }
            ],
            "previousStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "nextStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "colour": "#154360"
        });
    }
}
Blockly.html['textarea'] = function (block) {
    return '<textarea rows="'+block.getFieldValue("width")+'" cols="'+block.getFieldValue("height")+'" '+Blockly.html.valueToCode(block, 'content', Blockly.html.ORDER_ATOMIC)+'></textarea>'
}
// Canvas
Blockly.Blocks['canvas'] = {
    init: function () {
        this.jsonInit({
            "message0": '<canvas width=%1 height=%2> </canvas>%3',
            "args0": [
                {
                    "type": "field_input",
                    "name": "width",
                    "text": "400px"
                },
                {
                    "type": "field_input",
                    "name": "height",
                    "text": "300px"
                },
				{
                    "type": "input_value",
                    "name": "content"
                }
            ],
            "previousStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "nextStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "colour": "#006000"
        });
    }
}
Blockly.html['canvas'] = function (block) {
	var val_content = Blockly.html.statementToCode(block, "content", Blockly.html.ORDER_ATOMIC)
    return '<canvas width="'+block.getFieldValue("width")+'" height="'+block.getFieldValue("height")+'" style="border: 1px solid "'+val_content+'></canvas>\n'
}
//////////////////////// MODIFIERS ////////////////////////
// Modifiers
Blockly.Blocks['args'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1',
            "args0": [
                {
                    "type": "input_statement",
                    "name": "content"
                }
            ],
            "colour": "#727272",
            "output": "attributes"
        });
    }
}
Blockly.html['args'] = function (block) {
    var code = Blockly.html.statementToCode(block, 'content').trim();
    return [code, Blockly.html.ORDER_ATOMIC]
}
// Class
Blockly.Blocks['class'] = {
    init: function () {
        this.jsonInit({
            "message0": 'class=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#727272",
            "output": "attributes"
        });
    }
}
Blockly.html['class'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'class="' + looseEscape(text_content) + '"' + argument ;
}
// ID
Blockly.Blocks['id'] = {
    init: function () {
        this.jsonInit({
            "message0": 'id=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#727272",
            "output": "attributes"
        });
    }
}
Blockly.html['id'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'id="' + looseEscape(text_content) + '"' + argument ;
}
// Empty Argument
Blockly.Blocks['emptyarg'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1=%2 %3',
            "args0": [
                {
                    "type": "field_input",
                    "name": "property",
                    "text": "width"
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "50%"
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#727272",
            "output": "attributes"
        });
    }
}
Blockly.html['emptyarg'] = function (block) {
    var property = block.getFieldValue('property');
    var value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return property + '="' + looseEscape(value) + '"' + argument ;
}
//////////////////////// TEXT ////////////////////////
// Empty text
Blockly.Blocks['emptytext'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "un texte",
					"align": "CENTRE"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#BBBBBB"
        });
    }
}
Blockly.html['emptytext'] = function (block) {
    var text_content = block.getFieldValue('content');
    return looseEscape(text_content)
}
// Text modifier
Blockly.Blocks['textmod'] = {
    init: function () {
        this.jsonInit({
            "message0": '<%1> %2 %3 </>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "strong",
                            "strong"
                        ],
                        [
                            "em",
                            "em"
                        ],
                        [
                            "mark",
                            "mark"
                        ],
                        [
                            "del",
                            "del"
                        ],
                        [
                            "ins",
                            "ins"
                        ],
                        [
                            "sub",
                            "sub"
                        ],
                        [
                            "sup",
                            "sup"
                        ],
                        [
                            "q",
                            "q"
                        ],
                        [
                            "blockquote",
                            "blockquote"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        });
    }
}
Blockly.html['textmod'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var type = block.getFieldValue("type");
    return '\n<' + type + '> ' + content + ' </' + type + '>\n';
}
// Paragraph tag
Blockly.Blocks['paragraph'] = {
    init: function () {
        this.jsonInit({
            "message0": '<p> %1 %2 </p>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#787746"
        });
    }
}
Blockly.html['paragraph'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier');
    return '<p' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + statements_content + '</p>\n';
}
// Header tag
Blockly.Blocks['header'] = {
    init: function () {
        this.jsonInit({
            "message0": '<h%1> %2 %3 </h>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "size",
                    "options": [
                        [
                            "1",
                            "1"
                        ],
                        [
                            "2",
                            "2"
                        ],
                        [
                            "3",
                            "3"
                        ],
                        [
                            "4",
                            "4"
                        ],
                        [
                            "5",
                            "5"
                        ],
                        [
                            "6",
                            "6"
                        ],
                    ]
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#787746"
        });
    }
}
Blockly.html['header'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var header_size = block.getFieldValue("size");
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    return '<h' + (header_size + ' ' + block_modifier).trim() + '>' + statements_content + '</h' + header_size + '>\n';
}
// Link
Blockly.Blocks['link'] = {
    init: function () {
        this.jsonInit({
            "message0": '<a href=%1> %2 %3 </a>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "target",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "checked": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        })
    }
}
Blockly.html['link'] = function (block) {
    var text = Blockly.html.statementToCode(block, 'content');
    var link = escapeTitle(block.getFieldValue('target'));
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '\n<a href="' + link + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '> ' + text + ' </a>\n';
}
// Span tag
Blockly.Blocks['span'] = {
    init: function () {
        this.jsonInit({
            "message0": '<span> %1 %2 </span>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        });
    }
}
Blockly.html['span'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '\n<span' + (block_modifier ? " " + block_modifier.trim() : "") + '> ' + content + ' </span>\n';
}
//////////////////////// Table ////////////////////////
// Table tag
Blockly.Blocks['table'] = {
    init: function () {
        this.jsonInit({
            "message0": '<table> %1 %2 </table>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "table"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#804000"
        });
    }
}
Blockly.html['table'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<table' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</table>\n';
}
// TR tag
Blockly.Blocks['tablerow'] = {
    init: function () {
        this.jsonInit({
            "message0": '<tr> %1 %2 </tr>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "tablerow"
                }
            ],
            "previousStatement": "table",
            "nextStatement": "table",
            "colour": "#804000"
        });
    }
}
Blockly.html['tablerow'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<tr' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</tr>\n';
}
// TH tag
Blockly.Blocks['tableheading'] = {
    init: function () {
        this.jsonInit({
            "message0": '<th> %1 %2 </th>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html", "textcontainer"]
                }
            ],
            "previousStatement": ["tablerow", "thead", "tbody"],
            "nextStatement": ["tablerow", "thead", "tbody"],
            "colour": "#804000"
        });
    }
}
Blockly.html['tableheading'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<th' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</th>\n';
}
// THead tag
Blockly.Blocks['thead'] = {
    init: function () {
        this.jsonInit({
            "message0": '<thead> %1 %2 </thead>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["thead"]
                }
            ],
            "previousStatement": "table",
            "nextStatement": "table",
            "colour": "#804000"
        });
    }
}
Blockly.html['thead'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<thead' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</thead>\n';
}
// TBody tag
Blockly.Blocks['tbody'] = {
    init: function () {
        this.jsonInit({
            "message0": '<tbody> %1 %2 </tbody>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["tbody"]
                }
            ],
            "previousStatement": "table",
            "nextStatement": "table",
            "colour": "#804000"
        });
    }
}
Blockly.html['tbody'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<tbody' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</tbody>\n';
}
// TD tag
Blockly.Blocks['tabledata'] = {
    init: function () {
        this.jsonInit({
            "message0": '<td> %1 %2 </td>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html", "textcontainer"]
                }
            ],
            "previousStatement": ["tablerow", "thead", "tbody"],
            "nextStatement": ["tablerow", "thead", "tbody"],
            "colour": "#804000"
        });
    }
}
Blockly.html['tabledata'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<td' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</td>\n';
}
//////////////////////// FORMS ////////////////////////
// Form tag
Blockly.Blocks['form'] = {
    init: function () {
        this.jsonInit({
            "message0": '<form> %1 %2 </form>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html", "textcontainer"]

                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#154360"
        });
    }
}
Blockly.html['form'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<form' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</form>\n';
}
// Input tag
Blockly.Blocks['input'] = {
    init: function () {
        this.jsonInit({
            "message0": '<input type=%1 value=%2 name=%3 > %4',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "submit",
                            "submit"
                        ],
                        [
                            "checkbox",
                            "checkbox"
                        ],
                        [
                            "color",
                            "color"
                        ],
                        [
                            "date",
                            "date"
                        ],
                        [
                            "email",
                            "email"
                        ],
                        [
                            "hidden",
                            "hidden"
                        ],
                        [
                            "number",
                            "number"
                        ],
                        [
                            "password",
                            "password"
                        ],
                        [
                            "radio",
                            "radio"
                        ],
                        [
                            "range",
                            "range"
                        ],
                        [
                            "text",
                            "text"
                        ],
                        [
                            "time",
                            "time"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                },
                {
                    "type": "field_input",
                    "name": "name",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes",
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#154360"
        });
    }
}
Blockly.html['input'] = function (block) {
    var type = block.getFieldValue('type');
    var value = looseEscape(block.getFieldValue('value'));
    var name = looseEscape(block.getFieldValue('name'));

    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<input type="' + type + '" value="' + value + '" name="' + name + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n';
}
// Label tag
Blockly.Blocks['label'] = {
    init: function () {
        this.jsonInit({
            "message0": '<label for=%1> %2 %3 </label>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "for",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": [
                "html",
				"textcontainer",
                "form"
            ],
            "nextStatement": [
                "html",
				"textcontainer",
                "form"
            ],
            "colour": "#154360"
        });
    }
}
Blockly.html['label'] = function (block) {
    var labelFor = block.getFieldValue('for');
    var content = Blockly.html.statementToCode(block, 'content');

    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<label for="' + looseEscape(labelFor) + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</label>\n';
}
// select tag
Blockly.Blocks['select'] = {
    init: function () {
        this.jsonInit({
            "message0": '<select> %1 %2 </select>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "option"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#154360"
        });
    }
}
Blockly.html['select'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<select' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</select>\n';
}
// option tag
Blockly.Blocks['option'] = {
    init: function () {
        this.jsonInit({
            "message0": '<option> %1 %2 </option>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "option",
            "nextStatement": "option",
            "colour": "#154360"
        });
    }
}
Blockly.html['option'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<option' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</option>\n';
}
//////////////////////// LIST ////////////////////////
// OL tag
Blockly.Blocks['orderedlist'] = {
    init: function () {
        this.jsonInit({
            "message0": '<ol> %1 %2 </ol>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "list"
                }
            ],
            "previousStatement": ["html", "textcontainer", "list"],
            "nextStatement": ["html", "textcontainer", "list"],
            "colour": "#FD6C9E"
        });
    }
}
Blockly.html['orderedlist'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<ol' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</ol>\n';
    return code
}
// UL tag
Blockly.Blocks['unorderedlist'] = {
    init: function () {
        this.jsonInit({
            "message0": '<ul> %1 %2 </ul>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "list"
                }
            ],
            "previousStatement": ["html", "textcontainer", "list"],
            "nextStatement": ["html", "textcontainer", "list"],
            "colour": "#FD6C9E"
        });
    }
}
Blockly.html['unorderedlist'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<ul' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</ul>\n';
    return code
}
// LI tag
Blockly.Blocks['listitem'] = {
    init: function () {
        this.jsonInit({
            "message0": '<li> %1 %2 </li>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "list",
            "nextStatement": "list",
            "colour": "#FD6C9E"
        });
    }
}
Blockly.html['listitem'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<li' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</li>\n';
    return code
}
//////////////////////// MEDIA ////////////////////////
// Audios tag
Blockly.Blocks['audios'] = {
    init: function () {
        this.jsonInit({
            "message0": '<audio src=%1 loop%2 autoplay%3 > %4',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": ""
                },
                {
                    "type": "field_checkbox",
                    "name": "loop",
                    "checked": false
                },
                {
                    "type": "field_checkbox",
                    "name": "autoplay",
                    "checked": false
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['audios'] = function (block) {
    var source = block.getFieldValue('source');
    var loop = block.getFieldValue('loop');
    var autoplay = block.getFieldValue('autoplay');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<audio' + (block_modifier ? " " + block_modifier.trim() : "");
    if (loop === "TRUE") code += ' loop';
    if (autoplay === "TRUE") code += ' autoplay';
    code += ' controls';
	code += '>\n  <source src="' + source + '" type="audio/mpeg">\n</audio>\n';
    return code 
}
// Audio tag
Blockly.Blocks['audio'] = {
    init: function () {
        this.jsonInit({
            "message0": '<audio src=%1 loop%2 autoplay%3> %4',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "source",
                    "options": [
                        [
                            "acqua",
                            "media/acqua.mp3"
                        ],
                        [
                            "kv",
                            "media/kv.mp3"
                        ],
                        [
                            "vexento",
                            "media/vexento.mp3"
                        ]
                    ]
                },
                {
                    "type": "field_checkbox",
                    "name": "loop",
                    "checked": false
                },
                {
                    "type": "field_checkbox",
                    "name": "autoplay",
                    "checked": false
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['audio'] = function (block) {
    var source = block.getFieldValue('source');
    var loop = block.getFieldValue('loop');
    var autoplay = block.getFieldValue('autoplay');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<audio' + (block_modifier ? " " + block_modifier.trim() : "");
    if (loop === "TRUE") {
        code += ' loop';
    }
    if (autoplay === "TRUE") {
        code += ' autoplay';
    }
    code += ' controls';
    code += '>\n  <source src="' + source + '" type="audio/mpeg">\n</audio>\n';
    return code
}
// videos tag
Blockly.Blocks['videos'] = {
    init: function () {
        this.jsonInit({
            "message0": '<video youtube.com/watch?v=%1> %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['videos'] = function (block) {
    var source = block.getFieldValue('source');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<object' + (block_modifier ? " " + block_modifier.trim() : "");
    code += ' data="https://www.youtube.com/embed/' + source + '">\n</object>\n';
    return code
}
// Video file tag
Blockly.Blocks['video_file'] = {
    init: function () {
        this.jsonInit({
            "message0": '<video src=%1 loop%2 autoplay%3> %4',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": ""
                },
                {
                    "type": "field_checkbox",
                    "name": "loop",
                    "checked": false
                },
                {
                    "type": "field_checkbox",
                    "name": "autoplay",
                    "checked": false
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['video_file'] = function (block) {
    var source = block.getFieldValue('source');
    var loop = block.getFieldValue('loop');
    var autoplay = block.getFieldValue('autoplay');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<video' + (block_modifier ? " " + block_modifier.trim() : "");
    if (loop === "TRUE") {
        code += ' loop';
    }
    if (autoplay === "TRUE") {
        code += ' autoplay';
    }
    code += ' controls';
    var type = "video/mp4";
    code += '>\n  <source src="' + source + '" type="' + type + '">\n</video>\n';
    return code
}
// Video tag
Blockly.Blocks['video'] = {
    init: function () {
        this.jsonInit({
            "message0": '<video src=%1 loop%2 autoplay%3> %4',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "source",
                    "options": [
                        [
                            "BigBuckBunny",
                            "media/bunny.mp4"
                        ],
                        [
                            "lamaDrama",
                            "media/lamadrama.mp4"
                        ]
                    ]
                },
                {
                    "type": "field_checkbox",
                    "name": "loop",
                    "checked": false
                },
                {
                    "type": "field_checkbox",
                    "name": "autoplay",
                    "checked": false
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['video'] = function (block) {
    var source = block.getFieldValue('source');
    var loop = block.getFieldValue('loop');
    var autoplay = block.getFieldValue('autoplay');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<video' + (block_modifier ? " " + block_modifier.trim() : "");
    if (loop === "TRUE") {
        code += ' loop';
    }
    if (autoplay === "TRUE") {
        code += ' autoplay';
    }
    code += ' controls';
    var type = "video/mp4";
    code += '>\n  <source src="' + source + '" type="' + type + '">\n</video>\n';
    return code
}
// Image tag
Blockly.Blocks['image'] = {
    init: function () {
        this.jsonInit({
            "message0": '<img src=%1> %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['image'] = function (block) {
    var source = block.getFieldValue('source')||'media/no_photo.png';
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<img src="' + source + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n';
    return code
}
// img
Blockly.Blocks['img'] = {
    init: function () {
        this.jsonInit({
            "message0": '<img src=%1> %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "source",
                    "options": [
                        [
                            "zen",
                            "media/zen.jpg"
                        ],
                        [
                            "earth",
                            "media/earth.jpg"
                        ],
                        [
                            "IA",
                            "media/neuronne.jpg"
                        ]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#00CC00"
        });
    }
}
Blockly.html['img'] = function (block) {
    var source = block.getFieldValue('source');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
	return '<img src="' + source + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n';
}
