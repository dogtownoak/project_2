# Generated by Django 2.0.5 on 2018-12-18 18:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project_2_app', '0002_auto_20181218_1814'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='email',
        ),
    ]
