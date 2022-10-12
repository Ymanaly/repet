// практика
function ColcuAge(year){
    return 2022-year
}



function LogoInfo(name,year) {
    const age=ColcuAge(year)

    if (age > 0) {
        console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
    } else {
        console.log('ДВА!')
    }

}

LogoInfo('брат', 1991)
LogoInfo('сестра', 1995)
LogoInfo('внук', 2022)
// задание 2
var  my_arr=new Array();
for (var i=0; i<10; i++){
    my_arr.push('x')
}
console.log(my_arr); Array("x", "x", "x", "x", "x" , "x", "x", "x", "x", "x")




// задание 3
function couter() {
    var i=1;
    return function (){return i++}
}
var funcs=couter()
console.log(funcs())
console.log(funcs())
console.log(funcs())
console.log(funcs())
console.log(funcs())
console.log(funcs())
console.log(funcs())




// ЗАДАЧА№1// НЕ знаю она у меня не работает-__-
var a;
if (a > 0) {
    var ggg = function () {
        console.log('!');
    }
} else {
    var ggg1 = function () {
        console.log('!!');
    }
}
