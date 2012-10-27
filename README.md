Twilio TimeZone Bookmarklet
=========================

Have you ever been annoyed that Twilio's log screen displays times in PDT only?

![Twilio Interface Before](http://media.tumblr.com/tumblr_mckaax2Lhl1rndbsl.png "Twilio Interface Before")

We rely heavily on Twilio at OpenRent - and sometimes using their logs can be useful. Using the time in GMT is extra handy.

This bookmarklet will convert the times to local time so it looks like this:

![Twilio Interface After](http://media.tumblr.com/tumblr_mckaagqUuq1rndbsl.png "Twilio Interface After")

Installation
-------------------------

Go [here](http://currentlycoding.tumblr.com/post/34424496794/twilio-timezone-bookmarklet) to install the bookmarklet.

Or you can create a new bookmarklet and set the link to:

```javascript
javascript:(function()%7Bdocument.body.appendChild(document.createElement('script')).src='https://raw.github.com/dazbradbury/TwilioTimeZoneBookmarklet/master/twiliotimezonebookmarklet.js';%7D)();
```

Obviously - this could break at any time if twilio change their log screens, but we'll try to keep it up to date.

If you don't want to link to GitHub you can just use the following as your bookmarklet link url - but we can't keep that updated!

```javascript
javascript:$('.date a').each(function(){ $(this).text(new Date($(this).text().toString()).toString()) });
```