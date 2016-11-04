from django.contrib import admin
import models

class BasketAdmin(admin.ModelAdmin):
    list_display = (
        'id',
    )

class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'dt',
        'performed',
        'name',
        'phone',
        'email',
        'pretty_data',
        'message',
        'total_price'
    )

admin.site.register(models.Order, OrderAdmin)
