from django.shortcuts import render
from apitools import ApiResponse, GetParams
import models
import serializers
import json
import data_initialization

def get_state(request):
    if request.method != 'GET':
        return ApiResponse({
            'status': 'HTTP method must be GET only'
        }, 403)

    workItems = models.WorkItem.objects.all().order_by('sort_index')
    workItemSerializer = serializers.WorkItemSerializer(workItems, many=True)

    categories = [c.name for c in models.WorkItemCategory.objects.all()]

    contactInfoList = models.ContactInformation.objects.all()
    if len(contactInfoList) > 0:
        contactInfo = contactInfoList[0]
    else:
        contactInfo = models.ContactInformation.objects.create()
    contactInfoSerializer = serializers.ContactInfoSerializer(contactInfo)

    sliderItems = models.SliderImage.objects.filter(shown=True)
    sliderItemsSerializer = serializers.SliderItemSerializer(sliderItems, many=True)

    serviceItems = models.ServiceItem.objects.all()
    if len(serviceItems) == 0:
        data_initialization.init_services()
        serviceItems = models.ServiceItem.objects.all()
    serviceItemsData = []
    for item in serviceItems:
        try:
            serviceItemsData.append(json.loads(item.json_data))
        except: pass

    videos = models.Video.objects.all().order_by('sort_index')
    videosSerializer = serializers.VideoSerializer(videos, many=True)

    images = models.GalleryImage.objects.all().order_by('sort_index')
    gallerySerializer = serializers.GallerSeriyalizer(images, many=True)

    return ApiResponse({
        'workItems': workItemSerializer.data,
        'categories': categories,
        'contactInfo': contactInfoSerializer.data,
        'sliderItems': sliderItemsSerializer.data,
        'serviceItems': serviceItemsData,
        'videos': videosSerializer.data,
        'gallery': gallerySerializer.data,
    })
