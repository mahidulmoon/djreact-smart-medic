from django.contrib import admin
from .models import Doctor_details
from medicine.models import Medicine
from appoinment.models import Appoinment
from prescription.models import Prescription
# Register your models here.

admin.site.register(Doctor_details)
admin.site.register(Medicine)
admin.site.register(Appoinment)
admin.site.register(Prescription)