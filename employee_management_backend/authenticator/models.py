from django.db import models
from django.contrib.auth.models import User
   
#model for users roles

class Role(models.Model):
    role = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.role


#model for department

class Department(models.Model):
    department = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.department
    

# model for employee
class Employee(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, default=None,null=True, blank=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, default=None,null=True, blank=True)
    salary = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, null=True, blank=True)
    phone = models.CharField(max_length=100, unique=True, null=True, blank=True, default=None)
    address = models.CharField(max_length=100, default=None, null=True, blank=True)
    date_hired = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username

# model for leave 
class Leave(models.Model):

    PENDING = 'Pending'
    APPROVED = 'Approved'
    REJECTED = 'Rejected'

    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (APPROVED, 'Approved'),
        (REJECTED, 'Rejected'),
    ]
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    leave_type = models.CharField(max_length=100)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(max_length=100, choices=STATUS_CHOICES, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.employee.username} - {self.leave_type}"
        
        