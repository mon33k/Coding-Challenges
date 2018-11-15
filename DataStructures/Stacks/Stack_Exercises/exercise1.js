 /* Given a string, write a function isBalanced that returns true if that string contains valid parentheses. By balanced, we mean that each brace is closed in the reverse order in which it was opened. (the first brace opened should be the last one closed and the last one opened should be the first one closed). Also, a closing bracket cannot appear before an opening bracket.

    isBalanced("1 + (2 + 3)") // => true
    isBalanced("1 + (2 + 3") // => false
    isBalanced("1 + )(2 + 3)") // => false */
  
  
    class Stack {
        constructor(){
          this.stack = [];
          this.push = (elem) => { this.stack.push(elem)}
          this.pop = () => { this.stack.pop()}
          this.peek = () => { return this.stack[this.stack.length - 1] }
          this.size = () => { return this.stack.length }
          this.isEmpty = () => { return this.stack.length === 0}
        }
      }
      
      
      const isBalanced = (str) => {
        const myStack = new Stack(); //Create stack
        const strArr = str.split('')
        for (let i = 0; i<strArr.length; i++) {
          let char = strArr[i];
          if(char === '(' || char === '[') {
            myStack.push(char)
          } else if (char === ')') {  
              if(myStack.isEmpty() || myStack.peek() !== '(') { return false }
              else {  myStack.pop()  }
      
          } else if (char === ']') {
              if(myStack.isEmpty() || myStack.peek() !== '[') { return false }
              else {  myStack.pop()  }
          }
        }
        return myStack.isEmpty()
      }
      
      //Basic ()
      //console.log(isBalanced(")1 + (2 + 3)(")) // => false
      // console.log(isBalanced("1 + (2 + 3)")) // => true
      // console.log(isBalanced("1 + (2 + 3")) // => false
      // console.log(isBalanced("1 + )(2 + 3)")) // => false
      
      //More Characters {()}
      // console.log(isBalanced("(1 + {2 + 3})")) // => true
      console.log(isBalanced("1 + ][(2  + 3)")) // => false
      console.log(isBalanced("1 + [](2  + 3)")) // => true
      console.log(isBalanced("[(]3)")) // => false
      console.log(isBalanced("[([1,2,3])]")) // => true