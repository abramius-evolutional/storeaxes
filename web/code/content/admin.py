from django.contrib import admin
from django.contrib.auth.models import Group
from django.utils import timezone
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

class VideoAdmin(admin.ModelAdmin):
    list_display = ('sort_index', 'title', 'description', 'dt', 'video_url')
    def get_queryset(self, request):
        qs = super(VideoAdmin, self).get_queryset(request)
        return qs.order_by('sort_index')

class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('sort_index', 'title', 'image')
    fields = ('sort_index', 'image', 'image_tag', 'title', 'description')
    readonly_fields = ('image_tag',)
    def get_queryset(self, request):
        qs = super(GalleryImageAdmin, self).get_queryset(request)
        return qs.order_by('sort_index')

admin.site.register(models.WorkItem, WorkItemAdmin)
admin.site.register(models.SliderImage, SliderImageAdmin)
admin.site.register(models.ContactInformation, ContactInformationAdmin)
admin.site.register(models.ServiceItem, ServiceItemAdmin)
admin.site.register(models.WorkItemCategory)
admin.site.register(models.Video, VideoAdmin)
admin.site.register(models.GalleryImage, GalleryImageAdmin)

admin.site.unregister(Group)
