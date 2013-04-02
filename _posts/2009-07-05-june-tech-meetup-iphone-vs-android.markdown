---
layout: post
title: June Tech Meetup - Iphone Vs Android
slug: june-tech-meetup-iphone-vs-android
created: 2009-07-05 02:42:16
---

June was the month of mobile development, Kate Ho told us how to develop an iPhone application in 10 steps, and Andrey Levushkin talked about his experience developing an application for hedout (<a title="Hedout" href="http://hedout.com" target="_blank">http://hedout.com/</a>)  on the Android platform.

Jessica Williamson also announced the launch of Startup Cafe (<a title="Startup cafe" href="http://startupcafe.co.uk" target="_blank">http://startupcafe.co.uk</a>), where you can "Get your dose of Edinburgh innovation news"
<h2>Kate Ho on the IPhone</h2>
<a href="#iphone">Watch Video</a>

Kate Ho's talk was based around developing an iPhone application in 10 steps.
<ul>
	<li><em>step 1.</em> get a mac + itouch / iphone (intel based).</li>
	<li><em>step 2.</em> have an idea and prototype it (draw your main interfaces to scale).</li>
	<li><em>step 3.</em> fire up xcode.</li>
	<li><em>step 4.</em> open the interface builder and build your interface.</li>
	<li><em>step 5.</em> write some code.</li>
	<li><em>step 6.</em> hook up the code to the relevant parts of the interface.</li>
	<li><em>step 7.</em> check out your app on the simulator.</li>
	<li><em>step 8. </em>check for memory leaks using instrument.</li>
	<li><em>step 9.</em> test on a real device (need to pay to join apple developer connection).</li>
	<li><em>step 10.</em> submit to the iphone appstore!</li>
</ul>
<a href="http://www.techmeetup.co.uk/blog/wp-content/uploads/2009/07/3686970095_1566736c4f.jpg"><img class="aligncenter size-medium wp-image-320" title="Kate Ho" src="http://www.techmeetup.co.uk/blog/wp-content/uploads/2009/07/3686970095_1566736c4f-450x299.jpg" alt="" width="450" height="299" /></a>

A lot of the talk during the Q&A revolved around the fact that Safari on the iPhone is a very capable browser and its possible to develop web applications with a similar look and feel to native applications without having go through all the hassle of the approval process.
<h2>Andrey Levushkin on the Android</h2>
<a href="#android">Watch Video</a>

Andrey from headout came to talk to us about his experience developing for the Android platform. He started explaining the concept behind Android which is to develop an open source platform that mobile phone manufacturers can install on their handsets, This allows developers to write applications for the
platform that will run on any handset which uses android.

(After announcing that Android will be installed on 18 devices by the end of the year, the question “is that worldwide” got a laugh. Android is reasonably new and hasnt yet reached userbases as large as the iPhone).

<a href="http://www.techmeetup.co.uk/blog/wp-content/uploads/2009/07/3687783258_fa1fd42e47.jpg"><img class="aligncenter size-medium wp-image-321" title="Andrey Levushkin" src="http://www.techmeetup.co.uk/blog/wp-content/uploads/2009/07/3687783258_fa1fd42e47-450x299.jpg" alt="" width="450" height="299" /></a>

Andrey went on to explain how android applications are structured, it uses the concept of activities where each activity represent one (or a set of closely related) user actions. Activities are launched through another concept of “intents” (for example, I want to write a text message) this allows
applications to interact with each other, giving users the ability to replace applications as they wish.

The UI system is based on standard MVC patterns, where controllers are written in Java which controls an XML view.

The last piece of the puzzle is the “activity lifecycle” that controls how the application is create /  destroyed / hidden etc, the platform notifies applications of when they will be put in the background or removed from memory.

After the talk finished there was a lot of discussion comparing the Android and iPhone platforms, Most of the discussion revolved around the much publicised nuances of the iPhone App Store approval process, in which a lot of developers have complained about inconsistent and unfair rulings. But if you are thinking about developing a mobile application, I would definitely check out both of the videos below.
<h2>Media</h2>
<a name="android"></a>
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="400" height="225" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://vimeo.com/moogaloop.swf?clip_id=5199359&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1" /><embed type="application/x-shockwave-flash" width="400" height="225" src="http://vimeo.com/moogaloop.swf?clip_id=5199359&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1" allowscriptaccess="always" allowfullscreen="true"></embed></object>

<a href="http://vimeo.com/5199359">Andrey Levushkin - Android development</a> from <a href="http://vimeo.com/techmeetup">TechMeetup</a> on <a href="http://vimeo.com">Vimeo</a>.

<a name="iphone"></a>
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="400" height="225" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://vimeo.com/moogaloop.swf?clip_id=5164418&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1" /><embed type="application/x-shockwave-flash" width="400" height="225" src="http://vimeo.com/moogaloop.swf?clip_id=5164418&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1" allowscriptaccess="always" allowfullscreen="true"></embed></object>

<a href="http://vimeo.com/5164418">Kate Ho talks about iPhone development</a> from <a href="http://vimeo.com/techmeetup">TechMeetup</a> on <a href="http://vimeo.com">Vimeo</a>.