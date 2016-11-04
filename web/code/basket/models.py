# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import datetime
from django.db import models
import uuid
import json

class Basket(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    def __unicode__(self):
        return str(self.id)

class ItemGroup(models.Model):
    item = models.ForeignKey('content.WorkItem', related_name='item_groups')
    count = models.PositiveSmallIntegerField()
    basket = models.ForeignKey('Basket', related_name='item_groups')
    class Meta:
        unique_together = ('item', 'basket')

class Order(models.Model):
    performed = models.BooleanField(default=False, verbose_name='Выполнено')
    dt = models.DateTimeField(verbose_name='Дата и время создания', default=datetime.now, editable=False)
    name = models.CharField(max_length=100, verbose_name='Имя')
    phone = models.CharField(max_length=100, verbose_name='Телефон')
    email = models.CharField(blank=True, default='', max_length=100, verbose_name='Email')
    pretty_data = models.TextField(verbose_name='Данные заказа', default='')
    message = models.TextField(verbose_name='Комментарий', default='')
    total_price = models.FloatField(verbose_name='Суммарная цена')
    data = models.TextField()
    basket = models.ForeignKey(Basket)
    class Meta:
        verbose_name = 'Заказ пользователя'
        verbose_name_plural = 'Заказы пользователей'
    def make_pretty_data(self):
        data = json.loads(self.data)
        result = ''
        total_price = 0
        for i, item_group in enumerate(data):
            result += '%i)\n' % (i + 1)
            result += 'Название: %s\n' % item_group['item']['title']
            result += 'Цена: %s\n' % item_group['item']['prise']
            result += 'Количество: %s\n\n' % item_group['count']
            total_price += int(item_group['item']['prise'])
        result += 'Суммарная стоимость: %s' % total_price
        self.pretty_data = result
        self.save()
