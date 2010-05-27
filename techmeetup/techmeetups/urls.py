from django.conf.urls.defaults import *
from models import Meetup

urlpatterns = patterns('techmeetups.views',
  url(r'^/?$', 'next_meetups'),
)
