from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)

    def __str__(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"