function renderLastRegistered(username, score) {
    console.log("Render Highscores!!");
    // Retrieve the last email and password from localStorage using `getItem()`
    var getUserName = localStorage.getItem('username');
    var scoreInfo = localStorage.getItem('score');
    // console.log(getUserName);
    // console.log(scoreInfo);
    // var getUserName = document.querySelector("#user-list");
    // var scoreInfo = document.querySelector("#score-list");
    
    let div = document.createElement('div');
    div.id = 'content';
    div.className = 'user';
    
    // create a new heading and add it to the div
    let h2 = document.createElement('h2');
    h2.textContent = getUserName + scoreInfo;
    div.appendChild(div);
    
    // add div to the document
    document.body.appendChild(div);

    // If they are null, return early from this function
    if (getUserName === null || scoreInfo === null) {
      return;
    }
    else {
        getUserName.textContent = username;
        scoreInfo.textContent = score;
    }
    // Set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
    // getUserName.textContent = username;
    // scoreInfo.textContent = score;
  };