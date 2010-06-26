from django.conf.urls.defaults import *

import blog.views
import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    (r'^$', include('front.urls')),
    (r'^blog/', include('blog.urls')),
    (r'^latest/feed/$', blog.views.LatestEntriesFeed()),

    (r'^admin/doc/', include('django.contrib.admindocs.urls')),
    (r'^admin/', include(admin.site.urls)),
)

# Media URLs
# Only add these if we are testing locally.
# if settings.DEBUG:
urlpatterns += patterns('',
                        (r'^static/(?P<path>.*)$', 'django.views.static.serve',
                         {'document_root': settings.MEDIA_ROOT}),
                        )
