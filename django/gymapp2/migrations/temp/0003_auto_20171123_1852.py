# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-23 18:52
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gymapp2', '0002_auto_20171123_1848'),
    ]

    operations = [
        migrations.AlterField(
            model_name='members',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='gymapp2.AuthUser'),
        ),
    ]
