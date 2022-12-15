# camelCase vs. kebab-case

## Intro
### Experiment
Studies performed in natural language reading show that people read better (i.e., 20% faster) when an explicit
separator is used between words. It does not matter the type of separator, it could be a white space or a special
symbol. The overall message is that _readingthistext_ is more difficult than _reading_this_text_ or _reading this text_.

Here comes our question: _Is this finding valid for source code as well_? In other words, can we speedup code
reading using a specific separator when writing composed identifiers (i.e., identifiers featuring more than one
word)?

### This repo
This repository contains the code to run the site on which takes place the experiment.

## Launch the site
### Clone the repo
To start the webapp, clone the repo with
```git clone https://github.com/karma-riuk/camel-kebab.git```
or 
```git clone git@github.com:karma-riuk/camel-kebab.git```
### Install the dependencies
```yarn install```
### Start the webapp
```yarn dev```

