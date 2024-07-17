from django.db import models

# model for employee
class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    date_hired = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

