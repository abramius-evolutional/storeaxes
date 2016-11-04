# -*- coding: utf-8 -*-
from django.db import models

class Request(models.Model):
    performed = models.BooleanField(default=False, verbose_name='Выполнено')
    name = models.CharField(max_length=100, verbose_name='Имя')
    phone = models.CharField(max_length=100, verbose_name='Телефон')
    email = models.CharField(blank=True, default='', max_length=100, verbose_name='Email')
    message = models.TextField(verbose_name='Сообщение')
    dt = models.DateTimeField(verbose_name='Дата и время создания')
    class Meta:
        verbose_name = 'Заявка посетителя'
        verbose_name_plural = 'Заявки посетителей'
