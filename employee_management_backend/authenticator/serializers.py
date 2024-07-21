from rest_framework import serializers
from .models import Employee, Role, Department, Leave
   
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
    department_id = serializers.PrimaryKeyRelatedField(queryset=Department.objects.all(),allow_null=True, required=False)
    role_id = serializers.PrimaryKeyRelatedField(queryset=Role.objects.all(),allow_null=True, required=False)
    department = DepartmentSerializer(read_only=True)
    role = RoleSerializer(read_only=True)

    class Meta:
        model = Employee
        fields = [ 'id', 'username', 'email', 'role', 'role_id', 'department','department_id', 'salary', 'phone', 'address', 'date_hired', 'updated_at']
        depth = 1