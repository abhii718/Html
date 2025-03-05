markdown
Copy
# HTML Complete Guide

## Phase 1: Basics of HTML

### 1.1 Introduction to HTML
- **What is HTML?**  
  HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure of content using tags.

- **How it works**  
  Browsers read HTML files and render them into visible/web pages.

---

### 1.2 Basic HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>
Key Components:

<!DOCTYPE html>: Declares HTML5.

<html>: Root element.

<head>: Contains metadata and linked resources.

<body>: Visible content.

1.3 Text Formatting
html
Copy
<h1>Main Heading</h1>
<h2>Subheading</h2>

<p>
  <b>Bold</b>, 
  <i>Italic</i>, 
  <u>Underline</u>, 
  <strong>Important text</strong>, 
  <em>Emphasized text</em>
</p>

<hr> <!-- Horizontal line -->
<p>Line break<br>Example</p>
Run HTML
1.4 Lists
Unordered List
html
Copy
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
Run HTML
Ordered List
html
Copy
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
Run HTML
Description List
html
Copy
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2</dt>
  <dd>Definition 2</dd>
</dl>
Run HTML
1.5 Links & Images
html
Copy
<!-- External link -->
<a href="https://example.com" target="_blank">Visit Example</a>

<!-- Internal link -->
<a href="#contact">Contact Section</a>

<!-- Image -->
<img src="image.jpg" alt="Description" width="300">
Run HTML
1.6 Multimedia
html
Copy
<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

<!-- Video -->
<video controls width="400">
  <source src="video.mp4" type="video/mp4">
</video>
Run HTML
Phase 2: Intermediate HTML
2.1 Tables
html
Copy
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
