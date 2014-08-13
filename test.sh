#!/bin/bash

if hash mocha 2>/dev/null; then
  mocha ./src
else
  echo "Please install mocha"
fi
