from rest_framework import serializers
import models
import json


class WorkItemSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField('get_urls')
    category = serializers.SerializerMethodField('get_category')
    class Meta:
        model = models.WorkItem
        fields = (
            'id',
            'url',
            'title',
            'description',
            'category',
            'prise',
        )
    def get_urls(self, obj):
        return map(lambda im: im.image.url, obj.images.all())
    def get_category(self, obj):
        return obj.category.name if obj.category else ''

class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ContactInformation
        fields = ('title',
            'phone',
            'address',
            'about',
            'delivery',
            'payment',
        )

class SliderItemSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField('get_url')
    class Meta:
        model = models.SliderImage
        fields = (
            'id',
            'title',
            'description',
            'url'
        )
    def get_url(self, obj):
        return obj.image.url
