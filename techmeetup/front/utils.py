from BeautifulSoup import BeautifulSoup
from xml.dom.minidom import parse, parseString
from django.contrib.auth.models import User
from django.utils.text import unescape_entities
from blog.models import Post
from urlparse import urlparse
from urllib import urlretrieve

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

    for tmp in Post.objects.all():
        tmp.delete()

    xmlFile = os.getcwd() + "/static/wordpress.2010-06-25.xml"
    dateFmt = "%a, %d %b %Y %H:%M:%S +0000"

    rss = parse(xmlFile)

    for post in rss.getElementsByTagName("item"):

        content = post.getElementsByTagName("content:encoded")[0]

        if content.childNodes.length > 0:

            name    = getInnerText(post, "dc:creator")
            dateStr = getInnerText(post, "pubDate")
            date    = datetime.datetime.strptime(dateStr, dateFmt)
            slug    = urlparse(getInnerText(post, "link")).path.split("/")[-2]
            body    = unescape_entities(content.firstChild.wholeText)

            soup = BeautifulSoup(body)
            for img in soup.findAll('img'):
                if re.match("http://techmeetup.co.uk/", img['src']):
                    imgsrc = img["src"]
                    filename = imgsrc.split("/")[-1]
                    img["src"] = "/static/img/wp/" + filename
                    outpath = os.path.join("./static/img/wp", filename)
                    body = str(soup)
                    if not os.path.exists(outpath): 
                        print "fetching: %s" % (img["src"])
                        urlretrieve(imgsrc, outpath)

            Post( author  = getOrCreate(name),
                  title   = getInnerText(post, "title"), 
                  slug    = slug, 
                  body    = body,
                  created = date, 
                  updated = date ).save()
            
