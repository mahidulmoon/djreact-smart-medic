# Generated by Django 3.0.4 on 2020-04-03 07:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('prescription', '0004_auto_20200403_0613'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prescription',
            name='filefield',
        ),
    ]
