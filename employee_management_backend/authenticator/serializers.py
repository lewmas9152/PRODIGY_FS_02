from rest_framework import serializers
from .models import Employee, Role, Department, Leave
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'], 
            email=validated_data['email'], 
            password=validated_data['password'])
        return user
    

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
   
class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = [ 'id', 'role', 'description']


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = [ 'id', 'department', 'description']


class LeaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leave
        fields = [ 'id', 'employee', 'leave_type', 'start_date', 'end_date', 'reason', 'status', 'created_at', 'updated_at']

class EmployeeSerializer(serializers.ModelSerializer):
    department_id = serializers.PrimaryKeyRelatedField(queryset=Department.objects.all(),source='department',allow_null=True, required=False)
    role_id = serializers.PrimaryKeyRelatedField(queryset=Role.objects.all(),source='role', allow_null=True, required=False)
    department = DepartmentSerializer(read_only=True)
    role = RoleSerializer(read_only=True)

    class Meta:
        model = Employee
        fields = [ 'id', 'username', 'email', 'role', 'role_id', 'department','department_id', 'salary', 'phone', 'address', 'date_hired', 'updated_at']
        depth = 1
