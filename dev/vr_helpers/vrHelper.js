export default arrayOfLines;
export function lineBreak(text){
  text = text.split(' ');
  var lineOne = '';
  var lineTwo = '';
  var lineThree = '';

  var count = 0;
  var result;
  var curr;
  for(var i = 0; i < text.length; i++){

    if(lineOne.length <= 22 && ((lineOne.length + text[i].length + 1) <= 22) && count <= 22 && (curr === undefined || curr === 'line1')){
      if(curr === undefined) {
        curr = 'line1';
        lineOne += (text[i] + ' ');
        count += (text[i].length + 1);
      }else if(curr === 'line1'){
        lineOne += (text[i] + ' ');
        count += (text[i].length + 1);
      }
    }else if(lineTwo.length <= 22 && ((lineTwo.length + text[i].length + 1) <= 22) && count < (count + 22) && (curr === 'line1' || curr === 'line2')) {
      if(curr === 'line1'){
        curr = 'line2';
        lineTwo += (text[i] + ' ');
        count += (text[i].length + 1);
      }else if(curr === 'line2') {
        lineTwo += (text[i] + ' ');
        count += (text[i].length + 1);
      }
    }else if(lineThree.length <= 22 && ((lineThree.length + text[i].length + 1) <= 22) && count <= (count + 17) && (curr === 'line2' || curr === 'line3')){
      if(curr === 'line2'){
        curr = 'line3'
        lineThree += (text[i] + ' ');
        count += (text[i].length + 1);
      }else if(curr === 'line3'){
        lineThree += (text[i] + ' ');
        count += (text[i].length + 1);
      }
    }else {
      if(curr === 'line3'){
        curr = 'done';
        var removeEnd = lineThree.slice(0, lineThree.length - 1);
        lineThree = removeEnd;
        var removeEndAgain = lineThree.slice(lineThree.length - 1);
        if(removeEndAgain === '.' || removeEndAgain === ','){
          lineThree = lineThree.slice(0, lineThree.length - 1);
          lineThree += "...";
        }else{
          lineThree += "...";
        }
      }
    }
  }
  arrayOfLines = [lineOne, lineTwo, lineThree];

  result = lineOne + '\n' + lineTwo + '\n' + lineThree;

  return result;
}
