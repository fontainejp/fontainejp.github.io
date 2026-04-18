'use strict';

Blockly.defineBlocksWithJsonArray([
    {	type: "controls_repeat_ext",
            message0: "répéter %1 fois %2 %3",
            args0: [{
                type: "input_value",
                name: "TIMES",
                check: "Number"
            },{
                "type": "input_dummy"
            },{
				"type": "input_statement",
				"name": "DO"
			}],
            previousStatement: "script",
            nextStatement: "script",
            colour: "#727272",
			"inputsInline": true
    },
	{	type: "logic_negate",
            message0: "pas %1",
            args0: [{
                type: "input_value",
                name: "BOOL",
                check: "Boolean"
            }],
            output: "Boolean",
            colour: "#727272"
    },
	{	type: "logic_null",
            message0: "nul",
            output: null,
            colour: "#727272"
    },
	{	type: "controls_for",
            message0: "pour %1 allant de %2 à %3 par pas de %4 %5",
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: "x"
            }, {
                type: "input_value",
                name: "FROM",
                check: "Number",
                align: "RIGHT"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number",
                align: "RIGHT"
            }, {
                type: "input_value",
                name: "BY",
                check: "Number",
                align: "RIGHT"
            },{
				"type": "input_statement",
				"name": "DO"
			}],
            inputsInline: true,
            previousStatement: "script",
            nextStatement: "script",
            colour: "#727272"
    },
	{	type: "controls_forEach",
            message0: "suivant que %1 vaut %2 %3",
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: "x"
            }, {
                type: "input_value",
                name: "LIST",
                check: "Array"
            },{
				"type": "input_statement",
				"name": "DO"
			}],
            previousStatement: "script",
            nextStatement: "script",
            colour: "#727272"
    },
	{	type: "math_change",
            message0: "pour la variable %1 ajouter %2",
            args0: [
			{
                type: "field_variable",
                name: "VAR",
                variable: "x"
            },
			{
                type: "input_value",
                name: "DELTA"
            }],
            previousStatement: "script",
            nextStatement: "script",
            colour: "#FFA500"
    },
	{	type: "math_modulo",
            message0: "reste de %1 par %2",
            args0: [{
                type: "input_value",
                name: "DIVIDEND",
                check: "Number"
            }, {
                type: "input_value",
                name: "DIVISOR",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: "#00CC00"
    },
	{	type: "math_random_int",
            message0: "entier aléatoire entre %1 et %2",
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "Number"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: "#00CC00"
    },
	{	type: "controls_if_",
		message0: "si %1",
        args0: [{
            type: "input_value",
            name: "IF0",
            check: "Boolean"
            }],
        message1: "%1",
        args1: [{
            type: "input_statement",
            name: "DO0"
		}],
        previousStatement: "script",
        nextStatement: "script",
		colour: "#727272"
	},
	{	type: "controls_if",
		"message0": "si %1 %2 sinon %3 %4",
		  "args0": [
			{
			  "type": "input_value",
			  "name": "IF0"
			},
			{
			  "type": "input_statement",
			  "name": "DO0"
			},
			{
			  "type": "input_dummy",
			},
			{
			  "type": "input_statement",
			  "name": "ELSE"
			}
		  ],
		  "previousStatement": null,
		  "nextStatement": null,
		  "colour": "#727272"
	}	
])

Blockly.Blocks["controls_whileUntil"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"],
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#727272");
        this.appendValueInput("BOOL").setCheck("Boolean").appendField(new Blockly.FieldDropdown(OPERATORS), "MODE");
        this.appendStatementInput("DO").appendField("");
        this.setPreviousStatement("script");
        this.setNextStatement("script");
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("MODE");
            var TOOLTIPS = {
                WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            };
            return TOOLTIPS[op]
        })
    }
};
Blockly.Blocks["controls_flow_statements"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, "BREAK"],
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, "CONTINUE"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#727272");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "FLOW");
        this.setPreviousStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("FLOW");
            var TOOLTIPS = {
                BREAK: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
                CONTINUE: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE
            };
            return TOOLTIPS[op]
        })
    },
    onchange: function() {
        var legal = false;
        var block = this;
        do {
            if (block.type == "controls_repeat" || block.type == "controls_repeat_ext" || block.type == "controls_forEach" || block.type == "controls_for" || block.type == "controls_whileUntil" || block.type == "base_loop") {
                legal = true;
                break
            }
            block = block.getSurroundParent()
        } while (block);
        if (legal) this.setWarningText(null);
        else this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING)
    }
};
Blockly.Blocks["true_false"] = {
    init: function() {
        this.setColour("#696969");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["vrai", "true"], ["faux", "false"]]), "BOOL");
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)
    }
};
Blockly.Blocks["logic_operation"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#727272");
        this.setOutput(true, "Boolean");
        this.appendValueInput("A");
        this.appendValueInput("B")
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.LOGIC_OPERATOR), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                "and": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
                "xor": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_xor,
                "shiftL": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftL,
                "shiftR": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftR,
                "or": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
            };
            return TOOLTIPS[op]
        })
    }
};
/*Blockly.Blocks["controls_for",
            message0: Blockly.Msg.CONTROLS_FOR_TITLE,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: null
            }, {
                type: "input_value",
                name: "FROM",
                check: "Number",
                align: "RIGHT"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number",
                align: "RIGHT"
            }, {
                type: "input_value",
                name: "BY",
                check: "Number",
                align: "RIGHT"
            }],
            inputsInline: true,
            previousStatement: "script",
            nextStatement: "script",
            colour: "#727272",
            helpUrl: Blockly.Msg.HELPURL
        });
        this.appendStatementInput("DO");
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace("%1", thisBlock.getFieldValue("VAR"))
        })
    },
    customContextMenu: function(options) {
        if (!this.isCollapsed()) {
            var option = {
                enabled: true
            };
            var name = this.getFieldValue("VAR");
            option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", name);
            var xmlField = goog.dom.createDom("field", null, name);
            xmlField.setAttribute("name", "VAR");
            var xmlBlock = goog.dom.createDom("block", null, xmlField);
            xmlBlock.setAttribute("type", "variables_get");
            option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
            options.push(option)
        }
    },
    getVarType: function(varName) {
        return Blockly.Types.NUMBER
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    }
}
Blockly.Blocks["controls_forEach",
            message0: Blockly.Msg.CONTROLS_FOREACH_TITLE,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: null
            }, {
                type: "input_value",
                name: "LIST",
                check: "Array"
            }],
            previousStatement: "script",
            nextStatement: "script",
            colour: "#727272",
            helpUrl: Blockly.Msg.HELPURL
        });
        this.appendStatementInput("DO");
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace("%1", thisBlock.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    }
};
// variable
Blockly.Blocks["math_change",
            message0: Blockly.Msg.MATH_CHANGE_TITLE,
            args0: [
			{
                type: "field_variable",
                name: "VAR",
                variable: "x"
            },
			{
                type: "input_value",
                name: "DELTA"
            }],
            previousStatement: "script",
            nextStatement: "script",
            colour: "#FFA500",
            helpUrl: Blockly.Msg.HELPURL
        });
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.MATH_CHANGE_TOOLTIP.replace("%1", e.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(e, l) {
        Blockly.Names.equals(e, this.getFieldValue("VAR")) && this.setFieldValue(l, "VAR")
    },
    customContextMenu: function(e) {
        if (!this.isCollapsed()) {
            var l = {
                    enabled: !0
                },
                t = this.getFieldValue("VAR");
            l.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", t);
            var a = goog.dom.createDom("field", null, t);
            a.setAttribute("name", "VAR");
            var o = goog.dom.createDom("block", null, a);
            o.setAttribute("type", "variables_get"), l.callback = Blockly.ContextMenu.callbackFactory(this, o), e.push(l)
        }
    },
    getVarType: function(e) {
        return Blockly.Types.NUMBER
    }
};*/
Blockly.Blocks["variables_get"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#FFA500");
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR");
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
    },
    contextMenuType_: "variables_set",
    customContextMenu: function(options) {
        var option = {
            enabled: true
        };
        var name = this.getFieldValue("VAR");
        option.text = this.contextMenuMsg_.replace("%1", name);
        var xmlField = goog.dom.createDom("field", null, name);
        xmlField.setAttribute("name", "VAR");
        var xmlBlock = goog.dom.createDom("block", null, xmlField);
        xmlBlock.setAttribute("type", this.contextMenuType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option)
    },
    getBlockType: function() {
        return [Blockly.Types.UNDEF, this.getFieldValue("VAR")]
    },
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks["variables_set"] = {
    init: function() {
        this.appendValueInput("VALUE")
            .appendField(Blockly.Msg.VARIABLES_SET)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg._AT);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
        this.setColour("#FFA500");
        this.setPreviousStatement("script");
        this.setNextStatement("script");
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks['variables_set_init'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .appendField(Blockly.Msg.var_set_init)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg._AT);
        this.setPreviousStatement("script");
        this.setNextStatement("script");
        this.setColour("#FFA500");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.var_set_init_tooltip);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
    },
    contextMenuType_: 'variables_set',
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
// texte
Blockly.Blocks["text"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#bbbbbb");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHw647ilMAAAAJmlUWHRDb21tZW50AAAAAABDcmVhdGVkIHdpdGggR0lNUCBvbiBhIE1hY5XkX1sAAAJ7SURBVEjHtZZNSFRRGIbfe/E6FjU1Vs6kwxBkiRr9EBG6MKyEWkRQFrYIoY2LoJUrFwVBP9SiIFq0NKIgKKJNkCTCBDYLhQLLKLCgBg0SorI/4W0xc++cc+aenxa9q3vOfXj5zved75wDWMQUr/EyfTiJSzjE+6yzg/s4S5Lc6WTbwWmS5EEz1sjbDDXC5Q4rCzXJBj3YS1knjLa7OSPRF+OxJIcV2yK7taYJnqWqY3FgE8cV7AxXGFIwotBXuCYOXM/nElZguyEFGSWIKXbGgxvLdQ11krX/YHueS+PBnBJtl7Fgq5iX6F4dmJSyVeRmo22C9yTbbj16QbLdZtm3A5Jtjx7slMA9FtuWckeW1KcHkxwVwHMWWzkNdwwFZr8ATjJjMd4rJa3ZVN9x1+YFuIyPBHrIhO4XwLfMWYy3SNVoi6d8gD4OCzMv8clyOu4SvsfwUWuMNLYKM0+9n+ajHOLWmsV3vTEQCDOvLPHWY4MwynuL8VgNgCzEHrvBowBqAUxjFIWq+D38EkbX2VGm3+MJ8t6CuLgu6lXkIfm+41rlPJHVL+xpozFJ3hUvRzZUndayHjNVybFZR3BcGAVIGekeDIYxbJL6Pk5TbIoizhpTEe1tH8BnzFlibsO6Si6QsK5xe8nYd0CjiDGPGSu9smT8xQFNR19/sODyePEB7xseWLmv0TZexE1HYwBj1iyL/yfwwkInQuN3eGZBi0LrfcCEhS5USr3DuH2Gle5rVh5Ush5Kr03lcqT5hOYBg7F6u/OUxrbd6dFoeouwlZcU7CpXa0/mHE8rPXursjav+gZGI9IIEOAHXnvzlmuqBhlkESDAb7zx5vD/9RdeRqsZWptG5gAAAABJRU5ErkJggg==", 12, 12))
            .appendField(new Blockly.FieldTextInput("abc"), "TEXT")
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHjaJ96CTAAACc0lEQVRIx7WWz0tUURTHv28wHadMGquZfmCFlpUwElJT0gzpGBQhSrgoiIQ2QUF/QIuCIIsKEtoHUtQiimgVPGjTwn5QVJAIGbVQ0U21i+lF3xYz87z3ee89r0VndQ983vede849517gP5mnOsxgK+oRIMAM5r3f7k+ZRgcaESDAAua8sg1r5V2qNs8LbLWKruYYdbvGHSawSLMNG2U7OW2kz0XBHO02YNjbtJU+rYJJPnEIf2G7JpvgOF22exEt0G23NeEugX7MBgBIAMgLJ6ebGxVvvUDvxeaacFlAc+hWvIxAZ3CgJizbSdaF6yaRHuKKuMIpLAvXCyK9Bc0V4R8x0HS4nhXpMv5UhN/EQBdb/ysmxSy3AAnAm8SogDaA4XCZxZgonK7l+AZ8J/odgeLdwYPYQ471HHEc+vdcF+m+o5xz8EVtbDKFAkrYBOAXgBOK0gcc8WYioSSRRx+2V+kS1F/v8V7b93BGiWCKG4QdD0T3ZznHrENBcT/hm5BLdRYHrs5bjqzi+d5PZ7xJ7Ffcd44m4k6tGF1CIvQJfdgV8ZCyforPQiL60RauX+CVPYJ27TD1C/Fm+VahR1xn+r4CPqwMbofwZYV+xpV28Jh2V3cIsiWtGj128KD1cjTRu7SkXbGDvZqskAbmNFnfmgYOa7LP2eKULUbmifl5wxRHNXCCWefQOqvRU9xmBnv48R9kO/kyEm2bCVvDm5Gx53OVVbSZFyP0hHFE8fiSaXrJXjL2LpnD45aS8WrkQdXnLNipOI/GCrpWachb9hRU6Sb6IX2P7lcRB6t13RfrEstXO/KQjCb5iOfZGPN2TPC6vDPgL0FuY1v91jVtAAAAAElFTkSuQmCC", 12, 12));
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP)
    }
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
// math
Blockly.Blocks["math_number"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#00CC00");
        this.appendDummyInput().appendField(new Blockly.FieldNumber(0), "NUM");
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP)
    }
};
Blockly.Blocks["math_arithmetic"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_ADDITION_SYMBOL, Blockly.Msg.MATH_ADDITION_SYMBOL],
            [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, Blockly.Msg.MATH_SUBTRACTION_SYMBOL],
            [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "*"],
            [Blockly.Msg.MATH_DIVISION_SYMBOL, "/"],
            [Blockly.Msg.MATH_POWER_SYMBOL, "POWER"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#00CC00");
        this.setOutput(true, "Number");
        this.appendValueInput("A").setCheck("Number");
        this.appendValueInput("B")
			.setCheck("Number")
			.appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
                MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
                MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
                DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
                POWER: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
            };
            return TOOLTIPS[mode]
        })
    }
};
Blockly.Blocks["logic_compare"] = {
    init: function() {
        var OPERATORS = [
            ["=", "EQ"], ["\u2260", "NEQ"],
            [">", "GT"], ["\u2265", "GTE"],
            ["<", "LT"], ["\u2264", "LTE"]
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
        this.setColour("#00CC00");
        this.setOutput(true, "Boolean");
        this.appendValueInput("A");
        this.appendValueInput("B").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
                NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
                LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
                LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
                GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
                GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
            };
            return TOOLTIPS[op]
        });
        this.prevBlocks_ = [null, null]
    }
};
Blockly.Blocks["math_single"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_SINGLE_OP_ROOT, "ROOT"],
            [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, "ABS"],
            [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "NEG"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#00CC00");
        this.setOutput(true, "Number");
        this.appendValueInput("NUM")
			.setCheck("Number")
			.appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                ROOT: Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
                ABS: Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
                NEG: Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG
            };
            return TOOLTIPS[mode]
        })
    }
};
Blockly.Blocks["math_trig"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_TRIG_SIN, "SIN"],
            [Blockly.Msg.MATH_TRIG_COS, "COS"],
            [Blockly.Msg.MATH_TRIG_TAN, "TAN"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#00CC00");
        this.setOutput(true, "Number");
        this.appendValueInput("NUM")
			.setCheck("Number")
			.appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                SIN: Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,
                COS: Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
                TAN: Blockly.Msg.MATH_TRIG_TOOLTIP_TAN
            };
            return TOOLTIPS[mode]
        })
    }
};
Blockly.Blocks["math_constant"] = {
    init: function() {
		this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#00CC00");
        this.setOutput(true, "Number");
        this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["\u03c0", "Math.PI"],["e", "Math.E"],["\u221A 2", "Math.SQRT2"],["\u221A \u00BD", "Math.SQRT1_2"]]), "CONSTANT");
        this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP)
    }
};
Blockly.Blocks["math_number_property"] = {
    init: function() {
        var PROPERTIES = [
            [Blockly.Msg.MATH_IS_EVEN, "EVEN"],
            [Blockly.Msg.MATH_IS_ODD, "ODD"],
            [Blockly.Msg.MATH_IS_WHOLE, "WHOLE"],
            [Blockly.Msg.MATH_IS_POSITIVE, "POSITIVE"],
            [Blockly.Msg.MATH_IS_NEGATIVE, "NEGATIVE"],
            [Blockly.Msg.MATH_IS_DIVISIBLE_BY, "DIVISIBLE_BY"]
        ];
        this.setColour("#00CC00");
        this.appendValueInput("NUMBER_TO_CHECK").setCheck("Number");
        var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
            var divisorInput = option == "DIVISIBLE_BY";
            this.sourceBlock_.updateShape_(divisorInput)
        });
        this.appendDummyInput().appendField(dropdown, "PROPERTY");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        var divisorInput = this.getFieldValue("PROPERTY") == "DIVISIBLE_BY";
        container.setAttribute("divisor_input", divisorInput);
        return container
    },
    domToMutation: function(xmlElement) {
        var divisorInput = xmlElement.getAttribute("divisor_input") == "true";
        this.updateShape_(divisorInput)
    },
    updateShape_: function(divisorInput) {
        var inputExists = this.getInput("DIVISOR");
        if (divisorInput) {
            if (!inputExists) this.appendValueInput("DIVISOR").setCheck("Number")
        } else if (inputExists) this.removeInput("DIVISOR")
    }
};
Blockly.Blocks["math_round"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, "ROUND"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, "ROUNDUP"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, "ROUNDDOWN"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#00CC00");
        this.setOutput(true, "Number");
        this.appendValueInput("NUM")
			.setCheck("Number")
			.appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP)
    }
};
Blockly.Blocks["math_on_list"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, "SUM"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, "MIN"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, "MAX"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, "AVERAGE"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN, "MEDIAN"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MODE, "MODE"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV, "STD_DEV"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM, "RANDOM"]
        ];
        var thisBlock = this;
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#00CC00");
        this.setOutput(true, "Number");
        var dropdown = new Blockly.FieldDropdown(OPERATORS, function(newOp) {
            thisBlock.updateType_(newOp)
        });
        this.appendValueInput("LIST").setCheck("Array").appendField(dropdown, "OP");
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                SUM: Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM,
                MIN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN,
                MAX: Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX,
                AVERAGE: Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE,
                MEDIAN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN,
                MODE: Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE,
                STD_DEV: Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV,
                RANDOM: Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM
            };
            return TOOLTIPS[mode]
        })
    },
    updateType_: function(newOp) {
        if (newOp == "MODE") this.outputConnection.setCheck("Array");
        else this.outputConnection.setCheck("Number")
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("op", this.getFieldValue("OP"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateType_(xmlElement.getAttribute("op"))
    }
};
Blockly.Blocks["math_random_float"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#00CC00");
        this.setOutput(true, "Number");
        this.appendDummyInput().appendField(Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM);
        this.setTooltip(Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP)
    }
};
Blockly.Blocks["inout_angle_maths"] = {
    init: function() {
        this.setColour("#00CC00");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput("").appendField(new Blockly.FieldAngle("90"), "ANGLE");
        this.setOutput(true, "Number");
        this.setTooltip("un angle.")
    }
};
Blockly.Blocks["intervalle"] = {
    init: function() {
        var OPERATORS = [
            ["<", "LT"],
            ["\u2264", "LTE"],
            [">", "GT"],
            ["\u2265", "GTE"]
        ];
        this.appendValueInput("inf").setCheck("Number");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "comp_inf");
        this.appendValueInput("valeur").setCheck("Number");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "comp_sup");
        this.appendValueInput("sup").setCheck("Number");
        this.setOutput(true, "Boolean");
        this.setColour("#00CC00");
        this.setTooltip(Blockly.Msg.compare);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
