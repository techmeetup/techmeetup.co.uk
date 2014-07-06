---
layout: post
title: Aberdeen TechMeetup 9
slug: aberdeen-techmeetup-9
created: 2010-07-20 11:39:36
---

It's time for another TechMeetup on July 21st at 6:30pm in the foyer of the North entrance of the Meston Building. As usual come for the food, listen to the talks and stay for the conversation and networking.

Gordon Guthrie on Hypernumbers http://hypernumbers.com/. The whole idea of Hypernumbers is a little hard to grasp in beginning, and it looks like another online version of Microsoft Excel. But its purpose is to build a platform using which any non-developer/non-programmer can easily build their own websites. You say: Hold on… what?  In Hypernumbers, every cell in a spreadsheet has a unique URL and hence can be used as a variable to be programmed with. This means that any element on a webpage can map to a cell in a spreadsheet. For eg, each textbox, dropdown or checkbox on a webpage would map to a cell in a
spreadsheet in the backend. So, if you can program an excel sheet you could potentially create your own website!

Jim Emerson on Using Ruby To Generate Database Maintenance and Application Code

One of the problems of development is ensuring that you keep the client database up to date. There is an inherent danger present when developing the database structure in an IDE type of environment of losing track of changes. It is far too easy to make a seemingly simple modification or more likely a series of modifications and fail to put in place a means of ensuring that the client database reflects all the changes.  Over the years I evolved my practices to ensure that any database modifications are done view re-playable scripts, meaning that you can re-run the script against the database and it will check to see if any changes are necessary so that you do not need to worry about which script to run against which version of a database. In Msaccess, this
scripting was part of the application loading and using VB code. In server oriented applications it is done through sql scripts.

However I found that maintaining the update scripts to be tedious and error prone. Take into account the additional requirement to maintain repetitive stored procedures, and C# data classes and it is way too easy for something to fall through the cracks.

This talk aims to show how I've developed a set of ruby scripts where the database structure can be defined (inspired in no small part by the Ruby on Rails migrations) and then all database structure maintenance, stored procedures and C# data classes are generated taking all lot drudgery out of database related coding.