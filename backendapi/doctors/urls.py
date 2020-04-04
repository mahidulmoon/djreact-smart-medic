from django.urls import path,include
from rest_framework import routers
from .views import DoctorViewset,DoctorListset

router=routers.DefaultRouter()
router.register('doctorregister',DoctorViewset)
router.register('doctorlist',DoctorListset)


urlpatterns=[
    path('',include(router.urls)),
]