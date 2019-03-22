module.exports = function check(str, bracketsConfig) {
  // your solution
  //  Преобразовали в строчный массив
  var  transformArrayStr = str.split('');
// Задали массив
  for (var a = 0; a <= 1; a++) {
    for (var b = 0; b < bracketsConfig.length; b++) {
      for (var z = 0; z <  transformArrayStr.length; z++) {
        if ( transformArrayStr[z] == bracketsConfig[b][0] &&  transformArrayStr[z+1] == bracketsConfig[b][1]) {
          delete  transformArrayStr[z];
          delete  transformArrayStr[z+1];
           transformArrayStr =  transformArrayStr.filter(element => element !== undefined);
          a = 0;
        }
      }
    }
  }
  if (
    transformArrayStr.length == 0) {
    return true;
  } else {
  return false;
  }
}