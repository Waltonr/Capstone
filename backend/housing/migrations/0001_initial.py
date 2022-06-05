# Generated by Django 4.0.4 on 2022-06-03 15:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('locations', '0002_remove_location_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Housing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locations.location')),
            ],
        ),
    ]