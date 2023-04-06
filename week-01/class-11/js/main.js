let playGame = confirm("Shall we play rock, paper or scissors?");

const options = [
	"rock", "paper", "scissors"
]

if(!playGame) alert("Ok, maybe next time");
else {

	let playerChoise = prompt("Please enter, rock, paper or scissors:");

	if(!playerChoise) alert("I guess you change your mind, maybe next time");
	else {
		
		let playerOne = playerChoise
			.trim()
			.toLowerCase();

		if (!options.includes(playerOne)) alert("You didn't enter rock, paper, or scissors");
		else {

			let computer = options[Math.floor(Math.random() * options.length)]

			console.log(computer);

			let result = playerOne === computer
				? "Tie game!"
				: playerOne === "rock" && computer === "paper"
					? `playerOne: ${playerOne} \nComputer:  ${computer}\nComputer wins!`
					: playerOne === "paper" && computer === "scissors"
						? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
						: playerOne === "scissors" && computer === "rock"
							? `playerOne: ${playerOne}\nComputer: $ {computer}\nComputer wins!`
							: `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!`

			alert(result);

			let playAgain = confirm("Play Again?");

			if(playAgain) location.reload();
			else alert("Ok, thanks for playing");
		}
	}
}
