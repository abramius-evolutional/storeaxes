from django.shortcuts import render
from django.http import HttpResponse
from apitools import ApiResponse, GetParams
import serializers
import models
import json
import content.models
from django.views.decorators.csrf import csrf_exempt

def items(request):
    params, error = GetParams(request, 'GET', ('basket_id',))
    if error: return error

    try:
        basket = models.Basket.objects.get(id=params.basket_id)
    except models.Basket.DoesNotExist:
        return ApiResponse({'status': 'Basket has not been found.'}, 404)

    serializer = serializers.ItemGroupSerializer(basket.item_groups.all().order_by('dt'), many=True)

    return ApiResponse(serializer.data)

@csrf_exempt
def add_item(request):
    params, error = GetParams(request, 'POST', ('item_id', ))
    if error: return error

    basket_id = request.POST.get('basket_id')

    if basket_id:
        try:
            basket = models.Basket.objects.get(id=basket_id)
        except models.Basket.DoesNotExist:
            return ApiResponse({'status': 'Basket has not been found.'}, 404)      
    else:
        basket = models.Basket.objects.create()
        basket.save()

    try:
        item = content.models.WorkItem.objects.get(id=params.item_id)
    except content.models.WorkItem.DoesNotExist:
        return ApiResponse({'status': 'Item has not been found.'}, 404)

    try:
        item_group = basket.item_groups.get(item=item, basket=basket)
        item_group.count += 1
    except models.ItemGroup.DoesNotExist:
        item_group = models.ItemGroup.objects.create(item=item, count=1, basket=basket)
    item_group.save()

    return ApiResponse({
        'basket_id': str(basket.id)
    })

@csrf_exempt
def delete_item(request):
    params, error = GetParams(request, 'POST', ('item_id', 'basket_id'))
    if error: return error

    try:
        basket = models.Basket.objects.get(id=params.basket_id)
    except models.Basket.DoesNotExist:
        return ApiResponse({'status': 'Basket has not been found.'}, 404)

    try:
        item = content.models.WorkItem.objects.get(id=params.item_id)
    except content.models.WorkItem.DoesNotExist:
        return ApiResponse({'status': 'Item has not been found.'}, 404)

    try:
        item_group = basket.item_groups.get(item=item, basket=basket)
    except models.ItemGroup.DoesNotExist:
        return ApiResponse({'status': 'Item has not been found in the basket.'}, 404)

    item_group.delete()

    return ApiResponse({
        'status': 'item has been deleted'
    })

@csrf_exempt
def set_items_count(request):
    params, error = GetParams(request, 'POST', ('item_id', 'basket_id', 'count'))
    if error: return error

    try:
        basket = models.Basket.objects.get(id=params.basket_id)
    except models.Basket.DoesNotExist:
        return ApiResponse({'status': 'Basket has not been found.'}, 404)

    try:
        item = content.models.WorkItem.objects.get(id=params.item_id)
    except content.models.WorkItem.DoesNotExist:
        return ApiResponse({'status': 'Item has not been found.'}, 404)

    try:
        item_group = basket.item_groups.get(item=item, basket=basket)
    except models.ItemGroup.DoesNotExist:
        return ApiResponse({'status': 'Item has not been found in the basket.'}, 404)

    item_group.count = int(params.count)
    item_group.save()

    return ApiResponse({
        'status': 'item has been updated'
    })

@csrf_exempt
def make_order(request):
    params, error = GetParams(request, 
        'POST', 
        ('name', 'phone', 'email', 'message', 'basket_id'))
    if error: return error

    try:
        basket = models.Basket.objects.get(id=params.basket_id)
    except models.Basket.DoesNotExist:
        return ApiResponse({'status': 'Basket has not been found.'}, 404)

    item_groups = basket.item_groups.all()
    total_price = 0
    for item_group in item_groups:
        total_price += int(item_group.item.prise) * item_group.count

    serializer = serializers.ItemGroupSerializer(item_groups, many=True)

    order = models.Order.objects.create(name=params.name,
        email=params.email,
        phone=params.phone,
        message=params.message,
        data=json.dumps(serializer.data),
        total_price=total_price,
        basket=basket
    )
    order.save()
    order.make_pretty_data()

    for item_group in basket.item_groups.all()[::-1]:
        item_group.delete()

    return ApiResponse({
        'status': 'order has been saved.'
    })


