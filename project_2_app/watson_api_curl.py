import json
from watson_developer_cloud import NaturalLanguageUnderstandingV1

natural_language_understanding = NaturalLanguageUnderstandingV1(
    version='2018-11-16',
    iam_apikey='hB8gmTcFeu7MNsKDbRhW8_AYWntJn0sTcEV8A6SGJA7c',
    url='https://gateway.watsonplatform.net/natural-language-understanding/api')

response = natural_language_understanding.list_models().get_result()

print(json.dumps(response, indent=2))