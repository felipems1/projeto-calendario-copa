const createGame = (player1, hour, player2) => {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    ` 
}

let delay = 0.3;
const createCard = (date, day, games) => {
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML =
    createCard('24/11', 'quinta', 
        createGame('uruguai', '10:00', 'south-korea') +
        createGame('portugal', '13:00', 'ghana') +
        createGame('brazil', '16:00', 'serbia')) +
    createCard('28/11', 'segunda', 
        createGame('south-korea', '10:00', 'ghana') +
        createGame('brazil', '13:00', 'switzerland') +
        createGame('portugal', '16:00', 'uruguai')) +
    createCard('02/12', 'sexta',
        createGame('ghana', '12:00', 'uruguai') +
        createGame('serbia', '16:00', 'switzerland') +
        createGame('cameroon', '16:00', 'brazil')) 
