from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetailsAPIView.as_view()),
    path('vacancies/top_ten/', views.VacancyTopTenAPIView.as_view()),
]
