var pythonKeywords = ["def", "if", "else", "elif", "while", "for", "in", "and", "or", "not", "True", "False", "None"];

var text = "def add(a, b):\n    if a > 0:\n        return a + b\n    else:\n        return a - b";

var regex = new RegExp("\\b(" + pythonKeywords.join("|") + ")\\b", "g");

var highlightedText = text.replace(regex, "<span class='python-keyword'>$1</span>");

console.log(highlightedText);
