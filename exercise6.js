fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const completedCounts = json.reduce((result, todo) => {
      if (todo.completed) {
        if (result[todo.userId]) {
          result[todo.userId] += 1;
        } else {
          result[todo.userId] = 1;
        }
      }
      return result;
    }, {});
    console.log(completedCounts);
  })
  .catch(function (err) {
    console.log(err);
  });
