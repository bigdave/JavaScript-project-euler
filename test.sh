#!/bin/bash

if hash mocha 2>/dev/null; then
  mocha ./src -R spec
else
  echo "Please install mocha"
fi
