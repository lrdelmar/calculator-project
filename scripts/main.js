document.addEventListener('DOMContentLoaded', () => {
  // Select the calculator display (input element) where the result is shown
  const display = document.getElementById('display');

  // Initialize a variable to store the current input string (numbers/operators)
  let currentInput = '';

  /**
   * Map of button actions: Each key corresponds to a button ID
   * and its associated function handles that button's behavior.
   */
  const buttonActions = {
    // Clear the display and reset the input string
    clear: () => {
      currentInput = '';
      display.value = ''; // Update the display to show an empty string
    },

    percent: () => {
      const operators = /[+\-*/]/g; // Regex to find operators
      const lastOperatorIndex = currentInput.lastIndexOf(
        currentInput.match(operators)?.pop() || ''
      ); // Find the last operator
      const beforeOperator = currentInput.slice(0, lastOperatorIndex); // Value before the operator
      const afterOperator = currentInput.slice(lastOperatorIndex + 1); // Value after the operator
      const lastOperator = currentInput[lastOperatorIndex]; // Identify the last operator

      if (!isNaN(afterOperator) && afterOperator) {
        // Parse numbers before and after the operator
        const base = parseFloat(beforeOperator || '1'); // Default base is 1 if no operator exists
        const percentage = parseFloat(afterOperator) / 100;

        // Handle percentage based on the operator
        if (lastOperator === '*' || lastOperator === '/') {
          // Multiply or divide by the percentage value
          currentInput =
            currentInput.slice(0, lastOperatorIndex + 1) + percentage;
        } else {
          // Add or subtract percentage of the base
          const percentageValue = base * percentage;
          currentInput =
            currentInput.slice(0, lastOperatorIndex + 1) + percentageValue;
        }

        display.value = currentInput; // Update display
      } else if (currentInput && !isNaN(currentInput)) {
        // Handle standalone percentages
        const percentageValue = parseFloat(currentInput) / 100;
        currentInput = percentageValue.toString();
        display.value = currentInput;
      }
    },

    // Toggle the sign of the current input (positive/negative)
    negate: () => {
      if (currentInput) {
        currentInput =
          currentInput.charAt(0) === '-' // Check if the input starts with "-"
            ? currentInput.slice(1) // If yes, remove the "-" to make it positive
            : `-${currentInput}`; // Otherwise, add "-" to make it negative
        display.value = currentInput; // Update the display
      }
    },

    // Remove the last character from the input string (like backspace)
    delete: () => {
      currentInput = currentInput.slice(0, -1); // Remove the last character
      display.value = currentInput; // Update the display
    },

    // Append the division operator
    divide: () => appendOperator('/'),

    // Append the multiplication operator
    multiply: () => appendOperator('*'),

    // Append the subtraction operator
    subtract: () => appendOperator('-'),

    // Append the addition operator
    add: () => appendOperator('+'),

    // Add a decimal point to the input
    decimal: () => {
      const operators = /[+\-*/]/g; // Regex to identify operators
      const lastOperatorIndex = currentInput.lastIndexOf(
        currentInput.match(operators)?.pop() || ''
      ); // Find last operator
      const lastNumber = currentInput.slice(lastOperatorIndex + 1); // Extract the last number

      // Only add a decimal point if the last number doesn't already have one
      if (!lastNumber.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
      }
    },

    // Evaluate the current expression and display the result
    equals: () => {
      try {
        const result = eval(currentInput); // Evaluate the expression
        currentInput = parseFloat(result).toFixed(2); // Convert result to 2 decimal places
        display.value = currentInput; // Update the display
      } catch (error) {
        display.value = 'Error'; // Handle invalid expressions
        currentInput = ''; // Reset input
      }
    },
  };

  /**
   * Helper function to append an operator to the current input string.
   * Ensures that an operator is only added after a valid number.
   */
  const appendOperator = (operator) => {
    // Check if the last character is a number before appending the operator
    if (currentInput && !isNaN(currentInput.slice(-1))) {
      currentInput += operator;
      display.value = currentInput; // Update the display
    }
  };

  /**
   * Add event listeners to all calculator buttons.
   * Identify each button by its ID and trigger the corresponding action.
   */
  const buttons = document.querySelectorAll('.grid button'); // Select all buttons inside the grid
  buttons.forEach((button) => {
    const id = button.id; // Get the ID of the button

    // Check if the button has a predefined action
    if (id in buttonActions) {
      button.addEventListener('click', buttonActions[id]); // Attach the corresponding action
    } else if (!isNaN(id)) {
      // Handle number buttons (IDs that are numbers)
      button.addEventListener('click', () => {
        currentInput += id; // Append the number to the input string
        display.value = currentInput; // Update the display
      });
    }
  });
});
