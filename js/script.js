///////////////////Odczytanie ruchu komputera///////////////////
function playGame(playerInput) {
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displeyResult(computerMove, playerMove) {
    if (
      (computerMove == 'kamień' && playerMove == 'papier') ||
      (computerMove == 'papier' && playerMove == 'nożyce') ||
      (computerMove == 'nozyce' && playerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
    } else if (computerMove == playerMove) {
      printMessage('Mamy remis! Spróbój jeszcze raz!');
    } else if (playerMove == 'nieznany ruch') {
      printMessage('Twój ruch jest błędny! Spróbój jeszcze raz!');
    } else {
      printMessage('Ty przegrywasz!');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  // if (randomNumber == 1) {
  //   computerMove = 'kamień';
  // } else if (randomNumber == 2) {
  //   computerMove = 'papier';
  // } else {
  //   computerMove = 'nożyce';
  // }

  printMessage('Mój ruch to: ' + computerMove);

  ///////////////////Odczytanie ruchu gracza///////////////////

  // let playerInput = prompt(
  //   'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'
  // );

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);

  // if (playerInput == '1') {
  //   playerMove = 'kamień';
  // } else if (playerInput == '2') {
  //   playerMove = 'papier';
  // } else if (playerInput == '3') {
  //   playerMove = 'nożyce';
  // } else {
  //   playerMove = 'nieznany ruch';
  // }

  ///////////////////Wynik gry///////////////////
  displeyResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});
