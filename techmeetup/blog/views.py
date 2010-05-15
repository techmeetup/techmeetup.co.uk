from django.shortcuts import render_to_response, get_object_or_404
from blog.models import Post
from django.template import RequestContext

def post_detail(request, slug, year=None, month=None, day=None):
    post = get_object_or_404(Post, slug=slug)
    return render_to_response('blog/post_detail.html',
            { 'post': post,
            }, context_instance=RequestContext(request))

def post_archive(request):
    posts = Post.objects.all().order_by('-created')
    return render_to_response('blog/post_archive.html',
            { 'posts': posts,
            }, context_instance=RequestContext(request))
