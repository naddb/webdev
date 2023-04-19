import http.client
from api.models import Company, Vacancy
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.serializers import CompanySerializer, VacancySerializer


@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=http.client.BAD_REQUEST)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        company.delete()
        return Response({'deleted': True})

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=http.client.BAD_REQUEST)

    if request.method == 'GET':
        vacancies = company.vacancy_set.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


    #
    # try:
    #     company = Company.objects.get(pk=id)
    #     vacancies = company.vacancy_set.all()
    #     vacancies = [v.to_json() for v in vacancies]
    #     return JsonResponse({f"{company.name}'s vacancies": vacancies}, safe=False)
    # except Company.DoesNotExist as e:
    #     return JsonResponse({"error": str(e)}, status=http.client.BAD_REQUEST)




