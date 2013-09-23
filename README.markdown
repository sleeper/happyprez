#HappyPrez#
A too-simple framework to help design and write HTML5 based presentations.

## Usage

You presentation should be enclosed in an HTML file, which includes the `happyprez.js` file.

A deck of slides is introduced through the `slidedeck` tag, where as each individual slide is introduced by
a `slide` tag. E.g.:

```html
<html>
<head> My Presentation</head>
<body>
  <slidedeck>
    <slide>
      Slide 1
    </slide>
    <slide>
      Slide 2
    </slide>
    <slide>
      Slide 3
    </slide>
  </slidedeck>
</body>
</html>
```

## Tags

### slidedeck

This tag introduces a new presentation. It should enclose several `slide` tags, that each represent, well, a slide ;)

#### Attributes

### slide

This tag introduces a new slide with a deck of slide.

#### Attributes

##### background

Indicates the background that will be behind this slide. The value of the attribute is an index (i.e. it will be represented by `#{name of the background}` in the css )

Several background are already defined:

* `white` : plain white background
* `black` : plain black background
* `red` : plain red background

Example:

```html
<slide background="white">
  ...
</slide>
```

##### centercontent

Center the content both vertically and horizontally.


##### transparent

Slide will be transparent

##### semi-opaque

Slide will be semi-opaque
