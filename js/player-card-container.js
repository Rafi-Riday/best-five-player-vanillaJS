const playerCardContainer = document.getElementById('player-card-container');
/**
 * for loop starts : player cards with real information
 */
for (const player of players) {
    const card = document.createElement('article');
    card.classList.add('class', 'card', 'w-full', 'glass', 'bg-[#fff2]', 'hover:bg-[#fff1]');
    playerCardContainer.appendChild(card);
    /*************************/
    const cardFigure = document.createElement('figure');
    const cardTitleImg = document.createElement('img');
    cardTitleImg.classList.add('w-full');
    //
    cardTitleImg.setAttribute('src', 'img/players/' + formatStringToImgSrc(player.name) + '.webp');
    cardFigure.appendChild(cardTitleImg);
    card.appendChild(cardFigure);
    /*************************/
    const cardBodyContainer = document.createElement('div');
    cardBodyContainer.classList.add('card-body', 'p-2');
    card.appendChild(cardBodyContainer);
    /*************************/
    const cardBodyMain = document.createElement('div');
    cardBodyMain.classList.add('grid', 'grid-cols-12', 'gap-y-4', 'justify-items-center', 'items-center', 'text-2xl', 'md:text-xl', '2lg:text-2xl');
    cardBodyContainer.appendChild(cardBodyMain);
    /*************************/
    const clubContainer = document.createElement('div');
    clubContainer.classList.add('col-span-2', 'tooltip', 'tooltip-right', 'tooltip-info');
    //
    clubContainer.setAttribute('data-tip', player.club);
    const clubImg = document.createElement('img');
    clubImg.classList.add('w-[2em]', 'h-[2em]');
    //
    clubImg.setAttribute('src', 'img/club/' + formatStringToImgSrc(player.club) + '.webp');
    //
    clubImg.setAttribute('alt', player.club);
    clubContainer.appendChild(clubImg);
    cardBodyMain.appendChild(clubContainer);
    /*************************/
    const playerCareerInfo = [];
    for (let i = 0; i < player.career.length; i++) {
        const playerCareerInfoKey = Object.keys(player.career[i]);
        const playerCareerInfoValue = player.career[i][playerCareerInfoKey];
        const infoList = [namingFunction(playerCareerInfoKey[0]), playerCareerInfoValue];
        playerCareerInfo.push(infoList);
    }
    const careerContainer = document.createElement('div');
    careerContainer.classList.add('col-span-8', 'text-xs', 'text-center');
    const careerTextContainer = document.createElement('div');
    careerTextContainer.classList.add('flex', 'flex-col', 'justify-items-center', 'text-center', 'text-gray-200');
    careerContainer.appendChild(careerTextContainer);
    const careerText1 = document.createElement('span');
    //
    careerText1.innerText = playerCareerInfo[0][0] + ' : ' + playerCareerInfo[0][1];
    careerTextContainer.appendChild(careerText1);
    const careerIconicDevider = document.createElement('i');
    careerIconicDevider.classList.add('fa-solid', 'fa-circle', 'text-[0.5em]');
    careerTextContainer.appendChild(careerIconicDevider);
    const careerText2 = document.createElement('span');
    //
    careerText2.innerText = playerCareerInfo[1][0] + ' : ' + playerCareerInfo[1][1];
    careerTextContainer.appendChild(careerText2);
    cardBodyMain.appendChild(careerContainer);
    /*************************/
    const positionContainer = document.createElement('div');
    positionContainer.classList.add('col-span-2', 'justify-self-end', 'tooltip', 'tooltip-left', 'tooltip-info');
    //
    positionContainer.setAttribute('data-tip', player.position);
    const positionImg = document.createElement('img');
    positionImg.classList.add('w-[2em]', 'h-[2em]');
    //
    positionImg.setAttribute('src', 'img/position/' + formatStringToImgSrc(player.position) + '.webp');
    //
    positionImg.setAttribute('alt', player.position);
    positionContainer.appendChild(positionImg);
    cardBodyMain.appendChild(positionContainer);
    /*************************/
    const playerName = document.createElement('h2');
    playerName.classList.add('player-identity-name', 'col-span-12', 'text-center', 'font-extrabold', 'text-white');
    //
    playerName.innerText = player.name;
    cardBodyMain.appendChild(playerName);
    /*************************/
    //
    for (let i = 0; i < 3; i++) {
        const achievementsContainer = document.createElement('div');
        achievementsContainer.classList.add('col-span-4', 'indicator', 'tooltip', 'tooltip-warning');
        //
        achievementsContainer.setAttribute('data-tip', player.achievements[i][2]);
        const achievementsIndicator = document.createElement('span');
        achievementsIndicator.classList.add('indicator-item', 'indicator-bottom', 'translate-x-0', 'badge', 'badge-lg', 'text-white', 'font-bold', 'bg-[#0008]');
        //
        achievementsIndicator.innerText = player.achievements[i][1] + ' x';
        achievementsContainer.appendChild(achievementsIndicator);
        const achievementsImg = document.createElement('img');
        achievementsImg.classList.add('w-[4em]');
        //
        achievementsImg.setAttribute('src', 'img/achievements/' + formatStringToImgSrc(player.achievements[i][0]) + '.webp');
        achievementsContainer.appendChild(achievementsImg);
        cardBodyMain.appendChild(achievementsContainer);
    }
    /*************************/
    const cardActionContainer = document.createElement('div');
    cardActionContainer.classList.add('mt-5', 'card-actions', 'justify-end');
    const cardBtn = document.createElement('button');
    cardBtn.classList.add('add-remove-action-btn', 'btn', 'btn-primary', 'btn-md', 'btn-circle', 'text-2xl', 'text-white', 'hover:text-white', 'disabled:bg-gray-500', 'px-3');
    cardActionContainer.appendChild(cardBtn);
    const cardPlusIcon = document.createElement('i');
    cardPlusIcon.classList.add('fa-solid', 'fa-plus');
    cardBtn.appendChild(cardPlusIcon);
    /*************************/
    cardBodyContainer.appendChild(cardActionContainer);
    /*************************/
}
/**
 * for loop ends
 */
const calculationContainerForPhn = document.createElement('label');
calculationContainerForPhn.setAttribute('for', 'modal-register');
calculationContainerForPhn.classList.add('btn', 'btn-info', 'btn-lg', 'btn-circle', 'text-2xl', 'sm:hidden', 'modal-button', 'sticky', 'bottom-3', 'left-full');
const calculationModalBtn = document.createElement('i');
calculationModalBtn.classList.add('fa-solid', 'fa-bars-progress');
calculationContainerForPhn.appendChild(calculationModalBtn);
playerCardContainer.appendChild(calculationContainerForPhn);

console.log();