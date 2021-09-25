# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop Screenshot](./screenshot/Desktop.png)
![Mobile Screenshot](./screenshot/Mobile.png)

### Links

- Solution URL: [GitHub](https://github.com/shuree0331/sunnyside-agency-landing-page-main)
- Live Site URL: [GitHub](https://shuree0331.github.io/sunnyside-agency-landing-page-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I have learned how to to make fancy corner shape by using ::before and ::after selectors. Also how to fix svg images.

To see how you can add code snippets, see below:

```html
<div id="menu">
            <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
          </div>
```

```css
header nav #links::before {
        content: "";
        background-color: #3ec0ff;
        position: relative;
        height: 50px;
        width: 560px;
        margin: -20px -70px 20px -9px;
        border-bottom-right-radius: 50px;
    }
```

### Continued development

Now I want to add some animation on my menu session.

### Useful resources

- [Fancy Corners](https://blog.logrocket.com/how-to-create-fancy-corners-in-css/) - This helped me for make scooped corner.
- [Scaling SVG image](https://css-tricks.com/scale-svg/) - This is really helpful article that explains how to scale SVG image.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

