# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### Screenshot

<img src="./qrcode_component_ss.png" width="300" />

### Built with

- React
- CSS Modules
- Flexbox
- Vite

### What I learned

- `CSS Modules` in Vite requires the import CSS module to have a name ending with: `.module.css`
- I didn't use this in this exercise, but adding multiple class names to a compnent can be done using template literals (``classNames=`{style.style1}` `{style.style2}`}``)
- Online font imports need to be added to the top of the main style sheet.
  ```css
  /* App.css */
  /* The desired font weights need to be specified as shown below */
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
  ```
  ```css
  /* styles/qr.module.css */
  /* Only need to specify font family in the class -- no need to create a font-family (I think this is only needed for locally downloaded fonts) */
  .focus {
    font-size: 1.4em;
    font-family: 'Outfit', sans-serif;
    font-weight: bold;
    padding: 15px 0;
    }
  ```
- Images need to be imported and references with curly braces in the JSX (can't simply be string referenced in the `img` `src` attribute)

### Useful resources

- [StackOverflow answer of how to use google fonts with React](https://stackoverflow.com/questions/40769551/how-to-use-google-fonts-in-react-js)
- [How to use local assets/images in react (requires import first)](https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react)
