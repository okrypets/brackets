module.exports = 
function check(str, bracketsConfig) {
  
  let regConfig = [...bracketsConfig].reduce((acc, it) => {
    let strC = it[0].match(/\d/) ? "("+it[0]+it[1]+")" : "(\\"+it[0]+"\\"+it[1]+")";    

    acc.push(strC)
    return acc
    }, []).join("|")
  let newRegExpConfig = new RegExp(regConfig, 'g')
  
  let newStr = str;
  let matchConfig = str.match(newRegExpConfig);;

  do {
    newStr = newStr.replace(newRegExpConfig, "")
    matchConfig = newStr.match(newRegExpConfig);
  } while (
    matchConfig && matchConfig.length > 0
  );

  let result = newStr.length === 0
  
  return result;
}