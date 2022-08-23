// format string to image source
function formatStringToImgSrc(txt) {
    const newTxt = txt.toLowerCase().split(' ').join('-');
    return newTxt;
}
function firstLetterBig(str) {
    const newList = str.split('');
    newList[0] = newList[0].toUpperCase();
    return newList.join('');
}
function namingFunction(str) {
    const nameList = str.toLowerCase().split('_');
    const newNameList = [];
    for (const name of nameList) {
        newNameList.push(firstLetterBig(name));
    }
    return newNameList.join(' ');
}