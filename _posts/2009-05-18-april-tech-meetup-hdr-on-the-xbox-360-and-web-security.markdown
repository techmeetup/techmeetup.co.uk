---
layout: post
title: April Tech Meetup - HDR on the Xbox 360 and Web Security
slug: april-tech-meetup-hdr-on-the-xbox-360-and-web-security
created: 2009-05-18 23:56:24
---

For the April Tech Meetup we had talks from Ali about HDR on the Xbox 360 and Thomas Figg aka tef on Web Security.
<h2>Ali Eslami on HDR on the Xbox 360</h2>
<a href="#ali">Watch Video</a>

Ali talked about his work on the game “Viva Pinata - Trouble in Paradise”, which is the sequel to Viva Pinata, This was a release for the Xbox 360 and Ali's talk was specifically about the work involved in generating HDR on the Xbox 360 platform.
<p style="text-align: center;"><img class="size-medium wp-image-290 aligncenter" title="img_4673" src="http://www.techmeetup.co.uk/blog/wp-content/uploads/2009/05/img_4673-450x300.jpg" alt="" width="450" height="300" />Viva Pinata's gameplay included scenery ranging from snow to deserts, scenes with a lot of bright light, as well as dark shadows. This leads to areas of over exposure where the details are “blown out” along with areas of solid colour and no details. HDR is used to overcome that by increasing the range of detail that can be shown, therefore giving details to areas that would usually be blown out.</p>

The problem with rendering HDR on the Xbox is that the eDRAM, ram use by the graphics procesor (GPU) is only 10MB, and so can only support 8 bit channel sizes, a full resolution hdr frame cannot fit inside the edram.

Ali explained a few solutions along with those used in Viva Pinata:

The first solution is to split a frame into 2 halves, render each half separately, and then join before drawing to the screen - though this is quite a slow approach.

The second solution, what Bungie used for halo is to render at a smaller resolution for 2 different exposures then superimpose the 2 renders and stretch the final image to be drawn on screen - but the resulting image is pixelated during this process.

<em>Viva Pinata's solution:</em>

Ali described how they solved HDR by compressing the colour data for each channel, perform the render in eDRAM and then decompress before drawing on screen.

To cover all the ranges needed in the game they had to compress the channels by 4x, in games 90% will generally be at normal exposure, with maybe 10% at a higher exposure, this means details would be lost during the normal exposure b the compression. Ali described how they compress the channels on an (exponential) curve, this means there is little detail lost at the low exposure, but with room to handle the rare cases of high exposure on the same channel.

Ali then went on to describe what work they did on spot metering, bloom post processing, shaders and framerate considerations.This was a pretty technical talk and its hard to do it justice in a blog post,

I would really suggest watching the video if you are interested in graphics programming, Ali's a talented speaker, and with his detailed slides made these rather complicated techniques easy to understand.
<h2>“Any fool can write a website they cannot hack”</h2>
<h4>Thomas Figg on Web Security - <a href="#tef">Watch Video</a></h4>
“tef” finished off the night with an entertaining talk which gave an overview<a href="http://www.techmeetup.co.uk/blog/wp-content/uploads/2009/05/img_46621.jpg"><img class="alignright size-medium wp-image-288" title="Tef" src="http://www.techmeetup.co.uk/blog/wp-content/uploads/2009/05/img_46621-340x500.jpg" alt="" width="204" height="300" /></a> of web security,
Security on the internet is often overlooked - even by developers  - leaving some of the biggest sites on the internet (twitter, facebook, myspace, livejournal, wikipedia) with security problems that have been exploited. Although some security breaches may just be inconvenient, some can be disastrous, as tef summed up “if your users do not trust you, you will lose their business”.

He then introduced the “most important question in security” : WYTM (What is your threat model?). This is the first step in understanding how defend your application - determining how you will most likely be attacked. “There is no point in having a steel door if you have cardboard walls”, Tef continued by categorising different attackers: trolls, opportunistic hackers, but most importantly a new breed of hacker, businessmen, security exploits have started to make people lots of money, from spam to spyware to botnets, websites with lots of users can be very lucrative to break into.

Tef then gave a brief introduction to some common security breaches such as XSS and SQL injection, along with some of the tools that can be used for testing, from network testing like nmap, to HTTP tools like firebug.

With hackers are now hacking to make money, attacks rates will rise. Web applications must defend against increasingly sophisticated attacks, requiring more attention to security than ever before. As Tef concluded: you can have a secure system if you have a
<ul>
	<li>well defined threat model</li>
	<li>a well thought security policy that is enforced</li>
	<li>tests in place that test your security</li>
</ul>
This is also a talk well worth watching, as tef manages to illustrate some of the problems
with web security in some hilarious examples of where it can go wrong.

<em>Related links: </em>
<a href="http://www.sans.org">http://www.sans.org</a>
<a href="http://www.owasp.org">http://www.owasp.org</a>
<a href="http://f-secure.com/weblog/">http://f-secure.com/weblog/</a>
<h2>Media</h2>
<a name="ali"></a>
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="400" height="300" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://vimeo.com/moogaloop.swf?clip_id=4082594&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1" /><embed type="application/x-shockwave-flash" width="400" height="300" src="http://vimeo.com/moogaloop.swf?clip_id=4082594&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1" allowscriptaccess="always" allowfullscreen="true"></embed></object>

<a href="http://vimeo.com/4082594">Ali Eslami talks about HDR lighting on the Xbox360</a> from <a href="http://vimeo.com/techmeetup">TechMeetup</a> on <a href="http://vimeo.com">Vimeo</a>.

<a name="tef"></a>
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="400" height="300" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://vimeo.com/moogaloop.swf?clip_id=4086592&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1" /><embed type="application/x-shockwave-flash" width="400" height="300" src="http://vimeo.com/moogaloop.swf?clip_id=4086592&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1" allowscriptaccess="always" allowfullscreen="true"></embed></object>

<a href="http://vimeo.com/4086592">Thomas Figg talks about web app security</a> from <a href="http://vimeo.com/techmeetup">TechMeetup</a> on <a href="http://vimeo.com">Vimeo</a>.