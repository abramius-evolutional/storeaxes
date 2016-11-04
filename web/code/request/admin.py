# -*- coding: utf-8 -*-
from django.contrib import admin
import models

class RequestAdmin(admin.ModelAdmin):
    list_display = ('phone', 'name', 'email', 'message', 'dt', 'performed')

admin.site.site_header = u'Добро пожаловать.'
admin.site.register(models.Request, RequestAdmin)
