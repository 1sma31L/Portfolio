---
title: Learn HTML (GDSC ENSTA Workshop)
metaDescription: >-
  GDSC ENSTA Workshop on HTML for beginners. Learn the basics of HTML and how to
  create a simple webpage.
author: Ismail Boussekine
date: 2024-11-10T16:56:44.376Z
tags:
  - Frontend
  - Html
categories:
  - Courses
type: Course
keywords:
  - HTML
  - Workshop
  - Frontend
  - Web Development
  - GDSC
  - ENSTA
  - Learn HTML
  - HTML Basics
  - HTML Elements
  - HTML Tags
  - HTML Cheatsheet
  - HTML Workshop
  - HTML Course
  - HTML Tutorial
  - HTML for Beginners
  - HTML Introduction
  - HTML Structure
  - HTML Document
  - HTML Content
lastmod: 2024-11-10T20:08:37.641Z
duration: 4 min
---
1. [What is HTML?](#what-is-html)
   1. [Getting Started with HTML](#getting-started-with-html)
   2. [What an HTML tag ?](#what-an-html-tag)
   3. [HTML Elements Cheatsheet](#html-elements-cheatsheet)
      1. [Heading](#heading)
      2. [Paragraph](#paragraph)
      3. [Span](#span)
      4. [List](#list)
   4. [**Let's see how it looks in the browser.**](#lets-see-how-it-looks-in-the-browser)
---

# What is HTML?

**HTML** (HyperText Markup Language) is the standard language used to create and structure content on the web.
 It is a **markup language** that uses a system of tags to define elements and their relationships within a document.
 HTML provides the structure of a web page, including headings, paragraphs, links, images, tables, and more.

---

## Getting Started with HTML

To get started with HTML, you need a text editor and a web browser. You can write HTML code in any text editor, 
such as **Visual Studio Code** (what we will be using in our course), and save the file with a .html extension. 
You can then open the HTML file in a web browser to see the rendered output using 
[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extnesion in VS Code.

Code example of what we will be doing in the **workshop**:

```html showLineNumbers
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>My Heading</h1>
    <p>My Paragraph.</p>
</body>
</html>
```

- `<!DOCTYPE html>` is the document type declaration that specifies the version of HTML being used. 
- `<html>` is the root element of an HTML page, and all other elements are contained within it. 
- `<head>` contains meta-information about the document, such as the title of the page. 
- `<body>` contains the content of the document, such as headings, paragraphs, images, and links.

---

## What an HTML tag ?

An HTML tag is a keyword surrounded by angle brackets, like `<html>` . HTML tags are used to define the structure of an HTML
 document and are usually paired with an opening tag and a closing tag. Some tags, like `<img>` , are self-closing and do not
  require a closing tag. Tags can also have attributes that provide additional information about the element, such as the
   `src` attribute in an `<img>` tag.


**Example:**
```html
<img src="image.jpg" alt="Image" />
```

## HTML Elements Cheatsheet
This are the most common HTML elements you will use to create a webpage which we will cover in our workshop.

| Tag        | Description     | Example                                                                                                            |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| `<h1>`     | Heading 1       | `<h1>My Heading</h1>`                                                                                              |
| `<p>`      | Paragraph       | `<p>My Paragraph.</p>`                                                                                             |
| `<span>`   | Span            | `<span>Text</span>`                                                                                                |
| `<b>`      | Bold            | `<b>Bold Text</b>`                                                                                                 |
| `<strong>` | Strong          | `<strong>Bold Text</strong>`                                                                                       |
| `<i>`      | Italic          | `<i>Italic Text</i>`                                                                                               |
| `<em>`     | Emphasis        | `<em>Italic Text</em>`                                                                                             |
| `<br>`     | Line Break      | `<br>`                                                                                                             |
| `<hr>`     | Horizontal Rule | `<hr>`                                                                                                             |
| `<input>`  | Input           | `<input type="text" name="name">`                                                                                  |
| `<ol>`     | Ordered List    | `<ol><li>Item 1</li><li>Item 2</li></ol>`                                                                          |
| `<ul>`     | Unordered List  | `<ul><li>Item 1</li><li>Item 2</li></ul>`                                                                          |
| `<a>`      | Anchor (link)   | `<a href="https://example.com">Link</a>`                                                                           |
| `<img>`    | Image           | `<img src="image.jpg" alt="Image">`                                                                                |
| `<button>` | Button          | `<button type="submit">Submit</button>`                                                                            |
| `<div>`    | Division        | `<div>Content</div>`                                                                                               |
| `<table>`  | Table           | `<table><tr><td>Row 1, Cell 1</td><td>Row 1, Cell 2</td></tr></table>`                                             |
| `<form>`   | Form            | `<form action="/submit" method="post"><input type="text" name="name"><button type="submit">Submit</button></form>` |

Seems scary? Don't worry, we will cover all of these tags and more in our workshop.

---

### Heading 
`<h1>` is the largest heading size, and `<h6>` is the smallest heading size.

Always remeber thats `<h1>` is the most important heading (the bigger by default) 
and `<h6>` is the least important (the smaller by default).
```html showLineNumbers {7-12}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</body>
</html>
```
**Let's see how it looks in the browser.**

---

### Paragraph
`<p>` tag is used to define a paragraph.
```html showLineNumbers {7-8}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
</body>
</html>
```
**Try it out !**

---

### Span
`<span>` tag is used to define a section in an HTML document.
```html showLineNumbers {7}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
   <p>Hello <span>GDSC ENSTA</span> memebers </p>
</body>
</html>
```

---

### List
`<ul>` and `<ol>` tags are used to define unordered and ordered lists, respectively.
```html showLineNumbers {7-16}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
</body>
</html>
```
**Let's see how it looks in the browser.**
---
