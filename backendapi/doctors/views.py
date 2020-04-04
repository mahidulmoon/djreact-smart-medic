from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import DoctorSerializer,DoctorViewSerializer
from .models import Doctor_details

# Create your views here.


class DoctorViewset(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=DoctorSerializer



class DoctorListset(viewsets.ModelViewSet):
    queryset = Doctor_details.objects.all()
    serializer_class=DoctorViewSerializer