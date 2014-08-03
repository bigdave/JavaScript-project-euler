#!/bin/bash

rm -rf ./coverage
jscoverage ./src ./coverage
mocha -R html-cov > ./test-coverage.html ./coverage
open ./test-coverage.html
