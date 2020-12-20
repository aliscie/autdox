from django.shortcuts import HttpResponse, render
from allauth.socialaccount.models import SocialAccount
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))


def cookies(request):
    # keep this for later use🔴
    # the folowing link may helpe
    # https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Sessions#Enabling_sessions
    request.session.set_test_cookie()
    request.session['foo'] = 'bar'
    print({
        '_______request.session_______': request.session.get,
    })
    return HttpResponse('<h1>testig cookies</h1>')
