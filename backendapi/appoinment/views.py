from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Appoinment
from .serializers import AppoinmentSerializer
# Create your views here.

class AppoinmentViewset(viewsets.ModelViewSet):
    queryset = Appoinment.objects.all()
    serializer_class = AppoinmentSerializer 
    #authentication_classes=[TokenAuthentication, ]
    #permission_classes=[IsAuthenticated, ]
