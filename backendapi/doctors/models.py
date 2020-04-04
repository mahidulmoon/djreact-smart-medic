from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Doctor_details(models.Model):
    doctor=models.OneToOneField(User,on_delete=models.CASCADE)
    fullname=models.CharField(max_length=25)
    achievement=models.CharField(max_length=30)
    dept=models.CharField(max_length=30)
    address=models.CharField(max_length=100,blank=True)
    img=models.ImageField(upload_to='images/',default='doctors/images/doctor.png')

    