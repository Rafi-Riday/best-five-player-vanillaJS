const removeAbleList = document.getElementsByClassName('remove-parent');
for (const removeAble of removeAbleList) {
    removeAble.addEventListener('click', function (event) {
        event.target.parentElement.remove();
    })
}
const addRemoveActionBtnList = document.getElementsByClassName('add-remove-action-btn');
const playerCurrentOl = document.getElementById('players-list');
for (let i = 0; i < players.length; i++) {
    console.log(addRemoveActionBtnList[i])
}