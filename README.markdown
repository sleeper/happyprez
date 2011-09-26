#HappyPrez#
A simple HTML presentation tool :)

HappyPrez aims at helping you creationg beautiful HTML5 presentation
easily.
To do so, it translates an input file, describing both the content of
you rpresentation as well as its layout, and output your presentation as
an HTML file.

It relies on a set of templates based on [HTML5Now](http://code.google.com/p/html5wow/).

##Usage##

##Input file##
Input file is a simple text file, with the following structure:

* Common and general layout of the presentation
* List of slides

Each slide is introduced by a set of meta-tags (!SLIDE) and can have 
dedicated styles, transitions, background.

The following styles are implemented:

* transparent
* centercontent
* centertext
* out
* segue
* image
* blueprint
* wide
* iframe


