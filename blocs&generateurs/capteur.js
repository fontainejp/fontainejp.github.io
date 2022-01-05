"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

/*  capteur  */
Blockly.Blocks['mc005']={init:function() {
    this.appendValueInput("pin").setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/png;base64,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", 40, 21))
        .appendField(Blockly.Msg.mc005);
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#00929f");
    this.setTooltip(Blockly.Msg.mc005_tooltip);
    this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi')}
};
Blockly.Arduino['mc005'] = function(block) {
	var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + value_pin]="pinMode(" + value_pin + ", INPUT);";
	var code = "digitalRead(" + value_pin + ") == LOW" ;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Python['mc005'] = function(block) {
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	if ( cpu == "cortexM0" ) {
		var code="pin" + value_pin + ".is_touched()";
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+value_pin]="BROCHE_"+value_pin+" = Pin("+value_pin+", Pin.IN)";
		var code = "BROCHE_" + value_pin + ".value() == 0";
	}
	return [code, Blockly.Python.ORDER_ATOMIC];
};
//////////////
Blockly.Blocks['inter']={init:function() {
    this.appendValueInput("pin").setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/png;base64,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", 20, 48))
        .appendField(Blockly.Msg.inter)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.on_off), "state")
        .appendField("connecté à la broche");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#00929f");
    this.setTooltip(Blockly.Msg.inter_tooltip);
    this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi')}
};
Blockly.Arduino['inter'] = function(block) {
	var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_state = block.getFieldValue('state');
    Blockly.Arduino.setups_["setup_input_" + value_pin]="pinMode(" + value_pin + ", INPUT_PULLUP);";
	var code = "digitalRead(" + value_pin + ") == " + dropdown_state ;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Python['inter'] = function(block) {
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	var dropdown_state = block.getFieldValue('state') == "HIGH" ? "1" : "0";
	if ( cpu == "cortexM0" ) {
		if (dropdown_state=="1")	{
			var code="not pin" + value_pin + ".is_touched()"
		}else {
			var code="pin" + value_pin + ".is_touched()"
		}
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+value_pin]="BROCHE_"+value_pin+" = Pin("+value_pin+", Pin.IN, Pin.PULL_UP)";
		var code = "BROCHE_" + value_pin + ".value() == " + dropdown_state ;
	}
	return [code, Blockly.Python.ORDER_ATOMIC];
};
//////////////
Blockly.Blocks["grove_ldr"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	var img_ldr = "data:image/png;base64,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";
	if (prog != "python") {
		this.appendDummyInput().appendField(new Blockly.FieldImage(img_ldr, 41, 45))
		.appendField(Blockly.Msg.grove_ldr).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage(img_ldr, 41, 45))
		.appendField(Blockly.Msg.grove_ldr+" A0");
	}
    this.setColour("#00929F");
    this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Light_Sensor/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.grove_ldr_tooltip)}
};
Blockly.Arduino["grove_ldr"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")/7.9";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["grove_ldr"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="LDR = ADC(0)";
    return ["LDR.read()/7.9", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["inout_bp"]={init:function(){
        this.appendValueInput("PIN").setCheck("Number").appendField(new Blockly.FieldImage("data:image/png;base64,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", 40, 40))
			.appendField(Blockly.Msg.bp);
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.bp_tooltip)}
};
Blockly.Arduino["inout_bp"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);";
    var code="digitalRead(" + dropdown_pin + ") == LOW";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["inout_bp"]=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
    var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
	if ( cpu == "cortexM0" ) {
		var code="pin" + dropdown_pin + ".is_touched()";
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+dropdown_pin]="BP_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN, Pin.PULL_UP)";
		var code="BP_" + dropdown_pin + ".value() == 0";
	}
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["dht11"]={init:function(){
        this.appendValueInput("PIN").setCheck("Number").appendField(new Blockly.FieldImage("data:image/png;base64,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", 60, 45))
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.menudht), "choix").appendField(Blockly.Msg.pin);
        this.setColour("#00929F");
        this.setHelpUrl("http://nagashur.com/blog/2013/06/18/lire-la-valeur-dune-sonde-de-temperature-et-d%E2%80%99hygrometrie-dht11/");
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.dht11_tooltip)}
};
Blockly.Arduino["dht11"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var choice=block.getFieldValue("choix");
    Blockly.Arduino.includes_["dht.h"]='#include <DHT.h>';
    Blockly.Arduino.definitions_["dht11"]="DHT dht11(" + dropdown_pin + ", DHT11);";
    Blockly.Arduino.setups_["dht11"]="dht11.begin();";
    switch (choice) {
        case "h":
            var code="dht11.readHumidity()";
            break;
        case "t":
            var code="dht11.readTemperature()";
            break;
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["dht11"]=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var choice=block.getFieldValue("choix");
    Blockly.Python.imports_["dht"]='import dht';
    Blockly.Python.definitions_["pin_"+dropdown_pin]="h&t_"+dropdown_pin+" = dht.DHT11(Pin(" + dropdown_pin + "))";
    switch (choice) {
        case "h":
            var code="h&t_"+dropdown_pin+".humidity()";
            break;
        case "t":
            var code="h&t_"+dropdown_pin+".temperature()";
            break;
    }
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["dht22"]={init:function(){
        this.appendValueInput("PIN").setCheck("Number").appendField(new Blockly.FieldImage("data:image/png;base64,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", 60, 45))
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.menudht), "choix").appendField(Blockly.Msg.pin);
        this.setColour("#00929F");
        this.setHelpUrl("http://nagashur.com/blog/2013/06/18/lire-la-valeur-dune-sonde-de-temperature-et-d%E2%80%99hygrometrie-dht11/");
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.dht22_tooltip)}
};
Blockly.Arduino["dht22"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var choice=block.getFieldValue("choix");
    Blockly.Arduino.includes_["dht.h"]='#include <DHT.h>';
    Blockly.Arduino.definitions_["dht22"]="DHT dht22(" + dropdown_pin + ", DHT22);";
    Blockly.Arduino.setups_["dht22"]="dht22.begin();";
    switch (choice) {
        case "h":
            var code="dht22.readHumidity()";
            break;
        case "t":
            var code="dht22.readTemperature()";
            break;
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["dht22"]=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var choice=block.getFieldValue("choix");
    Blockly.Python.imports_["dht"]='import dht';
    Blockly.Python.definitions_["pin_"+dropdown_pin]="H&T_"+dropdown_pin+" = dht.DHT22(Pin(" + dropdown_pin + "))";
    switch (choice) {
        case "h":
            var code="H&T_"+dropdown_pin+".humidity()";
            break;
        case "t":
            var code="H&T_"+dropdown_pin+".temperature()";
            break;
    }
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["suiveur_ligne"]={init:function(){
        this.appendValueInput("PIN").setCheck("Number").appendField(new Blockly.FieldImage("data:image/png;base64,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", 90, 50))
			.appendField(Blockly.Msg.suiveur_ligne);
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.suiveur_ligne_tooltip)}
};
Blockly.Arduino["suiveur_ligne"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT);";
    var code="digitalRead(" + dropdown_pin + ") == HIGH";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["suiveur_ligne"]=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
    var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
	if ( cpu == "cortexM0" ) {
		var code="not pin" + value_pin + ".is_touched()";
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+dropdown_pin]="follower_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
		var code="follower_" + dropdown_pin + ".value() == 1";
	}
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["light_sensor"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	if (prog != "python") {
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 40, 40))
		.appendField(Blockly.Msg.light).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 40, 40))
		.appendField(Blockly.Msg.light+" A0");
	}
    this.setColour("#00929F");
    this.setHelpUrl("https://www.carnetdumaker.net/articles/mesurer-la-luminosite-ambiante-avec-une-photoresistance-et-une-carte-arduino-genuino/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.light_tooltip)}
};
Blockly.Arduino["light_sensor"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")/4";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["light_sensor"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="LDR = ADC(0)";
    return ["LDR.read()/4", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["potentiometre"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	if (prog != "python") {
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 37, 50))
		.appendField(Blockly.Msg.potar).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 37, 50))
		.appendField(Blockly.Msg.potar+" A0");
	}
    this.setColour("#00929F");
    this.setHelpUrl("https://www.carnetdumaker.net/articles/la-conversion-analogique-numerique-avec-arduino-genuino/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.potar_tooltip)}
};
Blockly.Arduino["potentiometre"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")/4";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["potentiometre"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="Pot = ADC(0)";
    return ["Pot.read()/4", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["lm35"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	if (prog != "python") {
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 32, 50))
		.appendField(Blockly.Msg.lm35).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 32, 50))
		.appendField(Blockly.Msg.lm35+" A0");
	}
    this.setColour("#00929F");
    this.setHelpUrl("https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-lm35-et-une-carte-arduino-genuino/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.lm35_tooltip)}
};
Blockly.Arduino["lm35"]=function(block){
    var pin=block.getFieldValue("broche");
    Blockly.Arduino.setups_["lm35"]="analogReference(INTERNAL);";
    var code="analogRead(" + pin + ")/11";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["lm35"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="LM35 = ADC(0)";
    return ["LM35.read()/11", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['block_pir']={init:function(){
    this.appendValueInput("NAME").setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/png;base64,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", 45, 45))
        .appendField(Blockly.Msg.pir+Blockly.Msg.pin);
    this.setOutput(true, "Boolean");
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.pir_tooltip);
    this.setHelpUrl('http://tiptopboards.free.fr/arduino_forum/viewtopic.php?f=2&t=27');
  }
};
Blockly.Arduino['block_pir']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Python['block_pir']=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
    var dropdown_pin=Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ASSIGNMENT);
	if ( cpu == "cortexM0" ) {
		var code="pin" + value_pin + ".is_touched()";
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+dropdown_pin]="Present_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
		var code="Present_" + dropdown_pin + ".value()";
	}
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['block_feu']={init:function(){
    this.appendValueInput("FEU").setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/png;base64,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", 60, 28))
        .appendField(Blockly.Msg.feu+Blockly.Msg.pin);
    this.setOutput(true, "Boolean");
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.feu_tooltip);
    this.setHelpUrl('http://www.tubefr.com/modules-d-arduino-detecteur-de-flamme.html')}
};
Blockly.Arduino['block_feu']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'FEU', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Python['block_feu']=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
    var dropdown_pin=Blockly.Python.valueToCode(block, 'FEU', Blockly.Python.ORDER_ASSIGNMENT);
	if ( cpu == "cortexM0" ) {
		var code="pin" + value_pin + ".is_touched()";
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+dropdown_pin]="Fire_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
		var code="Fire_" + dropdown_pin + ".value()";
	}
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['block_anticollision']={init:function(){
    this.appendValueInput("COLLISION").setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/png;base64,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", 48, 60))
        .appendField(Blockly.Msg.presence+Blockly.Msg.pin);
    this.setOutput(true, "Boolean");
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.presence_tooltip);
    this.setHelpUrl(Blockly.Msg.HELPURL);
  }
};
Blockly.Arduino['block_anticollision']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'COLLISION', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Python['block_anticollision']=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
    var dropdown_pin=Blockly.Python.valueToCode(block, 'COLLISION', Blockly.Python.ORDER_ASSIGNMENT);
	if ( cpu == "cortexM0" ) {
		var code="pin" + value_pin + ".is_touched()";
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+dropdown_pin]="Touch_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
		var code="Touch_" + dropdown_pin + ".value()";
	}
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['block_sensitif']={init:function(){
    this.appendValueInput("SENSITIF").setCheck("Number")
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAIAAAC1eHXNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAR5UlEQVR42pVYB1xT597O/b7v3qutsi2yp6g4CoLIDpCQRSAJhDDCCCEJYYSVPdiEvUQZskTBWSpe1Epd3Vq9au2tVdvaWi1q9dZVBbK57zkJiNXf/fV7CYeTwznnfd7n//zH+0fM/ZlhmP8BQw8GOGp14Myg0eu0Op1BC67poI9Wo4VO9Dpw45wB3Aee1f+ZGRB/Dgf0PggD+NVBf8D0Gs1zjWYWAmPQ6HRqPTxgyFqDTg9fNz31/8ABLdb0kOENQz8HTw6tUActV6/RqO7cvDT9+2Pw1P2pq3dvXQN3abUzt299PTP9ELrXAPM1B5Py6pibP86v8I18vBH9/NOQQXTQi6dfPL757eeqmefgn998deLW91+Bk9npp5+e2T/94gG0LKP5DG/gw/DacREfhv/Oh954gPjWasGdT3678+P1C7BYtF+dP/7wwS1ww+OH9y6cHYdtNA9jTv8aHf+VD6Nd9IaXQjTODSYGygP21+r04ARoUqvVguv3p67f+uEKeGRm+veLnx99+vjf4Hzqzo2LX07AOtEa9Pp59CYorx/nYUE/f+RDb3wB0KHeAOaem9MBeK9YSA+uGH6+dfnu1Pdare7p4weXvzjx+7OnwGV+vH7x64unAXSVFiCHhAQLBXavRTMvLHJh3pd86GHvMnIPkW8ADqgF3x8+V5/8+fnF2w+v/Tx1487dqUdPn7x4oVKrbl37bPrFb+CRp4/u3Lh82viSm1dO3/3pKvwe6FnwJsCeWqtXabUqjQY4GHinSgtRq39Juv4VPvQwPzBwyP9VIADoZz6584R04HzKwbPYrWcwpTtxvO544QBNMchvH/vw+LHSjlHB9kO73h87eHCk/8jFD85/d+bUwc8vXfju/pOpR8+eTM/MALreIFDI92AoRuvojbaZ9xc45MwZceq1agB6TpM3/nXVkY9+uX3p0IVrKN4OdF4XktnoHi1CZ9b3dDQ6ozhWgfkCkSItM3tZSLFvorB9WyMyVbA+WRnEaojktZPkAxkNB3hb/yHuP1n/3tneE1eGP/3h8NV7/56eBTNB4Q/Wn+FVfcCMQDAgOsF9D55MJ3ZMnPoGEuOH56+GMBpQudtieNsD0xtS8yt2blVsjsRsDKfWVpWkp8Z7+CeiqOyW2uLNkfGrgxmuweluYSy3UKZLKMshKt8xiueOFdrhJZ7cfi/lEb+6yStTT7T6WZ1Os+Dci+1ikrEG9ohzV34KZ2/P79g3evwTWtF2LHdbonCIyOuO4rTFZZZQyTFrvVZt3OBDzyChIgI8XVeFR6Cqhez1Phv8A6IiyPmrI7I3oDnr0Kz1WO5GXKFLMDOWIz31z1PXb/0L03C86v3LwANmtVpYBfrFOjXhgGOlBhDUPfF5GHtrRFZbRtVw/7GP35/8qKVrSFzTsm1wP4uduykg0HPV6k2bfAMCgl1dPdd4OW0ODvV718/J2Tk40DctT+JPyFsbluaDZm2M5vjhi+w30VqHdhvnUuz5YvvEeTChSqUGEtJDjgHzYYpUUAwGF3XAaDMqdUHTe6HsTmxhNyqnk13VN37qo8qGFplcNjLcR09nh4ZFeq9b5+bu5ecf6Ovjv2b1Wh+fTf6bg9auWRccFEagpjEKxeS0QhSJu3JttOeWRDvfhIh04Ynz3+w+cm5tcv3JyzfAutVqtQZ2IjDvvD6MOGCjgK8/TP1KKe0LZLTjCnu5Nf2kwm1UXldhWSc9ryImtQSVxNsYgv/r21bvOHq6rX7X3MbhHXuXNd6+rh7ezs6ufpu3BGPI2MScSBIznJCVxVUQaQWxqXyfuGKn8OxlG+luYRk/Td2fg+cCzgytHMaxOHzrjeI4f/1HJLeTJtnZ2H/w3tTF5sGRvKodk6c/rGkddAtk+BI5qfkSLCVtXUCky7rNbus3O3qsd1nta2W/+q237bzWbPHeErcmKN7dLzY2ldegVCrr6rf37GDkSy3XUa03pWymFD94+gIKiEajwGPeLgs4NJDP7z11yT+jUdZ75PKNcz98vZeSVSqt28ovLm5o782Rb9uI5pXU9VQ09yYyCrIKRKIKZRqz2GM9klMg5QvLGBy+bzjNI4S+AZkeEooODQlERoRHoZD+4TFh8QL7sKyIJMnMrEoPa8AIAvYXYxyZj25AwoCt6v5Jn9SWsLT68aMTF84O0TnyroFRiYjft3c8Q9jkGsr2CE33RWZuCKb5hNM2oRL9MVleIRnEdFF2UQVH0OCDTHMPyVoTQsdE42LwmMhIJBoVFRYRW9WxfQOOQ2HXgLVrdKbiyRjLEC9zDwjmWuj06fQsUTIYmdORUzUgbR2u3DZCyik/cPRU/8hwCJW3Fl/qiMx3R+V4BDI8t6SsCk5ZFZLoEURfFc5y2JJp65vm5Ef3CmR7BHM9t6TyS0qTE4gUIiY9JX71hnB0QrHVu4ncii6wcrVGbVy5cXqEUaPwdxDj1FA9cfdXl6xOZH5vkqKb37orXbqNqejgyTvLO3ZjGNUr/XLI3EY8u9yHwPOPLfZG5XiGZXiEMRy3ZDgFZXkgOR6h2V5hXLdAdlgcV9nYKpKVSwUSiURst55gsz7lb17k2t73wMTAWeb082UAiB+mwAHxo9NoAca54bPfWrH2eDN71jNaQ1nNqLw2Im87ntWAyqjFsprdA1kcUatI2SVuGkzhVSfzqtiSdiqnKjlPiUwQr0LmeoRyVoXluAdlJ+eWd/UODPb1De4YqGnucQvJtN+cvsw7cWTiE7BakPkMJnHA+lhQqN6gngUY5/S80U+duft4fR8wa0el/RMBzPblkXJnYoUjRu6Kldki+S44QQRdllnampirZIq2CWv76bmVnJImGrfBPYTlFc72DGG7bcni1+4YGBiu4BeO7+1v7eh3DEhb4Zdu4ZN26twlYAS1Bg6m8xUbwhhMgXKhQgeqcmYjGj6wyt7rVzQQVTKUVL5rNa1+JanBMb7OJU5pgSyNyFSKWve2Dh3eOni4e/extv5D7UOHmvvGqAUNVv5ZrpG8VdEF7pGFrmE8f2KJpLqrUKTMLq3FM2tWBDCtA3JsowTXfrwDMhtUT0FZHS59YbsY6YESIID57d1f3YT7VjKHbWnt1sQ6C4zSjtTkTGlypLRYY2tK2kYH9h1VNPVxpB10Xn0StzKRXcEsbZDXde8cO16785AHmueOlrlhS72wfO/oQnxWGUve5xOv+B9ftg1GsQSpcE3tuPvbM6AFHZxvFypYBFz5QgNUKODK/nM3LFM6nWntjvHNzpRm5/hmJ0qTEwARXcPvnugeHc8sqk7KraVyK2MzhYSUoth0AY0tp+aU0/Orenbt37rnmBOy2Akr2IAVssV9ln50y5D8FVESC3SFObEaga7zye979HwaKkGgGkRvzPEmfRj9Ra2GInrl8GlztNI1odGJ3ORIanYkNTomtJpHV7KUe5p79lOY5fHc6rgMKSGlkMwQkhmy2HQxIYmXlFOenFdF55b37TlW0jxoEcBeFclf4ZdtEyGwREstosvMsJUWcXUIVA22fN+MWmPQvdSGsTRE6OABEo5WrVbpNPHlw5YYpQuggdzkQG5xITdZERv9mG19B47SC+qpbDk+pQhLKySkFgfiWIFYdgiBS2UpUAkF8UwpgJInaN9z+PQminAlssgeK7aKlpphy5bjq5YRqs3jmhHomsxtJ+AsptO/WskjgB+rVKrZWRX48tOvT7wZrTbEOpf4FsCEA6nZJaEFLKWweV915654tjg2U0RIKUUn8PxRdDJDkJAtwqXkv4ukJXMr0NSCJLY8hVO7fdeh3KoB86ACR0KZVXSZOaZsOa5yOa7agtSEwDTI9p8Hq1drXkZ0Ew6QeGdnZ0HAB+ycvvy9BanWMb7RGRiF3OhAbrAnKR3JlT0HTuRJ2ylMKS6Jj08R+EelJrLl65GpHgHx+OQSQiovEMegZEkpmSIau7KqdaCub9wqvOQdrNwSozDDyJfhyszw5ZaxSgSuqffkVSiIabQLJbwpvwCjAD6mZ0DNaOg4dGZpdLk7tcmJ3OhIrrenVFujpQEM5e5Dp5JzK6nZitj0ktDYnLjUkneRqdEJ+SkcubsfiZwtBDjIDGlMKp+WUy6u7W3ZeXQFSmgdLTLHSt7GSZYTpOYEiQVehsBWTXx5A+JDq4OLea1+fiCMBdjM9AzYrGe3T5hFK12pLfakRjuS0oFUY4kURea2948cTWSXE+lg6UUhRC6JXrImMIGRK88T1HqH0nD0kiAci5IljEsTJOaUKxr6O0YmrdBCC4zQDC9dTpCBj1mMzIwgegsjPn3pJlj9rEoND81CykUYIwf4+vjFtL94zDyh0zG5zT6u3j6u2o5UbR0himS3DYweo2ZL47OkhNSS0DgOjlocSc5bHUQFIIII2fHZsi1YZiJHSmbwk/Oqle0jFb2HloQXWuBFywgQGcvxUvMY2TK8wI4kvfTdL0AAQAYaGMgiPnSQegFXV6bur8waskjvWpnSageMQihbGVexAiPZRK0cfO9DBq+MypJFJuRTssTrQmgkhgQ4Dj65OJ4p2xhGTc0txyfxaLmKlLyq9t730KUd/xtWZE2QmGPFFjhgHZENXrgkWuSV3vDLw0cgsaoWMWHSKXBlSDUGw8jZ7xDJHbb0OrNYiU1clR2xxg4nd4pROKJ4W/ccEdV0U5jimMxiFKWQwizyQ9ODcOywWJY/OoPGUcSllaZwFUkcKU/etufYWVda5ZKoUis8wAE+AId4BUH8f5GlWFE/nFWg0uOPOjVAwQOKYMU7P7bPbWwYHhk5esYvVWKLLXMmlDnHyKyCizOlvQMHjlI5igR2WVwGPzqhCHgHhlYYQy+lZElIGSCkSjOKajO4ir6Rw9LOA4hgnmUMhMACJzbDCs1xYpsY6V/CixmN+8FEQJ7GoL7ABxTHoD4SAGjQYpT7S/v7f3vwPbjKquxeHl7kTqpyIMgdsBIndHHP2Kmytr4EljyJKwchC0R0XEouMZ1HyhSkFZRl8JRp+XXNnUOjxz57JzofzG2GAx8RdMQKluMlVqRyBFou2nnS6LSLI4exMEUAeYASzTCni1GOEaq7nr24d+OXB/7p9bZYmXNshQNB4RIjsUWVro1XHPzwTG3nQGpuTQJTTGTwyUxJUk4ZLacsNbc2r7S1o2ff7slPvWnit9DFVjFSS0AGVmSJE9nEyq1IFe8kVCPwVa3jX0KVh1Zj3NjC20jTlh/4iwr8Y06vP/2vO97CPlz9vlUZtX8NkViiFZbRMlucwokg9YhVOESIN9LKdhw8sW/seEVzX0ZJY2aRks1vFFT3NHePjE2caBuddCKJ/xZZbEUos8GIbbBia4zEhiBbElX8F2ThUkL530l1B87egCoPrZEP02bW1HcwmQlK+rqHz5+fuPpj58Snsr7jyWW7gtnt7pSKlVihZUSBFUqwNKTEKqggsairbXhy6MCJsckzB49/tG/845aBIzH5LUvD85egBdbARQGIaPFKHH8FTm4TWZDf2NV3eHITe+tSkvKfN+/NQQ0lnan/sahrhZjvvUAF9Jxes9Ak0M9pHz1/duXmnePnvtlx+CNx9xhN1hPKbXHFiy2CeCsiRB7EKveYMls03zq82A4lciTKnYgKR7zMHitZiZE6xEgsQvIzpM0qDYjUcx9//YNnRtNPD59Alce8Ol7HYVjofACxgNwLpARqsz+0PlU63a9Pnt24fe/0pes9h06WNu2nS4ZQOS0bk8qd8ALLKL5ZpMAiUmgZJbRFS5yJlUuDBaXbRo3PfvHN7aD8nufq2Tm9FmquwmW6sc2wgGOhM2rqF+nmKxIdHGqh3R80TBvzxQOEot+fT9+8fffMhav9//hM3DOeXD4UxGr1jK+wxYn/HiVZhhE1Hvxk4vLtDaxORd9RMLFWa4yhujfwYez8mrpY8y0j/fy1RU0zaBcIMjbgzFjK6nR/RAbeCvLDtdv3J89/u+uDzxtHPshsHQsUDvO6xqdVYA+n1sC7OFMQW9TlRSx06V72E19pMb7Wx1zoAsIllbGDCFwA7Iug3TsUoF6jTQ/FSaj3B/fGTOucb/K+xGEw/v6hszq3+OrihqHB2B9Y6EAaT0Bq0EL9bmi9WkhkWqg1p1JpVDOzGh3Ir8BZoRuMfXi4FQe/3QT6P0SPATKpWC/8AAAAAElFTkSuQmCC", 45, 45))
        .appendField(Blockly.Msg.appui+Blockly.Msg.pin);
    this.setOutput(true, "Boolean");
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.appui_tooltip);
    this.setHelpUrl(Blockly.Msg.HELPURL)}
};
Blockly.Arduino['block_sensitif']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'SENSITIF', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Python['block_sensitif']=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
    var dropdown_pin=Blockly.Python.valueToCode(block, 'SENSITIF', Blockly.Python.ORDER_ASSIGNMENT);
	if ( cpu == "cortexM0" ) {
		var code="pin" + value_pin + ".is_touched()";
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+dropdown_pin]="sense_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
		var code="sense_" + dropdown_pin + ".value()";
	}
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["ultrason"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 50, 33)).appendField(Blockly.Msg.ultrason);
        this.appendValueInput("a").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Trig");
        this.appendValueInput("b").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Echo");
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.ultrason_helpurl);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.ultrason_tooltip)}
};
Blockly.Arduino["ultrason"]=function(block){
    var trig=Blockly.Arduino.valueToCode(block, "a", Blockly.Arduino.ORDER_ASSIGNMENT);
    var echo=Blockly.Arduino.valueToCode(block, "b", Blockly.Arduino.ORDER_ASSIGNMENT);
	var nb=parseInt(trig+echo);
	Blockly.Arduino.includes_["extension"]="#include <extension.h>";
    Blockly.Arduino.definitions_["ultrason_"+nb]="Extension module_"+nb+";";
    Blockly.Arduino.setups_["ultrason_"+nb]="module_"+nb+".ultrason(" + trig + "," + echo + ");";
    return ""
};
Blockly.Python["ultrason"]=function(block){
    var trig=Blockly.Python.valueToCode(block, "a", Blockly.Python.ORDER_ASSIGNMENT);
    var echo=Blockly.Python.valueToCode(block, "b", Blockly.Python.ORDER_ASSIGNMENT);
	var nb=parseInt(trig+echo);
    Blockly.Python.imports_["hcsr04"]="from hcsr04 import HCSR04";
    Blockly.Python.definitions_["hcsr04_"+nb]="sensor_"+nb+" = HCSR04(trigger_pin="+trig+", echo_pin="+echo+")";
    return ""
};
//////////////
Blockly.Blocks["ultrason_distance"]={init:function(){
        this.appendValueInput("nb").setCheck("Number").appendField(Blockly.Msg.ultrason_distance1);
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.ultrason_helpurl);
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ultrason_distance2)}
};
Blockly.Arduino["ultrason_distance"]=function(block){
	var nb=Blockly.Arduino.valueToCode(block, "nb", Blockly.Arduino.ORDER_ASSIGNMENT);
	var code ="module_"+nb+".mesure_distance()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["ultrason_distance"]=function(block){
	var nb=Blockly.Python.valueToCode(block, "nb", Blockly.Python.ORDER_ASSIGNMENT);
	var code ="sensor_"+nb+".distance_cm()";
    return [code, Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["cap615"]={init:function(){
	var card=window.localStorage.card;
	var prog = window.localStorage.prog;
	if (prog != "python") {
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAA8CAIAAAAG1mY/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDElEQVR42u2X30tbZxjHDyiKPxYVf/8CEaoDHdpU4y524bCrXWLSJuecaDWZ08iqk0Hb6eYEdbjdDNnNwJvqNldbbbq2bBciiCBUKu0Ibmzsqu1/MDsVdJpo3OecNx5TGVLW27wcH598n+/3eZ73PTnkOVI4HD74vwuttL+/v7m5OTIy4vF4Ojo6enp6Luurs7Ozq6vL59MsPkh3dzdROF6vFz4qtBJpRkdHJUmqra2tqamJi4tLTk42mUx1dXVnzpy21L2JxQcBj4+PxzebzfBRodX0qqo2NjaGQiHytba2Qi0vf31o8Mrd2W9qa97A4oOYTK/RCPydnZ36+npUEb2iKP39/WJLY2NjFDl1quzalQ+//mrw7fq3sB9f7QUBHx8fF7Te3l5ZliP69vb2oqKihYWFxcXFysrKrKys/Pw8BGVl5afNZirj5+XlgVdXVy8tLc3NzfERVUTv8/kSEhIyMzPT09MhZWdnV1RU0FRDQ0NxcbHFUutyuSwWS5a+MjIyYCYmJoq9aHq81NRUqAUFBYWFhWSBzWk7nU4OtaWlZXh4mG7T0tJoEw7MlJQUbsRRfT4Ty9cXvcHIzc2l25KSkqqqKjZVWloKIggw4R/Vj9Yjxgoq3eKIHeXk5BjRk/QGiUUXgGJf0fhL6amclJTEdwYr2nlZPYuGOUiOze/3Y/FBjOhxPR51IOUdLu7Q/Py88ZzggxhRmPBfOH/j/pGb+2S1WsF3d3f5UmPxQaLvH/yj+pNTkw1W6zm741yTdr1js13/9jrPwt7eHk8oFn/iu4mzBsfuOGuzTn4/GdH77/nt7ma7ql9K84WWllv+WyiRGXbmzoyj+ZCjNuOjiuiJ2WTFJqva5VLtqjo9Ow1OZcPevH2zSTnkyCo+qoh+9sfZJgXIrV2y2+F2wwansmHpiLwRjuLGRxXTx/QxfUwf08f0Mf0r6m2yFrCdrD/k/Gd9/YfdpZ6gtwmOor6gF/NDdO7p2/r8sL9nWDE/CI5utflBe//gb+Xxiur1WF2KXXVbXar7Pc/ywwdi8hHzB/7yyjK4VZtO4Chur2fl0cPwQVirv7G50Tf4yfmLLnK/65SvDvStPf/rWP9rz9euDfQRhXP+ogx/Y2Nd6z+0F+LfjZkbYv80PzE1IcYmY/4TI9TE1KRDdevHrMAHZ7qTgqEgsT/+/N3b1Units73fwk8BiGveDUzfHCPrwMOFj4IWm3/rO1/toe//LzxgvPToc/W9caO1ceur/89MDIIZ+iLYfiiR8mY0O7/fF9uu/SD3li0ODoFbSttl+7+dE80Hzl/ccJPnz394KPLgV8DBmKIDSSwGoDz5NkTbVP6+5okwthgMLj62+rW9pbY0bH6Atza2oID00Ckg1db/wKZDZL9Usyp1AAAAABJRU5ErkJggg==", 21, 60))
		.appendField(Blockly.Msg.hum).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
	} else {
		this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAA8CAIAAAAG1mY/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDElEQVR42u2X30tbZxjHDyiKPxYVf/8CEaoDHdpU4y524bCrXWLSJuecaDWZ08iqk0Hb6eYEdbjdDNnNwJvqNldbbbq2bBciiCBUKu0Ibmzsqu1/MDsVdJpo3OecNx5TGVLW27wcH598n+/3eZ73PTnkOVI4HD74vwuttL+/v7m5OTIy4vF4Ojo6enp6Luurs7Ozq6vL59MsPkh3dzdROF6vFz4qtBJpRkdHJUmqra2tqamJi4tLTk42mUx1dXVnzpy21L2JxQcBj4+PxzebzfBRodX0qqo2NjaGQiHytba2Qi0vf31o8Mrd2W9qa97A4oOYTK/RCPydnZ36+npUEb2iKP39/WJLY2NjFDl1quzalQ+//mrw7fq3sB9f7QUBHx8fF7Te3l5ZliP69vb2oqKihYWFxcXFysrKrKys/Pw8BGVl5afNZirj5+XlgVdXVy8tLc3NzfERVUTv8/kSEhIyMzPT09MhZWdnV1RU0FRDQ0NxcbHFUutyuSwWS5a+MjIyYCYmJoq9aHq81NRUqAUFBYWFhWSBzWk7nU4OtaWlZXh4mG7T0tJoEw7MlJQUbsRRfT4Ty9cXvcHIzc2l25KSkqqqKjZVWloKIggw4R/Vj9Yjxgoq3eKIHeXk5BjRk/QGiUUXgGJf0fhL6amclJTEdwYr2nlZPYuGOUiOze/3Y/FBjOhxPR51IOUdLu7Q/Py88ZzggxhRmPBfOH/j/pGb+2S1WsF3d3f5UmPxQaLvH/yj+pNTkw1W6zm741yTdr1js13/9jrPwt7eHk8oFn/iu4mzBsfuOGuzTn4/GdH77/nt7ma7ql9K84WWllv+WyiRGXbmzoyj+ZCjNuOjiuiJ2WTFJqva5VLtqjo9Ow1OZcPevH2zSTnkyCo+qoh+9sfZJgXIrV2y2+F2wwansmHpiLwRjuLGRxXTx/QxfUwf08f0Mf0r6m2yFrCdrD/k/Gd9/YfdpZ6gtwmOor6gF/NDdO7p2/r8sL9nWDE/CI5utflBe//gb+Xxiur1WF2KXXVbXar7Pc/ywwdi8hHzB/7yyjK4VZtO4Chur2fl0cPwQVirv7G50Tf4yfmLLnK/65SvDvStPf/rWP9rz9euDfQRhXP+ogx/Y2Nd6z+0F+LfjZkbYv80PzE1IcYmY/4TI9TE1KRDdevHrMAHZ7qTgqEgsT/+/N3b1Units73fwk8BiGveDUzfHCPrwMOFj4IWm3/rO1/toe//LzxgvPToc/W9caO1ceur/89MDIIZ+iLYfiiR8mY0O7/fF9uu/SD3li0ODoFbSttl+7+dE80Hzl/ccJPnz394KPLgV8DBmKIDSSwGoDz5NkTbVP6+5okwthgMLj62+rW9pbY0bH6Atza2oID00Ckg1db/wKZDZL9Usyp1AAAAABJRU5ErkJggg==", 21, 60))
		.appendField(Blockly.Msg.hum+" A0");
	}
    this.setColour("#00929F");
    this.setHelpUrl("https://www.carnetdumaker.net/articles/la-conversion-analogique-numerique-avec-arduino-genuino/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.hum_tooltip)}
};
Blockly.Arduino["cap615"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="(1023-analogRead(" + dropdown_pin + "))/8";
	return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["cap615"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="humidity = ADC(0)";
    return ["(1023-humidity.read())/8", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["cap661"]={init:function(){
	var card=window.localStorage.card;
    this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 45, 45))
		.appendField(Blockly.Msg.CAP661).appendField(new Blockly.FieldDropdown(profile[card].interrupt), "broche");
    this.setColour("#00929F");
    this.setHelpUrl("http://www.ferdinandpiette.com/blog/2012/04/asservissement-en-vitesse-dun-moteur-avec-arduino/");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.CAP661_TOOLTIP)}
};
Blockly.Arduino["cap661"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
	Blockly.Arduino.variables_["tick_codeuse"]="unsigned int tick_codeuse = 0;";
	Blockly.Arduino.setups_['setup_Interrupt_'+dropdown_pin]='pinMode('+dropdown_pin+', INPUT);\n  attachInterrupt('+dropdown_pin+',codeuse,CHANGE);';
    Blockly.Arduino.codeFunctions_["codeuse"]='void codeuse(){\n  tick_codeuse++;\n}';
    var code="tick_codeuse";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["cap661"]=function(){return''};
//////////////
Blockly.Blocks["BME280"]={init:function(){
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("data:image/png;base64,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", 45, 36))
		.appendField(Blockly.Msg.bme280);
    this.setHelpUrl("");
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.bme280_tooltip)}
};
Blockly.Arduino["BME280"]=function(block){
    Blockly.Arduino.includes_["bme280"]='#include <BME280.h>';
	Blockly.Arduino.variables_["bme280"]="BME280 bme;";
	Blockly.Arduino.setups_["bme280"]='bme.begin();'
    return ""
};
Blockly.Python["BME280"]=function(block){
    Blockly.Python.imports_["bme280"]='import bme280';
    Blockly.Python.imports_["pin"]='from machine import Pin';
    Blockly.Python.imports_["i2c"]='from machine import I2C';
	Blockly.Python.definitions_["bme280"]="i2c = I2C(scl=Pin(5), sda=Pin(4))\nbme = bme280.BME280(i2c=i2c)";
    return ''
};
//////////////
Blockly.Blocks["BME280_pressure"]={init:function(){
    this.appendDummyInput().appendField(Blockly.Msg.bme280_pressure);
    this.setColour("#00929F");
    this.setHelpUrl("");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.bme280_pressure_tooltip)}
};
Blockly.Arduino["BME280_pressure"]=function(block){
    var code="bme.readFloatPressure()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["BME280_pressure"]=function(block){
    return ["bme.pressure()", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks["VL53L0X"]={init:function(){
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("data:image/png;base64,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", 40, 36))
		.appendField(Blockly.Msg.VL53L0X);
    this.setColour("#00929F");
    this.setHelpUrl("");
    this.setTooltip(Blockly.Msg.VL53L0X_tooltip)}
};
Blockly.Arduino["VL53L0X"]=function(block){
	Blockly.Arduino.includes_["wire"]='#include <Wire.h>';
    Blockly.Arduino.includes_["VL53L0X"]='#include <VL53L0X.h>';
	Blockly.Arduino.variables_["VL53L0X"]="VL53L0X cpt;";
	Blockly.Arduino.setups_["VL53L0X"]='Wire.begin();\n  cpt.init();\n  cpt.setTimeout(500);\n  cpt.startContinuous();'
};
Blockly.Python["VL53L0X"]=function(block){
    Blockly.Python.imports_["VL53L0X"]='import VL53L0X';
	Blockly.Python.imports_["i2c"]='from machine import I2C';
	Blockly.Python.definitions_["VL53L0X"]="i2c = I2C(scl=Pin(5), sda=Pin(4))\ntof = VL53L0X.VL53L0X(i2c)";
    return ""
};
//////////////
Blockly.Blocks["VL53L0X_distance"]={init:function(){
    this.appendDummyInput().appendField(Blockly.Msg.VL53L0X_distance);
    this.setColour("#00929F");
    this.setHelpUrl("");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.VL53L0X_distance_tooltip)}
};
Blockly.Arduino["VL53L0X_distance"]=function(block){
    var code="cpt.readRangeContinuousMillimeters()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["VL53L0X_distance"]=function(block){
    return ["tof.read()", Blockly.Python.ORDER_ATOMIC]
};
//////////////