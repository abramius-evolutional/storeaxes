# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactInformation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(default=b'', max_length=200, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5', blank=True)),
                ('phone', models.CharField(default=b'', max_length=200, verbose_name=b'\xd0\xa2\xd0\xb5\xd0\xbb\xd0\xb5\xd1\x84\xd0\xbe\xd0\xbd', blank=True)),
                ('address', models.TextField(default=b'', verbose_name=b'\xd0\x90\xd0\xb4\xd1\x80\xd0\xb5\xd1\x81', blank=True)),
                ('about', models.TextField(default=b'', verbose_name=b'\xd0\x9e \xd0\xba\xd0\xbe\xd0\xbc\xd0\xbf\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb8', blank=True)),
            ],
            options={
                'verbose_name': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f',
                'verbose_name_plural': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f',
            },
        ),
        migrations.CreateModel(
            name='ServiceItem',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('json_data', models.TextField()),
            ],
            options={
                'verbose_name': '\u0421\u0435\u0440\u0432\u0438\u0441',
                'verbose_name_plural': '\u0421\u0435\u0440\u0432\u0438\u0441\u044b',
            },
        ),
        migrations.CreateModel(
            name='SliderImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('shown', models.BooleanField(default=True, verbose_name=b'\xd0\x92\xd0\xba\xd0\xbb\xd1\x8e\xd1\x87\xd0\xb8\xd1\x82\xd1\x8c \xd0\xb2 \xd1\x81\xd0\xbb\xd0\xb0\xd0\xb9\xd0\xb4\xd0\xb5\xd1\x80')),
                ('title', models.CharField(default=b'', max_length=200, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5', blank=True)),
                ('description', models.TextField(default=b'', verbose_name=b'\xd0\x9e\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5', blank=True)),
                ('image', models.ImageField(upload_to=b'slider/', verbose_name=b'\xd0\x98\xd0\xb7\xd0\xbe\xd0\xb1\xd1\x80\xd0\xb0\xd0\xb6\xd0\xb5\xd0\xbd\xd0\xb8\xd0\xb5')),
            ],
            options={
                'verbose_name': '\u0424\u043e\u0442\u043e \u0434\u043b\u044f \u0441\u043b\u0430\u0439\u0434\u0435\u0440\u0430',
                'verbose_name_plural': '\u0424\u043e\u0442\u043e \u0434\u043b\u044f \u0441\u043b\u0430\u0439\u0434\u0435\u0440\u0430',
            },
        ),
        migrations.CreateModel(
            name='WorkImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', models.ImageField(upload_to=b'products/', verbose_name=b'\xd0\x98\xd0\xb7\xd0\xbe\xd0\xb1\xd1\x80\xd0\xb0\xd0\xb6\xd0\xb5\xd0\xbd\xd0\xb8\xd0\xb5')),
            ],
            options={
                'verbose_name': '\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430',
                'verbose_name_plural': '\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432',
            },
        ),
        migrations.CreateModel(
            name='WorkItem',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5')),
                ('description', models.TextField(default=b'', verbose_name=b'\xd0\x9e\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5', blank=True)),
                ('prise', models.IntegerField(verbose_name=b'\xd0\xa6\xd0\xb5\xd0\xbd\xd0\xb0')),
            ],
            options={
                'verbose_name': '\u041f\u0440\u043e\u0434\u0443\u043a\u0442',
                'verbose_name_plural': '\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b',
            },
        ),
        migrations.AddField(
            model_name='workimage',
            name='work_item',
            field=models.ForeignKey(related_name='images', verbose_name=b'\xd0\xa1\xd0\xb2\xd1\x8f\xd0\xb7\xd0\xb0\xd0\xbd\xd0\xbd\xd1\x8b\xd0\xb9 \xd0\xbf\xd1\x80\xd0\xbe\xd0\xb4\xd1\x83\xd0\xba\xd1\x82', to='content.WorkItem'),
        ),
    ]
