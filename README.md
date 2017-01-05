# FreeStyle

FreeStyle is FreeAgent’s design system. Bully for us.

[View the docs](http://craigcwaveformlabs.github.io/freestyle/)

FreeStyle is comprised of:

* Principles: the guiding principles that designers should reference and respect when creating new design patterns at FreeAgent.
* Basics: simple building blocks.
* Components: interface patterns.
* Templates: document the layout and structure of a section or the entirety of an interface.
* Features: the interfaces that, when working together, allow users to accomplish a task or solve a problem.
* Applications: entry point to the design system where we document the various products built using the design system. can be thought of as case studies.


## Contents

- [Install](#install)
- [Origin](#origin)
- [Documentation](#documentation)
- [Publishing](#publishing)
- [Contributing](#contributing)
- [License](#license)


## Install

Following these steps will install FreeStyle and it’s docs locally, and allow you to push documentation changes to GitHub Pages.

Prerequisites: Ruby 2.1, [Bundler](http://bundler.io/), [Node.js](http://nodejs.org/download/)

```
$ git clone git@github.com:craigcwaveformlabs/freestyle.git
$ cd freestyle
$ chruby ruby-2.1.2 (or whatever your non-system version of Ruby is)
$ bundle install
$ npm install
$ npm install -g grunt-cli (if you don’t already have Grunt installed)
```

## Origin

FreeStyle is forked from and linked to [Origin](https://github.com/fac/origin). Go have a read of that. Its super.

## Documentation

FreeStyle documentation is built with Jekyll and Grunt. How to run it locally:

```
$ grunt
```

In a new terminal window, run Browsersync for live reloads, synced up browsing and scrolling:

```
$ grunt sync
```

A new browser tab should open automatically to `http://localhost:9001/freestyle/`.

Running the docs locally gives us our sandbox for trying new ideas and approaches before considering them for deployment.

Aside from Jekyll’s [`_config.yml`](https://github.com/craigcwaveformlabs/frestyle/blob/master/_config.yml) and Grunt’s [`Gruntfile.js`](https://github.com/craigcwaveformlabs/freestyle/blob/master/Gruntfile.js), all files related to documentation live in [`/docs`](https://github.com/craigcwaveformlabs/frestyle/tree/master/docs).

The docs don't run at root because when published to GitHub Pages they lives at `/freestyle`. There is an established workaround for this, but it’s not applicable to sites where the Jekyll source is anywhere other than the root directory, and ours lives in `/docs`.


### Publishing

Use the included Grunt task to generate and publish Origin’s docs to http://craigcwaveformlabs.github.io/freestyle/:

```
$ grunt publish
```

This takes the `_site` directory, generates its own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.


## Contributing

Development of FreeStyle happens in our primary branch, `master`. For stable versions, see the [releases page](https://github.com/craigcwaveformlabs/freestyle/releases). `master` will always be up to date with the latest changes, including those which have yet to be released.

All team members should be contributing back to this repo in order to improve it.


## License

Created by and copyright FreeAgent Central Limited. Origin is released under the [MIT license](LICENSE.md). The original documentation format and deployment mechanism of Origin was based on a forked version of [Primer](https://github.com/primer/primer), created by and copyright of GitHub, Inc.
