# -*- coding: utf-8 -*-
import uuid
from django.db import models


class WorkItem(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    description = models.TextField(default='', blank=True, verbose_name='Описание')
    prise = models.IntegerField(verbose_name='Цена')
    sort_index = models.IntegerField(verbose_name='Сортировочный индекс', default=0)
    def __unicode__(self):
        return self.title
    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

class WorkImage(models.Model):
    work_item = models.ForeignKey(WorkItem, related_name='images', verbose_name='Связанный продукт')
    image = models.ImageField(upload_to='products/', verbose_name='Изображение')
    def __unicode__(self):
        return self.image.url
    class Meta:
        verbose_name = 'Фото продукта'
        verbose_name_plural = 'Фото продуктов'
    def image_tag(self):
        return u'<a href="%s"><img src="%s" style="max-height: 150px; max-width: 300px" /></a>' % (
            self.image.url, self.image.url
        )
    image_tag.short_description = 'Предпросмотр'
    image_tag.allow_tags = True

class SliderImage(models.Model):
    shown = models.BooleanField(default=True, verbose_name='Включить в слайдер')
    title = models.CharField(blank=True, default='', max_length=200, verbose_name='Название')
    description = models.TextField(default='', blank=True, verbose_name='Описание')
    image = models.ImageField(upload_to='slider/', verbose_name='Изображение')
    def __unicode__(self):
        return self.image.url
    class Meta:
        verbose_name = 'Фото для слайдера'
        verbose_name_plural = 'Фото для слайдера'
    def image_tag(self):
        return u'<a href="%s"><img src="%s" style="max-height: 150px; max-width: 300px" /></a>' % ( 
            self.image.url, self.image.url
        )
    image_tag.short_description = 'Предпросмотр'
    image_tag.allow_tags = True

class ContactInformation(models.Model):
    title = models.CharField(blank=True, default='', max_length=200, verbose_name='Название')
    phone = models.CharField(max_length=200, blank=True, default='', verbose_name='Телефон')
    address = models.TextField(blank=True, default='', verbose_name='Адрес')
    about = models.TextField(blank=True, default='', verbose_name='О компании')
    class Meta:
        verbose_name = 'Контактная информация'
        verbose_name_plural = 'Контактная информация'

class ServiceItem(models.Model):
    json_data = models.TextField()
    class Meta:
        verbose_name = 'Сервис'
        verbose_name_plural = 'Сервисы'



