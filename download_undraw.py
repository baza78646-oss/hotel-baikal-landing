import urllib.request
import json
import re

url = "https://raw.githubusercontent.com/freethenation/undraw-download/master/data/illustrations.json"
try:
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as response:
        data = response.read().decode('utf-8')
        print(data[:500])
except Exception as e:
    print(e)
