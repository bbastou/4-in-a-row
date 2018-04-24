(function() {

	var winningShots = 4;
	var nbColumn = 7;
	var maxDepth = 6;
	var board = new Array(nbColumn);

	for(let i=0; i < board.length; i++)
		board[i] = new Array();

	var gameStarted = true;

	var player = 1;

	var colorPlayer;
	var color1 = "red";
	var color2 = "yellow";

	var rgb_1 = {r:"239", g:"42", b:"28"};
	var rgb_2 = {r:"255", g:"255", b:"63"};
	
	$('.box.empty').addClass(color1+'-player');

	$('.box.empty').click(function() {
		if(gameStarted) {

			column = $(this).data('column');

			if(board[column].length < nbColumn-1) {

				colorPlayer = color1;
				$('.box.empty').removeClass(color1+'-player').addClass(color2+'-player');
				if(player%2 == 0) {                
					colorPlayer = color2;
					$('.box.empty').removeClass(color2+'-player').addClass(color1+'-player');
				}

				player++;

				let emptyBox = $('#box'+column+'_'+board[column].length);
				emptyBox.addClass(colorPlayer).removeClass('empty');

				setPawn(column,colorPlayer);
				
				if(isWin(column)) {
					$('#connect-4-card .game-result').html('<h3 class="text-capitalize">'+colorPlayer+' wins!</h3>');
					$('.box.empty').removeClass(color1+'-player '+color2+'-player');
					gameStarted = false;
					if (typeof setColor === 'function') {
						colorPlayer == color1 ? setColor(2, rgb_1) : setColor(2, rgb_2) ;
					}
				}

				if(isEnd()) {
					$('#connect-4-card .game-result').html('<h3>It\'s a draw...</h3>');
					$('.box.empty').removeClass(colorPlayer+'-player '+color2+'-player');					
					gameStarted = false;
				}
			}
		}
	});

	$('#restart-connect-4').click(function() {
		$('.box').removeClass(color1+' '+color2+' '+color1+'-through '+color2+'-through').addClass('empty');
		gameStarted = true;
		for(let i=0; i < board.length; i++)
			board[i] = new Array();
		player = 1;
		$('.box.empty').removeClass(color2+'-player').addClass(color1+'-player');
		$('#connect-4-card .game-result').html('');
	});

	var setPawn = function(column, color) {
		$('.box.empty').removeClass(color1+'-through '+color2+'-through');
		for(let j=maxDepth-1; j > board[column].length; j--) {
			$('#box'+column+'_'+j).addClass(color+'-through');
		}
		board[column].push(color);
		return 1;
	}

	var isEnd = function() {
		for(let i=0; i < board.length; i++) {
			if(board[i].length < maxDepth)
				return 0;
		}
		return 1;
	}

	var isWin = function(column) {
		let pawn = board[column].length-1;
		return checkColumn(column) || checkLine(pawn) || checkDiago(column, pawn, 1) || checkDiago(column, pawn, 2);
	}



	var setCoup = function(color) {
		// Trouver coup gagnant

		// Empecher coup gagnant

		// Trouver alignement 3 avec 4 eme place libre

		// Trouver alignement 2 avec 3 et 4 eme place libre

		// Jouer place libre avec 2, 3 et 4 eme place libre

	}

	var checkDiago = function(column, line, verification) {
		let win = 0;
		let i = line-winningShots;

		if(verification === 2)
			i = line+winningShots;

		for(let j = column-winningShots; j < column+winningShots; j++) {
			if(i>=0 && j >=0 && j<=nbColumn-1) {
				if(board[j][i])
					colorPlayer === board[j][i] ? win++ : win = 0;
				else
					win = 0;
			}
			
			if(win === winningShots)
				return 1;
			
			if(verification === 2) {
				if(i > line-winningShots )
					i--;
			}
			else {
				if(i < line+winningShots )
					i++;
			}
		}
		return 0;
	}

	var checkLine = function(line) {
		let win = 0;
		for(let i=0; i < nbColumn; i++) {
			if(board[i][line])
				colorPlayer === board[i][line] ? win++ : win = 0;
			else
				win = 0;
			if(win === winningShots)
				return 1;
		}
		return 0;
	}
	var checkColumn = function(column) {
		let win = 0;
		for(let i=0; i < board[column].length; i++) {
			if(board[column][i])
				colorPlayer === board[column][i] ? win++ : win = 0;
			else
				win = 0;

			if(win === winningShots)
				return 1;
		}
		return 0;
	}

})();
