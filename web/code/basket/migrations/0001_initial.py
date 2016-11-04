# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Basket',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, editable=False, primary_key=True)),
            ],
        ),
        migrations.CreateModel(
            name='ItemGroup',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('count', models.PositiveSmallIntegerField()),
                ('basket', models.ForeignKey(related_name='item_groups', to='basket.Basket')),
                ('item', models.ForeignKey(related_name='item_groups', to='content.WorkItem')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('performed', models.BooleanField(default=False, verbose_name='\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e')),
                ('dt', models.DateTimeField(default=datetime.datetime.now, verbose_name='\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f', editable=False)),
                ('name', models.CharField(max_length=100, verbose_name='\u0418\u043c\u044f')),
                ('phone', models.CharField(max_length=100, verbose_name='\u0422\u0435\u043b\u0435\u0444\u043e\u043d')),
                ('email', models.CharField(default='', max_length=100, verbose_name='Email', blank=True)),
                ('pretty_data', models.TextField(default='', verbose_name='\u0414\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u0430\u0437\u0430')),
                ('message', models.TextField(default='', verbose_name='\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439')),
                ('total_price', models.FloatField(verbose_name='\u0421\u0443\u043c\u043c\u0430\u0440\u043d\u0430\u044f \u0446\u0435\u043d\u0430')),
                ('data', models.TextField()),
                ('basket', models.ForeignKey(to='basket.Basket')),
            ],
            options={
                'verbose_name': '\u0417\u0430\u043a\u0430\u0437 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f',
                'verbose_name_plural': '\u0417\u0430\u043a\u0430\u0437\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439',
            },
        ),
        migrations.AlterUniqueTogether(
            name='itemgroup',
            unique_together=set([('item', 'basket')]),
        ),
    ]
