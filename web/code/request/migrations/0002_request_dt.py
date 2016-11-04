# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('request', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='request',
            name='dt',
            field=models.DateTimeField(default=datetime.datetime(2016, 1, 9, 19, 2, 31, 928128, tzinfo=utc), verbose_name=b'\xd0\x94\xd0\xb0\xd1\x82\xd0\xb0 \xd0\xb8 \xd0\xb2\xd1\x80\xd0\xb5\xd0\xbc\xd1\x8f \xd1\x81\xd0\xbe\xd0\xb7\xd0\xb4\xd0\xb0\xd0\xbd\xd0\xb8\xd1\x8f'),
            preserve_default=False,
        ),
    ]
