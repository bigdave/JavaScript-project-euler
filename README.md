# JavaScript Project Euler Exercises

I'm trying to use breaks and spare time in my day to go through the Project
Euler exercises with JavaScript. Mainly for kicks.

My goal is to reuse code when possible through a utility library with robust
test cases and 100% code coverage.

## Setup

At the very least, you will need nodejs and mocha in order to run the tests.
I installed node using homebrew:

    brew install node

then used npm to install mocha:

    npm install -g mocha

finally, if you want code coverage results, install the node-friendly
version of jscoverage:

    git clone https://github.com/visionmedia/node-jscoverage.git
    ./configure && make && make install

## Running

The exercises are executed as tests using mocha:

    make test

or, for code coverage results viewable in a browser:

    make coverage

## WARNING: Spoilers
If you are working through the Project Euler exercises for yourself, and want
the pleasure and mental stimulation of solving them, tread carefully (or not
at all) in this repo, because it does indeed contain answers for the problems
which I have problematically solved. I encourage you to attempt the problems
for yourself, look at the discussion threads on the Project Euler forum, and
only investigate my solutions after you have already arrived at an answer.

If you have optimizations or suggestions for my own solutions, I would love to
hear them, and encourage you to open a pull request, issue, or just comment!
