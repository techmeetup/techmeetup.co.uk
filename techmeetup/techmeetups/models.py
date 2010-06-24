from django.db import models

# Edinburgh / Glasgow / Aberdeen etc
class MeetupLocation(models.Model):
    name       = models.CharField(max_length=20)
    # Every 2nd week, etc etc
    occurrence = models.CharField(max_length=20)

    def __unicode__(self):
        return self.name
    
# Just a long list of meetups
class Meetup(models.Model):
    location    = models.ForeignKey(MeetupLocation)
    when        = models.DateTimeField()
    where       = models.CharField(max_length=200)
    map_link    = models.CharField(max_length=200)
    description = models.TextField()

    def __unicode__(self):
        return self.location.name + self.when.strftime(" - %a %d. %B %Y")

