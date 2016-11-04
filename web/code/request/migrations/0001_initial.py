# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('performed', models.BooleanField(default=False, verbose_name=b'\xd0\x92\xd1\x8b\xd0\xbf\xd0\xbe\xd0\xbb\xd0\xbd\xd0\xb5\xd0\xbd\xd0\xbe')),
                ('name', models.CharField(max_length=100, verbose_name=b'\xd0\x98\xd0\xbc\xd1\x8f')),
                ('phone', models.CharField(max_length=100, verbose_name=b'\xd0\xa2\xd0\xb5\xd0\xbb\xd0\xb5\xd1\x84\xd0\xbe\xd0\xbd')),
                ('email', models.CharField(default=b'', max_length=100, verbose_name=b'Email', blank=True)),
                ('message', models.TextField(verbose_name=b'\xd0\xa1\xd0\xbe\xd0\xbe\xd0\xb1\xd1\x89\xd0\xb5\xd0\xbd\xd0\xb8\xd0\xb5')),
            ],
            options={
                'verbose_name': '\u0417\u0430\u044f\u0432\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f',
                'verbose_name_plural': '\u0417\u0430\u044f\u0432\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439',
            },
        ),
    ]
