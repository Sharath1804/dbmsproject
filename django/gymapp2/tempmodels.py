from __future__ import unicode_literals

from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class AuthtokenToken(models.Model):
    key = models.CharField(primary_key=True, max_length=40)
    created = models.DateTimeField()
    user = models.OneToOneField(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'authtoken_token'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


#########################################################


class Foods(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=100)
    food_type = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        db_table = 'foods'


class Muscles(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=100)

    class Meta:
        db_table = 'muscles'


class Supplements(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    type = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)

    class Meta:
        db_table = 'supplements'
        unique_together = (('name', 'type', 'brand'),)


class Members(models.Model):
    user = models.OneToOneField(AuthUser, models.DO_NOTHING)
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=100)
    dob = models.DateField()
    sex = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)

    class Meta:
        db_table = 'members'


class Exercises(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    exercise_name = models.CharField(max_length=100, blank=True, null=True)
    muscle_group_id = models.ForeignKey('Muscles', models.DO_NOTHING)
    equipment = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        db_table = 'exercises'


class Injuries(models.Model):
    member = models.ForeignKey('Members', models.DO_NOTHING)
    muscle = models.ForeignKey('Muscles', models.DO_NOTHING)

    class Meta:
        db_table = 'injuries'
        unique_together = (('member', 'muscle'),)


class Allergies(models.Model):
    member = models.ForeignKey('Members', models.DO_NOTHING)
    food = models.ForeignKey('Foods', models.DO_NOTHING)

    class Meta:
        db_table = 'allergies'
        unique_together = (('member', 'food'),)


class Dietplans(models.Model):
    member = models.ForeignKey('Members', models.DO_NOTHING)
    food = models.ForeignKey('Foods', models.DO_NOTHING)

    class Meta:
        db_table = 'dietplans'
        unique_together = (('member', 'food'),)


class Supplementplans(models.Model):
    member = models.ForeignKey('Members', models.DO_NOTHING)
    supplement = models.ForeignKey('Supplements', models.DO_NOTHING)

    class Meta:
        db_table = 'supplementplans'
        unique_together = (('member', 'supplement'),)


class Workoutplans(models.Model):
    member = models.ForeignKey('Members', models.DO_NOTHING)

    exercise = models.ForeignKey(Exercises, models.DO_NOTHING)

    class Meta:
        db_table = 'workoutplans'
        unique_together = (('member', 'exercise'),)


class Fee(models.Model):
    member = models.ForeignKey('Members', models.DO_NOTHING)
    payed_date = models.DateField()

    class Meta:
        db_table = 'fee'
        unique_together = (('member', 'payed_date'),)


class Attendance(models.Model):
    member = models.ForeignKey('Members', models.DO_NOTHING)
    attended_date = models.DateField()
    time_in = models.TimeField()
    time_out = models.TimeField()

    class Meta:
        db_table = 'attendance'
        unique_together = (('member', 'attended_date', 'time_in', 'time_out'),)
