function renderLastRegistered(username, score) {
    console.log("Render Highscores!!");
    var getUserName = localStorage.getItem('username');
    var scoreInfo = localStorage.getItem('score');
    let div = document.createElement('div');
    div.id = 'content';
    div.className = 'user';
    
    // new element create
    let h2 = document.createElement('h2');
    h2.textContent = getUserName + "    " + scoreInfo;
    document.body.appendChild(h2);
    
    if (getUserName === null || scoreInfo === null) {
      return;
    }
    else {
        getUserName.textContent = username;
        scoreInfo.textContent = score;
    }
  };


renderLastRegistered(null, null);