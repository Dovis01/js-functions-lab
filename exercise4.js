fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const Completed = json.reduce((count, todo) => {
      if (todo.completed) {
        return count + 1;
      }
      return count;
    }, 0);

    console.log('Number of completed to-do items: ' + Completed);
  })
  .catch(function (err) {
    console.log(err);
  });

  /*
  array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue);

  accumulator:  必需。累计器
  currentValue: 必需。当前元素
  
  currentIndex: 可选。当前元素的索引；                    
  arr:          可选。要处理的数组
  initialValue: 可选。传递给函数的初始值，相当于accumulator的初始值

   */