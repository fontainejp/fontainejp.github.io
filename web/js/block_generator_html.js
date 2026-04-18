'use strict';

var nameFile = "";

/////////////////  Blocks  /////////////////

Blockly.defineBlocksWithJsonArray([
	{	"type": 'link_head',
            "message0": "<link rel=stylesheet href=%1>",
			"args0": [
                {
                    "type": "field_dropdown",
                    "name": "link",
                    "options": [
                        [
                            "Fontawesome",
							"css/fontawesome.css"
                        ],
                        [
                            "Bootstrap",
                            "css/bootstrap.min.3.3.6.css"
						]
                    ]
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
	},
	{	"type": 'balise',
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
	},
	{	"type": "html",
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
	},
	{	"type": 'head',
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
	},
	{	"type": 'title',
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
	},
	{	"type": 'body',
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
	},
	{	"type": 'linebreak',
            "message0": '<br>',
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#4a235a"		
	},
	{	"type": 'hline',
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
	},
	{	"type": 'paragraph',
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
	},
	{	"type": 'header',
            "message0": '<h%1> %2 %3 </>',
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
	},
	{	"type": 'divider',
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
	},
	{	"type": 'blockquote',
            "message0": '<blockquote> %1 %2 </blockquote>',
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
	},
	{	"type": 'textmod',
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
	},
	{	"type": 'emptytext',
            "message0": '%1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "abc"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#BBBBBB"		
	},
	{   "type": "text",
        message0: "%1 %2 %3",
        args0: [{
			"type": "field_image",
			"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHw647ilMAAAAJmlUWHRDb21tZW50AAAAAABDcmVhdGVkIHdpdGggR0lNUCBvbiBhIE1hY5XkX1sAAAJ7SURBVEjHtZZNSFRRGIbfe/E6FjU1Vs6kwxBkiRr9EBG6MKyEWkRQFrYIoY2LoJUrFwVBP9SiIFq0NKIgKKJNkCTCBDYLhQLLKLCgBg0SorI/4W0xc++cc+aenxa9q3vOfXj5zved75wDWMQUr/EyfTiJSzjE+6yzg/s4S5Lc6WTbwWmS5EEz1sjbDDXC5Q4rCzXJBj3YS1knjLa7OSPRF+OxJIcV2yK7taYJnqWqY3FgE8cV7AxXGFIwotBXuCYOXM/nElZguyEFGSWIKXbGgxvLdQ11krX/YHueS+PBnBJtl7Fgq5iX6F4dmJSyVeRmo22C9yTbbj16QbLdZtm3A5Jtjx7slMA9FtuWckeW1KcHkxwVwHMWWzkNdwwFZr8ATjJjMd4rJa3ZVN9x1+YFuIyPBHrIhO4XwLfMWYy3SNVoi6d8gD4OCzMv8clyOu4SvsfwUWuMNLYKM0+9n+ajHOLWmsV3vTEQCDOvLPHWY4MwynuL8VgNgCzEHrvBowBqAUxjFIWq+D38EkbX2VGm3+MJ8t6CuLgu6lXkIfm+41rlPJHVL+xpozFJ3hUvRzZUndayHjNVybFZR3BcGAVIGekeDIYxbJL6Pk5TbIoizhpTEe1tH8BnzFlibsO6Si6QsK5xe8nYd0CjiDGPGSu9smT8xQFNR19/sODyePEB7xseWLmv0TZexE1HYwBj1iyL/yfwwkInQuN3eGZBi0LrfcCEhS5USr3DuH2Gle5rVh5Ush5Kr03lcqT5hOYBg7F6u/OUxrbd6dFoeouwlZcU7CpXa0/mHE8rPXursjav+gZGI9IIEOAHXnvzlmuqBhlkESDAb7zx5vD/9RdeRqsZWptG5gAAAABJRU5ErkJggg==",
			"width": 12,
			"height": 12
		},
		{
            type: "field_input",
            name: "TEXT",
            text: "abc"
        },
		{
			"type": "field_image",
			"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHjaJ96CTAAACc0lEQVRIx7WWz0tUURTHv28wHadMGquZfmCFlpUwElJT0gzpGBQhSrgoiIQ2QUF/QIuCIIsKEtoHUtQiimgVPGjTwn5QVJAIGbVQ0U21i+lF3xYz87z3ee89r0VndQ983vede849517gP5mnOsxgK+oRIMAM5r3f7k+ZRgcaESDAAua8sg1r5V2qNs8LbLWKruYYdbvGHSawSLMNG2U7OW2kz0XBHO02YNjbtJU+rYJJPnEIf2G7JpvgOF22exEt0G23NeEugX7MBgBIAMgLJ6ebGxVvvUDvxeaacFlAc+hWvIxAZ3CgJizbSdaF6yaRHuKKuMIpLAvXCyK9Bc0V4R8x0HS4nhXpMv5UhN/EQBdb/ysmxSy3AAnAm8SogDaA4XCZxZgonK7l+AZ8J/odgeLdwYPYQ471HHEc+vdcF+m+o5xz8EVtbDKFAkrYBOAXgBOK0gcc8WYioSSRRx+2V+kS1F/v8V7b93BGiWCKG4QdD0T3ZznHrENBcT/hm5BLdRYHrs5bjqzi+d5PZ7xJ7Ffcd44m4k6tGF1CIvQJfdgV8ZCyforPQiL60RauX+CVPYJ27TD1C/Fm+VahR1xn+r4CPqwMbofwZYV+xpV28Jh2V3cIsiWtGj128KD1cjTRu7SkXbGDvZqskAbmNFnfmgYOa7LP2eKULUbmifl5wxRHNXCCWefQOqvRU9xmBnv48R9kO/kyEm2bCVvDm5Gx53OVVbSZFyP0hHFE8fiSaXrJXjL2LpnD45aS8WrkQdXnLNipOI/GCrpWachb9hRU6Sb6IX2P7lcRB6t13RfrEstXO/KQjCb5iOfZGPN2TPC6vDPgL0FuY1v91jVtAAAAAElFTkSuQmCC",
			"width": 12,
			"height": 12
		}],
        output: null,
        tooltip: "un texte, un mot, une phrase...",
		colour: "#bbbbbb"
    }, 
	{	"type": 'script_head',
            "message0": "<script src=%1> </script>",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "script",
                    "options": [
                        [
                            "jQuery",
                            '<script src="js/jquery.min.4.js"></script>\n'
                        ],
                        [
                            "Bootstrap",
                            '<script src="js/bootstrap.min.3.3.6.js"></script>\n'
                        ],
                        [
                            'openStreetMap',
                            '<link rel="stylesheet" href="css/map.css">\n<link rel="stylesheet" href="css/routing.css">\n<script src="js/map/map.js"></script>\n<script src="js/map/esri-leaflet.js"></script>\n<script src="js/map/esri-leaflet-geocoder.js"></script>\n<script src="js/map/routing.js"></script>\n<script src="js/map/html-overlay.js"></script>\n'
                        ],
                        [
                            'Canvas',
                            '<link rel="stylesheet" href="css/paint.css">\n<script src="js/paint.js"></script>\n'
                        ]
                    ]
                }
            ],
			"previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
	},
	{	"type": 'map',
            "message0": '<div id=%1> </div> %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "id",
                    "text": "map"
                },
				{
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#787746"
	},
	{	"type": 'canvas',
            "message0": '<canvas width=%1 height=%2> </canvas>%3',
            "args0": [
                {
                    "type": "field_input",
                    "name": "width",
                    "text": "400"
                },
                {
                    "type": "field_input",
                    "name": "height",
                    "text": "300"
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
	},
	{	"type": 'stylearg',
            "message0": 'style%1 %2',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "stylecontent"

                }
            ],
            "colour": "#727272",
            "output": "attributes"
	},
	{	"type": 'progress',
            "message0": '<progress value=%1> </progress> %2',
            "args0": [
				{
                    "type": "field_input",
                    "name": "value",
                    "text": "50"
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
	},
	{	"type": 'icon',
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
	},
	{	"type": 'button',
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
	},
	{	"type": 'span',
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
	},
	{	"type": 'link',
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
	},
	{	"type": 'attr_title',
		"message0": 'title=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "output": "attributes",
            "colour": "#727272"
	},
	{	"type":'image',
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
	},
	{	"type": 'video_file',
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
	},
	{	"type": 'videos',
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
	},
	{	"type": 'listitem',
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
	},
	{	"type": 'audios',
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
	},
	{	"type": 'unorderedlist',
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
	},
	{	"type": 'orderedlist',
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
	},
	{	"type": 'class',
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
	},
	{	"type": 'class_',
            "message0": 'class=%1',
            "args0": [{
				  "type": "input_value",
				  "name": "in"
				}],
            "colour": "#727272",
            "output": "attributes"
	},
	{	"type": 'id',
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
	},
	{	"type": 'emptyarg',
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
	},
	{	"type": 'tabindex',
            "message0": 'tabindex=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "output": "attributes",
            "colour": "#727272"
	},
	{	"type": 'role',
            "message0": 'role=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "output": "attributes",
            "colour": "#727272"
	},
	{	"type": 'selected',
            "message0": 'selected%1',
            "args0": [
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "output": "attributes",
            "colour": "#727272"
	},
	{	"type": 'form',
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
	},
	{	"type": 'input',
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
                    "text": "ok"
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
	},
	{	"type": 'label',
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
	},
	{	"type": 'select',
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
	},
	{	"type": 'option',
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
	},
	{	"type": 'textarea',
            "message0": '<textarea rows=%1 cols=%2> </textarea>%3',
            "args0": [
                {
                    "type": "field_input",
                    "name": "width",
                    "text": "16"
                },
                {
                    "type": "field_input",
                    "name": "height",
                    "text": "40"
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
	},
	{	"type": 'table',
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
	},
	{	"type": 'tablerow',
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
	},
	{	"type": 'tableheading',
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
	},
	{	"type": 'tabledata',
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
	}
])

//////////////////////// GENERATOR ////////////////////////

// STRUCTURE
Blockly.html.forBlock['link_head'] = function (block) {
	return '<link rel="stylesheet" href="'+block.getFieldValue("link")+'">\n'
}
Blockly.html.forBlock['script_head'] = function (block) {
	return block.getFieldValue("script")
}
Blockly.html.forBlock['balise'] = function (block) {
	var text_content = block.getFieldValue('_text');
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var code = '<' + text_content +  (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</' + text_content + '>\n';
    return code
}
// balise set 
Blockly.Blocks['balise_set'] = {
    init:function(){
		this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("code html/css/js"), "_text");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4a235a")}
}
Blockly.html.forBlock['balise_set'] = function (block) {
    return block.getFieldValue('_text') + '\n'
}
// balise get 
Blockly.Blocks['balise_get'] = {
    init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("code html/css/js"), "_text");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#4a235a")}
}
Blockly.html.forBlock['balise_get'] = function (block) {
    return block.getFieldValue('_text')
}
Blockly.html.forBlock['html'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var code = '<!DOCTYPE html>\n<html lang="fr">\n' + statements_content + '</html>';
    return code
}
Blockly.html.forBlock['head'] = function (block) {
    var text_content = Blockly.html.statementToCode(block, 'content');
    var code = '<head>\n' + text_content + '</head>\n';
    return code
}
Blockly.html.forBlock['title'] = function (block) {
//	nameFile = escapeTitle(block.getFieldValue('_text'));
	nameFile = block.getFieldValue('_text');
    return '<title>' + nameFile + '</title>\n<meta charset="utf-8">\n';
}
Blockly.html.forBlock['body'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var code = '<body' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</body>\n';
    return code
}
Blockly.html.forBlock['linebreak'] = function (block) {
    return "<br>\n";
}
Blockly.html.forBlock['hline'] = function (block) {
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return "<hr" + (block_modifier ? " " + block_modifier.trim() : "") + ">\n";
}

// EN BLOC 
Blockly.html.forBlock['paragraph'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier');
    return '<p' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</p>\n';
}
Blockly.html.forBlock['header'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var header_size = block.getFieldValue("size");
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    return '<h' + header_size + ' ' + block_modifier.trim() + '>\n' + statements_content + '</h' + header_size + '>\n';
}
Blockly.html.forBlock['map'] = function (block) {
	var div_id = block.getFieldValue("id");
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return "<div id=\"" + div_id +"\""+ (block_modifier ? " " + block_modifier.trim() : "") + "></div>\n";
}
Blockly.html.forBlock['divider'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<div' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</div>\n';
    return code
}
Blockly.html.forBlock['canvas'] = function (block) {
	var val_content = Blockly.html.statementToCode(block, "content", Blockly.html.ORDER_ATOMIC).trim();
    return '<canvas id="jcanvas" width="'+block.getFieldValue("width")+'" height="'+block.getFieldValue("height")+'" '+val_content+'></canvas>\n'
}
Blockly.html.forBlock['blockquote'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<blockquote' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</blockquote>\n';
    return code
}

// EN LIGNE 
Blockly.html.forBlock['link'] = function (block) {
    var text = Blockly.html.statementToCode(block, 'content');
//    var link = escapeTitle(block.getFieldValue('target'));
    var link = block.getFieldValue('target');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<a href="' + link + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + text + '</a>\n';
}
Blockly.html.forBlock['span'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<span' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</span>\n';
}
Blockly.html.forBlock['textmod'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var type = block.getFieldValue("type");
    return '<' + type + '>\n' + content + '</' + type + '>\n';
}
Blockly.html.forBlock['button'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<button' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</button>\n';
    return code
} 
Blockly.html.forBlock['icon'] = function (block) {
    var text_content = block.getFieldValue('content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<i class="fa fa-' + text_content + '"'+ (block_modifier ? " " + block_modifier.trim() : "") +'></i>\n';
    return code
}
Blockly.html.forBlock['progress'] = function (block) {
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<progress value="' + block.getFieldValue('value') + '" max="100"'+ (block_modifier ? " " + block_modifier.trim() : "") +'></progress>\n';
    return code
}

// MODIFIERS 
Blockly.html.forBlock['stylearg'] = function (block) {
    var statement = Blockly.html.statementToCode(block, 'content').trim();
    return 'style="' + statement + '" ';
}
Blockly.html.forBlock['attr_title'] = function (block) {
    var value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
//    return 'title="' + fullEscape(value) + '"' + argument;
    return 'title="' + value + '"' + argument;
}
Blockly.html.forBlock['class'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
//    return 'class="' + looseEscape(text_content) + '"' + argument ;
    return 'class="' + text_content + '"' + argument ;
}
Blockly.html.forBlock['class_'] = function (block) {
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'class="' + argument + '"';
}
Blockly.html.forBlock['id'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
//    return 'id="' + looseEscape(text_content) + '"' + argument ;
    return 'id="' + text_content + '"' + argument ;
}
Blockly.html.forBlock['emptyarg'] = function (block) {
    var property = block.getFieldValue('property');
    var value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
//    return property + '="' + looseEscape(value) + '"' + argument ;
    return property + '="' + value + '"' + argument ;
}
Blockly.html.forBlock['tabindex'] = function (block) {
    var value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
//    return 'tabindex="' + fullEscape(value) + '"' + argument;
    return 'tabindex="' + value + '"' + argument;
}
Blockly.html.forBlock['selected'] = function (block) {
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return ' selected' + argument;
}
Blockly.html.forBlock['role'] = function (block) {
    var value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
//    return 'role="' + fullEscape(value) + '"' + argument;
    return 'role="' + value + '"' + argument;
}

// TEXT
Blockly.html.forBlock['emptytext'] = function (block) {
    var text_content = block.getFieldValue('content');
//    return looseEscape(text_content)+"\n"
    return text_content+" \n"
}
Blockly.html.forBlock['text'] = function (block) {
    return '"'+block.getFieldValue('TEXT')+'"'
}
Blockly.Blocks["text_2"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#bbbbbb");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHw647ilMAAAAJmlUWHRDb21tZW50AAAAAABDcmVhdGVkIHdpdGggR0lNUCBvbiBhIE1hY5XkX1sAAAJ7SURBVEjHtZZNSFRRGIbfe/E6FjU1Vs6kwxBkiRr9EBG6MKyEWkRQFrYIoY2LoJUrFwVBP9SiIFq0NKIgKKJNkCTCBDYLhQLLKLCgBg0SorI/4W0xc++cc+aenxa9q3vOfXj5zved75wDWMQUr/EyfTiJSzjE+6yzg/s4S5Lc6WTbwWmS5EEz1sjbDDXC5Q4rCzXJBj3YS1knjLa7OSPRF+OxJIcV2yK7taYJnqWqY3FgE8cV7AxXGFIwotBXuCYOXM/nElZguyEFGSWIKXbGgxvLdQ11krX/YHueS+PBnBJtl7Fgq5iX6F4dmJSyVeRmo22C9yTbbj16QbLdZtm3A5Jtjx7slMA9FtuWckeW1KcHkxwVwHMWWzkNdwwFZr8ATjJjMd4rJa3ZVN9x1+YFuIyPBHrIhO4XwLfMWYy3SNVoi6d8gD4OCzMv8clyOu4SvsfwUWuMNLYKM0+9n+ajHOLWmsV3vTEQCDOvLPHWY4MwynuL8VgNgCzEHrvBowBqAUxjFIWq+D38EkbX2VGm3+MJ8t6CuLgu6lXkIfm+41rlPJHVL+xpozFJ3hUvRzZUndayHjNVybFZR3BcGAVIGekeDIYxbJL6Pk5TbIoizhpTEe1tH8BnzFlibsO6Si6QsK5xe8nYd0CjiDGPGSu9smT8xQFNR19/sODyePEB7xseWLmv0TZexE1HYwBj1iyL/yfwwkInQuN3eGZBi0LrfcCEhS5USr3DuH2Gle5rVh5Ush5Kr03lcqT5hOYBg7F6u/OUxrbd6dFoeouwlZcU7CpXa0/mHE8rPXursjav+gZGI9IIEOAHXnvzlmuqBhlkESDAb7zx5vD/9RdeRqsZWptG5gAAAABJRU5ErkJggg==", 12, 12))
            .appendField(new Blockly.FieldTextInput("abc"), "TEXT1")
			.appendField(",")
            .appendField(new Blockly.FieldTextInput("def"), "TEXT2")
			.appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHjaJ96CTAAACc0lEQVRIx7WWz0tUURTHv28wHadMGquZfmCFlpUwElJT0gzpGBQhSrgoiIQ2QUF/QIuCIIsKEtoHUtQiimgVPGjTwn5QVJAIGbVQ0U21i+lF3xYz87z3ee89r0VndQ983vede849517gP5mnOsxgK+oRIMAM5r3f7k+ZRgcaESDAAua8sg1r5V2qNs8LbLWKruYYdbvGHSawSLMNG2U7OW2kz0XBHO02YNjbtJU+rYJJPnEIf2G7JpvgOF22exEt0G23NeEugX7MBgBIAMgLJ6ebGxVvvUDvxeaacFlAc+hWvIxAZ3CgJizbSdaF6yaRHuKKuMIpLAvXCyK9Bc0V4R8x0HS4nhXpMv5UhN/EQBdb/ysmxSy3AAnAm8SogDaA4XCZxZgonK7l+AZ8J/odgeLdwYPYQ471HHEc+vdcF+m+o5xz8EVtbDKFAkrYBOAXgBOK0gcc8WYioSSRRx+2V+kS1F/v8V7b93BGiWCKG4QdD0T3ZznHrENBcT/hm5BLdRYHrs5bjqzi+d5PZ7xJ7Ffcd44m4k6tGF1CIvQJfdgV8ZCyforPQiL60RauX+CVPYJ27TD1C/Fm+VahR1xn+r4CPqwMbofwZYV+xpV28Jh2V3cIsiWtGj128KD1cjTRu7SkXbGDvZqskAbmNFnfmgYOa7LP2eKULUbmifl5wxRHNXCCWefQOqvRU9xmBnv48R9kO/kyEm2bCVvDm5Gx53OVVbSZFyP0hHFE8fiSaXrJXjL2LpnD45aS8WrkQdXnLNipOI/GCrpWachb9hRU6Sb6IX2P7lcRB6t13RfrEstXO/KQjCb5iOfZGPN2TPC6vDPgL0FuY1v91jVtAAAAAElFTkSuQmCC", 12, 12));
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP)
    }
}
Blockly.html.forBlock["text_2"]=function(block){
    return '"'+block.getFieldValue("TEXT1")+'", "'+block.getFieldValue("TEXT2")+'"'
}

// Table 
Blockly.html.forBlock['table'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<table' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</table>\n';
}
Blockly.html.forBlock['tablerow'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<tr' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</tr>\n';
}
Blockly.html.forBlock['tableheading'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<th' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</th>\n';
}
Blockly.html.forBlock['tabledata'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<td' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</td>\n';
}

// FORMS 
Blockly.html.forBlock['form'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<form' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</form>\n';
}
Blockly.html.forBlock['input'] = function (block) {
    var type = block.getFieldValue('type');
//    var value = looseEscape(block.getFieldValue('value'));
//    var name = looseEscape(block.getFieldValue('name'));
    var value = block.getFieldValue('value');
    var name = block.getFieldValue('name');

    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<input type="' + type + '" value="' + value + '" name="' + name + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n';
}
Blockly.html.forBlock['label'] = function (block) {
    var labelFor = block.getFieldValue('for');
    var content = Blockly.html.statementToCode(block, 'content');

    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
//    return '<label for="' + looseEscape(labelFor) + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</label>\n';
	return '<label for="' + labelFor + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</label>\n';
}
Blockly.html.forBlock['select'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<select' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</select>\n';
}
Blockly.html.forBlock['option'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    return '<option' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</option>\n';
}
Blockly.html.forBlock['textarea'] = function (block) {
    return '<textarea cols="'+block.getFieldValue("height")+'" rows="'+block.getFieldValue("width")+'"'+Blockly.html.statementToCode(block, 'content', Blockly.html.ORDER_NONE)+'></textarea>\n'
}

// LIST 
Blockly.html.forBlock['orderedlist'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<ol' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</ol>\n';
    return code
}
Blockly.html.forBlock['unorderedlist'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<ul' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</ul>\n';
    return code
}
Blockly.html.forBlock['listitem'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<li' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</li>\n';
    return code
}

// MEDIA 
Blockly.html.forBlock['audios'] = function (block) {
    var source = block.getFieldValue('source');
    if (source.substr(0, 4) != "http") source = 'media/' + source;
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
Blockly.html.forBlock['videos'] = function (block) {
    var source = block.getFieldValue('source');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<object' + (block_modifier ? " " + block_modifier.trim() : "");
    code += ' data="https://www.youtube.com/embed/' + source + '"></object>\n';
    return code
}
Blockly.html.forBlock['video_file'] = function (block) {
    var source = block.getFieldValue('source');
	if (source.substr(0, 4) != "http") source = 'media/' + source;
    var loop = block.getFieldValue('loop');
    var autoplay = block.getFieldValue('autoplay');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<video' + (block_modifier ? " " + block_modifier.trim() : "");
    if (loop === "TRUE") code += ' loop' ;
    if (autoplay === "TRUE") code += ' autoplay' ;
    code += ' controls';
    var type = "video/mp4";
    code += '>\n  <source src="' + source + '" type="' + type + '">\n</video>\n';
    return code
}
Blockly.html.forBlock['image'] = function (block) {
    var source = block.getFieldValue('source');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    if (source.substr(0, 4) != "http") source = 'media/' + source;
	var code = '<img src="' + source + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n';
    return code
}
