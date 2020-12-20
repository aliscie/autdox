from django.shortcuts import HttpResponse, render
from allauth.socialaccount.models import SocialAccount
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))


# def index(request, username, *args, **kwargs):
#     # request.user
#     return render(request, 'index.html', {'username': username})
# #      Response({'Message': request.user}, status=200)
#     #  never_cache(TemplateView.as_view(template_name='index.html'))
