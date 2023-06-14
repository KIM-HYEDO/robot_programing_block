
function writeFile(){
  let contents = Blockly.Python.workspaceToCode(workspace);
  contents="#middle_code_start\n"+contents+"#middle_code_end\n"
  let encodedUri = encodeURIComponent(contents);
  let fileDown ="data:text;charset=utf-8," + encodedUri;
  let link = document.createElement("a");

  link.setAttribute("href", fileDown);
  link.setAttribute("download", "middle_code.py");

  link.click();
}
function saveFile(){
  const state = Blockly.serialization.workspaces.save(workspace);
  let contents = JSON.stringify(state);


  let encodedUri = encodeURIComponent(contents);
  let fileDown ="data:text;charset=utf-8," + encodedUri;
  let link = document.createElement("a");

  link.setAttribute("href", fileDown);
  link.setAttribute("download", "savefile.json");

  link.click();

}
function loadFile(){
  var input = document.createElement('input');
  input.type = 'file';

  input.onchange = function(event) {
    var file = event.target.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function(event) {
        var contents = event.target.result;
        // 파일 내용을 이용하여 원하는 동작 수행
        const state = JSON.parse(contents);
        Blockly.serialization.workspaces.load(state,workspace);
      };

      reader.readAsText(file); // 파일을 텍스트로 읽기
    }
  };

  input.click(); // 가상의 파일 입력 요소를
}
