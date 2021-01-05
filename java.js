document.addEventListener('DOMContentLoaded', ()=> {
	//target block
	const mainDisplay = document.querySelector('.main');
	const word = document.querySelector('.word');
	const score = document.querySelector('.score');
	const high_score = document.querySelector('.high_score');
	
	var true_score = 0;
	var gif_picture = 1;
	
	const speed = 1000;
	
	var buffer = 1;
	var changes = 2;
	let raceCourt1 = [];
	let raceCourt2 = [];
	let CourtLabel1 = [];
	let CourtLabel2 = [];
	let courtLine = [];
	
	function random_kusa_amount(){
		return Math.floor(Math.random()*50) + 10;
	}
	
	function random_tree_amount(){
		return Math.floor(Math.random()*20) + 10;
	}
	
	function kusa_spawns(){
		let n = random_kusa_amount();
		for (let i = 0; i < n; i++){
			let side = Math.random();
			if (side >= 0.5){
				place = document.querySelector('.kusa_left');
			}
			else {
				place = document.querySelector('.kusa_right');
			}
			
			grass = document.createElement('img');
			grass.src = 'kusa_1.png';
			top_presentage = Math.random()*650 + 20;
			left_presentage = Math.random()*150 + 30;
			grass.style.position = 'absolute';
			grass.style.top = top_presentage + 'px' ;
			grass.style.left = left_presentage + 'px';
			place.appendChild(grass);
		}
	}
	
	function tree_spawns(){
		let n = random_tree_amount();
		for (let i = 0; i < n; i++){
			let side = Math.random();
			if (side >= 0.5){
				place = document.querySelector('.tree_left');
			}
			else {
				place = document.querySelector('.tree_right');
				
			}
			top_position = Math.random()*600 + 50;
			left_position = Math.random()*150 + 25;
			tree = document.createElement('img');
			let number = Math.floor(Math.random() * 3) + 1;
			tree.src = 'tree_'+ number +'.png';

			tree.style.position = 'absolute';
			tree.style.top = top_position + 'px' ;
			tree.style.left = left_position + 'px';
			place.appendChild(tree);
		}
	}
	
	tree_spawns();
	
	let grass = setInterval(function(){
		kusa_amount_left = document.querySelector(".kusa_left").children;
		kusa_amount_right = document.querySelector(".kusa_right").children;
		for (let i = 0; i < kusa_amount_left.length ; i++){
			kusa_amount_left[i].src = 'kusa_' + gif_picture +'.png';
		}
		for (let i = 0; i < kusa_amount_right.length ; i++){
			kusa_amount_right[i].src = 'kusa_' + gif_picture+'.png';
		}
		++gif_picture;
		
		if (gif_picture > 4)
			gif_picture = 1;
	},200);
	
	function kusa_movement(){
		kusa_amount_left = document.querySelector(".kusa_left").children;
		kusa_amount_right = document.querySelector(".kusa_right").children;
		
		for (let i = 0; i < kusa_amount_left.length ; i++){
			let position_top = parseInt(kusa_amount_left[i].style.top.replace('px',''));
			if (position_top + 100 > 650){
				let placement_reset_top = Math.random() * 100 + 20;
				let placement_reset_left = Math.random() * 150 + 30;
				kusa_amount_left[i].style.top = placement_reset_top + 'px';
				kusa_amount_left[i].style.left = placement_reset_left + 'px';
			}
			else {
				kusa_amount_left[i].style.top = position_top + 100 + 'px';
				console.log(position_top + 100);
			}
		}
		
		for (let i = 0; i < kusa_amount_right.length ; i++){
			let position_top = parseInt(kusa_amount_right[i].style.top.replace('px',''));
			if (position_top + 100 > 650){
				let placement_reset_top = Math.random() * 100 + 20;
				let placement_reset_left = Math.random() * 150 + 30;
				kusa_amount_right[i].style.top = placement_reset_top + 'px';
				kusa_amount_right[i].style.left = placement_reset_left + 'px';
			}
			else {
				kusa_amount_right[i].style.top = position_top + 100 + 'px';
			}
		}
	}
	
	function tree_movement(){
		tree_amount_left = document.querySelector(".tree_left").children;
		tree_amount_right = document.querySelector(".tree_right").children;
		
		for (let i = 0; i < tree_amount_left.length ; i++){
			let position_top = parseInt(tree_amount_left[i].style.top.replace('px',''));
			if (position_top + 100 > 650){
				let placement_reset_top = Math.random() * 100 + 50;
				let placement_reset_left = Math.random() * 150 + 25;
				tree_amount_left[i].style.top = placement_reset_top + 'px';
				tree_amount_left[i].style.left = placement_reset_left + 'px';
			}
			else {
				tree_amount_left[i].style.top = position_top + 100 + 'px';
				console.log(position_top + 100);
			}
		}
		
		for (let i = 0; i < tree_amount_right.length ; i++){
			let position_top = parseInt(tree_amount_right[i].style.top.replace('px',''));
			if (position_top + 100 > 650){
				let placement_reset_top = Math.random() * 100 + 50;
				let placement_reset_left = Math.random() * 150 + 25;
				tree_amount_right[i].style.top = placement_reset_top + 'px';
				tree_amount_right[i].style.left = placement_reset_left + 'px';
			}
			else {
				tree_amount_right[i].style.top = position_top + 100 + 'px';
			}
		}
	}
	
	function createMain() {
		for (let i = 0; i < 7; i++){
			car = document.createElement('img');
			car.setAttribute('src', 'car1.png');
			car.style.width = 50 + "px";
			car.style.height = 70 + "px";
			car.style.top =  20 + i*100 + "px";
			car.style.left = 50 + "px";
			car.style.display = 'none';
			mainDisplay.appendChild(car);
			raceCourt1.push(car);
		}
		for (let i = 0; i < 7; i++){
			car = document.createElement('img');
			car.setAttribute('src', 'car1.png');
			car.style.width = 50 + "px";
			car.style.height = 70 + "px";
			car.style.top = 20 + i*100 + "px";
			car.style.right = 50 + "px";
			car.style.display = 'none';
			mainDisplay.appendChild(car);
			raceCourt2.push(car);
		}
		
	}
	
	function scores(){
		scores = setInterval(function(){
			true_score++;
		},1);
	}
	
	function compare_score(){
		if (parseInt(score.innerHTML) > parseInt(high_score.innerHTML)){
			high_score.innerHTML = score.innerHTML;
		}
	}
	
	function stop_score(){
		clearInterval(scores);
	}
	
	function createCourt() {
		for (let i = 0; i < 11; i++){
			line = document.createElement('div');
			line.style.width = 10 + "px";
			line.style.height = 60 + "px";
			line.style.top = 20 + i*65 + 'px';
			line.style.left = '50%';
			line.style.position = 'absolute';
			line.style.zIndex = 99;
			line.style.backgroundColor = "white";
			line.style.transform = 'translate(-50%, -50%)';
			//line.style.
			if ((changes+i) % 2 == 0)
				line.style.display = 'none';
			mainDisplay.appendChild(line);
			courtLine.push(line);
		}
	}
	
	function switchLines(){
		if (changes == 2){
			changes = 1;
		}
		else changes++;
		let n = changes;
		if (n == 1){
			for (let i = 0; i < 5; i++){
				courtLine[n].style.display = 'block';
				courtLine[n - 1].style.display = 'none';
				courtLine[n + 1].style.display = 'none';
				n += 2;
			}
		}
		else {
			n = 0;
			for (let i = 0; i < 6; i++){
				courtLine[n].style.display = 'block';
				if (n != 0){
					courtLine[n - 1].style.display = 'none';
				}
				n += 2;
			}
		}
	}
	kusa_spawns();
	createCourt();
	createMain();
	
	function generator() {
		let randomColumn = Math.floor(Math.random() * 2);
		if (randomColumn == 0){
			raceCourt1[0].style.display = 'block';
			CourtLabel1[0] += 1;
			no = randomNumber();
			raceCourt1[0].setAttribute('src', 'car'+ no +'.png');
			checker();
		}
		else {
			raceCourt2[0].style.display = 'block';
			CourtLabel2[0] += 1;
			no = randomNumber();
			raceCourt2[0].setAttribute('src', 'car'+ no +'.png');
			checker();
		};
	}
	
	function carsLocation() {
		for (let i = 0; i < 7;i++){
			CourtLabel1[i] = CourtLabel1[i];
			CourtLabel2[i] = CourtLabel2[i];
		}
	}
	
	function randomNumber() {
		let lol = Math.ceil(Math.random() * 4);
		return lol;
	}
	
	function nextFrame(){
		for (let i = 6; i >= 0; i--){
			if (i == 0 && CourtLabel1[i] != 2 && CourtLabel1[i - 1] != 2){
				CourtLabel1[i] = 0;
			}
			else if (i == 6 && CourtLabel1[i] != 2 && CourtLabel1[i - 1] != 2){
				if (CourtLabel1[i] == 1){
					CourtLabel1[i] = 0;
				}
				CourtLabel1[i] += CourtLabel1[i - 1];
				CourtLabel1[i - 1] = 0;
				raceCourt1[i].src = raceCourt1[i - 1].src;
			}
			else if (i == 6 && CourtLabel1[i] != 2 && CourtLabel1[i - 1] == 2){
				if (CourtLabel1[i] == 1){
					CourtLabel1[i] = 0;
				}
			}
			else if (CourtLabel1[i] != 2 && CourtLabel1[i - 1] != 2) {
				CourtLabel1[i] += CourtLabel1[i - 1];
				CourtLabel1[i - 1] = 0;
				raceCourt1[i].src = raceCourt1[i - 1].src;
			}
			
			if (i == 0 && CourtLabel2[i] != 2 && CourtLabel2[i - 1] != 2){
				CourtLabel2[i] = 0;
			}
			else if (i == 6 && CourtLabel2[i] != 2 && CourtLabel2[i - 1] != 2){
				if (CourtLabel2[i] == 1){
					CourtLabel2[i] = 0;
				}
				CourtLabel2[i] += CourtLabel2[i - 1];
				CourtLabel2[i - 1] = 0;
				raceCourt2[i].src = raceCourt2[i - 1].src;
			}
			else if (i == 6 && CourtLabel2[i] != 2 && CourtLabel2[i - 1] == 2){
				if (CourtLabel2[i] == 1){
					CourtLabel2[i] = 0;
				}

			}
			else if (CourtLabel2[i] != 2 && CourtLabel2[i - 1] != 2) {
				CourtLabel2[i] += CourtLabel2[i - 1];
				CourtLabel2[i - 1] = 0;
				raceCourt2[i].src = raceCourt2[i - 1].src;
			}
			
			if (CourtLabel1[i] == 2 && i != 0){
				CourtLabel1[i] += CourtLabel1[i - 1];
				CourtLabel1[i - 1] = 0;
				raceCourt1[i].src = raceCourt1[i - 1].src;
			}
			if (CourtLabel2[i] == 2 && i != 0){
				CourtLabel2[i] += CourtLabel2[i - 1];
				CourtLabel2[i - 1] = 0;
				raceCourt2[i].src = raceCourt2[i - 1].src;
			}
		}
		
	}
	
	function drawCar() {
		for (let i = 0; i < 7; i++){
			if (CourtLabel1[i] == 0){
				raceCourt1[i].style.display = 'none';
			}
			else if (CourtLabel1[i] == 1){
				raceCourt1[i].style.display = 'block';
			}
			if (CourtLabel2[i] == 0){
				raceCourt2[i].style.display = 'none';
			}
			else if (CourtLabel2[i] == 1){
				raceCourt2[i].style.display = 'block';
			}
			if (CourtLabel1[i] == 2){
				raceCourt1[i].style.display = 'block';
				raceCourt1[i].setAttribute('src','player_car.png');
			}
			if (CourtLabel2[i] == 2){
				raceCourt2[i].style.display = 'block';
				raceCourt2[i].setAttribute('src','player_car.png');
			}
			if (CourtLabel1[i] == 3){
				timeNumberStack(i, 1);
			}
			
			if (CourtLabel2[i] == 3){
				timeNumberStack(i, 2);
			}
		}
	}
	
	function explosionStop(go){
		clearInterval(go);
	}
	
	function score_color(){
		if (parseInt(score.innerHTML) >= 5000 && parseInt(score.innerHTML) < 10000){
			score.style.color = 'yellow';
		}
		else if (parseInt(score.innerHTML) >= 10000 && parseInt(score.innerHTML) < 20000){
			score.style.color = 'orange';
		}
		else if (parseInt(score.innerHTML) >= 20000 && parseInt(score.innerHTML) < 40000){
			score.style.color = 'red';
		}
		else if (parseInt(score.innerHTML) >= 40000 && parseInt(score.innerHTML) < 80000){
			score.style.color = 'purple';
		}
		else if (parseInt(score.innerHTML) >= 80000){
			score.style.color = 'black';
		}
		else {
			score.style.color = 'white';
		}
	}
	
	function high_score_color(){
		if (parseInt(high_score.innerHTML) >= 5000 && parseInt(high_score.innerHTML) < 10000){
			high_score.style.color = 'yellow';
		}
		else if (parseInt(high_score.innerHTML) >= 10000 && parseInt(high_score.innerHTML) < 20000){
			high_score.style.color = 'orange';
		}
		else if (parseInt(high_score.innerHTML) >= 20000 && parseInt(high_score.innerHTML) < 40000){
			high_score.style.color = 'red';
		}
		else if (parseInt(high_score.innerHTML) >= 40000 && parseInt(high_score.innerHTML) < 80000){
			high_score.style.color = 'purple';
		}
		else if (parseInt(high_score.innerHTML) >= 80000){
			high_score.style.color = 'black';
		}
		else {
			high_score.style.color = 'white';
		}
	}
	
	function timeNumberStack(n, m) {
		let number = 0;
		var go = setInterval(function(){
			number++;
			if (number >= 10){
				explosionStop(go);
				compare_score();
				high_score_color();
			}
			else {
				if (m == 1){
					raceCourt1[n].src = "explosion"+number+".png";
				}
				else {
					raceCourt2[n].src = "explosion"+number+".png";
				}
			}
		}, 200);
		
	}
	
	function checker(){
		for (let i = 0; i < 7; i++){
			if (CourtLabel1[i] >= 3){
				stop_score();
				clearInterval(run);
				drawCar();
				setTimeout(function(){button.style.display = "block"}, 1800);
				button.innerHTML = "RETRY";
				break;
			}
			if (CourtLabel2[i] >= 3){
				stop_score();
				clearInterval(run);
				drawCar();
				setTimeout(function(){button.style.display = "block"}, 1800);
				button.innerHTML = "RETRY";
				break;
			}
		}
	}
	
	function keyRight(){
		for (let i = 0; i < 7; i++){
			if (CourtLabel1[i] == 2){
				CourtLabel2[i] += CourtLabel1[i];
				CourtLabel1[i] = 0;
				raceCourt2[i].src = raceCourt1[i].src;
				carsLocation();
				drawCar();
				checker();
				break;
			}
		}
	}
	
	function keyLeft(){
		for (let i = 0; i < 7; i++){
			if (CourtLabel2[i] == 2){
				CourtLabel1[i] += CourtLabel2[i];
				CourtLabel2[i] = 0;
				raceCourt1[i].src = raceCourt2[i].src;
				carsLocation();
				drawCar();
				checker();
				break;
			}
		}
	}
	
	function keyUp(){
		for (let i = 1; i < 7; i++){
			if (CourtLabel1[i] == 2 && i != 0){
				CourtLabel1[i - 1] += CourtLabel1[i];
				CourtLabel1[i] = 0;
				raceCourt1[i - 1].src = raceCourt1[i].src;
				carsLocation();
				drawCar();
				checker();
				break;
			}
			if (CourtLabel2[i] == 2 && i != 0){
				CourtLabel2[i - 1] += CourtLabel2[i];
				CourtLabel2[i] = 0;
				raceCourt2[i - 1].src = raceCourt2[i].src;
				carsLocation();
				drawCar();
				checker();
				break;
			}
		}
	}
	

	
	function keyDown(){
		for (let i = 0; i < 7; i++){
			if (CourtLabel1[i] == 2 && i != 6){
				CourtLabel1[i + 1] += CourtLabel1[i];
				CourtLabel1[i] = 0;
				raceCourt1[i + 1].src = raceCourt1[i].src;
				carsLocation();
				drawCar();
				checker();
				break;
			}
			if (CourtLabel2[i] == 2 && i != 6){
				CourtLabel2[i + 1] += CourtLabel2[i];
				CourtLabel2[i] = 0;
				raceCourt2[i + 1].src = raceCourt2[i].src;
				carsLocation();
				drawCar();
				checker();
				break;
			}
		}
	}
	
	
	
	function control(e){
		if(e.keyCode === 39){
			keyRight();
			console.log("right");
		}
		if(e.keyCode === 37){
			keyLeft();
		}
		if(e.keyCode === 38){
			keyUp();
		}
		if(e.keyCode === 40){
			keyDown();
		}
	}
	
	document.addEventListener('keyup', control);
	
	var button = document.getElementById("start");

	var high = document.getElementById("high");
	var medium = document.getElementById("medium");
	var low = document.getElementById("low");
	var very_hard = document.getElementById("very_hard");
	var diff = document.getElementById("diff");
	
	button.addEventListener("click", function(){
		button.style.display = 'none';
		true_score = 0;
		diff.style.display = 'block';
		high.style.display = 'block';
		medium.style.display = 'block';
		low.style.display = 'block';
		very_hard.style.display = "block";
	} , false);
	
	very_hard.addEventListener("click", function(){
		very_hard.style.display = "none";
		high.style.display = "none";
		medium.style.display = "none";
		low.style.display = "none";
		diff.style.display = 'none';
		score.innerHTML = 0;
		for (let i = 0; i < 7; i ++){
			CourtLabel1[i] = 0;
			CourtLabel2[i] = 0;
		}
		CourtLabel1[6] = 2;
		drawCar();
		let n = 0;
		let lvUp = 0;
		score.innerHTML = 0;
		word.style.color = "#d3d3d3";
		run = setInterval(function(){
			if (n != 31){
				n++;
				if (n == 31){
						setTimeout(function(){word.innerHTML = "";},200);
						word.style.color = "red";
						word.innerHTML = "GO!"
						scores = setInterval(function(){
							true_score += 2;
							score.innerHTML = true_score;
							score_color();
						}, 1);		
				}
				else if (n == 1){
					word.innerHTML = "3";
				}
				else if (n == 11){
					word.innerHTML = "2";
				}
				else if (n == 21){
					word.innerHTML = "1";
				}
				switchLines();
				kusa_movement();
				tree_movement();
			}
			else {
				nextFrame();
				checker();
				console.log(CourtLabel1,CourtLabel2);
				drawCar();
				switchLines();
				kusa_movement();
				tree_movement();
				console.log('high');
				if (buffer != 0){
					generator();
					buffer = 0;
				}
				else {
					buffer++;
				}
			}
		}, 100);
		
		
	} , false);
	
	high.addEventListener("click", function(){
		very_hard.style.display = "none";
		high.style.display = "none";
		medium.style.display = "none";
		low.style.display = "none";
		diff.style.display = 'none';
		score.innerHTML = 0;
		for (let i = 0; i < 7; i ++){
			CourtLabel1[i] = 0;
			CourtLabel2[i] = 0;
		}
		CourtLabel1[6] = 2;
		drawCar();
		let n = 0;
		let lvUp = 0;
		score.innerHTML = 0;
		word.style.color = "#d3d3d3";
		run = setInterval(function(){
			if (n != 16){
				n++;
				if (n == 16){
						setTimeout(function(){word.innerHTML = "";},333);
						word.style.color = "red";
						word.innerHTML = "GO!"
						scores = setInterval(function(){
							true_score++;
							score.innerHTML = true_score;
							score_color();
						}, 1);		
				}
				else if (n == 1){
					word.innerHTML = "3";
				}
				else if (n == 6){
					word.innerHTML = "2";
				}
				else if (n == 11){
					word.innerHTML = "1";
				}
				switchLines();
				kusa_movement();
				tree_movement();
			}
			else {
				nextFrame();
				checker();
				console.log(CourtLabel1,CourtLabel2);
				drawCar();
				switchLines();
				kusa_movement();
				tree_movement();
				console.log('high');
				if (buffer != 0){
					generator();
					buffer = 0;
				}
				else {
					buffer++;
				}
			}
		}, 200);
		
		
	} , false);
	
	medium.addEventListener("click", function(){
		very_hard.style.display = "none";
		high.style.display = "none";
		medium.style.display = "none";
		low.style.display = "none";
		diff.style.display = 'none';
		score.innerHTML = 0;
		for (let i = 0; i < 7; i ++){
			CourtLabel1[i] = 0;
			CourtLabel2[i] = 0;
		}
		CourtLabel1[6] = 2;
		drawCar();
		let n = 0;
		let lvUp = 0;
		word.style.color = "#d3d3d3";
		run = setInterval(function(){
			if (n != 7){
				n++;
				if (n == 7){
						setTimeout(function(){word.innerHTML = "";},666);
						word.style.color = "red";
						word.innerHTML = "GO!"
						scores = setInterval(function(){
							true_score++;
							score.innerHTML = true_score;
							score_color();
						}, 10);	
				}
				else if (n == 1){
					word.innerHTML = "3";
				}
				else if (n == 3){
					word.innerHTML = "2";
				}
				else if (n == 5){
					word.innerHTML = "1";
				}
				switchLines();
				kusa_movement();
				tree_movement();
			}
			else {
				nextFrame();
				checker();
				console.log(CourtLabel1,CourtLabel2);
				drawCar();
				switchLines();
				kusa_movement();
				tree_movement();
				if (buffer != 0){
					generator();
					buffer = 0;
				}
				else {
					buffer++;
				}
			}
		},666);
		
		
	} , false);
	
	low.addEventListener("click", function(){
		very_hard.style.display = "none";
		high.style.display = "none";
		medium.style.display = "none";
		low.style.display = "none";
		diff.style.display = 'none';
		score.innerHTML = 0;
		for (let i = 0; i < 7; i ++){
			CourtLabel1[i] = 0;
			CourtLabel2[i] = 0;
		}
		CourtLabel1[6] = 2;
		drawCar();
		let n = 0;
		let lvUp = 0;
		word.style.color = "#d3d3d3"; 
		run = setInterval(function(){
			if (n != 4){
				n++;
				if (n == 4){
						setTimeout(function(){word.innerHTML = "";},1000);
						word.style.color = "red";
						word.innerHTML = "GO!"
						scores = setInterval(function(){
							true_score++;
							score.innerHTML = true_score;
							score_color();
						},50 );	
				}
				else if (n == 1){
					word.innerHTML = "3";
				}
				else if (n == 2){
					word.innerHTML = "2";
				}
				else if (n == 3){
					word.innerHTML = "1";
				}
				switchLines();
				kusa_movement();
				tree_movement();
			}
			else {
				nextFrame();
				checker();
				console.log(CourtLabel1,CourtLabel2);
				drawCar();
				switchLines();
				kusa_movement();
				tree_movement();
				if (buffer != 0){
					generator();
					buffer = 0;
				}
				else {
					buffer++;
				}
			}
		},1000);
		
		
	} , false);
	
	
	
	
	
});