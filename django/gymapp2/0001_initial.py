# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-23 08:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AuthGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80, unique=True)),
            ],
            options={
                'db_table': 'auth_group',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthGroupPermissions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'auth_group_permissions',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthPermission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('codename', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'auth_permission',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthtokenToken',
            fields=[
                ('key', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('created', models.DateTimeField()),
            ],
            options={
                'db_table': 'authtoken_token',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('is_superuser', models.BooleanField()),
                ('username', models.CharField(max_length=150, unique=True)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=254)),
                ('is_staff', models.BooleanField()),
                ('is_active', models.BooleanField()),
                ('date_joined', models.DateTimeField()),
            ],
            options={
                'db_table': 'auth_user',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthUserGroups',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'auth_user_groups',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthUserUserPermissions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'auth_user_user_permissions',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoAdminLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action_time', models.DateTimeField()),
                ('object_id', models.TextField(blank=True, null=True)),
                ('object_repr', models.CharField(max_length=200)),
                ('action_flag', models.SmallIntegerField()),
                ('change_message', models.TextField()),
            ],
            options={
                'db_table': 'django_admin_log',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoContentType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('app_label', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'django_content_type',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoMigrations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('app', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('applied', models.DateTimeField()),
            ],
            options={
                'db_table': 'django_migrations',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoSession',
            fields=[
                ('session_key', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('session_data', models.TextField()),
                ('expire_date', models.DateTimeField()),
            ],
            options={
                'db_table': 'django_session',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Allergies',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'allergies',
            },
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attended_date', models.DateField()),
                ('time_in', models.TimeField()),
                ('time_out', models.TimeField()),
            ],
            options={
                'db_table': 'attendance',
            },
        ),
        migrations.CreateModel(
            name='Dietplans',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'dietplans',
            },
        ),
        migrations.CreateModel(
            name='Exercises',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('exercise_name', models.CharField(blank=True, max_length=100, null=True)),
                ('equipment', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'db_table': 'exercises',
            },
        ),
        migrations.CreateModel(
            name='Fee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payed_date', models.DateField()),
            ],
            options={
                'db_table': 'fee',
            },
        ),
        migrations.CreateModel(
            name='Foods',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('food_type', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'db_table': 'foods',
            },
        ),
        migrations.CreateModel(
            name='Injuries',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'injuries',
            },
        ),
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('dob', models.DateField()),
                ('sex', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100, primary_key=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.AuthUser')),
            ],
            options={
                'db_table': 'members',
            },
        ),
        migrations.CreateModel(
            name='Muscles',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=100, primary_key=True)),
            ],
            options={
                'db_table': 'muscles',
            },
        ),
        migrations.CreateModel(
            name='Supplementplans',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Members')),
            ],
            options={
                'db_table': 'supplementplans',
            },
        ),
        migrations.CreateModel(
            name='Supplements',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('type', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100, primary_key=True)),
                ('brand', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'supplements',
            },
        ),
        migrations.CreateModel(
            name='Workoutplans',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exercise', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Exercises')),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Members')),
            ],
            options={
                'db_table': 'workoutplans',
            },
        ),
        migrations.AlterUniqueTogether(
            name='supplements',
            unique_together=set([('name', 'type', 'brand')]),
        ),
        migrations.AddField(
            model_name='supplementplans',
            name='supplement',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Supplements'),
        ),
        migrations.AddField(
            model_name='injuries',
            name='member',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Members'),
        ),
        migrations.AddField(
            model_name='injuries',
            name='muscle',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Muscles'),
        ),
        migrations.AddField(
            model_name='fee',
            name='member',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Members'),
        ),
        migrations.AddField(
            model_name='exercises',
            name='muscle_group_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Muscles'),
        ),
        migrations.AddField(
            model_name='dietplans',
            name='food',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Foods'),
        ),
        migrations.AddField(
            model_name='dietplans',
            name='member',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Members'),
        ),
        migrations.AddField(
            model_name='attendance',
            name='member',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Members'),
        ),
        migrations.AddField(
            model_name='allergies',
            name='food',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Foods'),
        ),
        migrations.AddField(
            model_name='allergies',
            name='member',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='gymapp2.Members'),
        ),
        migrations.AlterUniqueTogether(
            name='workoutplans',
            unique_together=set([('member', 'exercise')]),
        ),
        migrations.AlterUniqueTogether(
            name='supplementplans',
            unique_together=set([('member', 'supplement')]),
        ),
        migrations.AlterUniqueTogether(
            name='injuries',
            unique_together=set([('member', 'muscle')]),
        ),
        migrations.AlterUniqueTogether(
            name='fee',
            unique_together=set([('member', 'payed_date')]),
        ),
        migrations.AlterUniqueTogether(
            name='dietplans',
            unique_together=set([('member', 'food')]),
        ),
        migrations.AlterUniqueTogether(
            name='attendance',
            unique_together=set([('member', 'attended_date', 'time_in', 'time_out')]),
        ),
        migrations.AlterUniqueTogether(
            name='allergies',
            unique_together=set([('member', 'food')]),
        ),
    ]