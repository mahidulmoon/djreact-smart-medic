from django.shortcuts import render
from rest_framework import viewsets, filters,generics
from .models import Prescription
from .serializers import PrescriptionSerializer
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here.

class PrescriptionViewset(viewsets.ModelViewSet):
    queryset=Prescription.objects.all()
    serializer_class= PrescriptionSerializer


    def post(self,request, *args, **kwargs):
        ptname=request.data['ptname']
        ptemail=request.data['ptemail']
        doctorname=request.data['doctorname']
        diseasename=request.data['diseasename']
        deaseasedesciptioncategory=request.data['deaseasedesciptioncategory']
        medicinename=request.data['medicinename']
        directiontopatient=request.data['directiontopatient']
        #filefield=request.data['image']

        Prescription.objects.create(ptname=ptname,ptemail=ptemail,doctorname=doctorname,diseasename=diseasename,deaseasedesciptioncategory=deaseasedesciptioncategory,medicinename=medicinename,directiontopatient=directiontopatient
        #,filefield=filefield
        )

