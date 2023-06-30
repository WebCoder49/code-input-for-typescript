// Register with built-in plugins; see code-input.js library > plugins folder.
// This requires the plugins' JS files in the same folder to be imported in HTML.
//                                                                                  vvvvvv                          vvvvvvvvvvvvvv                            vvvvvvvvvvvv
let builtInPluginTemplate = codeInput.templates.prism(Prism, [new codeInput.plugins.Indent(), new codeInput.plugins.DebounceUpdate(50), new codeInput.plugins.SpecialChars()]);
codeInput.registerTemplate("default", builtInPluginTemplate);