from django.shortcuts import render
from .serializers import EmployeeSerializer, RoleSerializer, DepartmentSerializer, LeaveSerializer
from .models import Employee, Role, Department, Leave
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class EmployeeViewSet(APIView):
    def get(self, request,pk=None):
        if pk:   
            employee = Employee.objects.get(pk=pk)
            serializer = EmployeeSerializer(employee)
        else:
            employees = Employee.objects.all()
            serializer = EmployeeSerializer(employees,many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        employee = Employee.objects.get(pk=pk)
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        employee = Employee.objects.get(pk=pk)
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class RoleViewSet(APIView):

    def get(self, request,pk=None):
        if pk:
            role = Role.objects.get(pk=pk)
            serializer = RoleSerializer(role)
        else:
            roles = Role.objects.all()
            serializer = RoleSerializer(roles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RoleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        role = Role.objects.get(pk=pk)
        serializer = RoleSerializer(role, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        role = Role.objects.get(pk=pk)
        role.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class DepartmentViewSet(APIView):

    def get(self, request, pk=None):
        if pk:
            department = Department.objects.get(pk=pk)
            serializer = DepartmentSerializer(department)
        else:
            departments = Department.objects.all()
            serializer = DepartmentSerializer(departments, many=True)
        return Response(serializer.data)   

    def post(self, request):
        serializer = DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        department = Department.objects.get(pk=pk)
        serializer = DepartmentSerializer(department, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        department = Department.objects.get(pk=pk)
        department.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class LeaveViewSet(APIView):
    def get(self, request, pk=None):
        if pk:
            leave = Leave.objects.get(pk=pk)
            serializer = LeaveSerializer(leave)
        else:
            leaves = Leave.objects.all()
            serializer = LeaveSerializer(leaves, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LeaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        leave = Leave.objects.get(pk=pk)
        serializer = LeaveSerializer(leave, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        leave = Leave.objects.get(pk=pk)
        leave.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    