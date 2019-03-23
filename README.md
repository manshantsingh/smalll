# Tiny.ms

tiny.ms allows you to shorten url's like many popular url shorteners out there.

Usage
-------

***Using Web Interface***

Usage is very simple and straight forward. Enter the original url you want to shorten to the "Enter Full URL:" field and the desired url in the following field and click the shorten button.

If the url is successfully shortened, the following message will be displayed:

>URL shortcut added. tiny.ms/short should redirect you to https://www.yourwebpage.com/

If there is an error or the shortened url has already taken, the following message will be displayed 

>Something went wrong. Most likely tiny.ms/test is already taken.

Example:
*"tiny.&#8203;ms/short" could be used to redirect to "https&#8203;://yourwebsite.&#8203;com/yourwebpage.html"*

***Using POST Request***

Just replace "short" and "https&#8203;://yourwebsite.&#8203;com/yourwebpage.html" with your ***tiny*** and full url.

>curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'tiny=short&complete=https​://yourwebsite.​com/yourwebpage.html' "http​://tiny.​ms/addurl"

Working
-------
- A basic html webpage to shorten urls.
- You can access already shortened urls.

Coming Soon
-----------
- ***A beautiful UI***
