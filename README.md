# Edinburgh Arts Directory

A simple beginner-friendly MVP website for discovering arts-related places and services in Edinburgh.

The site uses only:

- HTML
- CSS
- JavaScript

There is no backend, database, account system, or login.

## Files

### `index.html`

`index.html` contains the structure and content of the page.

It includes:

- The main title, "Edinburgh Arts Directory"
- A search bar
- A category dropdown filter
- An empty area where JavaScript adds listing cards
- A simple "Submit a Listing" form
- Links to `styles.css` and `script.js`

HTML is like the skeleton of the website.

### `styles.css`

`styles.css` controls how the website looks.

It includes:

- Page colors
- Font choices
- Spacing
- Listing card layout
- Button styles
- Responsive rules for tablet and mobile screens

CSS is like the clothing and layout of the website.

### `script.js`

`script.js` controls the interactive parts of the website.

It includes:

- The sample listing data
- Code that displays listing cards on the page
- Code that searches listings
- Code that filters listings by category
- A simple form message for the demo submit form

JavaScript is what makes the page respond to user actions.

## How The Search Feature Works

The search bar listens for typing.

When someone types into the search bar, JavaScript:

1. Reads the search text
2. Converts it to lowercase
3. Checks each listing's name, category, area, and description
4. Shows only listings that include the search text

For example, typing `Leith` will show listings that mention Leith.

## How The Category Filter Works

The category dropdown listens for changes.

When someone selects a category, JavaScript:

1. Reads the selected category
2. Checks each listing's category
3. Shows only listings in that category

If "All Categories" is selected, every listing can be shown again.

## How Search And Filter Work Together

Search and category filter are used at the same time.

For a listing to appear, it must:

- Match the search text
- Match the selected category

For example, if the category is `Art Classes` and the search text is `Leith`,
the site will only show art class listings that mention Leith.

## How To Use

Open `index.html` in your browser.

You can edit the sample listings in `script.js` to practice adding your own data.
