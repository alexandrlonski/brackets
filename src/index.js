module.exports = function check(str, bracketsConfig) {
    const arr = bracketsConfig.map(val => val.join(""));
    let replStr = str;
    let newStr;
    do{
        newStr = replStr;
        arr.forEach(val => replStr = replStr.replace(val,""));
    } 
    while (replStr.length < newStr.length);

    return replStr.length === 0;
}
