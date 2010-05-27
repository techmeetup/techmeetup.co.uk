from django.shortcuts import render_to_response
from techmeetups.models import Meetup, MeetupLocation
from django.template import RequestContext

def next_meetups(request):

    meetups = [ loc.meetup_set.order_by('-when')[0:1].get()
                for loc in MeetupLocation.objects.all() ]
    
    return render_to_response(
        'techmeetup/next_meetups.html',
        { 'meetups': meetups }, 
        context_instance=RequestContext(request))
