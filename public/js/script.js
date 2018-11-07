window.onload = function(){
  var files = new Vue({
    el:'#files',
    data: {
      message: 'This is where files are kept'
    }
  });

  /*new Vue({
    el: '#fileact',
    methods: {
      show: function(){
        var fileInsert = document.createElement('input');
        document.getElementId("files").appendChild(fileInsert);
        fileInsert.attr('autocomplete', 'off');
        fileInsert.attr('placeholder', 'Insert File Name Here');
        fileInsert.attr('v-model', 'newTodo');
        fileInsert.attr('@keyup.enter', 'addTodo');
      }
    }

  });*/

  document.getElementById('fileact').addEventListener('click', function(){
      var fileInsert = document.createElement('input');
      document.getElementById("files").appendChild(fileInsert);
      $("#fileprompt").hide();
  });

}
