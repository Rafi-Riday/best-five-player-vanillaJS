/***************************************************************/
// calculation container switcher
const logic = 640;
let isMobilePhone;
if (document.documentElement.clientWidth >= logic) {
    isMobilePhone = false;
}
else {
    isMobilePhone = true;
}
function swapContainer(className) {
    const classList = document.getElementsByClassName(className);
    const itemA = classList[0].children[0];
    const itemB = classList[1].children[0];
    classList[0].removeChild(itemA);
    classList[1].removeChild(itemB);
    classList[0].appendChild(itemB);
    classList[1].appendChild(itemA);
}
if (isMobilePhone === true) {
    swapContainer('calculation-container');
}
window.addEventListener('resize', function (event) {
    const winWidth = document.documentElement.clientWidth;
    if (winWidth >= logic && isMobilePhone === true) {
        isMobilePhone = false;
        swapContainer('calculation-container');
    }
    else if (winWidth < logic && isMobilePhone === false) {
        isMobilePhone = true;
        swapContainer('calculation-container');
    }
})
        /***************************************************************/