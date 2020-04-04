from django.db import models

# Create your models here.

class Prescription(models.Model):
    ptname=models.CharField(max_length=25)
    ptemail=models.CharField(max_length=25)
    doctorname=models.CharField(max_length=25)
    diseasename=models.CharField(max_length=25)
    deaseasedesciptioncategory=models.CharField(max_length=40)
    medicinename=models.CharField(max_length=25)
    directiontopatient=models.TextField()
    #filefield=models.ImageField(upload_to='prescription/')