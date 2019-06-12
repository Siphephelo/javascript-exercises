//Function to add 2 numbers
function add(x,y) {
    return x + y
}
add(1,2)

//Adding numbers that are strings
function add(x,y){
    return parseInt(x) + parseInt(y)
}

function add(x,y){
    return parseFloat(x) + parseFloat(y)
}

// Adding more than 2 numbers
function add () {
    var total = 0
  
    for (var i = 0; i < arguments.length; i++) {
      total += parseFloat(arguments[i])
    }
  
    return total
  }

  //I took a tutorial with this link: https://writingjavascript.org/posts/introduction-to-functions-numbers-in-javascript
  