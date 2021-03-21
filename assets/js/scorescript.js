function renderLastRegistered(username, score) {
    console.log("Render Highscores!!");
    // var getUserName = localStorage.getItem('username');
    // var scoreInfo = localStorage.getItem('score');
    var getUserName = JSON.parse(localStorage.getItem("username"));
    var scoreInfo = JSON.parse(localStorage.getItem("score"));
    
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

//getUserName = JSON.parse(localStorage.getItem("username"));
//scoreInfo = JSON.parse(localStorage.getItem("score"));
// var loadTasks = function() {
//   tasks = JSON.parse(localStorage.getItem("tasks"));

//   // if nothing in localStorage, create a new object to track all task status arrays
//   if (!tasks) {
//     tasks = {
//       toDo: [],
//       inProgress: [],
//       inReview: [],
//       done: []
//     };
//   }

//   // loop over object properties
//   $.each(tasks, function(list, arr) {
//     console.log(list, arr);
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTask(task.text, task.date, list);
//     });
//   });
// };