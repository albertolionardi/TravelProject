from .models import Activity
from modeltranslation.translator import translator, TranslationOptions
class ActivityTranslationOptions(TranslationOptions):
    fields = ('description','long_description')  # Specify the fields you want to translate

translator.register(Activity, ActivityTranslationOptions)