from django.urls import path,include
from rest_framework import routers
from .views import AppoinmentViewset

router=routers.DefaultRouter()
router.register('appoinment',AppoinmentViewset)


urlpatterns=[
    path('',include(router.urls)),
]