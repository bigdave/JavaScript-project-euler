#!/bin/bash

if ((hash mocha 2>/dev/null) && (hash jscoverage 2>/dev/null)); then
  echo "Clearing previous results"
  rm -rf ./coverage

  echo "Injecting jscoverage"
  jscoverage ./src ./coverage

  echo "Running tests (this may take a while)"
  mocha -R html-cov > ./test-coverage.html ./coverage

  echo "Displaying results"
  open ./test-coverage.html
else
  echo "Please make sure Mocha and jscoverage are installed"
fi
