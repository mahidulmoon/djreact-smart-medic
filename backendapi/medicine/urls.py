from django.urls import path,include
from rest_framework import routers
from .views import MedicineView

router=routers.DefaultRouter()
router.register('list',MedicineView)


urlpatterns=[
    path('',include(router.urls)),
]