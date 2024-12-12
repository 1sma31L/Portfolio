---
title: Learn HTML (GDSC ENSTA Workshop)
metaDescription: >-
  GDSC ENSTA Workshop on HTML for beginners. Learn the basics of HTML and how to
  create a simple webpage.
author: Ismail M. BOUSSEKINE and MALEK Fatma Zohra
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
lastmod: 2024-12-12T22:58:49.467Z
duration: 11 min
---
1. [1. Introduction to HTML](#1-introduction-to-html)
   1. [1.1 What is HTML ?](#11-what-is-html)
   2. [1.2 How Does The Browser Works](#12-how-does-the-browser-works)
2. [2. Setting Up The Environment](#2-setting-up-the-environment)
3. [3. HTML Basics](#3-html-basics)
   1. [3.1 Genral Overview](#31-genral-overview)
   2. [3.2. Working With Text And Formatting](#32-working-with-text-and-formatting)
      1. [3.2.1 Heading](#321-heading)
      2. [3.2.2 Paragraph](#322-paragraph)
      3. [3.2.3 Span](#323-span)
      4. [3.2.4 Bold And Italic](#324-bold-and-italic)
      5. [3.2.5 List](#325-list)
   3. [3.3 Layout Spearators](#33-layout-spearators)
   4. [3.4 Working With Links](#34-working-with-links)
   5. [3.5 Images \& Media](#35-images--media)
   6. [3.6 Tables](#36-tables)
   7. [3.7 Option And Select](#37-option-and-select)
   8. [3.8 Attributes And Values](#38-attributes-and-values)
   9. [3.9 Media](#39-media)
      1. [3.9.1 Audio](#391-audio)
      2. [3.9.2 Video](#392-video)
   10. [3.10 From handling](#310-from-handling)
       1. [3.10.1 Input](#3101-input)
       2. [3.10.2 Label](#3102-label)
       3. [3.10.3 Button](#3103-button)
       4. [3.10.4 Form](#3104-form)
   11. [3.11 Div And Semantic HTML](#311-div-and-semantic-html)
4. [4. Getting Our Hands Dirty](#4-getting-our-hands-dirty)
5. [Conclusion](#conclusion)
---

# 1. Introduction to HTML
## 1.1 What is HTML ?

**HTML** (HyperText Markup Language) is the standard language used to create and structure content on the web.
 It is a **markup language** that uses a system of tags to define elements and their relationships within a document.
 HTML provides the structure of a web page, including headings, paragraphs, links, images, tables, and more.

---
 
## 1.2 How Does The Browser Works
When you visit a website, the browser requests the HTML file from the server and renders the content on the screen.
 The browser reads the HTML file from top to bottom and displays the content according to the structure defined by the HTML tags.
  The browser also loads and executes any CSS and JavaScript files linked to the HTML document to style the content and add interactivity.
  
---

# 2. Setting Up The Environment


To get started with HTML, you need a text editor and a web browser. You can write HTML code in any text editor, 
such as **Visual Studio Code** (what we will be using in our course), and save the file with a .html extension. 
You can then open the HTML file in a web browser to see the rendered output using 
[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extnesion in VS Code.

Lets Our first **HTML** document:

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

# 3. HTML Basics


An HTML tag is a keyword surrounded by angle brackets, like `<html>` . HTML tags are used to define the structure of an HTML
 document and are usually paired with an opening tag and a closing tag. Some tags, like `<img>` , are self-closing and do not
  require a closing tag. Tags can also have attributes that provide additional information about the element, such as the
   `src` attribute in an `<img>` tag.


**Example:**
```html
<img src="image.jpg" alt="Image" />
```

## 3.1 Genral Overview
-   **`<!DOCTYPE html>`** declaration defines the document type and version of HTML being used.
-   **`<html>`** element is the root element of an HTML page.
-   **`<head>`** element contains meta-information about the document, such as the title and links to CSS and JavaScript files.
-   **`<meta>`** element provides metadata about the HTML document, such as the character set and viewport settings.
-   **`<title>`** element specifies the title of the document, which is displayed in the browser tab.
-   **`<body>`** element contains the content of the document, such as headings, paragraphs, images, and links.
-   **`<!-- Comment -->`** is used to add comments to the HTML code that are not displayed in the browser.

---

## 3.2. Working With Text And Formatting
### 3.2.1 Heading
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

### 3.2.2 Paragraph
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

### 3.2.3 Span
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

### 3.2.4 Bold And Italic
`<b></b>` and `<strong></strong>` tags are used to make text bold.
`<i></i>` and `<em></em>` tags are used to make text italic.
example :
```html showLineNumbers {7-10}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <b>Bold Text</b>
    <strong>Strong Text</strong>
    <i>Italic Text</i>
    <em>Emphasis Text</em>
</body>
</html>
```
**Try it out !**

---


### 3.2.5 List 
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

---


## 3.3 Layout Spearators
`<br>` tag is used to insert a line break in a paragraph.
`<wbr>` tag is used to insert a line break in text.
`<hr>` tag is used to insert a horizontal rule (line) in the document.
```html showLineNumbers {8-10,12}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <p>
        Line 1<br>Line 2
        <hr>
        Line 3
    </p>
    <p>
        Word1 1<wbr>Line 2
    </p>
</body>
</html>
```

---

## 3.4 Working With Links
`<a>` tag is used to create hyperlinks to other web pages, files, locations within the same page, email addresses, and more.
```html showLineNumbers {7}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <a href="https://www.example.com">Visit Example</a>
</body>
</html>
```

<!-- Absolute vs. relative URLs.
Opening links in new tabs (target="_blank"). -->

There is a diffrence between absolute and relative URLs, an absolute URL is the full URL to a page, including the protocol (http:// or https://), domain (www.example.com), and path (/page). A relative URL is a URL that is relative to the current page, such as a link to another page on the same website.

---


## 3.5 Images & Media
`<img>` tag is used to embed images in an HTML document.
```html showLineNumbers {7}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <img src="image.jpg" alt="Image" />
</body>
</html>
```

The `src` attribute specifies the URL of the image, and the `alt` attribute provides alternative text for the image, which is displayed if the image cannot be loaded.

---


## 3.6 Tables
`<table>` tag is used to create tables in an HTML document.
```html showLineNumbers {7-20}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <table>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
        </tr>
        <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
        </tr>
    </table>
</body>
</html>
```
`tr` tag is used to define a row in the table, `th` tag is used to define a header cell in the table, and `td` tag is used to define a data cell in the table.

--- 

## 3.7 Option And Select
`<select>` tag is used to create a dropdown list in an HTML form.
```html showLineNumbers {7-11}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
</body>
</html>
```

---


## 3.8 Attributes And Values
HTML attributes provide additional information about HTML elements and are always specified in the opening tag.
```html showLineNumbers {7}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <img src="image.jpg" alt="Image" width="100" height="100" />
</body>
</html>
```
Most used Attributes are `id`, `class`, `style`, `src`, `href`, `alt`, `width`, `height`, `title`, `target`, `name`, `value`, `type`, `placeholder`, `required`, `disabled`, `checked`, `selected`, `multiple`
-   `id` attribute is used to uniquely identify an element within a document.
-   `class` attribute is used to define multiple elements with a common style or behavior.
-   `style` attribute is used to define inline CSS styles for an element.
-   `src` attribute is used to specify the URL of an image or media file.
-   `href` attribute is used to specify the URL of a link.
-   `alt` attribute is used to provide alternative text for an image.
-   `width` and `height` attributes are used to specify the dimensions of an image.
-   `title` attribute is used to provide additional information about an element.
-   `target` attribute is used to specify where to open the linked document. like `_blank` to open in a new tab.
-   `name` attribute is used to specify the name of an element, such as a form input.
-   `value` attribute is used to specify the value of an element, such as a form input.
-   `type` attribute is used to specify the type of an element, such as a form input. like `text`, `password`, `submit`, `radio`, `checkbox`, `file`, `button`, `reset`, `email`, `number`.
-   `placeholder` attribute is used to specify a short hint that describes the expected value of an input field.
-   `required` attribute is used to specify that an input field must be filled out before submitting a form.
-   `disabled` attribute is used to specify that an input field should be disabled.
-   `checked` attribute is used to specify that a checkbox or radio button should be checked by default.
-   `selected` attribute is used to specify that an option in a dropdown list should be selected by default.
-   `multiple` attribute is used to specify that multiple options can be selected in a dropdown list.
-   `autocomplete` attribute is used to specify whether an input field should have autocomplete enabled or disabled.
And more...

---
## 3.9 Media
### 3.9.1 Audio
`<audio>` tag is used to embed audio content in an HTML document.
```html showLineNumbers {7}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg" />
    </audio>
</body>
</html>
```
The `controls` attribute adds audio controls, such as play, pause, and volume, to the audio player.

---
### 3.9.2 Video
`<video>` tag is used to embed video content in an HTML document.
```html showLineNumbers {7}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <video controls width="320" height="240">
        <source src="video.mp4" type="video/mp4" />
    </video>
</body>
</html>
```
The `controls` attribute adds video controls, such as play, pause, and volume, to the video player.

---

## 3.10 From handling
### 3.10.1 Input 
`<input>` tag is used to create an input field in an HTML form.
```html showLineNumbers {7}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <input type="text" name="name" />
</body>
</html>
```

---

### 3.10.2 Label
`<label>` tag is used to define a label for an `<input>` element.
```html showLineNumbers {7-9}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
</body>
</html>
```
The `for` attribute in the `<label>` tag specifies which input field the label is associated with by matching the `id` attribute of the input field.

---

### 3.10.3 Button
`<button>` tag is used to create a clickable button in an HTML form.
```html showLineNumbers {7}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <button type="submit">Submit</button>
</body>
</html>
```
The `type` attribute specifies the type of button, such as `submit`, `reset`, or `button`.


---

### 3.10.4 Form

`<form>` tag is used to create an HTML form for user input.
```html showLineNumbers {7-13}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <form action="/submit" method="post"> <!-- post / get-->
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```
The `action` attribute specifies the URL where the form data should be submitted, and the `method` attribute
 specifies the HTTP method to use, such as `get` or `post`.

---


## 3.11 Div And Semantic HTML
`<div>` tag is used to define a division or section in an HTML document.
```html showLineNumbers {7,10}
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <div>
        <p>Content 1</p>
        <p>Content 2</p>
    </div>
</body>
</html>
```

`<div>` tag is a generic container that can be used to group elements together and apply styles or behavior to them.

Semantic HTML elements are those that clearly describe their meaning in a human-readable way. thy are just `div` with a meaning.
Some of the most common semantic HTML elements are:
-   `<header>`: Defines a header for a document or section.
-   `<nav>`: Defines a navigation menu.
-   `<main>`: Defines the main content of a document.
-   `<section>`: Defines a section in a document.
-   `<article>`: Defines an article in a document.
-   `<aside>`: Defines content aside from the content it is placed in.
-   `<footer>`: Defines a footer for a document or section.
-   `<figure>`: Defines self-contained content, such as images or diagrams.
-   `<figcaption>`: Defines a caption for a `<figure>` element.
-   `<time>`: Defines a date or time.

Exmple of a semantic HTML webpage:
```html showLineNumbers
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>Email:
                <a href="mailto:johndoe@example.com">Send an email</a>
            </p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>
```

---

# 4. Getting Our Hands Dirty

**Assignment: Create a Simple Personal Web Page**
1. Create an HTML file with your name as the title.
2. Add a heading with your name.
3. Add a paragraph with a short description of yourself.
4. Add an image of yourself.
5. Add a list of your hobbies.
6. Add a link to your favorite website.
7. Add a form with fields for name, email, and message.
8. Add a submit button to the form.
9. Share your page with the group.
10. Review and provide feedback on other pages.
**Have fun and be creative!**

**Remark**: Remamber to use all the tags we have learned in the workshop to get a comprehensive understanding of HTML.

# Conclusion
In this workshop, we learned the basics of HTML and how to create a simple webpage using HTML elements and tags.
We covered the structure of an HTML document, text formatting, links, images, tables, forms, and more.
We also discussed the importance of semantic HTML elements and how they can improve the accessibility and SEO of a webpage.
We hope you found this workshop helpful and that you are now ready to create your own web pages using HTML.
Wait for the next workshop to learn more about CSS and how to style your web pages. Stay tuned!. 

---
