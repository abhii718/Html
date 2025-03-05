# HTML Full Guide

## Phase 1: Basics of HTML

### Introduction to HTML
- **What is HTML?** HTML (HyperText Markup Language) is the standard language for creating web pages.
- **How does it work?** HTML structures the content of a webpage using elements and tags.

### Basic Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

### Text Formatting
HTML provides various tags for text formatting, such as headings, bold, italic, underline, and line breaks.
```html
<h1>Heading 1</h1>
<p><b>Bold</b>, <i>Italic</i>, <u>Underline</u>, <strong>Strong</strong>, <em>Emphasized</em></p>
<hr>
<p>New line break <br> Example</p>
```

### Lists
Lists help organize content in an ordered or unordered manner.
```html
<ul>
    <li>Unordered List Item</li>
</ul>
<ol>
    <li>Ordered List Item</li>
</ol>
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
```

### Links & Anchors
Links allow navigation to different web pages or sections within a page.
```html
<a href="https://example.com" target="_blank">Visit Example</a>
<a href="#section">Jump to Section</a>
```

### Images & Multimedia
Images and multimedia elements enhance web content visually.
```html
<img src="image.jpg" alt="Description" width="200" height="150">
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
<video controls width="300">
    <source src="video.mp4" type="video/mp4">
</video>
```

---

## Phase 2: Intermediate HTML

### Tables
Tables structure data in rows and columns.
```html
<table border="1">
    <tr>
        <th>Heading 1</th>
        <th>Heading 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

### Forms & Input Fields
Forms collect user input through various input fields.
```html
<form action="submit.php" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Submit</button>
</form>
```

### Attributes & Global Attributes
Attributes provide additional information about elements.
```html
<p id="unique" class="text-class" title="Tooltip">Text Example</p>
<p data-info="Custom Data">Data Attribute Example</p>
```

---

## Phase 3: Advanced HTML

### Semantic HTML
Semantic elements improve accessibility and SEO.
```html
<header>Header Section</header>
<nav>Navigation Menu</nav>
<section>Main Content</section>
<article>Article Content</article>
<aside>Sidebar</aside>
<footer>Footer Information</footer>
```

### HTML APIs
#### Drag & Drop
Allows users to drag and drop elements.
```html
<div id="dropzone" ondrop="drop(event)" ondragover="allowDrop(event)" style="border:1px solid black; width:200px; height:100px;"></div>
<script>
    function allowDrop(event) { event.preventDefault(); }
    function drop(event) { event.preventDefault(); event.target.innerHTML = "Dropped!"; }
</script>
```

#### Web Storage API
Used for storing data in the browser.
```html
<script>
    localStorage.setItem("username", "Abhi");
    alert(localStorage.getItem("username"));
</script>
```

#### Geolocation API
Retrieves user location.
```html
<script>
    navigator.geolocation.getCurrentPosition(function(position) {
        alert("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
    });
</script>
```

#### Canvas API
Used for drawing graphics.
```html
<canvas id="canvas" width="200" height="100" style="border:1px solid black;"></canvas>
<script>
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 50, 50);
</script>
```

#### SVG
Scalable Vector Graphics format.
```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

### SEO Best Practices
#### Meta Tags
Help with search engine visibility.
```html
<head>
    <meta name="description" content="Learn HTML step-by-step.">
    <meta name="keywords" content="HTML, Web Development">
    <meta name="author" content="Abhi">
</head>
```

#### Open Graph (Social Media Preview)
Used to control how links appear on social media.
```html
<head>
    <meta property="og:title" content="HTML Guide">
    <meta property="og:description" content="Complete HTML learning guide.">
    <meta property="og:image" content="thumbnail.jpg">
    <meta property="og:url" content="https://example.com">
</head>
```

#### Schema Markup (Structured Data)
Enhances search engine understanding of content.
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HTML Guide",
    "author": { "@type": "Person", "name": "Abhi" }
}
</script>
```

---

## Summary
✅ **HTML Basics** – Structure, Elements, Forms, Inputs  
✅ **HTML APIs** – Drag & Drop, Web Storage, Geolocation, Canvas, SVG  
✅ **SEO** – Meta Tags, Open Graph, Schema Markup  

---

This guide provides essential knowledge for mastering HTML. 🚀
