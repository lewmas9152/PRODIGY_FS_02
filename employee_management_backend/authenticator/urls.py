from django.urls import path
from .views import EmployeeViewSet, RoleViewSet, DepartmentViewSet, LeaveViewSet, LoginView, RegisterView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    
    path('employees/', EmployeeViewSet.as_view(), name='employee-list'),
    path('employees/<int:pk>/', EmployeeViewSet.as_view(), name='employee-detail'),
    
    path('roles/', RoleViewSet.as_view(), name='role-list'),
    path('roles/<int:pk>/', RoleViewSet.as_view(), name='role-detail'),

    path('departments/', DepartmentViewSet.as_view(), name='department-list'),
    path('departments/<int:pk>/', DepartmentViewSet.as_view(), name='department-detail'),

    path('leaves/', LeaveViewSet.as_view(), name='leave-list'),
    path('leaves/<int:pk>/', LeaveViewSet.as_view(), name='leave-detail'),
]
