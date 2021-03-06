// =============== Click Events ===============
calcString = '';

var displayClick = function(e){
  var click = [];
  if((e['target'].id) === 'equals'){
    answer();
  }
  else if((e['target'].id) === 'clear'){
    clear();
  }
  else {
    switch(e['target'].id){
      case 'divide':
        click = '/'; break;
      case 'subtract':
        click = '-'; break;
      case 'add':
        click = '+'; break;
      case 'multiply':
        click = '*'; break;
      case 'decimal':
        click = '.'; break;
      case 'negate':
        click = '-'; break;
      case 'parenOpen':
        click = '('; break;
      case 'parenClose':
        click = ')'; break;
      case '0':
        click = '0'; break;
      case '1':
        click = '1'; break;
      case '2':
        click = '2'; break;
      case '3':
        click = '3'; break;
      case '4':
        click = '4'; break;
      case '5':
        click = '5'; break;
      case '6':
        click = '6'; break;
      case '7':
        click = '7'; break;
      case '8':
        click = '8'; break;
      case '9':
        click = '9'; break;
      default:
        alert('Unknown button pressed. Please try again.');
    }
    calcString += click;
    $('#display').text(calcString);
  }
};

$('.number').click(displayClick);
$('.operator').click(displayClick);

// =============== Keyboard Events ===============

var displayKB = function(e){
  var key = [];
  if((e.key === '=') || (e.which === 13 || e.keyCode === 13)){
    answer();
  }
  else if(e.key === 'C' || e.key === 'c'){
    clear();
  }
  // Unable to get Delete or Backspace keys to register on mac or windows. Will return to this later if there is time.
  // else if (e.which === 8 || e.keyCode === 8 || e.which === 46 || e.keyCode === 46 || e.which === 127 || e.keyCode === 127){
  //   console.log("Delete");
  //   key = calcString.substring(0, str.length - 1);
  // }
  else if (e.which === 96 || e.keyCode === 96){
    key = '0';
  }
  else if (e.which === 97 || e.keyCode === 97){
    key = '1';
  }
  else if (e.which === 98 || e.keyCode === 98){
    key = '2';
  }
  else if (e.which === 99 || e.keyCode === 99){
    key = '3';
  }
  else if (e.which === 100 || e.keyCode === 100){
    key = '4';
  }
  else if (e.which === 101 || e.keyCode === 101){
    key = '5';
  }
  else if (e.which === 102 || e.keyCode === 102){
    key = '6';
  }
  else if (e.which === 103 || e.keyCode === 103){
    key = '7';
  }
  else if (e.which === 104 || e.keyCode === 104){
    key = '8';
  }
  else if (e.which === 105 || e.keyCode === 105){
    key = '9';
  }
  else if (e.which === 106 || e.keyCode === 106){
    key = '*';
  }
  else if (e.which === 107 || e.keyCode === 107){
    key = '+';
  }
  else if (e.which === 109 || e.keyCode === 109){
    key = '-';
  }
  else if (e.which === 110 || e.keyCode === 110){
    key = '.';
  }
  else if (e.which === 111 || e.keyCode === 111){
    key = '/';
  }
  else {
    switch(e.key){
      case '/':
        key = '/'; break;
      case '-':
        key = '-'; break;
      case '+':
        key = '+'; break;
      case '*':
        key = '*'; break;
      case '.':
        key = '.'; break;
      case '-':
        key = '-'; break;
      case '(':
        key = '('; break;
      case ')':
        key = ')'; break;
      case '0':
        key = '0'; break;
      case '1':
        key = '1'; break;
      case '2':
        key = '2'; break;
      case '3':
        key = '3'; break;
      case '4':
        key = '4'; break;
      case '5':
        key = '5'; break;
      case '6':
        key = '6'; break;
      case '7':
        key = '7'; break;
      case '8':
        key = '8'; break;
      case '9':
        key = '9'; break;
      default:
        alert('Unknown key pressed. Please try again.');
    }
    calcString += key;
    $('#display').text(calcString);
  }
};

$(document).keypress(displayKB);

// =============== Calculations or Clear ===============

var clear = function(){
  $('#display').text('');
  calcString = '';
};

var answer = function(){
  var ans = $('#display').text();
  // After research, I think I'm controlling the input and that this calculator is simple/small enough that I can use eval() - 12/16/17
  try{
    ans = eval(ans); }
  catch(e){
    alert('Math ERROR! Sorry, please try your calculation again.');
    calcString = '';
  }

  roundedAns = ans.toFixed(2);
  if (roundedAns.endsWith('.00')){
    $('#display').text(ans);
  }
  else {
    $('#display').text(roundedAns);
  }
  calcString = '';
};
