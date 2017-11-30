from django.conf.urls import url, include
from rest_framework.authtoken import views as token_auth_views

from . import views

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'api-token-auth/', token_auth_views.obtain_auth_token),
    url(r'userlist/', views.user_list),
    url(r'^signup/', views.signup),
    url(r'^updatedetails', views.update_details),
    url(r'^allexercises/', views.all_exercises),
    url(r'^allsupplements', views.all_supplements),
    url(r'^allfoods/', views.all_foods),
    url(r'^allmuscles/', views.all_muscles),
    url(r'^attendence/', views.getattendence),
    url(r'^feepayment/', views.getfeedetails),
    url(r'^test/', views.test),
    url(r'^isavailable', views.is_username_available),
    url(r'^workoutplan/', views.getworkoutplan),
    url(r'^dietplan/', views.getdietplan),
    url(r'^supplementplan/', views.getsupplementplan),
    url(r'^allergies', views.getallergies),
    url(r'^injuries', views.getinjuries),
    url(r'^info', views.getinfo),
]
