import os
import sys

sys.path.append('/home/techmeetup/pylib')
sys.path.append('/home/techmeetup/www/techmeetup')
sys.path.append('/home/techmeetup/www/techmeetup/techmeetup')

os.environ['DJANGO_SETTINGS_MODULE'] = 'techmeetup.settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()
