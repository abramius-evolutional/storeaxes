from rest_framework import serializers
from content.serializers import WorkItemSerializer
import models
import json

class ItemGroupSerializer(serializers.ModelSerializer):
    item = WorkItemSerializer()
    class Meta:
        model = models.ItemGroup
        fields = (
            'item',
            'count',
        )