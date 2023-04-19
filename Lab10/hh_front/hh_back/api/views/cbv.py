from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Vacancy
from api.serializers import VacancySerializer


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailsAPIView(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(pk=id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), staus=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        insance = self.get_object(id)
        serializer = VacancySerializer(insance)
        return Response(serializer.data)

    def put(self, request, id):
        instance = self.get_object(id)
        serializer = VacancySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        instance = self.get_object(id)
        instance.delete()
        return Response({"delete": True})


class VacancyTopTenAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all().order_by("-salary")[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

