var fs = require('fs');
module.exports = {
  pwd : function(){
    process.stdout.write(`${process.cwd()}`);
  },
  date: function(){
    process.stdout.write(Date());
  },
  ls : function(){
    var files = fs.readdirSync('.');
    process.stdout.write(files.toString());
  },
  echo : function(str){
    if(str[0]==="$"){
      var path = str.slice(1);
      process.stdout.write(process.env[path]);
    }else{
      process.stdout.write(str);
    }
  },
  cat: function(str){
    fs.readFile(str, function(err,data){
      if(err){
        throw err;
      }
      process.stdout.write(data.toString());
    });
  },
  head: function(str){
    fs.readFile(str, function(err,data){
      var fileData = data.toString().split("\n");
      var modifiedData = fileData.slice(0,9);
      process.stdout.write(modifiedData.join("\n"));
    });
  },
  tail : function(str){
    fs.readFile(str, function(err,data){
      var fileData = data.toString().split("\n");
      var modifiedData = fileData.slice(-10);
      process.stdout.write(modifiedData.join("\n"));
    });
  }
};
