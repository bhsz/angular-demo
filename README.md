# CIPTA 2021 Tech Workshop (Angular Basics)
You have been tasked to finish a form builder website passed on to you from a manager. Your tasks have been listed below.
1. Try using the website to create a few fields to ensure that it is functionally correct.
2. Complete the following sections:

### Header of Form Builder
To edit the header, go over to the header folder.
1. Improve the title of the header to make it clearer to the audience. **Change the title to “iCUBE Career Workshop 2020 Application Form” in header.component.html**.
2. **Add in a comment about the title change of the form at header.component.html**. Comments are crucial when coding, they serve as a form of communication with other developers. *(Hint: <! -- This is a HTML comment -->)*
3. White doesn’t seem like a nice colour for the header, **change the header's colour to another colour in header.component.css**.
4. The header is currently left-aligned. **Change the allignment of the header to center**.
5. **Give the header some padding.**

### Buttons of Form Builder
To edit the buttons, go over to the builder folder. 
Angular uses a different syntax for *onclick* as shown below.
```
<button (click)="onSave()">Save</button>
```
1. **Add a Clear Form button with the "btn" as the CSS class**.
2. **Link the Clear Form button with *handleClearForm()* function which is currently empty.** 
3. The fields of the form are displayed based on the contents of *formFields*. *handleClearForm()* function is currently empty. **Complete *handleClearForm()* function in builder.component.ts which will clear the form when it's called**.
4. Try out all the functionalities of the form builder and have some fun with it! :) 
