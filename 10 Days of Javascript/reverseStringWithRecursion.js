
function reverseString(str){
//console.log(str);

return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
