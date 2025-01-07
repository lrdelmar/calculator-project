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

    // Convert the current input to a percentage (divide by 100)
    percent: () => {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString(); // Convert to percentage
        display.value = currentInput; // Update the display
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
      if (!currentInput.includes('.')) {
        // Ensure only one decimal point is allowed
        currentInput += '.';
        display.value = currentInput; // Update the display
      }
    },

    // Evaluate the current expression and display the result
    equals: () => {
      try {
        currentInput = eval(currentInput).toString(); // Evaluate the input using eval
        display.value = currentInput; // Update the display with the result
      } catch (error) {
        display.value = 'Error'; // Show an error message for invalid input
        currentInput = ''; // Reset the input
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
