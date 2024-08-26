# Atomic Design - To-Do List

![image](https://github.com/user-attachments/assets/05dc5f3a-55e8-4fa2-b1c1-a25e1c6d62a8)
## Project Overview

This project was build following the atomic design principles. Atomic Desgin is a design pattern based on chemistry, where each interface component (atoms) is combined to create different blocks of the system. This design is focused in flexibility and consistency.

## Components

### Atoms
Atoms are the most basic elements of the website, they usually have only one function and are very simple.

- [Button](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/UI/atoms/Button/index.tsx) - Simple styled button component
- [Input](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/UI/atoms/Input/index.tsx) - Simple styled text input;
- [Info](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/UI/atoms/Info/index.tsx) - Paragraph;
- [Label](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/UI/atoms/Label/index.tsx) - Simple styled label.

### Molecules
Molecules combine atoms to create functional unitys, they express a basic funcionality that can be reused inside the project.

- [Button Options](https://github.com/marcospardal/atomic-design-to-do/tree/main/src/components/UI/molecules/ButtonOptions) - Display a list of buttons;
- [Card](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/UI/molecules/Card/index.tsx) - Display a card with title and description and button options if passed as props;
- [Form Field](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/UI/molecules/FormField/index.tsx) - Show a styled input with a label.

### Organisms
Organisms combine molecules to create entire sections of the interface.

- [Header](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/UI/organisms/Header/index.tsx) - Display the app logo, page title, and show options if passed;
- [Listing To Do](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/UI/organisms/ListingToDo/index.tsx) - Display a list of to-dos, using the Card molecule;
- [Task Form](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/UI/organisms/TaskForm/index.tsx) - Form to add a new To-Do.

### Templates
Templates combine organisms to create a layout that can be reused through the application.

- [Default Page](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/components/templates/DefaultPage/index.tsx) - Render the page content with a Header on top;

### Pages
Pages use templates or organisms to create the final interface.

- [Home Page](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/pages/Home/index.tsx) - Display the default Form to add new To-Dos and List of open and closed To-Dos

## Context
The To-Do list state and functions were created in a separated context, that surrounds the application, avoiding the need to pass all the functions and current state as props to inner components.


## Hooks
- [useLocalStorage](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/hooks/index.ts) - custom hook that allows the developer to update and read data from the localStorage based on the key;
- [useToDoContext](https://github.com/marcospardal/atomic-design-to-do/blob/main/src/hooks/index.ts) - custom hook that allows the developer to use information and functions that are in the To Do Context.

