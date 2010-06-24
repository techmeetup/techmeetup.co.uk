from django.db import models
# Create your models here.

class MeetupLocation(models.Model):
    name       = models.CharField(max_length=20)
    # Every 2nd week, etc etc
    occurrence = models.CharField(max_length=20)

    def __unicode__(self):
        return self.name
    
