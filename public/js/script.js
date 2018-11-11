window.onload = function(){
  var files = new Vue({
    el:'#files',
    data: {
      message: 'This is where files are kept'
    }
  });

  Vue.component('modal', {
    template: '#modal-template'
  });

  var pop = new Vue({
    el: '#pop',
    data: {
      message: '',
      showModal: false
    }
  });




/*
  document.getElementById('fileact').addEventListener('click', function(){
      var fileInsert = document.createElement('input');
      if($("#files").children('input').length == 0){
        document.getElementById("files").appendChild(fileInsert);
        $("#files").children('input').addClass("inputBox");
        $("#fileprompt").hide();
      }
  });
*/
}
