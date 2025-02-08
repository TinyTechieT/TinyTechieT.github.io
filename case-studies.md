---
layout: page
title: Case Studies
permalink: /case-studies/
---

<!-- Welcome to my case studies page! Below is a list of all my case studies. -->

Coming soon!

<!-- ## Case Studies -->
<ul>
  {% for case_study in site.case_studies %}
    <li>
      <a href="{{ case_study.url }}">{{ case_study.title }}</a> - {{ case_study.date | date: "%B %-d, %Y" }}
      <p>{{ case_study.description }}</p>
    </li>
  {% endfor %}
</ul>