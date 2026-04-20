'use strict';

/////////////////  Blocks  /////////////////

Blockly.defineBlocksWithJsonArray([
	{	type:'block_style',
        "message0": '<style> %1 %2 </style>',
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "content",
                "check": "mystyle"
            }
        ],
        "previousStatement": "header",
        "nextStatement": "header",
        "colour": "#00929F"
	},
	{	type:'cssitem',
            "message0": '%1 { %2 %3 }',
            "args0": [
                {
                    "type": "field_input",
                    "name": "selector",
                    "text": "p"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "cssevents"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "stylecontent"
                }
            ],
            "previousStatement": "mystyle",
            "nextStatement": "mystyle",
            "colour": "#00929F"
	},
	{	type:'othercss',
			"message0": '%1 : %2',
			"args0": [
				{
					"type": "field_input",
					"name": "property",
					"text": "list-style-type"
				},
				{
					"type": "field_input",
					"name": "value",
					"text": "circle"
				}
			],
			"previousStatement": "stylecontent",
			"nextStatement": "stylecontent",
			"colour": "#00929F"
	},
	{	type:'textdecoration',
            "message0": "text-decoration : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["overline", "overline"],
                        ["underline", "underline"],
						["under&over", "underline overline"],
						["none", "none"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'texttransform',
            "message0": "text-transform : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["capitalize", "capitalize"],
                        ["uppercase", "uppercase"],
                        ["lowercase", "lowercase"],
                        ["none", "none"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'textindent',
            "message0": "text-indent : %1px",
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "25"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'textalign',
            "message0": "text-align : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["center", "center"],
                        ["left", "left"],
                        ["right", "right"],
                        ["justify", "justify"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'fontfamily',
            "message0": 'font-family : %1',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["Arial", "Arial"],
                        ["Courier", "Courier"],
                        ["Comic sans Ms", "Comic sans Ms"],
                        ["Cursive Standard", "Cursive Standard"],
                        ["Georgia", "Georgia"],
                        ["Harrington", "Harrington"],
                        ["Open Dyslexic", "OpenDyslexic"],
                        ["Orange Juice", "Orange Juice"],
                        ["Papyrus", "Papyrus"],
                        ["Script", "Script"],
                        ["Trebuchet Ms", "Trebuchet Ms"],
                        ["Times New Roman", "Times New Roman"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'fontsize',
            "message0": 'font-size : %1 px',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "16"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'fontweight',
            "message0": "font-weight : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "weight",
                    "options": [
                        [
                            "normal",
                            "normal"
                        ],
                        [
                            "bold",
                            "bold"
                        ],
                        [
                            "bolder",
                            "bolder"
                        ],
                        [
                            "lighter",
                            "lighter"
                        ],
                        [
                            "initial",
                            "initial"
                        ],
                        [
                            "inherit",
                            "inherit"
                        ]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'fontstyle',
            "message0": "font-style : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["italic", "italic"],
                        ["normal", "normal"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'fontweight',
            "message0": "font-weight : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["bold", "bold"],
                        ["normal", "normal"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"		
	},
	{	type:'tblr',
            "message0": '%1 : %2px',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "direction",
                    "options": [
                        [
                            "top",
                            "top"
                        ],
                        [
                            "right",
                            "right"
                        ],
                        [
                            "bottom",
                            "bottom"
                        ],
                        [
                            "left",
                            "left"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "15"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'grid',
            "message0": '%1 : %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "direction",
                    "options": [
                        ["grid","grid"],
						["grid-area","grid-area"],
						["grid-template-columns","grid-template-columns"],
						["grid-template-rows","grid-template-rows"],
						["grid-template-areas","grid-template-areas"],
						["grid-template","grid-template"],
						["grid-auto-columns","grid-auto-columns"],
						["grid-auto-rows","grid-auto-rows"],
						["grid-auto-flow","grid-auto-flow"],
						["grid-row-start","grid-row-start"],
						["grid-row-end","grid-row-end"],
						["grid-row","grid-row"],
						["grid-column-start","grid-column-start"],
						["grid-column-end","grid-column-end"],
						["grid-column","grid-column"],
						["gap","gap"]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'display',
            "message0": 'display : %1',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        [
                            "block",
							"block"
                        ],
                        [
                            "inline",
							"inline"
                        ],
                        [
                            "inline-block",
							"inline-block"
                        ],
                        [
                            "grid",
							"grid"
                        ],
                        [
                            "none",
							"none"
                        ]
					]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'margin',
            "message0": '%1 : %2px',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "direction",
                    "options": [
                        [
                            "margin",
                            "margin"
                        ],
                        [
                            "margin-top",
                            "margin-top"
                        ],
                        [
                            "margin-right",
                            "margin-right"
                        ],
                        [
                            "margin-bottom",
                            "margin-bottom"
                        ],
                        [
                            "margin-left",
                            "margin-left"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "15"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'padding',
            "message0": '%1 : %2px',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "direction",
                    "options": [
                        [
                            "padding",
                            "padding"
                        ],
                        [
                            "padding-top",
                            "padding-top"
                        ],
                        [
                            "padding-right",
                            "padding-right"
                        ],
                        [
                            "padding-bottom",
                            "padding-bottom"
                        ],
                        [
                            "padding-left",
                            "padding-left"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "15"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'widthheightnum',
            "message0": '%1 : %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "option",
                    "options": [
                        [
                            "width",
                            "width"
                        ],
                        [
                            "height",
                            "height"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "size",
                    "text": "100%"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'float',
            "message0": 'float : %1',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ['right', 'right'],
                        ['left', 'left'],
                        ['none', 'none'],
                        ['initial', 'initial'],
                        ['inherit', 'inherit']
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'verticalalign',
            "message0": "vertical-align : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "align",
                    "options": [
                        [
                            "top",
                            "top"
                        ],
						[
                            "baseline",
                            "baseline"
                        ],
                        [
                            "text-top",
                            "text-top"
                        ],
                        [
                            "middle",
                            "middle"
                        ],
                        [
                            "bottom",
                            "bottom"
                        ],
                        [
                            "text-bottom",
                            "text-bottom"
                        ]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'position',
            "message0": "position : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "align",
                    "options": [
                        [
                            "static",
                            "static"
                        ],
                        [
                            "relative",
                            "relative"
                        ],
                        [
                            "absolute",
                            "absolute"
                        ],
                        [
                            "fixed",
                            "fixed"
                        ],
                        [
                            "sticky",
                            "sticky"
                        ]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'color-new',
            "message0": 'color : %1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "value",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'hex_picker',
            "message0": "# %1",
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "ffffff"
                }
            ],
            "output": "color",
            "colour": "#00929F"
	},
	{	type:'rgba_picker',
            "message0": "rgba ( %1,%2,%3,%4 )",
            "args0": [
                {
                    "type": "field_number",
                    "name": "r",
                    "value": 255,
                    "min": 0,
                    "max": 255,
                    "precision": 1
                },
                {
                    "type": "field_number",
                    "name": "g",
                    "value": 255,
                    "min": 0,
                    "max": 255,
                    "precision": 1
                },
                {
                    "type": "field_number",
                    "name": "b",
                    "value": 255,
                    "min": 0,
                    "max": 255,
                    "precision": 1
                },
                {
                    "type": "field_number",
                    "name": "a",
                    "value": 1,
                    "min": 0,
                    "max": 1
                }
            ],
            "output": "color",
            "colour": "#00929F"
	},
	{	type:'color_picker',
            "message0": "%1",
            "args0": [
                {
                    "type": "field_colour",
                    "name": "value",
                    "colour": "#ffffff"
                }
            ],
            "output": null,
            "colour": "#00929F"
	},
	{	type:'color_name',
            "message0": "%1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "name",
                    "options": [["black", "#000000"],
						["silver", "#c0c0c0"],
						["gray", "#808080"],
						["white", "#ffffff"],
						["maroon", "#800000"],
						["red", "#ff0000"],
						["purple", "#800080"],	
						["fuchsia", "#ff00ff"],
						["green", "#008000"],
						["lime", "#00ff00"],
						["olive", "#808000"],
						["yellow", "#ffff00"],
						["navy", "#000080"],
						["blue", "#0000ff"],
						["teal", "#008080"],
						["aqua", "#00ffff"]]
                }
            ],
            "output": null,
            "colour": "#00929F"
	},
	{	type:'bgcolor-new',
            "message0": 'background-color : %1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "value",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'background',
            "message0": 'background : %1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "url('media/beige.gif') repeat"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'borderedge-new',
            "message0": "%1 : %2px %3 %4",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "edge",
                    "options": [
                        [
                            "border",
                            "border"
                        ],
                        [
                            "border-top",
                            "border-top"
                        ],
                        [
                            "border-bottom",
                            "border-bottom"
                        ],
                        [
                            "border-left",
                            "border-left"
                        ],
                        [
                            "border-right",
                            "border-right"
                        ]
                    ]
                },
                {
                    "type": "field_number",
                    "name": "width",
                    "value": 1
                },
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "solid",
                            "solid"
                        ],
                        [
                            "dotted",
                            "dotted"
                        ],
                        [
                            "dashed",
                            "dashed"
                        ],
                        [
                            "double",
                            "double"
                        ],
                        [
                            "groove",
                            "groove"
                        ],
                        [
                            "ridge",
                            "ridge"
                        ],
                        [
                            "inset",
                            "inset"
                        ],
                        [
                            "outset",
                            "outset"
                        ],
						[
                            "none",
                            "none"
                        ]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "color",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'borderrad',
            "message0": 'border-radius : %1px',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "10"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'bordercollapse',
            "message0": 'border-collapse : %1',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        [
                            "collapse",
                            "collapse"
                        ],
                        [
                            "separate",
                            "separate"
                        ]
					]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
	},
	{	type:'B_size',
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["is-small", "is-small"],
                        ["is-medium", "is-medium"],
                        ["is-large", "is-large"],
                        ["is-1", "is-1"],
                        ["is-2", "is-2"],
                        ["is-3", "is-3"],
                        ["is-4", "is-4"],
                        ["is-5", "is-5"],
                        ["is-6", "is-6"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
	},
	{	type:'B_table',
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["table", "table"],
                        ["table is-bordered", "table is-bordered"],
                        ["table is-striped", "table is-striped"],
                        ["table is-hoverable", "table is-hoverable"],
                        ["table is-fullwidth", "table is-fullwidth"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
	},
	{	type:'B_type',
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["block", "block"],
                        ["box", "box"],
                        ["button", "button"],
                        ["buttons", "buttons"],
                        ["content", "content"],
                        ["field", "field"],
                        ["has-addons", "has-addons"],
                        ["icon", "icon"],
                        ["icon-text", "icon-text"],
                        ["title", "title"],
                        ["subtitle", "subtitle"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
	},
	{	type:'B_class_dropdown',
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["dropdown", "dropdown"],
                        ["dropdown-content", "dropdown-content"],
                        ["dropdown-item", "dropdown-item"],
                        ["dropdown-menu", "dropdown-menu"],
                        ["dropdown-trigger", "dropdown-trigger"],
												["is-hoverable", "is-hoverable"],
												["is-up", "is-up"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
	},
	{	type:'B_class_type',
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["is-disabled", "is-disabled"],
                        ["is-inverted", "is-inverted"],
                        ["is-loading", "is-loading"],
                        ["is-outlined", "is-outlined"],
												["is-rounded", "is-rounded"],
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
	},
	{	type:'B_color',
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["is-black", "is-black"],
                        ["is-danger", "is-danger"],
                        ["is-info", "is-info"],
                        ["is-light", "is-light"],
                        ["is-link", "is-link"],
                        ["is-primary", "is-primary"],
                        ["is-success", "is-success"],
                        ["is-warning", "is-warning"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "color"
	},
	{	type:'B_text',
			"message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["has-text-left", "has-text-left"],
                        ["has-text-centered", "has-text-centered"],
                        ["has-text-right", "has-text-right"],
                        ["has-text-justified", "has-text-justified"],
                        ["has-text-weight-light", "has-text-weight-light"],
                        ["is-italic", "is-italic"],
                        ["has-text-weight-bold", "has-text-weight-bold"],
                        ["has-text-danger", "has-text-danger"],
                        ["has-text-info", "has-text-info"],
                        ["has-text-link", "has-text-link"],
                        ["has-text-primary", "has-text-primary"],
                        ["has-text-succes", "has-text-succes"],
                        ["has-text-warning", "has-text-warning"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
	},
	{	"type": 'B_aria',
            "message0": '%1=%2 %3',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["aria-haspopup", "aria-haspopup"],
                        ["aria-controls", "aria-controls"]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "true"
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
	}
])

/////////////////  GENERATOR  /////////////////
// CSS
Blockly.html.forBlock['block_style'] = function (block) {
    var statement = Blockly.html.statementToCode(block, 'content');
    return '<style>\n' + statement + '</style>\n'
}
Blockly.html.forBlock['cssitem'] = function (block) {
    var stmt = Blockly.html.statementToCode(block, 'content');
    var mod = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    mod = mod.split(' ').join(''); // remove spaces
//    var selector = CSSEscape(block.getFieldValue('selector'));
    var selector = block.getFieldValue('selector');
    return selector + mod + '{\n' + stmt + '}\n';
}
Blockly.html.forBlock['othercss'] = function(block){
	var property = block.getFieldValue('property');
	var value = block.getFieldValue('value');
	var code = property+': '+value+';\n';
	return code;
}
// Text 
Blockly.html.forBlock['textdecoration'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-decoration: ${value};\n`;
}
Blockly.html.forBlock['texttransform'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-transform: ${value};\n`;
}
Blockly.html.forBlock['textindent'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-indent: ${value}px;\n`;
}
Blockly.html.forBlock['textalign'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-align: ${value};\n`;
}
Blockly.html.forBlock['fontfamily'] = function (block) {
    var value = block.getFieldValue('value');
    return "font-family: '" + value + "';\n";
}
Blockly.html.forBlock['fontsize'] = function (block) {
    var value = block.getFieldValue('value');
//    return 'font-size: ' + fullEscape(value) + 'px;\n';
    return 'font-size: ' + value + 'px;\n';
}
Blockly.html.forBlock['fontweight'] = function (block) {
    var weight = block.getFieldValue('weight');
    return `font-weight: ${weight};\n`;
}
Blockly.html.forBlock['fontstyle'] = function (block) {
    return "font-style: "+block.getFieldValue('value')+";\n";
}
Blockly.html.forBlock['fontweight'] = function (block) {
    return "font-weight: "+block.getFieldValue('value')+";\n";
}

//  arrangement  
Blockly.html.forBlock['tblr'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
//    return direction + ': ' + fullEscape(value) + 'px;\n';
    return direction + ': ' + value + 'px;\n';
}
Blockly.html.forBlock['grid'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
    return direction + ': ' + value + ';\n';
}
Blockly.html.forBlock['display'] = function (block) {
    var content = block.getFieldValue('content');
//    return 'display: ' + fullEscape(content) + ';\n';
    return 'display: ' + content + ';\n';
}
Blockly.html.forBlock['margin'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
//    return direction + ': ' + fullEscape(value) + 'px;\n';
    return direction + ': ' + value + 'px;\n';
}
Blockly.html.forBlock['padding'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
//    return direction + ': ' + fullEscape(value) + 'px;\n';
    return direction + ': ' + value + 'px;\n';
}
Blockly.html.forBlock['widthheightnum'] = function (block) {
    var option = block.getFieldValue('option');
    var size = block.getFieldValue('size');
//    return option + ': ' + fullEscape(size) + ';\n';
    return option + ': ' + size + ';\n';
}
Blockly.html.forBlock['float'] = function (block) {
    return 'float: ' + block.getFieldValue('content') + ';\n';
}
Blockly.html.forBlock['verticalalign'] = function (block) {
    var align = block.getFieldValue('align');
    return `vertical-align: ${align};\n`;
}
Blockly.html.forBlock['position'] = function (block) {
    return "position: "+block.getFieldValue('align')+";\n"
}
// Color
Blockly.html.forBlock['color-new'] = function (block) {
    var value = Blockly.html.statementToCode(block, 'value', Blockly.html.ORDER_ATOMIC).trim();
    return 'color: ' + value + ';\n';
}
Blockly.html.forBlock['hex_picker'] = function (block) {
//    return "#" + hexEscape(block.getFieldValue('value'));
    return "#" + block.getFieldValue('value');
}
Blockly.html.forBlock['rgba_picker'] = function (block) {
    var r = block.getFieldValue('r');
    var g = block.getFieldValue('g');
    var b = block.getFieldValue('b');
    var a = block.getFieldValue('a');
//    var r = looseEscape(block.getFieldValue('r'));
//    var g = looseEscape(block.getFieldValue('g'));
//    var b = looseEscape(block.getFieldValue('b'));
//    var a = looseEscape(block.getFieldValue('a'));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
Blockly.html.forBlock['color_picker'] = function (block) {
//    return looseEscape(block.getFieldValue('value'));
    return block.getFieldValue('value');
}
Blockly.html.forBlock['color_name'] = function (block) {
    return block.getFieldValue('name');
}
Blockly.html.forBlock['bgcolor-new'] = function (block) {
    var value = Blockly.html.statementToCode(block, 'value', Blockly.html.ORDER_ATOMIC).trim();
    return 'background-color: ' + value + ';\n';
}
Blockly.html.forBlock['background'] = function (block) {
    var val = block.getFieldValue('value');
    return 'background: ' + val + ';\n';
}

// Border
Blockly.html.forBlock['borderedge-new'] = function (block) {
    var edge = block.getFieldValue('edge');
//    var width = fullEscape(block.getFieldValue('width'));
    var width = block.getFieldValue('width');
    var type = block.getFieldValue('type');
    var color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim();
    return `${edge}: ${width}px ${type} ${color};\n`;
}
Blockly.html.forBlock['borderrad'] = function (block) {
    var content = block.getFieldValue('content');
//    return 'border-radius: ' + fullEscape(content) + 'px;\n';
    return 'border-radius: ' + content + 'px;\n';
}
Blockly.html.forBlock['bordercollapse'] = function (block) {
    var content = block.getFieldValue('content');
//    return 'border-collapse: ' + fullEscape(content) + ';\n';
    return 'border-collapse: ' + content + ';\n';
}

// Bootstrap
Blockly.html.forBlock['B_text'] = function (block) {
    return block.getFieldValue('content')+' '+Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE)
}
Blockly.html.forBlock['B_class_type'] = function (block) {
    return block.getFieldValue('content')+' '+Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE)
}
Blockly.html.forBlock['B_class_dropdown'] = function (block) {
    return block.getFieldValue('content')+' '+Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE)
}
Blockly.html.forBlock['B_type'] = function (block) {
    return block.getFieldValue('content')+' '+Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE)
}
Blockly.html.forBlock['B_size'] = function (block) {
    return block.getFieldValue('content')+' '+Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE)
}
Blockly.html.forBlock['B_table'] = function (block) {
    return block.getFieldValue('content')+' '+Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE)
}
Blockly.html.forBlock['B_color'] = function (block) {
    return block.getFieldValue('content')+' '+Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE)
}
Blockly.html.forBlock['B_aria'] = function (block) {
    return block.getFieldValue('content')+'="'+block.getFieldValue('value')+'" '+Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE)
}
