---
title: Learn CSS (GDSC ENSTA Workshop)
metaDescription: >-
  Learn CSS with GDSC ENSTA Workshop and get started with web development. This
  workshop will help you understand the basics of CSS and how to style your web
  pages.
author: Ismail M. BOUSSEKINE
date: 2024-11-27T14:05:31.735Z
type: Course
tags:
  - Css
  - Flex Box
  - Course
categories:
  - Courses
keywords:
  - CSS
  - Learn CSS
  - GDSC ENSTA Workshop
lastmod: 2024-11-29T21:05:56.419Z
duration: 12 min
---

1. [Introduction to CSS](#introduction-to-css)
2. [CSS Basics](#css-basics)
   1. [Units of Measurement, Colors, and Selectors](#units-of-measurement-colors-and-selectors)
      1. [Units of Measurement](#units-of-measurement)
      2. [Colors](#colors)
      3. [Selectors](#selectors)
   2. [Box Model](#box-model)
      1. [Padding](#padding)
      2. [Margin](#margin)
      3. [Border](#border)
      4. [Outline](#outline)
      5. [Inline And Block](#inline-and-block)
         1. [Inline](#inline)
         2. [Block](#block)
      6. [Inline-Block](#inline-block)
   3. [Styling: Background, Text and colors](#styling-background-text-and-colors)
      1. [Background](#background)
      2. [Text and font](#text-and-font)
   4. [Shadow and transiotion](#shadow-and-transiotion)
      1. [Shadow](#shadow)
      2. [Transition](#transition)
   5. [Positioning and layout](#positioning-and-layout)
      1. [Fixed](#fixed)
      2. [Sticky](#sticky)
      3. [Absolute and relative](#absolute-and-relative)
      4. [Z-index](#z-index)
      5. [Flex Box](#flex-box)
3. [Getting Our Hands Dirty](#getting-our-hands-dirty)
4. [Conclusion](#conclusion)

---

# Introduction to CSS

**Cascading Style Sheets** (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

CSS can be used to define colors, fonts, layout, and many other things on your website. It allows you to separate the content of your website from its design, making it easier to maintain and update.
It can be

1. **Inline**

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1 style="color: red">Hello World</h1>
  </body>
</html>
```

---

2. **Internal:**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

---

3. **External:**

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

```css
/* styles.css */
h1 {
  color: red;
}
```

CSS is a powerful tool that allows you to create beautiful and responsive websites. In this workshop, we will cover the basics of CSS and show you how to style your web pages, It will be the continuation of the HTML workshop.

---

# CSS Basics

## Units of Measurement, Colors, and Selectors

#### Units of Measurement

CSS supports various units of measurement for specifying lengths, including:

- **Absolute units**: `px` (pixels), `cm` (centimeters), `mm` (millimeters), `in` (inches), `pt` (points), `pc` (picas)
- **Relative units**: `em` (relative to the font-size of the element usually `1em`=`16px`), `rem` (relative to the font-size of the root element), `%` (percentage), `vw` (viewport width) and `vh` (viewport height).

Example:

```css
selector {
  width: 50%; /* 50% of the parent element's width */
  height: 100vh; /* 100% of the viewport height */
}
```

#### Colors

CSS allows you to specify colors using different formats:

- **Named colors**: `red`, `blue`, `green`, etc.
- **Hexadecimal**: `#RRGGBB` or `#RGB` or `#ffffff` (white) [Try it](https://www.w3schools.com/colors/colors_picker.asp)
- **RGB**: `rgb(255, 0, 0)` [Try it](https://www.w3schools.com/colors/colors_rgb.asp)
- **RGBA**: `rgba(255, 0, 0, 0.5)` (includes alpha for transparency)
- **HSL**: `hsl(0, 100%, 50%)` (the first value is the hue in degrees, the second is the saturation as a percentage, and the third is the lightness as a percentage) [Try it](https://www.w3schools.com/colors/colors_hsl.asp)
- **HSLA**: `hsla(0, 100%, 50%, 0.5)` (includes alpha for transparency)

Example:

```css
selector {
  color: #ff0000; /* Red color */
  background-color: rgba(0, 0, 255, 0.3); /* Semi-transparent blue background */
}
```

#### Selectors

CSS selectors are used to select the HTML elements you want to style. Common selectors include:

- **Element selector**: `element`
- **Class selector**: `.class`
- **ID selector**: `#id`
- **Attribute selector**: `[attribute=value]`
- **Pseudo-class selector**: `:pseudo-class`
- **Pseudo-element selector**: `::pseudo-element`
- **Descendant selector**: `element element`
- **Child selector**: `element > element`

Selectors have different levels of specificity, which determines which styles are applied when multiple rules match the same element. Specificity is calculated based on the number of each type of selector in the rule:

- Inline styles: (1, 0, 0, 0) (inline can't be combined with other selectors)
- ID selectors: (0, 1, 0, 0)
- Class, attribute, and pseudo-class selectors: (0, 0, 1, 0)
- Element and pseudo-element selectors: (0, 0, 0, 1)
- `>` and `~` combinators: doesnt affect specificity
- `*:not()` _ `_:nth-child()_`, `_:nth-of-type()\*`: doesnt affect specificity

Example:

```css
/* Element selector */
p {
  color: blue;
}

/* Class selector */
.example {
  font-size: 20px;
}

/* ID selector */
#unique {
  margin: 10px;
}

/* Attribute selector */
input[type='text'] {
  border: 1px solid black;
}

/* Pseudo-class selector */
a:hover {
  color: red;
}

/* Pseudo-element selector */
p::first-line {
  font-weight: bold;
}

/* Descendant selector */
div p {
  color: blue;
}

/* Child selector */
div > p {
  color: green;
}
```

---

## Box Model

### Padding

padding is the space between the content and the border of an element. You can set the padding of an element using the `padding` property in CSS. The padding property can have one, two, three, or four values.

```css
/* One value */
selector {
  padding: 10px; /* This will make padding from top, bottom, left and right 10px*/
}

/* Two values */
selector {
  padding: 10px 20px; /* This will make padding from top and bottom 10px, left and right 20px*/
}

/* Three values */
selector {
  padding: 10px 20px 30px;
}

/* Four values */
selector {
  padding: 10px 20px 30px 40px;
}

/* Specifying the direction */
selector {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

value can be in px, em, rem, %, or auto.

---

### Margin

Margin is the space outside the border of an element. You can set the margin of an element using the `margin` property in CSS. The margin property can have one, two, three, or four values.

```css
/* One value */
selector {
  margin: 10px; /* This will make margin from top, bottom, left and right 10px*/
}
/* Two values */
selector {
  margin: 10px 20px; /* This will make margin from top and bottom 10px, left and right 20px*/
}
/* Three values */
selector {
  margin: 10px 20px 30px;
}
/* Four values */
selector {
  margin: 10px 20px 30px 40px;
}
/* Specifying the direction */
selector {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}
```

---

### Border

Border is the line that surrounds the content and padding of an element. You can set the border of an element using the `border` property in CSS. The border property can have three values: width, style, and color.

```css
/* border-color */
selector {
  border-color: red; /* This will create a red border */
}

/* border-width */
selector {
  border-width: 1px; /* This will create a 1px border */
}

/* border-style */
selector {
  border-style: solid; /* This will create a solid border */
}

/* Combining all three */
selector {
  border: 1px solid red; /* This will create a 1px solid red border */
}
```

Possible values for border-style are:
none |
hidden |
dotted |
dashed |
solid |
double |
groove |
ridge |
inset |
outset

Possible values for border-width are:
thin |
medium |
thick |
value(px, em, rem, %)

---

### Outline

Outline is similar to border but it is outside the border. You can set the outline of an element using the `outline` property in CSS. The outline property can have three values: width, style, and color.

```css
/* outline-color */
selector {
  outline-color: red; /* This will create a red outline */
}
/* outline-width */
selector {
  outline-width: 1px; /* This will create a 1px outline */
}
/* outline-style */
selector {
  outline-style: solid; /* This will create a solid outline */
}
/* Combining all three */
selector {
  outline: 1px solid red; /* This will create a 1px solid red outline */
}
```

Please bare in mind:

- The outline "lives" outside the element.
- The border does not.
- The border changes the size of the element.

---

### Inline And Block

#### Inline

An inline element does not start on a new line and only takes up as much width as necessary. You can set an element to be inline using the `display` property in CSS.

```css
selector {
  display: inline;
}
```

Tags that are `inline` by default :
`<span>`, `<a>`, `<strong>`,`<em>`, `<img>`, `<input>`, `<label>`, `<code>`...

---

#### Block

A block element starts on a new line and takes up the full width available. You can set an element to be block using the `display` property in CSS.

```css
selector {
  display: block;
}
```

The diffrence between inline and block is that inline elements do not start on a new line and only take up as much width as necessary, while block elements start on a new line and take up the full width available.

Tags that are `block` by default: `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`...

---

### Inline-Block

An inline-block element is placed as an inline element on the same line as adjacent content but it can have a width and height. You can set an element to be inline-block using the `display` property in CSS.

```css
selector {
  display: inline-block;
}
```

the diffrence between inline and inline-block is that inline-block elements are placed as inline elements on the same line as adjacent content but they can have a width and height.

---

## Styling: Background, Text and colors

### Background

background is the area behind the content and padding of an element. You can set the background of an element using the `background` property in CSS.

```css
selector {
  background-color: red; /* This will set the background color to red */
}
```

You can also set the background image, repeat, position, and size using the `background-image`, `background-repeat`, `background-position`, and `background-size` properties.

```css
selector {
  background-image: url('image.jpg'); /* This will set the background image */
  background-repeat: no-repeat; /* This will prevent the background image from repeating, there is also repeat, repeat-y and repeat-x */
  background-position: center; /* This will center the background image */
  background-size: cover; /* or contain, auto, or specific dimensions */
  background-attachment: fixed; /* or scroll */
  background-clip: border-box; /* or padding-box, content-box */
}
```

You can use shorthand to set all the background properties at once.

```css
selector {
  background: red url('image.jpg') no-repeat center/cover fixed border-box;
}
```

---

### Text and font

Text is the content of an element. You can set the text of an element using the `color`, `font-family`, `font-size`, `font-weight`, `text-align`, and `text-decoration` properties in CSS.

```css
selector {
  color: red; /* This will set the text color to red */
  font-family: Arial, sans-serif; /* This will set the font family */
  font-size: 16px; /* This will set the font size */
  font-weight: bold; /* This will set the font weight */
  text-align: center; /* This will center the text */
  text-decoration: underline; /* This will underline the text */
}
```

You can use shorthand to set all the text (only font-\*) properties at once.

```css
selector {
  font:
    bold 16px Arial,
    sans-serif;
}
```

---

## Shadow and transiotion

### Shadow

CSS allows you to add shadow effects to elements using the `box-shadow` and `text-shadow` properties.

- **Box Shadow**: Adds shadow to the box of an element.

```css
selector {
  box-shadow: [h-offset] [v-offset] [blur-radius] [spread-radius] [color]
    [inset];
}
```

- `h-offset`: Horizontal offset of the shadow.
- `v-offset`: Vertical offset of the shadow.
- `blur-radius`: The blur radius of the shadow.
- `spread-radius`: The spread radius of the shadow.
- `color`: The color of the shadow.

```css
selector {
  box-shadow: 10px 10px 5px #888888; /* horizontal offset, vertical offset, blur radius, shadow color */
}
```

- **Text Shadow**: Adds shadow to the text of an element.

```css
selector {
  text-shadow: 2px 2px 4px #000000; /* horizontal offset, vertical offset, blur radius, shadow color */
}
```

---

### Transition

CSS transitions allow you to change property values smoothly (over a given duration).

```css
selector {
  transition: property duration timing-function delay;
}
```

- **property**: Specifies the CSS property to transition. like `background-color`, `color`, `width`, `height`, `opacity`, `transform`, etc.
- **duration**: Specifies the duration of the transition in seconds (s) or milliseconds (ms).
- **timing-function**: Specifies the speed curve of the transition. like `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(n,n,n,n)`.
- **delay**: Specifies a delay (in seconds or milliseconds) for the transition to start.

Example:

```css
selector {
  transition: all 0.3s ease-in-out;
}

selector:hover {
  background-color: blue; /* This will transition smoothly to blue when hovered */
}
```

You can specify multiple transitions using commas:

```css
selector {
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}
```

---

## Positioning and layout

Positioning and layout are crucial aspects of CSS that allow you to control the placement and arrangement of elements on a web page. There are several positioning methods available in CSS, including static, relative, absolute, fixed, and sticky positioning.

---

#### Fixed

A fixed position element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. You can set an element to be fixed using the `position` property in CSS.

```css
selector {
  position: fixed;
  top: 10px; /* Position from the top */
  right: 10px; /* Position from the right */
}
```

---

#### Sticky

A sticky position element toggles between relative and fixed, depending on the user's scroll position. It is positioned relative until a given offset position is met in the viewport, then it "sticks" in place (like position:fixed).

```css
selector {
  position: sticky;
  top: 0; /* Sticks to the top of the viewport */
}
```

---

#### Absolute and relative

An absolute position element is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). If an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

```css
selector {
  position: absolute;
  top: 50px; /* Position from the top */
  left: 50px; /* Position from the left */
}
```

A relative position element is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position.

```css
selector {
  position: relative;
  top: 10px; /* Move 10px down from its normal position */
  left: 10px; /* Move 10px right from its normal position */
}
```

Relative and absolute positioning can be used together to create complex layouts.

```css
.container {
  position: relative;
}
.item {
  position: absolute;
  top: 0;
  left: 0;
}
```

This will position the `.item` element at the top-left corner of the `.container` element.

### Z-index

The z-index property specifies the stack order of an element. An element with a higher z-index value will be displayed on top of an element with a lower z-index value.

```css
selector {
  z-index: 1; /* Higher z-index value */
}
```

So if you have two elements that overlap, you can use the z-index property to control which one is displayed on top.

---

### Flex Box

Flexbox is a layout model that allows you to design complex layouts with ease. It provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.

```css
.container {
  display: flex;
  justify-content: center; /* Aligns items horizontally */
  align-items: center; /* Aligns items vertically */
  align-content: center; /* Aligns items when there is extra space */
  gap: 10px; /* Space between items */
  flex-wrap: wrap; /* Wraps items to the next line */
}
```

Flexbox properties include `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, and more, which provide a powerful set of tools for creating responsive layouts.

- `justify-content`: Aligns items horizontally.
- `align-items`: Aligns items vertically.
- `align-content`: Aligns items when there is extra space.
- `gap`: Space between items.
- `flex-wrap`: Wraps items to the next line.

---

# Getting Our Hands Dirty

1. let's play a game!!!!!!!! [Flexboxfroggy](https://flexboxfroggy.com/)
2. let's build a simple website using the concepts we learned today starting from an unstyled HTML webapge => [(**Resources**)](https://github.com/1sma31L/CSS-Workshop/archive/refs/heads/main.zip) (HTML file and images).

---

# Conclusion

Congratulations! You have completed the CSS workshop. You now have a solid understanding of CSS and how to style your web pages. Keep practicing and experimenting with different designs to improve your skills. Thank you for joining us, and we hope to see you in future workshops. Happy coding!.
