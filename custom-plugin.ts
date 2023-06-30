/* Optional: create a plugin to listen for events in a code-input element
and add custom logic. */
// Look in the developer console to see the logs.

class TestTSPlugin extends codeInput.Plugin {
    constructor() {
        super(["testattr", "test-*"]);
        // Array of observed attributes as parameter
        // Wildcard "*" matches any text
    }
    /* Runs before code is highlighted; Params: codeInput element) */
    beforeHighlight(codeInput: codeInput.CodeInput): void {
        console.log(codeInput, "TS before highlight");
    }
    /* Runs after code is highlighted; Params: codeInput element) */
    afterHighlight(codeInput: codeInput.CodeInput): void {
        console.log(codeInput, "TS after highlight");
    }
    /* Runs before elements are added into a `code-input`; Params: codeInput element) */
    beforeElementsAdded(codeInput: codeInput.CodeInput): void {
        console.log(codeInput, "TS before elements added");
    }
    /* Runs after elements are added into a `code-input` (useful for adding events to the textarea); Params: codeInput element) */
    afterElementsAdded(codeInput: codeInput.CodeInput): void {
        console.log(codeInput, "TS after elements added");
    }
    /* Runs when an attribute of a `code-input` is changed (you must add the attribute name to the constructor); Params: codeInput element, name attribute name, oldValue previous value of attribute, newValue changed value of attribute) */
    attributeChanged(codeInput: codeInput.CodeInput, name: string, oldValue: string, newValue: string): void {
        console.log(codeInput, "TS", name, ":", oldValue, ">", newValue);
    }
    observedAttributes: Array<string> = ["testattr"]
}

/* Register template with custom plugin:                         vvvvvvvvvvvv     */
let customPluginTemplate = codeInput.templates.prism(Prism, [new TestTSPlugin()]);
codeInput.registerTemplate("default", customPluginTemplate);

window.addEventListener("load", () => {
    // Demonstrate attributeChanged callback
    setTimeout(() => {
        document.querySelector("code-input").setAttribute("testattr", "value1");
    }, 1000);
    setTimeout(() => {
        document.querySelector("code-input").setAttribute("testattr", "value2");
    }, 3000);
    setTimeout(() => {
        document.querySelector("code-input").removeAttribute("testattr");
    }, 5000);

    // These demonstrate the use of the wildcard in observed attributes.
    setTimeout(() => {
        document.querySelector("code-input").setAttribute("test-hello", "world");
    }, 7000);
    setTimeout(() => {
        document.querySelector("code-input").setAttribute("test-library", "code-input");
    }, 9000);
    setTimeout(() => {
        document.querySelector("code-input").setAttribute("test-anything", "value");
    }, 11000);
});