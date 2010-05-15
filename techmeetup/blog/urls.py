from django.conf.urls.defaults import *
from models import Post

urlpatterns = patterns('',
                    # display post
                    url(r'^(?P<year>(\d){4})/(?P<month>(\d){1,2})/(?P<slug>[-\w]+)/$',
                        'blog.views.post_detail',
                         name='blog_post_detail'),
                    url(r'^/?$', 'blog.views.post_archive', name="blog_post_archive"),
                    )
