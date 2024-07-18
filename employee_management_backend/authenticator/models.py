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
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=100, unique=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, default=None)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    date_hired = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username

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
        return f"{self.employee.user.username} - {self.leave_type}"
        
        