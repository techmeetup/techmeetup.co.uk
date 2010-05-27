from django.shortcuts import render_to_response
from blog.models import Post
from techmeetups.models import Meetup, MeetupLocation
from django.template import RequestContext

def front(request):

    latest_blogposts = Post.objects.all().order_by('-created')
    meetups = [ loc.meetup_set.order_by('-when')[0:1].get()
                for loc in MeetupLocation.objects.all() ]

    return render_to_response('front/base.html', {
	    'latest_blogposts': latest_blogposts,
            'meetups': meetups
            }, context_instance=RequestContext(request))
