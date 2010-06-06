from django.db import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
from django.core.urlresolvers import reverse

import datetime

class Post(models.Model):

    author  = models.ForeignKey(User, related_name='posts')
    title   = models.CharField(max_length=200)
    slug    = models.CharField(max_length=200)
    body    = models.TextField()
    created = models.DateTimeField('Date Published')
    updated = models.DateTimeField('Date Updated')

    def __unicode__(self):
        return self.title

    def save(self):
        if not self.slug:
            self.slug = slugify(self.title)
        self.updated = datetime.datetime.today()
        super(Post,self).save()

    @models.permalink
    def get_absolute_url(self):
        return ('blog_post_detail', (), {
                'year'  : self.created.strftime("%Y"),
                'month' : self.created.strftime("%m"),
                'slug'  : self.slug 
                })
    
    class Meta:
        unique_together = ('author', 'slug')
