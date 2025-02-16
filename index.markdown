---
layout: page
title: Blog
permalink: /blog/
---

Welcome to my website! This is where you'll see blog posts from me very soon!

<!-- ## Blog Posts -->
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %-d, %Y" }}
      <p>{{ analysis.description }}</p>
    </li>
  {% endfor %}
</ul>

<form action="https://tinaggarg.substack.com/api/v1/free" method="post" target="_blank">
  <input type="email" name="email" placeholder="Your email" required>
  <button type="submit">Subscribe</button>
</form>

<script>
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function() {
        setTimeout(() => {
            this.reset(); // Clears the form after submission
        }, 500); // Small delay to ensure submission goes through
    });
});
</script>