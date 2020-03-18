## Actions

NaturalNumber:
If the last entry is a number, append this number to that number (as if a string)
If the last entry is an operation, append this number to the array.
If we just evaluated the expression, replace that number with this number
If the last entry is a leading zero, kick it out and append this number.



Equals:

Evaluates the expression, we want the expression to be always evaluatable (as in, no errors at evaluation time)
Division by zero makes this button unclickable. But don't erase their answer because they could add like another number after

To the input this adds: "=" and "(evaluted number)"
And the LastPressedButton should be "equals"


Decimal:
Adds a decimal point.
If the last entry is an operation, add "0." instead.
Weirdly, for LastType should be "decimal" after this I think.
If the last entry is a decimal, don't add.

Add, Multiply, Divide
appends an add / mult/ divide
If it comes after any other operation, it should first kick that out of the array

Subtract / Negative
If it follows multiply or divide, it's fine, but we add it as its own entry and the type its number.
If it follows a minus, we can't click it.
If it follows add, replace the add with minus.



Clear:
Resets the Input to []
LastButtonType clear



## State
Input (array)
LastButton (operation, decimal, equals, number)

## Components

Last number display should always display Input.slice(-1)
If Input.slice(-1) === [], then display 0



All other buttons just have props of 
display: 4
id = name

Should change visually upon hover and click.



## UI
Key presses should work as well as clicks


