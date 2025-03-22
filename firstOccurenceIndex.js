//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}

console.log(strStr("hello", "ll"));
console.log(strStr("abcdef", "cd"));
console.log(strStr("abc", "d"));
