score = 0;
cross = true;


//function of key code detection..
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    //if the key is up.. as the key code is 38 for upkey, this will be detected.
    if (e.keyCode == 38) {
        //the element whos class is toad will be selected.
        toad = document.querySelector('.toad');
        //adding a class for toad. the 'animatetoad'
        toad.classList.add('animatetoad');
        setTimeout(() => {
            //removing the same class  for 700ms. this is how we're going to make the dino jump and get back to the position.
            toad.classList.remove('animatetoad')
        }, 700);
    }
    //right arrow key keycode is 39. as detected through console.
    if (e.keyCode == 39) {
        toad = document.querySelector('.toad');
        toatx = parseInt(window.getComputedStyle(toad, null).getPropertyValue('left'));
        toad.style.left = toatx + 112 + "px";
    }
    
    //left arrow key keycode is 37. as detected through console.
    if (e.keyCode == 37) {
        toad = document.querySelector('.toad');
        toatx = parseInt(window.getComputedStyle(toad, null).getPropertyValue('left'));
        toad.style.left = (toatx - 112) + "px";
    }
}

setInterval(() => {
    toad = document.querySelector('.toad');
    gameOver = document.querySelector('.gameOver');
    cact = document.querySelector('.cact');
    //getting value throught the window function. the dino's left and top value would be found out.
    tx = parseInt(window.getComputedStyle(toad, null).getPropertyValue('left'));
    ty = parseInt(window.getComputedStyle(toad, null).getPropertyValue('top'));
    
    //getting value throught the window function. the cactus' left and top value would be found out.
    cx = parseInt(window.getComputedStyle(cact, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(cact, null).getPropertyValue('top'));
    //getting the diff. btwn toad and cactus.
    offsetX = Math.abs(tx - cx);
    offsetY = Math.abs(ty - cy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - PRESS CTRL + R. "
        cact.classList.remove('cactAni')
    }
    //if toad and cactus are nearby the x-axis.. the code increases..
    else if (offsetX < 145 && cross) {
        score += 1;
        //updating score.
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(cact, null).getPropertyValue('animation-duration'));
            //the speed of obstacle is increasing.
            newDur = aniDur - 0.1;
            //updating animation durastion of cact.
            cact.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        //will happen after 500ms.
        }, 2100);

    }
//collision
}, 10);

function updateScore(score) {
    //adding this text into code container.
    scoreCont.innerHTML = "Your Score: " + score
}