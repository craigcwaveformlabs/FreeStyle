---
categories: basics
layout: page
title: Colour
order: 0
---

FreeAgent's colour palette is


## Primary Colours
_explain the reasoning and rules behind using colour in FreeAgent_

### Blue
**Blue** is the primary colour for FreeAgent

### Green


### Greys
_primary body text. but also used in the UI to soften the display and generate a sense of warmth_

## Secondary Palette

_where is the secondary palette used? call out some examples of use cases_

Words


## Brand Colours
Colour swatches to grab from. These are available as illustrator swatches and within Sketch templates.

<!-- _toDo - Try and create a link to sketch template in the sidebar_ -->


<!-- Loop through colours collection to build colour swatch. Be careful with naming of colour as this is used for the background colour variable. -->
{% assign entries = site.data.colors | sort:"order" %}




#### Primary

<div class="SwatchGroup">
  <div class="BlockGrid md-1 lg-3">
    {% for item in entries %}
      {% if item.group == 'primary' %}
        {% include colour_swatch.html %}
      {% endif %}
    {% endfor %}
  </div>
</div>

#### Blues
<div class="SwatchGroup">
  <div class="BlockGrid md-1 lg-3">
    {% for item in entries %}
      {% if item.group == 'blue' %}
        {% include colour_swatch.html %}
      {% endif %}
    {% endfor %}
  </div>
</div>


#### Greens
<div class="SwatchGroup">
  <div class="BlockGrid md-1 lg-3">
    {% for item in entries %}
      {% if item.group == 'green' %}
        {% include colour_swatch.html %}
      {% endif %}
    {% endfor %}
  </div>
</div>


## Type
Colour for type

<div class="Grid-row">
  <div class="Grid-col sm-12 md-5 lg-5" style='border-top: 3px solid #007abf; background:#F4F8FB'>
    <h4>Do's</h4>
    <p> List of things that you can do </p>
  </div>
  <div class="Grid-col sm-12 md-5 lg-5" style='border-top: 3px solid #007abf; background:#F4F8FB'>
    <h4>Dont's</h4>
    <p> List of things that you can do </p>  
  </div>
</div>



## Navigation
Colour for type

## State
Colour for type

## Social
Colour for type
