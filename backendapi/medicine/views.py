from django.shortcuts import render
from rest_framework import viewsets
from .models import Medicine
from .serializers import MedicineSerializer
# Create your views here.


class MedicineView(viewsets.ModelViewSet):
    queryset= Medicine.objects.all()
    serializer_class=MedicineSerializer