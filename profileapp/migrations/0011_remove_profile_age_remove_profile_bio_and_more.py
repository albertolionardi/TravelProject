# Generated by Django 5.0.7 on 2024-08-06 19:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profileapp', '0010_rename_last_name_profile_lastname'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='age',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='bio',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='location',
        ),
    ]
