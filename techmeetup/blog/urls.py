from django.conf.urls.defaults import *
from models import Post

queryset = {'queryset': Post.objects.order_by('-created')}

blog_dict = {
    'queryset': Post.objects.all(),
    'date_field': 'created',
}

urlpatterns = patterns('django.views.generic.date_based',
                    # display post
                    url(r'^(?P<year>(\d){4})/(?P<month>(\w){3})/(?P<day>(\d){2})/(?P<slug>[-\w]+)/$',
                        'object_detail',
                        blog_dict, name='blog_post_detail'),
                    (r'^(?P<year>\d{4})/(?P<month>[a-z]{3})/(?P<day>\w{1,2})/$',
                        'archive_day', blog_dict),
                    (r'^(?P<year>\d{4})/(?P<month>[a-z]{3})/$',
                        'archive_month', blog_dict),
                    (r'^(?P<year>\d{4})/$',
                        'archive_year', blog_dict),
                    (r'^/?$', 'archive_index', blog_dict),
                    )
