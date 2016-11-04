from django.contrib import admin
from django.contrib.auth.models import Group
import models


class WorkImageInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.WorkImage

class WorkItemAdmin(admin.ModelAdmin):
    inlines = [
        WorkImageInline,
    ]
    list_display = ('sort_index', 'category', 'title', 'prise')
    def get_queryset(self, request):
        qs = super(WorkItemAdmin, self).get_queryset(request)
        return qs.order_by('sort_index')

class WorkImageAdmin(admin.ModelAdmin):
    readonly_fields = ('image_tag',)

class SliderImageAdmin(admin.ModelAdmin):
    readonly_fields = ('image_tag', )
    list_display = ('title', 'shown', 'image_tag')

class ContactInformationAdmin(admin.ModelAdmin):
    list_display = ('title', 'phone', 'address')

class ServiceItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'json_data')

admin.site.register(models.WorkItem, WorkItemAdmin)
admin.site.register(models.SliderImage, SliderImageAdmin)
admin.site.register(models.ContactInformation, ContactInformationAdmin)
admin.site.register(models.ServiceItem, ServiceItemAdmin)
admin.site.register(models.WorkItemCategory)

admin.site.unregister(Group)
