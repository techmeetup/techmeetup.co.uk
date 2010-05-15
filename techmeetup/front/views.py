from django.shortcuts import render_to_response

def front(request):
    return render_to_response('front/base.html')
