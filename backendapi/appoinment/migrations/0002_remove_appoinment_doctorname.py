# Generated by Django 3.0.4 on 2020-03-31 13:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appoinment', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appoinment',
            name='doctorname',
        ),
    ]
