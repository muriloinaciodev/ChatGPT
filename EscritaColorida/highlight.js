const keywords = ['and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'False', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'None', 'not', 'or', 'pass', 'raise', 'return', 'True', 'try', 'while', 'with', 'yield'];

const code = document.getElementById('code');

code.addEventListener('input', function() {
  highlight(this.value);
});

function highlight(input) {
  let output = input;
  for (let i = 0; i < keywords.length; i++) {
    const keyword = keywords[i];
    const regex = new RegExp('\\b' + keyword + '\\b', 'g');
    output = output.replace(regex, '<span class="keyword">' + keyword + '</span>');
  }
  code.innerHTML = output;
}
