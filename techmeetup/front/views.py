from django.shortcuts import render_to_response
from blog.models import Post
from django.template import RequestContext

def front(request):
    latest_blogposts = Post.objects.all().order_by('-created')
    return render_to_response('front/base.html', {
	    'latest_blogposts': latest_blogposts,
            }, context_instance=RequestContext(request))
