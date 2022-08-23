const addRemoveActionBtnList = document.getElementsByClassName('add-remove-action-btn');
const playerCurrentOl = document.getElementById('players-list');
for (let i = 0; i < players.length; i++) {
    const player = players[i];
    addRemoveActionBtnList[i].addEventListener('click', function (event) {
        if (playerCurrentOl.children.length >= 5) {
            document.getElementById('player-add-error').classList.remove('hidden');
            setTimeout(function () {
                document.getElementById('player-add-error').classList.add('hidden');
            }, 4000)
            return;
        }
        const newPlayerListItem = document.createElement('li');
        newPlayerListItem.classList.add('ml-5', 'py-1', 'sm:py-2', 'text-sm');
        newPlayerListItem.setAttribute('data-player-serial', i);
        newPlayerListItem.innerText = player.name;
        const removeParentItem = document.createElement('i');
        removeParentItem.classList.add('btn', 'bg-tomato', 'text-white', 'btn-sm', 'rounded-lg', 'ml-2', 'fa-solid', 'fa-xmark', 'remove-parent');
        newPlayerListItem.appendChild(removeParentItem);
        playerCurrentOl.appendChild(newPlayerListItem);
        /*********************/
        event.target.setAttribute('disabled', true);
        // adding removablilty
        const removeAbleList = document.getElementsByClassName('remove-parent');
        for (const removeAble of removeAbleList) {
            removeAble.addEventListener('click', function (event) {
                const dataPlayerSerial = event.target.parentElement.getAttribute('data-player-serial');
                addRemoveActionBtnList[parseInt(dataPlayerSerial)].removeAttribute('disabled');
                event.target.parentElement.remove();
            })
        }
    })
}