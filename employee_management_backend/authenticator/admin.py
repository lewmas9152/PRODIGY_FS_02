from django.contrib import admin
from .models import Employee, Role, Department, Leave

admin.site.register(Employee)
admin.site.register(Role)
admin.site.register(Department)
admin.site.register(Leave)

# Register your models here.
