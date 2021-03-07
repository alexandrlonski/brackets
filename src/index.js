module.exports = function check(str, bracketsConfig) {
    const bracketPairs = bracketsConfig.map(function (val) {
        return val.join("");
    });

    let replStr = str;
    let newStr;
    do{
        newStr = replStr;
        bracketPairs.forEach(function (val) {
            replStr = replStr.replace(val,"");
        });
    } while (replStr.length < newStr.length);

    return replStr.length === 0;
}
