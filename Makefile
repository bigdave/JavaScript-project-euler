test:
	# Running tests (this might take a while)
	mocha ./src -R spec

coverage:
	# Removing previous coverage results
	rm -rf ./coverage

	# Instrumenting code
	jscoverage ./src ./coverage

	# Running tests (this might take a while)
	mocha -R html-cov > ./test-coverage.html ./coverage

	open ./test-coverage.html