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