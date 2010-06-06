from xml.dom.minidom import parse, parseString
from django.contrib.auth.models import User
from blog.models import Post
from urlparse import urlparse

import re, htmlentitydefs
import datetime
import os

def getInnerText(node, tagName):
    tmp = node.getElementsByTagName(tagName)[0].firstChild
    if tmp:
        return tmp.wholeText
    return ""

def getOrCreate(name):
    try:
        return User.objects.get(username=name)
    except User.DoesNotExist:
        user = User(username=name, password="madeup")
        user.save()
        return user

def importFromWp(): 

    xmlFile = os.getcwd() + "/static/wordpress.2010-06-05.xml"
    dateFmt = "%a, %d %b %Y %H:%M:%S +0000"

    rss = parse(xmlFile)

    for post in rss.getElementsByTagName("item"):

        content = post.getElementsByTagName("content:encoded")[0]

        if content.childNodes.length > 0:

            name    = getInnerText(post, "dc:creator")
            dateStr = getInnerText(post, "pubDate")
            date    = datetime.datetime.strptime(dateStr, dateFmt)
            slug    = urlparse(getInnerText(post, "link")).path.split("/")[-2]

            Post( author  = getOrCreate(name),
                  title   = getInnerText(post, "title"), 
                  slug    = slug, 
                  body    = unescape(content.firstChild.wholeText),
                  created = date, 
                  updated = date ).save()
            
