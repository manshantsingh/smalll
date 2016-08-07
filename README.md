# Smalll.xyz

smalll.xyz allows you to shorten url's like many popular url shorteners out there.

Example:
*"smalll.&#8203;xyz/short" could be used to redirect to "https&#8203;://yourwebsite.&#8203;com/yourwebpage.html"*

***Currently it's in early stage***
<br><br><br>
Working
-------
- The Backend REST API is working (v0.1)
- You can access already shortened urls
<br><br>

***Older method to add new shortened urls***

~~New urls can be added using POST request. The example below shows a sample curl command to shorten your urls.~~
<!-- The following command contains 0 width space characters for a temporary fix so that markdown does not highlight the links in the curl command --> 
> ~~curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'tiny=short&complete=https&#8203;://yourwebsite.&#8203;com/yourwebpage.html' "http&#8203;://smalll.&#8203;xyz/addurl"~~

~~Just replace "short" and "https&#8203;://yourwebsite.&#8203;com/yourwebpage.html" with your ***tiny*** and full url.~~
<br><br><br>
Coming Soon
-----------
- ***A beautiful looking website that allows you to shorten urls.***
