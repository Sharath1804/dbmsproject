from rest_framework import serializers

from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUser
        # fields = ('password', 'last_login', 'is_superuser', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined')
        fields = ('username', 'first_name', 'last_name', 'email')


class FoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foods
        fields = ('__all__')


class MusclesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Muscles
        fields = ('__all__')


class ExercisesSerializer(serializers.ModelSerializer):
    # muscle = MuscleNamesSerializer(read_only=True)
    muscle_group_id = MusclesSerializer(read_only=True)

    class Meta:
        model = Exercises
        # fields = ('exercise_name', 'equipment', 'muscle_group_id')
        fields = ('__all__')


class SupplementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplements
        fields = ('__all__')


class WorkoutPlanSerializer(serializers.ModelSerializer):
    exercise = ExercisesSerializer(read_only=True)

    class Meta:
        model = Workoutplans
        fields = ('__all__')


class DietPlanSerializer(serializers.ModelSerializer):
    food = FoodsSerializer(read_only=True)

    class Meta:
        model = Dietplans
        fields = ('food',)


class SupplementPlanSerializer(serializers.ModelSerializer):
    supplement = SupplementsSerializer(read_only=True)

    class Meta:
        model = Supplementplans
        fields = ('supplement',)


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = ('__all__')


class FeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fee
        fields = ('__all__')

class MemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Members
        fields = ('__all__')

class InjuriesSerializer(serializers.ModelSerializer):
    muscle = MusclesSerializer(read_only=True)
    class Meta:
        model = Injuries
        fields = ('muscle',)

class AllergiesSerializer(serializers.ModelSerializer):
    food = FoodsSerializer(read_only=True)
    class Meta:
        model = Allergies
        fields = ('food',)