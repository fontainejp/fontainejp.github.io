Blockly.Blocks['monbloc']={init:function(){
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour('#00929f')}
};
Blockly.Arduino['monbloc']=function(block){
    Blockly.Arduino.includes_['lib'] = '#include <lib.h>;';
    Blockly.Arduino.variables_['var'] = 'int var;';
    Blockly.Arduino.definitions_['inst'] = 'inst instance;';
    Blockly.Arduino.userFunctions_['func'] = 'void func(){return 0};';
    Blockly.Arduino.setups_['setup'] = 'code du setup();';
    var code = 'code du loop()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};