from django.contrib.auth.models import User
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import IntegrityError

from .models import Foods
from .models import AuthUser
from .models import Exercises
from .serializers import *


@api_view(['GET', 'POST'])
def user_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        users = AuthUser.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def signup(request):
    username = request.data['username']
    password = request.data['password']
    email = request.data['email']
    name = request.data['name']
    dob = request.data['dob']
    sex = request.data['sex']
    phone = request.data['phone']
    foods = request.data['foods'].split(',')
    allergies = request.data['allergies'].split(',')
    injuries = request.data['injuries'].split(',')
    exercises = request.data['exercises'].split(',')
    supplements = request.data['supplements'].split(',')

    print('************************************************\n', username)
    print(password)
    print(foods)
    print(email)
    print(name)
    print(dob)
    print(allergies)
    print(injuries)

    # create user
    user = User.objects.create_user(username=username, password=password, email=email)
    user.save()

    user = AuthUser.objects.get(username=username)

    # insert member into database
    m = Members(
        name=name,
        dob=dob,
        sex=sex,
        phone=phone,
        user=user
    )
    m.save()

    for food in foods:
        d = Dietplans(
            member=m,
            food=Foods.objects.get(name=food)
        )
        d.save()

    for exercise in exercises:
        e = Workoutplans(
            member=m,
            exercise=Exercises.objects.get(exercise_name=exercise)

        )
        e.save()

    for supplement in supplements:
        s = Supplementplans(
            member=m,
            supplement=Supplements.objects.get(name=supplement)
        )
        s.save()

    for allergy in allergies:
        if (len(allergy) > 2):
            a = Allergies(
                member=m,
                food=Foods.objects.get(name=allergy)

            )
            a.save()

    for injury in injuries:
        if (len(injury) > 2):
            i = Injuries(
                member=m,
                muscle=Muscles.objects.get(name=injury)
            )
            i.save()

    return Response(status.HTTP_202_ACCEPTED)


@api_view(['POST'])
def update_details(request):
    if request.auth is not None:
        foods = request.data['foods'].split(',')
        allergies = request.data['allergies'].split(',')
        injuries = request.data['injuries'].split(',')
        exercises = request.data['exercises'].split(',')
        supplements = request.data['supplements'].split(',')

    a = AuthUser.objects.get(username=request.user.username)
    m = a.members

    Dietplans.objects.all().filter(member_id=m.id).delete()
    Workoutplans.objects.all().filter(member_id=m.id).delete()
    Supplementplans.objects.all().filter(member_id=m.id).delete()
    Allergies.objects.all().filter(member_id=m.id).delete()
    Injuries.objects.all().filter(member_id=m.id).delete()

    if len(foods) > 2:
        for food in foods:
            try:
                d = Dietplans(
                    member=m,
                    food=Foods.objects.get(name=food)
                )
                d.save()

            except IntegrityError:
                pass
    if len(exercises) > 2:
        for exercise in exercises:
            try:
                e = Workoutplans(
                    member=m,
                    exercise=Exercises.objects.get(exercise_name=exercise)

                )
                e.save()
            except IntegrityError:
                pass
    if len(supplements) > 2:
        for supplement in supplements:
            try:
                s = Supplementplans(
                    member=m,
                    supplement=Supplements.objects.get(name=supplement)
                )
                s.save()
            except IntegrityError:
                pass
    if len(allergies) > 2:
        for allergy in allergies:
            try:
                if (len(allergy) > 2):
                    a = Allergies(
                        member=m,
                        food=Foods.objects.get(name=allergy)

                    )
                    a.save()
            except IntegrityError:
                pass
    if len(injuries) > 2:
        for injury in injuries:
            try:
                if (len(injury) > 2):
                    i = Injuries(
                        member=m,
                        muscle=Muscles.objects.get(name=injury)
                    )
                    i.save()
            except IntegrityError:
                pass

    return Response(status.HTTP_202_ACCEPTED)


@api_view(['GET', 'POST'])
def all_foods(request):
    foods = Foods.objects.all()
    serializer = FoodsSerializer(foods, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def all_exercises(request):
    exercises = Exercises.objects.all()
    serializer = ExercisesSerializer(exercises, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def all_supplements(request):
    supplements = Supplements.objects.all()
    serializer = SupplementsSerializer(supplements, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def all_muscles(request):
    muscles = Muscles.objects.all();
    serializer = MusclesSerializer(muscles, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def attendence(request):
    if (request.user.is_authenticated):
        pass
    else:
        return Response(status.HTTP_403_FORBIDDEN)


@api_view(['GET', 'POST'])
def feepayment(request):
    pass


@api_view(['GET', 'POST'])
def test(request):
    if request.auth is not None:
        return Response(status=status.HTTP_202_ACCEPTED)
    else:
        return Response(status=status.HTTP_403_FORBIDDEN)


@api_view(['GET', 'POST'])
def getworkoutplan(request):
    if request.auth is not None:
        a = AuthUser.objects.get(username=request.user.username)
        x = Workoutplans.objects.all().filter(member=a.members)
        serializer = WorkoutPlanSerializer(x, many=True)
        return Response(serializer.data)
    else:
        return Response(status.HTTP_403_FORBIDDEN)


@api_view(['GET', 'POST'])
def getdietplan(request):
    if request.auth is not None:
        a = AuthUser.objects.get(username=request.user.username)
        foods = Dietplans.objects.all().filter(member=a.members)
        serializer = DietPlanSerializer(foods, many=True)
        return Response(serializer.data)
    else:
        return Response(status.HTTP_403_FORBIDDEN)


@api_view(['GET', 'POST'])
def getsupplementplan(request):
    if request.auth is not None:
        a = AuthUser.objects.get(username=request.user.username)
        x = Supplementplans.objects.all().filter(member=a.members)
        serializer = SupplementPlanSerializer(x, many=True)
        return Response(serializer.data)
    else:
        return Response(status.HTTP_403_FORBIDDEN)


@api_view(['GET', 'POST'])
def getinfo(request):
    if request.auth is not None:
        a = AuthUser.objects.get(username=request.user.username)
        serializer = MemberSerializer(a.members)
        return Response(serializer.data)
    else:
        return Response(status.HTTP_403_FORBIDDEN)


@api_view(['GET', 'POST'])
def getallergies(request):
    if request.auth is not None:
        a = AuthUser.objects.get(username=request.user.username)
        al = Allergies.objects.all().filter(member=a.members)
        serializer = AllergiesSerializer(al, many=True)
        return Response(serializer.data)
    else:
        return Response(status.HTTP_403_FORBIDDEN)


@api_view(['GET', 'POST'])
def getinjuries(request):
    if request.auth is not None:
        a = AuthUser.objects.get(username=request.user.username)
        i = Injuries.objects.all().filter(member=a.members)
        serializer = InjuriesSerializer(i, many=True)
        return Response(serializer.data)
    else:
        return Response(status.HTTP_403_FORBIDDEN)


@api_view(['GET', 'POST'])
def getattendence(request):
    if request.auth is not None:
        a = AuthUser.objects.get(username=request.user.username)
        x = Attendance.objects.all().filter(member=a.members)
        serializer = AttendanceSerializer(x, many=True)
        return Response(serializer.data)
    else:
        return Response(status.HTTP_403_FORBIDDEN)


@api_view(['GET', 'POST'])
def getfeedetails(request):
    if request.auth is not None:
        a = AuthUser.objects.get(username=request.user.username)
        x = Fee.objects.all().filter(member=a.members)
        serializer = FeeSerializer(x, many=True)
        return Response(serializer.data)
    else:
        return Response(status.HTTP_403_FORBIDDEN)


def is_username_available(request):
    user = User.objects.all().filter(username=request.GET['username'])
    if (user.count() == 0):
        return JsonResponse({'available': 'true'})
    else:
        return JsonResponse({'available': 'false'})
