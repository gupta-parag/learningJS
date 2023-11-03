let a = "1abcdefghi";
console.log(a[2]);

//Strings are immutable
a[2] = "F";
console.log(a);

//String methods
console.log("you are so groounded mister!!".toUpperCase());

//trim : removes whitespace from the edges of string
let z = "  pete howw are you, man ??   ";
console.log("Z length is : " + z.length);
console.log(z.trim().toUpperCase());
console.log("Z length is : " + z.trim().toUpperCase().length);

// String methods with arguments

// indexOf()
console.log("Index of letter O : ", "abcdefgho".indexOf("o"));
console.log("Index of word dog : ", "abcdogho".indexOf("dog"));
console.log("Index of word ball : ", "aballcdlaballogho".indexOf("ball")); // only tells you the first occurence of the pattern
console.log("Index of letter O : ", "abcdefgh".indexOf("o")); // if -1 that means it is not found

//slice()
console.log("SLICE");
console.log("abcdefgho".slice(5)); // from the starting index till the end
console.log("abcdefgho".slice(5, 7)); // from starting till the end
console.log("Hoa many letters from 15 th position : ", "abcdefgho".slice(15)); // from starting till the end

//replace()

console.log("baseball is entertaining".replace("baseball", "home before dark"));
