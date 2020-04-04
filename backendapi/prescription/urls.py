from django.urls import path,include
from rest_framework import routers
from .views import PrescriptionViewset

router=routers.DefaultRouter()
router.register('prescription',PrescriptionViewset)



urlpatterns=[
    path('',include(router.urls)),
]