Calculator Project

1. Build a basic calculator interface

   I have built a simple calculator interface with numbers, symbols and icons.
   Used a grid layout to space buttons and implemented a simple hover animation.
   By using SASS architecture it will be easier to maintain and manage the project as it develops.

2. Critical Analysis - Compare to to other interfaces

   Could do with additional mathematical operators such as percentage and negative numbers.
   Potential to add in more scientific functions and complex maths.
   Need to consider whether it is necesssary to apply truncation with floating point.

3. Apply changes to interface

   Applied responsive changes to the design to work on desktop and mobile devices.
   Working with ChatGPT to update the Javascript for the calculator,
   with detailed comments to help me understand how the code is being applied.
   Testing the calculator there are several problems with the functionality of the calculator, mainly with the % operator.
   Applying test cases, comparing to other calculators and explaining to ChatGPT how it should be expected to work.

4. Further critical anaylsis - Testing calculator functions

   Cannot add more than one decimal point per calculation.
   Percentage calculations including the minus operator are not working correctly.
   Numbers need to be limited to at least 2 decimal places.
   Need to update how the % function works with other operators.

5. Apply changes to functionality

   Implemented the toFixed(2) function to show output as a float to 2 decimal places.
   Worked through multiple scenarios with ChatGPT to correct the logic of the percentage operator when working with all other operators.
   Updated the equals function so that it returns an integer if the numbers after the decimal point are 0, otherwise it will return a float with 2 decimal places.
   Ensured that the input display is disabled by default.

6. Accessibility

   As some of the buttons contain numbers, entities or svg images the properties 'type' and 'aria-label' have been added to ensure the button elements are visible to screen readers. Buttons have a focus, hover and active state so that it is clear which element is being selected by the keyboard.

Summary

This project was designed to help develop and build skills in HTML, SCSS and Javascript.
I built the main structure of the CSS using SASS architecture to make the project easier to manage and update, also making elements reusable for future projects. I used a combination of flex and grid to give the calculator a user friendly layout that works on both mobile and desktop devices. I was able to use IDs on each button element to control the functionality through Javascript.

With a combintation of my knowledge of Javascript and support from ChatGPT (who provided detailed comments throughout) I was able to further develop my understanding of the capabilities of Javascript. I encountered some issues while testing the calculator, such as the logic of the percentage function needing to perform differently when used with the different operators as well as standalone percentages.

I was able to resolve the issue with the calculator only accepting one decimal point per calculation as well as updating the equals function so that it would format the result to allow a float or an integer value to be returned. The code is designed to catch most errors and unexpected inputs.

In order for screen readers and keyboard users to be able to use the calculator, it was important to make sure to consider what information, visual or audible, would be needed to make it useable. Implementing simple CSS styles to the hover, active and focus states along with using clear and concise aria labelling and semantic HTML should ensure that this calculator is accessible for most users.
