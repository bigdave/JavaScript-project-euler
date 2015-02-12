.PHONY: test coverage cleanup

test:
	# Running tests (this might take a while)
	mocha ./src -R spec

coverage: clean
	# Instrumenting code
	jscoverage ./src ./coverage

	# Running tests (this might take a while)
	mocha -R html-cov > ./test-coverage.html ./coverage

	open ./test-coverage.html

clean:
	# Removing previous coverage results
	rm -rf ./coverage test-coverage.html
