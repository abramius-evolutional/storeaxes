from rest_framework import serializers
import models
import json


class WorkItemSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField('get_urls')
    class Meta:
        model = models.WorkItem
        fields = (
            'id',
            'url',
            'title',
            'description',
            'prise',
        )
    def get_urls(self, obj):
        return map(lambda im: im.image.url, obj.images.all())

class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ContactInformation
        fields = ('title',
            'phone',
            'address',
            'about',
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
