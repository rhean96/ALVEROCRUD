from django.db import models

class Item(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    phoneno = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100, null=True)
    birthday = models.DateField(null=True)
    birthplace = models.CharField(max_length=100, null=True)
    age = models.IntegerField(null=True)  
    gender = models.CharField(max_length=100, null=True)
    nationality = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=100, null=True)
    religion = models.CharField(max_length=100, null=True)
    height_CM = models.CharField(max_length=100, null=True)
    weight_KG = models.CharField(max_length=100, null=True)
    mother_first_name = models.CharField(max_length=100, null=True)
    mother_middle_name = models.CharField(max_length=100, null=True)
    mother_last_name = models.CharField(max_length=100, null=True)
    mother_occupation = models.CharField(max_length=100, null=True)
    father_first_name = models.CharField(max_length=100, null=True)
    father_middle_name = models.CharField(max_length=100, null=True)
    father_last_name = models.CharField(max_length=100, null=True)
    father_occupation = models.CharField(max_length=100, null=True)
    primary = models.CharField(max_length=100, null=True)
    secondary = models.CharField(max_length=100, null=True)
    tertiary = models.CharField(max_length=100, null=True)

    def __str__(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"
