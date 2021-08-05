function spinalCase(string) {
  let firstWord = (string.split(''))[0];
  string = string.slice(1,string.length);
  string = string.replace(/\s/g,'-');
  string = string.replace(/([A-Z])/g,'-$1');
  string = string.replace(/_/g,'-');
  string = string.replace(/-+/g,'-');
  return (firstWord + string).toLowerCase();
}

console.log(spinalCase('Things Fall Apart; The Center Cannot Hold'));