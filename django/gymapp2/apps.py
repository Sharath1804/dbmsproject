from django.apps import AppConfig


class Gymapp2Config(AppConfig):
    name = 'gymapp2'

    def ready(self):
        from . import  signals