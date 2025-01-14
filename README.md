# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

Mobile:
![Mobile initial screen](/design/completed/mobile-init.png)
![Mobile cart with items](design/completed/mobile-cart-w-items.png)
![Mobile menu](/design/completed/mobile-menu.png)

Desktop:
![Desktop initial screen](/design/completed/desktop-init.png)
![Desktop empty cart](design/completed/desktop-empty-cart.png)
![Desktop cart with items](/design/completed/desktop-cart-w-items.png)

### Links

- [Solution URL](https://github.com/ianwilk20/)
- [Live Site URL](https://ianwilk20.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/docs) - For styles
- [React](https://reactjs.org/) - JS library

### What I learned

- I learned the basics of the Formik library to develop this multi-step form.

- I learned how to make the the navigation bar always stays at the bottom without overlapping the expanding form. It involved using a flexbox layout to ensure that the navigation bar always stays at the bottom of the continaer while allowing the form to expand as needed. To accomplish this my flexbox container that would hold my form and navigation bar has a height of 100vh, sits above all of the page content, and has a margin to offset it from the top of the page (as shown in the mockup). The form inside the flexbox container has a `flex-grow: 1` will occupy all the available vertical space in the container, but it won't encroach upon or overlap the navigation bar. If the form needs to grow beyond the container's (like when the form expands due to hidden fields) scrolling will occur within the container. The navigation bar sits at the bottom of the container always.

- I learned that image elements behave differently compared to other elements. The image displayed in the background of the navigation step tracker was what I was having trouble with. I had specified a fixed width and height for the container that was holding the image and the image was overflowing but what I wanted was for the image to take up the space max height it could within the container. I was not setting a fixed height and width for the image, rather I was setting `height: 100%`, and because images have intrinsic dimensions the image was maintaining its original size ratio which meant it was overflowing. Perhaps limiting its width would have been another approach to solve this issue, but it may have meant magic numbering things at different screen sizes to ensure responsivity. What I did instead was learn to constrain the image by using `object-fit: cover` so that the image would not overflow and would properly scale within the container. 


### Continued development

I think there could have been an oppourtunity for a higher level component that would let you provide fields you want on a given form step as component parameters, and the field elements as children to the component. That would have probably cut back on a lot of repeated code across steps 1-4 of the form and made it simpler going forward should someone need to add new fields or get rid of existing ones. 

In another vein, I'd like to start adding TypeScript to my projects as that is something I've been meaning to learn to make my apps type safe.

### Useful resources

- [Formik documentation](https://formik.org/docs/overview) - This helped me learn the basics of Formik to be able to implement this form.
