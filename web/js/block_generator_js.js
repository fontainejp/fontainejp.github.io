'use strict';

//////////////////////// JavaScript ////////////////////////
// html arg
Blockly.defineBlocksWithJsonArray([
    {
        type: 'htmlarg',
            "message0": '%1',
            "args0": [{
                    "type": "input_statement",
                    "name": "content",
                    "check": "html"

                }],
            "colour": "#FF0000",
            "output": "" 
    }
])
Blockly.html.forBlock['htmlarg'] = function (block) {
    var statement = Blockly.html.statementToCode(block, 'content').trim();
    return ["'" + statement + "'", Blockly.html.ORDER_ATOMIC]
}
// script
Blockly.defineBlocksWithJsonArray([
	{
		"type": 'balise_js',
		"message0": '<script> %1 %2 </script>',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
					"check": "script"
                }
            ],
			"previousStatement": "header",
            "nextStatement": "header",
            "colour": "#FF0000"
	}
])
Blockly.html.forBlock['balise_js'] = function (block) {
	var code = Blockly.html.statementToCode(block, 'content', Blockly.html.ORDER_ATOMIC)
    return '<script>\n  document.addEventListener("DOMContentLoaded", function(){\n' + code + '  })\n</script>\n'
}
// jquery_event
Blockly.defineBlocksWithJsonArray([
	{
		"type": 'jquery_event',
		"message0": '%1.%2 %3 %4',
		"args0": [
			{
				"type": "field_input",
				"name": "_text",
				"text": ""
			},
			{
				"type": "field_dropdown",
				"name": "_dropdown",
				"options": [
					["change", "change"], ["click", "click"], ["mouseover", "mouseover"], ["mouseleave", "mouseleave"]
				]
			},
			{
				"type": "input_dummy"
			},
			{
				"type": "input_statement",
				"name": "_statement"
			}
		],
		"previousStatement": "script",
		"nextStatement": "script",
		"colour": "#FF0000"
	}
])
Blockly.html.forBlock['jquery_event']=function(block){
  var value_statement = Blockly.html.statementToCode(block, '_statement', Blockly.html.ORDER_ATOMIC);
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return 'document.querySelector("'+value_text+'").addEventListener("'+value_dropdown+'",function(event){\n'+value_statement+'\n});\n'
}
// jquery_get
Blockly.Blocks['jquery_get']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "_text")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["innerHTML ", "innerHTML "], ["textContent", "textContent"], ["value", "value"]]), "_dropdown");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour('#FF0000')}
}
Blockly.html.forBlock['jquery_get']=function(block){
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return 'document.querySelector("'+value_text+'").'+value_dropdown
}
// jquery_set
Blockly.defineBlocksWithJsonArray([
	{
		"type": 'jquery_set',
		"message0": '%1.%2 %3',
		"args0": [
			{
				"type": "field_input",
				"name": "_text",
				"text": ""
			},
			{
				"type": "field_dropdown",
				"name": "_dropdown",
				"options": [
					["style.display", "style.display"], ["innerHTML", "innerHTML"], ["textContent", "textContent"], ["value", "value"]
				]
			},
			{
				"type": "input_value",
				"name": "_block",
			}
		],
		"previousStatement": "script",
		"nextStatement": "script",
		"colour": "#FF0000"
	}
])
Blockly.html.forBlock['jquery_set']=function(block){
  var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return 'document.querySelector("'+value_text+'").'+value_dropdown+' = '+value_block+';\n'
}
// jquery_css_set
Blockly.defineBlocksWithJsonArray([
	{
		"type": 'jquery_css_set',
		"message0": '%1.css %2 %3',
		"args0": [
			{
				"type": "field_input",
				"name": "_text",
				"text": ""
			},
			{
				"type": "field_dropdown",
				"name": "_dropdown",
				"options": [
					["color", "color"], ["background-color", "background-color"], ["border", "border"], ["display", "display"], ["float", "float"], ["font-size", "font-size"], ["text-align", "text-align"], ["text-decoration", "text-decoration"], ["text-transform", "text-transform"]
				]
			},
			{
				"type": "input_value",
				"name": "_block",
			}
		],
		"previousStatement": "script",
		"nextStatement": "script",
		"colour": "#FF0000"
	}
])
Blockly.html.forBlock['jquery_css_set']=function(block){
  var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return 'document.querySelector("'+value_text+'").style.'+value_dropdown+'='+value_block+';\n'
}
// jquery_code
Blockly.Blocks['jquery_code']={init:function(){
    this.appendValueInput("_block")
        .appendField(new Blockly.FieldDropdown([["eval", "eval"], ["confirm", "confirm"], ["prompt", "prompt"]]), "_dropdown");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#FF0000')
}}
Blockly.html.forBlock['jquery_code']=function(block){
	var value_dropdown = block.getFieldValue('_dropdown');
	var value_text = block.getFieldValue('_text');
	var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
	return value_dropdown + "(" + value_block + ")"
}
// jquery_alert
Blockly.defineBlocksWithJsonArray([
	{
		"type": 'jquery_alert',
		"message0": 'alert %1',
		"args0": [
			{
				"type": "input_value",
				"name": "_block",
			}
		],
		"previousStatement": "script",
		"nextStatement": "script",
		"colour": "#FF0000"
	}
])
Blockly.html.forBlock['jquery_alert']=function(block){
	var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
	return 'alert('+value_block+');\n'
}
// jquery_key
Blockly.defineBlocksWithJsonArray([
	{
		"type": 'jquery_key',
	"message0": 'touche ENTRER pressée%1 %2',
    "args0": [
        {
            "type": "input_dummy"
        },
		{
            "type": "input_statement",
            "name": "_statement",
            "check": "script"
        }
    ],
    "previousStatement": "script",
    "nextStatement": "script",
    "colour": "#FF0000"
	}
])
Blockly.html.forBlock['jquery_key']=function(block){
	var value_statement = Blockly.html.statementToCode(block, '_statement', Blockly.html.ORDER_ATOMIC);
	return 'document.addEventListener("keypress", function(event) {\n  if (event.key=="Enter"){\n'+value_statement+'  }\n})\n'
}
// setInterval
Blockly.defineBlocksWithJsonArray([
	{
		"type": 'setInterval',
	"message0": '%1 %2 %3',
    "args0": [
		{
			"type": "field_dropdown",
			"name": "_dropdown",
			"options": [["setInterval", "setInterval"], 
				["setTimeout", "setTimeout"]]
		},
        {
            "type": "input_value",
			"name": "_block",
        },
		{
            "type": "input_statement",
            "name": "_statement",
            "check": "script"
        }
    ],
    "previousStatement": "script",
    "nextStatement": "script",
    "colour": "#FF0000"
	}
])
Blockly.html.forBlock['setInterval']=function(block){
	var value_dropdown = block.getFieldValue('_dropdown');
	var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
	var value_statement = Blockly.html.statementToCode(block, '_statement', Blockly.html.ORDER_ATOMIC);
	return value_dropdown + '(\n  function(){\n  '+value_statement+'},'+value_block+'\n)\n'
}
// true_false
Blockly.Blocks["true_false"] = {
    init: function() {
        this.setColour("#696969");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["vrai", "true"], ["faux", "false"]]), "BOOL");
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)
    }
}
Blockly.html.forBlock["true_false"]=function(block){
    return block.getFieldValue("BOOL")
}
// jquery_attr_set
Blockly.defineBlocksWithJsonArray([
	{	type:'jquery_attr_set',
		"message0": '%1.attr %2 %3',
		"args0": [
			{
				"type": "field_input",
				"name": "_text",
				"text": ""
			},
			{
				"type": "field_dropdown",
				"name": "_dropdown",
				"options": [
					["class", "class"], 
					["data", "data"], 
					["id", "id"], 
					["width", "width"], 
					["height", "height"], 
					["href", "href"], 
					["src", "src"], 
					["style", "style"], 
					["type", "type"]
				]
			},
			{
				"type": "input_value",
				"name": "_block",
			}
		],
		"previousStatement": "script",
		"nextStatement": "script",
		"colour": "#FF0000"
	}
])
Blockly.html.forBlock['jquery_attr_set']=function(block){
  var value_block = Blockly.html.valueToCode(block, '_block', Blockly.html.ORDER_ATOMIC);
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return 'document.querySelector("'+value_text+'").setAttribute("'+value_dropdown+'", '+value_block+');\n'
}
// jquery_attr
Blockly.Blocks['jquery_attr']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "_text")
        .appendField(".attr")
        .appendField(new Blockly.FieldDropdown([["class", "class"], ["data", "data"], ["id", "id"], ["width", "width"], ["height", "height"], ["href", "href"], ["src", "src"], ["style", "style"], ["type", "type"]]), "_dropdown");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour('#FF0000')}
}
Blockly.html.forBlock['jquery_attr']=function(block){
	var value_text = block.getFieldValue('_text');
	var value_dropdown = block.getFieldValue('_dropdown');
	return ['document.querySelector("'+value_text+'").getAttribute("' + value_dropdown + '")', Blockly.html.ORDER_ATOMIC]
}

//////////////////////// variable ////////////////////////


//////////////////////// openStreetMap ///////////////////
// BLOCKS
Blockly.defineBlocksWithJsonArray([
	{	type: 'initMap',
            "message0": '<script src="map.js"></script>',
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
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
    },
    {	type: 'viewMap',
            "message0": '<viewMap> %1 Lat, long %2 zoom %3 ',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "street",
                            "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                        ],
                        [
                            "Topo",
                            "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                        ],
                        [
                            "sattelite",
                            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        ]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "PT",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "zoom",
                    "check": "Number",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: 'marker',
            "message0": '<Marker%1> Lat, long %2 %3',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        ["auto", "media/map/automotive.png"],["star", "media/map/default.png"],["event", "media/map/event.png"],["books", "media/map/libraries.png"],
						["medical", "media/map/medical.png"],["photography", "media/map/photography.png"],["playgrounds", "media/map/playgrounds.png"],["restaurants", "media/map/restaurants.png"],
						["schools", "media/map/schools.png"],["shopping", "media/map/shopping.png"],["sports", "media/map/sports.png"],["tools", "media/map/tools.png"],
                    ]
                },
                {
                    "type": "input_value",
                    "name": "PT",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "popup"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: 'circle',
            "message0": '<Circle> Lat, long %1 radius %2 %3',
            "args0": [
                {
                    "type": "input_value",
                    "name": "PT",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "rayon",
                    "check": "Number",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "popup"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: 'polygon',
            "message0": '<Triangle> Lat1, long1 %1 Lat2, long2 %2 Lat3, long3 %3 %4',
            "args0": [
                {
                    "type": "input_value",
                    "name": "PT1",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "PT2",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "PT3",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "popup"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: 'onclick',
            "message0": '<onClick viewCoordinates>',
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: 'bindpopup',
            "message0": 'popup%1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "content"
                }
            ],
			"colour": "#154360",
            "output": "popup"
	},
    {	type: 'bindpopupHTML',
            "message0": 'popupHTML %1 %2',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html", "textcontainer"]

                }
            ],
			"colour": "#154360",
            "output": "popup"
	},
    {	type: 'geoSearch',
            "message0": '<addGeoSearch>',
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: "math_xy",
            "message0": "%1 , %2",
            "args0": [
                {
                    "type": "field_input",
                    "name": "NUMX",
                    "text": "49.5"
                },
				{
				  "type": "field_input",
                    "name": "NUMY",
                    "text": "0.15"
				}
            ],
            "output": "XY",
			"tooltip": "Coordonées : x , y",
            "colour": "#00CC00"
	},
    {	type: 'routing',
            "message0": '<Routing> Lat1, long1 %1 Lat2, long2 %2 ',
            "args0": [
                {
                    "type": "input_value",
                    "name": "PTA",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "PTB",
                    "check": "XY",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: 'scale',
            "message0": '<addScale>',
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: 'line',
            "message0": '<Distance> Lat1, long1 %1 Lat2, long2 %2 ',
            "args0": [
                {
                    "type": "input_value",
                    "name": "PTA",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "PTB",
                    "check": "XY",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: 'HTMLoverlay',
            "message0": '<insertHTML> Lat1, long1 %1 %2',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "XY"
                },
                {
                    "type": "input_statement",
                    "name": "content",
					"check": ["html", "textcontainer"]
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	},
    {	type: 'onRightclick',
            "message0": '<onRightclick viewAdress>',
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
	}
])

// GENERATOR
Blockly.html.forBlock['initMap'] = function (block) {
    return '<link rel="stylesheet" href="css/map.css">\n<link rel="stylesheet" href="css/routing.css">\n<script src="js/map.js"></script>\n<script src="js/esri-leaflet.js"></script>\n<script src="js/esri-leaflet-geocoder.js"></script>\n<script src="js/routing.js"></script>\n<script src="js/html-overlay.js"></script>\n'
}
Blockly.html.forBlock['viewMap'] = function (block) {
    var ptxy = Blockly.html.statementToCode(block, 'PT', Blockly.html.ORDER_ATOMIC).trim();
    var zoom_val = Blockly.html.statementToCode(block, 'zoom', Blockly.html.ORDER_ATOMIC).trim();
    var type = block.getFieldValue("type");
    return 'var maCarte = L.map("map").setView(['+ptxy+'], '+zoom_val+');\nL.tileLayer("'+type+'",{minZoom:1,maxZoom:20, attribution: " &copy; OpenStreetMap"}).addTo(maCarte);\n'
}
Blockly.html.forBlock['marker'] = function (block) {
    var ptxy = Blockly.html.statementToCode(block, 'PT', Blockly.html.ORDER_ATOMIC).trim();
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var type = block.getFieldValue("type");
    return 'L.marker(['+ptxy+'], {icon: L.icon({iconUrl: "'+type+'", iconAnchor: [15, 41], popupAnchor: [1, -34]})}).addTo(maCarte)'+block_modifier+';\n'
}
Blockly.html.forBlock['circle'] = function (block) {
    var ptxy = Blockly.html.statementToCode(block, 'PT', Blockly.html.ORDER_ATOMIC).trim();
    var r_val = Blockly.html.statementToCode(block, 'rayon', Blockly.html.ORDER_ATOMIC).trim();
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    return 'L.circle(['+ptxy+'], '+r_val+',{color: "yellow", fillColor: "#ff3"}).addTo(maCarte)'+block_modifier+';\n'
}
Blockly.html.forBlock['polygon'] = function (block) {
	var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var point1 = Blockly.html.statementToCode(block, 'PT1', Blockly.html.ORDER_ATOMIC).trim();
    var point2 = Blockly.html.statementToCode(block, 'PT2', Blockly.html.ORDER_ATOMIC).trim();
    var point3 = Blockly.html.statementToCode(block, 'PT3', Blockly.html.ORDER_ATOMIC).trim();
    return 'L.polygon([['+point1+'],['+point2+'],['+point3+']],{color: "green"}).addTo(maCarte)'+block_modifier+';\n'
}
Blockly.html.forBlock['onclick'] = function (block) {
    var lat_val = block.getFieldValue('lat');
    var long_val = block.getFieldValue('long');
    return 'maCarte.on("click", function (e) { L.popup().setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(maCarte)});\n'
}
Blockly.html.forBlock['bindpopup'] = function (block) {
    var value = Blockly.html.statementToCode(block, 'content', Blockly.html.ORDER_ATOMIC).trim();
    return '.bindPopup('+value+')'
}
Blockly.html.forBlock['bindpopupHTML'] = function (block) {
    var value = Blockly.html.statementToCode(block, 'content', Blockly.html.ORDER_ATOMIC).replace(/ +/g, ' ').replace(/\n/g, '');
    return ".bindPopup('"+value+"')"
}
Blockly.html.forBlock['geoSearch'] = function (block) {
    return 'L.Control.geocoder().addTo(maCarte);\n'
}
Blockly.html["math_xy"]=function(block){
    var codex = window.parseFloat(block.getFieldValue("NUMX"));
    var codey = window.parseFloat(block.getFieldValue("NUMY"));
    return codex+", "+codey
}
Blockly.html.forBlock['routing'] = function (block) {
    var ptxya = Blockly.html.statementToCode(block, 'PTA', Blockly.html.ORDER_ATOMIC).trim();
    var ptxyb = Blockly.html.statementToCode(block, 'PTB', Blockly.html.ORDER_ATOMIC).trim();
    return 'L.Routing.control({waypoints:[['+ptxya+'], ['+ptxyb+']]}).addTo(maCarte);\n$(".leaflet-routing-collapse-btn").click();\n'
}
Blockly.html.forBlock['scale'] = function (block) {
    return 'L.control.scale({imperial:false}).addTo(maCarte);\n'
}
Blockly.html.forBlock['line'] = function (block) {
    var ptxya = Blockly.html.statementToCode(block, 'PTA', Blockly.html.ORDER_ATOMIC).trim();
    var ptxyb = Blockly.html.statementToCode(block, 'PTB', Blockly.html.ORDER_ATOMIC).trim();	
	var code = "var mark1 = L.marker(["+ptxya+"], {icon: L.icon({iconUrl: 'media/map/markerA.png', iconAnchor: [25, 41], popupAnchor: [-15, -34]}), draggable: 'true'}).bindPopup('').addTo(maCarte);\nvar mark2 = L.marker(["+ptxyb+"], {icon: L.icon({iconUrl: 'media/map/markerB.png', iconAnchor: [10, 41], popupAnchor: [10, -34]}), draggable: 'true'}).bindPopup('').addTo(maCarte);\nvar ligne = L.polyline([],{color: '#FF0099'}).addTo(maCarte);\n"
	code += "mark1.on('dragend', findrag);\nmark2.on('dragend', findrag);\n"
	code += "mark1.on('drag', deplacement);\nmark2.on('drag', deplacement);\n"
    code += "function findrag(e) {\n  var mark = e.target;\n  mark.getPopup().setContent('Distance = '+Math.round(mark1.getLatLng().distanceTo(mark2.getLatLng()))+' m');\n  mark.openPopup();\n}\n";
	code += "function deplacement(e) {\n  ligne.setLatLngs([mark1.getLatLng(), mark2.getLatLng()]);\n}\n"
	return code
}
Blockly.html.forBlock['HTMLoverlay'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content').trim().replace(/ +/g, ' ').replace(/\n/g, '');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var code = "L.htmlOverlay('" + statements_content + "', ["+block_modifier+"], {zoom: maCarte.getZoom()}).addTo(maCarte);\n";
    return code
}
Blockly.html.forBlock['onRightclick'] = function (block) {
    var lat_val = block.getFieldValue('lat');
    var long_val = block.getFieldValue('long');
    return 'maCarte.on("contextmenu", function (e) {\n  L.esri.Geocoding.geocodeService().reverse().latlng(e.latlng).run(function(error, result){\n    L.popup().setLatLng(result.latlng).setContent(result.address.Match_addr).openOn(maCarte);\n  });\n});\n'
}

//////////////////////// canvas ///////////////////
// BLOCKS
Blockly.defineBlocksWithJsonArray([
    {	type: 'Scanvas',
            "message0": "canvas.init",
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#cc33cc"
	},
    {	type: 'ctx_rect',
            "message0": "canvas.fillRect %1 x1,y1%2 width%3 height%4",
			"args0": [
                {
                    "type": "input_value",
					"check": "color",
                    "name": "color"
                },
				{
                    "type": "input_value",
                    "name": "pointA",
                    "check": "XY",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "width",
                    "check": "Number",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "height",
                    "check": "Number",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
			"colour": "#cc33cc"
	},
    {	type: 'ctx_arc',
            "message0": "canvas.arc %1 x,y%2 radius%3",
			"args0": [
                {
                    "type": "input_value",
					"check": "color",
                    "name": "color"
                },
				{
                    "type": "input_value",
                    "name": "point",
                    "check": "XY",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "radius",
                    "check": "Number",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#cc33cc"
	},
	{	type: 'ctx_line',
            "message0": "canvas.line %1 x1,y1%2 x2,y2%3",
			"args0": [
                {
                    "type": "input_value",
                    "name": "color"
                },
				{
                    "type": "input_value",
                    "name": "pointA",
                    "check": "XY",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "pointB",
                    "check": "XY",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#cc33cc"
	},
    {	type: 'ctx_text',
            "message0": "canvas.fillText %1 x1,y1%2 text%3 font%4",
			"args0": [
                {
                    "type": "input_value",
                    "name": "color"
                },
				{
                    "type": "input_value",
                    "name": "point",
                    "check": "XY",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "text",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "font",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#cc33cc"
	}
])

// GENERATOR
Blockly.html.forBlock['Scanvas'] = function (block) {
    return "var canvas = document.getElementById('jcanvas');\ncontext = canvas.getContext('2d');\n$('#jcanvas').css('border','1px solid black');\n"
}
Blockly.html.forBlock['ctx_rect'] = function (block) {
	var val_color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xy_A = Blockly.html.statementToCode(block, 'pointA', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_width = Blockly.html.statementToCode(block, 'width', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_height = Blockly.html.statementToCode(block, 'height', Blockly.html.ORDER_ATOMIC).trim() ;
    return "context.fillStyle='"+val_color+"';\ncontext.fillRect("+val_xy_A+", "+val_width+", "+val_height+");\n"
}
Blockly.html.forBlock['ctx_arc'] = function (block) {
	var val_color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xy = Blockly.html.statementToCode(block, 'point', Blockly.html.ORDER_ATOMIC).trim();
	var val_width = Blockly.html.statementToCode(block, 'radius', Blockly.html.ORDER_ATOMIC).trim() ;
    return "context.beginPath();\ncontext.strokeStyle='"+val_color+"';\ncontext.arc("+val_xy+", "+val_width+", 0, Math.PI*2);\ncontext.stroke();\n"
}
Blockly.html.forBlock['ctx_line'] = function (block) {
	var val_color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xya = Blockly.html.statementToCode(block, 'pointA', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xyb = Blockly.html.statementToCode(block, 'pointB', Blockly.html.ORDER_ATOMIC).trim() ;
    return "context.beginPath();\ncontext.strokeStyle='"+val_color+"';\ncontext.moveTo("+val_xya+");\ncontext.lineTo("+val_xyb+");\ncontext.stroke();\n"
}
Blockly.html.forBlock['ctx_text'] = function (block) {
	var val_color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xy = Blockly.html.statementToCode(block, 'point', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_text = Blockly.html.statementToCode(block, 'text', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_font = Blockly.html.statementToCode(block, 'font', Blockly.html.ORDER_ATOMIC).trim() ;
	if (val_font) {
		var code = "context.font="+val_font+";\n"
	}else{
		var code = "context.font='14px serif';\n"
	}
    return code + "context.fillStyle='"+val_color+"';\ncontext.fillText("+val_text+", "+val_xy+");\n"
}
