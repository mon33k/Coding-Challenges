/* Exercise 3
Rewrite the isBalanced function from ex. 2 to work with two kinds of braces: () and [].

isBalanced("1 + (2 + 3) + arr[0]") // => [true, 2, 0]
isBalanced("1 + arr[(2 + 3)]") // => [true, 2, 0]
isBalanced("1 + (2 + 3]") // => [false, 0, 2]
isBalanced("1 + (2 + [)2 + 3]") // => [false, 0, 4] 
isBalanced("(([()]))") // => [true, 4, 0] */