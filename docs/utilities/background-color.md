---
layout: page
title: background-color
---

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

These are the background colors we’re using in production — no more. All colors are managed in [fa-css-utilities](https://github.com/fac/fa-css-utilities). New colors should be added only when they’re actually being used in a component or other element in production. When adding a new color, justify it by linking to the Sass file where you’re using it in your PR. Then the team can approve the addition.


## Primary palette

<section class="SwatchGroup">

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-yellow">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-yellow);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-amber">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-amber);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-red">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-red);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-purple">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-purple);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-green">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-green);
{% endexample %}
  </div>

</section>


## Darker variants

<section class="SwatchGroup">

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-amber--dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-amber--dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-red--dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-red--dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue--dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue--dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue--x-dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue--x-dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue--xx-dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue--xx-dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-green--dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-green--dark);
{% endexample %}
  </div>

</section>


## Lighter variants

<section class="SwatchGroup">

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-yellow--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-yellow--x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-red--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-red--x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-purple--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-purple--x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue--x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--fa-green--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-green--x-light);
{% endexample %}
  </div>

</section>


## Grays

<section class="SwatchGroup">

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-1">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-1);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-2">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-2);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-3">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-3);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-4">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-4);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-5">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-5);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-6">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-6);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-7">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-7);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-8">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-8);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-9">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-9);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-10">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-10);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-11">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-11);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-12">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-12);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-13">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-13);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-14">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-14);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-15">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-15);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--gray-16">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-16);
{% endexample %}
  </div>

</section>

Related: [`text-color`]({{ site.baseurl }}/utilities/text-color/)
