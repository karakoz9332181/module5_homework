const n = prompt('введите n')
 console.log (typeof +n);
if (n % 2 ===0) {
	alert('Число ' + n + ' четное!')
} else {
	alert('Число ' + n + ' нечетное!')
}

if (n && +n)  {
	alert( n +  '  число  ')
} else {
	alert( n + ' Упс, кажется, вы ошиблись! ')
}  
   

  