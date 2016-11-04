from django.shortcuts import render
from apitools import ApiResponse, GetParams
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
import models

@csrf_exempt
def add_request(request):

    params, error = GetParams(request, 'POST', ('name', 
        'email',
        'phone',
        'message',))
    if error: return error

    if 5:
        request = models.Request.objects.create(name=params.name,
            email=params.email,
            phone=params.phone,
            message=params.message,
            dt=timezone.now())
        request.save()
        return ApiResponse({
            'status': 'saved'
        })
    else: pass

    return ApiResponse({
        'status': 'error with creating a request'
    }, 500)
