# adaptivetweets
Show a list of tweets about a the topic of Coke.


To get started

Ensure you have nodejs installed (for npm) and bower. 

Install yeoman and co.

	npm install -g yo grunt-cli gulp

Update/install dependencies

    npm install

    bower install


to run the project

	grunt serve

or 

	grunt serve:dist

to run unit tests

	grunt test

To build

	grunt



Publish to github pages

	git subtree push --prefix dist origin gh-pages

View live at http://mattstabeler.github.io/adaptivetweets/


Where can I find the stored Tweet data?

When there are some tweets loaded, the 'toggle raw tweet data' button will appear, clicking this will dump the tweet data to the screen at the bottom of the page.
