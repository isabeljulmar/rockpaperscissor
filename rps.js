// switch statements for rock, paper and scissors






var rockPicture = document.getElementById('rock');
var paperPicture = document.getElementById('paper');
var scissorsPicture = document.getElementById('scissors');
var chipsWithDip = ['Rock','Paper','Scissors']
var tally = { tie: 0, wins: 0, losses: 0 }


function someFunction (playerChoice){
	var chip = chipsWithDip[Math.floor(Math.random()*chipsWithDip.length)];
	switch(playerChoice){
		case "Rock":
			switch(chip){
				case "Rock":
				tally.tie++
				document.getElementById('keepingscore1').innerHTML = "It's a tie! x" //apply number of times
				break
				case "Paper":
				tally.losses++
				document.getElementById('keepingscore2').innerHTML = "You lose! x" //apply number of times
				break
				case "Scissors":
				tally.wins++
				document.getElementById('keepingscore3').innerHTML = "You win! x" //apply number of times
				break
			}
			break
				case "Paper":
				switch(chip){
					case "Rock":
					tally.wins++
					document.getElementById('keepingscore1').innerHTML = "You win! x" //apply number of times
					break
					case "Paper":
					tally.tie++
					document.getElementById('keepingscore2').innerHTML = "It's a tie! x" //apply number of times
					break
					case "Scissors":
					tally.losses++
					document.getElementById('keepingscore3').innerHTML = "You lose!" //apply number of times
					break
				}
				break
					case "Scissors":
					switch(chip){
						case "Rock":
						tally.losses++
						document.getElementById('keepingscore1').innerHTML = "You lose!" //apply number of times
						break
						case "Paper":
						tally.wins++
						document.getElementById('keepingscore2').innerHTML = "You win!" //apply number of times
						break
						case "Scissors":
						tally.tie++
						document.getElementById('keepingscore3').innerHTML = "It's a tie!" //apply number of times
						break
					}
	}

		
}







rockPicture.addEventListener('click', function(){
	someFunction("Rock")
})
paperPicture.addEventListener('click', function(){
	someFunction("Paper")
})
scissorsPicture.addEventListener('click', function(){
	someFunction("Scissors")
})

