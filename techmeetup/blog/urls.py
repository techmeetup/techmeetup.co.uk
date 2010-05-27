from django.conf.urls.defaults import *
from models import Post

urlpatterns = patterns('blog.views',
  url(r'^(?P<year>(\d){4})/(?P<month>(\d){1,2})/(?P<slug>[-\w]+)/$', 
    'post_detail', name='blog_post_detail'),
  url(r'^/?$', 'post_archive', name="blog_post_archive"),
)
