var str = "javascript";
console.log(str.charAt(2)) //'v'
// str.charAt(n)
// 返回字符串的第 n 个字符，如果不在 0~str.length-1之间，则返回一个空字符串。
// charCodeAt,它给你,而不是字符本身的字符代码

var str = "javascript";
console.log(str.indexOf('s')); // 1
console.log(str.indexOf('s',6)); // -1
//indexOf(substr[,start])
//返回 substr 在字符串 str 中首次出现的位置,从 start 位置开始查找，如果不存在，则返回 -1。 

var str = 'lastindex';
console.log(str.lastIndexOf('a')); // 1
//lastIndexOf(substr[,start])
//返回 substr 在字符串 str 中最后出现的位置,从 start 位置 向前开始查找，如果不存在，则返回 -1

var str = 'abcdefg';
console.log(str.substring(1, 4)); //"bcd"
console.log(str.substring(1)); // "bcdefg"
console.log(str.substring(-1)); //"abcdefg" 传入负值时会视为0
//str.substring(start[, end])
//返回从 start 到 end（不包括）之间的字符，start、end均为 非负整数。若结束参数(end)省略，则表示从start位置一直截取到最后

var str = 'this is awesome';
console.log(str.slice(4, -1)); //" is awesom"
//str.slice(start[,end])
//返回从 start 到 end （不包括）之间的字符，可传负值

var str = "Just give me a reason";
console.log(str.substr(5, 10)); // "give me a "
console.log(str.substr(-4, 2)); // "as"
//str.slice(start[,end])
//返回 str 中从指定位置开始到指定长度的子字符串，start可为负值

var str = 'I love JavaScript!';
console.log(str.search(/java/)); // -1
console.log(str.search(/Java/)); // 7
//str.search(regexp)
//查找 str 与一个正则表达式是否匹配。如果匹配成功，则返回正则表达式在字符串中首次匹配项的索引；否则，返回 -1。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象

var stringOne = "Knibb High football ";
var stringTwo = stringOne.concat("rules."); 
console.log(stringTwo) // "Knibb High football rules"
//追加

var str = "Hello?World!";
console.log(str.split()); // ["Hello?World!"]
console.log(str.split('')); // ["H", "e", "l", "l", "o", "?", "W", "o", "r", "l", "d", "!"]
console.log(str.split('?')); // ["Hello", "World!"]
console.log(str.split('',5)); // ["H", "e", "l", "l", "o"]
//str.split([separator][, limit])
//返回一个数组，分隔符 separator 可以是一个字符串或正则表达式

var str = 'JavaScript';
console.log(str.toLowerCase()); // 'javascript'

var str = 'javascript';
console.log(str.toUpperCase()); // 'JavaScript'












