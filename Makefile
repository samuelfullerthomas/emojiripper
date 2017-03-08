.PHONY: bootstrap start;

bootstrap:
	@yarn global add emojipacks && yarn

start:
	@node index.js