/* Register template by itself, so minimal editable, syntax-highlighted textareas work. */
let simpleTemplate = codeInput.templates.prism(Prism, []);
codeInput.registerTemplate("default", simpleTemplate);