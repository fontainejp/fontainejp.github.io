/*
    Ffau - A blocky-based editor for teaching HTML & CSS .
	Developed by Pal Kerecsenyi, Geza Kerecsenyi and Oli Plant.
	Full details are avaliable at the Github repo: https://github.com/codeddraig/ffau
	Copyright (c) 2017-19 The CodeDdraig Organisation
	THIS IS VERSION 1.2.2
*/

/*
 * @class Class representing a Ffau instance, including all components.
 */
class Ffau {
    /**
     * Generate an ID for a ffau component
     *
     * @param {HTMLElement} object - The element to generate an ID for
     * @param {string} objectType - The name of the component
     * @returns {string}
     */
    static generateID(object, objectType) {
        return object.id || "ffau-" + objectType + "-" + Math.floor(Math.random() * 10000);
    }
    /**
     * Inject the blockly editor (should be called first)
     *
     * @param {HTMLElement} frame - The frame to put the editor in
     * @param {HTMLElement} toolbox - The XML toolbox
     *
     * @param {string} theme - The name of the theme to initiate Blockly with.
     * @param {settingsDialogueType} [settings]
     *
     * @param {object} [options] - Custom options for the Blockly editor. Ffau will apply some default options if this is not specified.
     * @returns {*}
     */
    renderBlockly(frame, toolbox, options) {
        // generate a random ID for the frame to avoid duplication
        frame.id = Ffau.generateID(frame, 'blockly');
        let editorOptions = {
						//renderer: "zelos",
            toolbox: toolbox,
        }
        if (options) {
            editorOptions = Object.assign(editorOptions, options);
        } else {
            editorOptions = Object.assign(editorOptions, {
                zoom: {
                    controls: true,
                    wheel: true,
                    startScale: 1.0,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                },
                trashcan: true,
				sounds: false,
				media: 'media/'
            })
        }
        // inject blockly
        this.ffauWorkspace = Blockly.inject(frame.id, editorOptions);
        this.workspaceDiv = frame;
        this.toolboxDiv = this.workspaceDiv.getElementsByClassName("blocklyToolboxDiv")[0];
        // Return workspace info
        return this.ffauWorkspace
    }
    
    /**
     * Render the iframe preview
     *
     * @param {HTMLElement} frame - The frame to put the preview in
     * @returns {HTMLElement} - The generated iframe
     */
    renderPreview(frame) {
        // generate a random id to avoid duplication
        frame.id = Ffau.generateID(frame, 'iframe');
        // set the innerhtml of the frame specified
        frame.innerHTML = `<iframe style="height:100%;width:100%" id="${frame.id}-iframe"></iframe>`;
        // save the frame for later use
        this.iframe = document.getElementById(frame.id + '-iframe');
        return this.iframe;
    }
    /**
     * Add the event listener for Blockly to generate a preview and code
     *
     * @param {function} customFunction - a function to execute at the end of the change event. Gets passed the scope as a parameter.
     */
    addEvent(customFunction) {
        // add listener to workspace
        this.ffauWorkspace.addChangeListener(function () {
            // generate the code using Blockly.html from generator.js
			var code = Blockly.html.workspaceToCode(this.ffauWorkspace);
			document.querySelector('pre').textContent = code;
			document.getElementById('blockly_r').srcdoc = code;
        }.bind(this) /* bind parent scope */);
    }
    /**
     * Return the XML block code in string format
     *
     * @returns {string}
     */
    generateXML() {
        // workspace -> XML
        const dom = Blockly.Xml.workspaceToDom(this.ffauWorkspace);
        // XML -> string
        return Blockly.Xml.domToText(dom);
    }
    /**
     * Downloads a txt file containing the XML data of the project, which can be used to save it locally.
     *
     * @param {string} [fileName=ffau-export.txt] - The name of the txt file
     * @returns {string} - The XML data as a string
     */
    downloadXML(fileName) {
        const data = this.generateXML();
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', fileName || 'pageHTML.www');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        return data
    }
	/*
     * Downloads a txt file containing the HTML data of the project, which can be used to save it locally.
     */
    downloadHTML(fileName) {
        var data = Blockly.html.workspaceToCode(this.ffauWorkspace);
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', fileName || 'page.html');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        return data
    }
	
	/**
     * Set the Blockly workspace to a specified XML string
     *
     * @param {string} xmlString - The XML string to use
     */
    setXML(xmlString) {
        // change the text to dom
        const dom = Blockly.utils.xml.textToDom(xmlString);
        // clear the workspace to avoid adding code on top
        this.clearWorkspace();
        // set the dom into the workspace
        Blockly.Xml.domToWorkspace(dom, this.ffauWorkspace);
    }
    /**
     * Clears all blocks from the workspace without further confirmation
     */
    clearWorkspace() {
        this.ffauWorkspace.clear();
    }
	/**
     * To reverse your last action
     */
	undo() {
        this.ffauWorkspace.undo(0);
    }
	/**
     *  To reverse your last Undo
     */
	redo() {
        this.ffauWorkspace.undo(1);
    }
}
