# Generated by Django 3.0.4 on 2020-03-31 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appoinment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doctorname', models.CharField(max_length=25)),
                ('ptname', models.CharField(max_length=25)),
                ('ptage', models.CharField(max_length=25)),
                ('ptphnno', models.CharField(max_length=25)),
                ('ptemail', models.CharField(max_length=25)),
                ('ptappdate', models.CharField(max_length=25)),
                ('ptstbltime', models.CharField(max_length=25)),
            ],
        ),
    ]
