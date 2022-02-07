## RESPONSIBILITIES PLANIFICATION

# Components

- App

  - Render the HomePage, MyBarPage, FormMyBarPage and CategoryPage
  - Route every page so the app works as a Single Page Application

- HomePage

  - Render a list of categories and a button
  - Display a header, navigation menu, footer and a banner
  - Give categories a function to execute on click

- MyBarPage

  - Render cocktails from the received lists
  - Display a header, navigation menu and footer
  - Give Cocktail component a function to execute.
  - Give Cocktail component a function to pass it to its inner Button

- FormMyBarPage

  - Render CocktailForm and pass it a function onChange and a function on submit
  - Display a header, navigation menu and footer

- CategoryPage

  - Render cocktails from the received lists
  - Display a header, navigation menu and footer
  - Give Cocktail component a function to execute
  - Give Cocktail component a function to pass it to its inner Button

- CocktailCategory (card)

  - Display text and picture received
  - Execute a received action on click

- Cocktail (card)

  - Display text, picture and icon received
  - Execute a received action on click
  - Render a favourite button and pass a received action as its onClick

- CocktailDetails

  - Display information received, that will be the cocktail name, picture, category, list of ingredients and measures, and preparation instructions

- CocktailForm

  - Display list of inputs, labels, a checkbox, and a submit button
  - Execute a received function on input changes

- Button
  - Display received text
  - Execute a received function when clicked

# Data

- Categories List

- Cocktails List (outer API)

  - Update elements in the list

- Cocktails List (local API)

  - Create/Add elements to the list
  - Modify an element in the list
  - Delete an element from the list
  - Update elements in the list

- Cocktail

  - Update the element to a new one (or create if it wasn't already)

All of the above goes into a context.
