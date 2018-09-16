
import requests
import json
import psycopg2

import matplotlib.pyplot as plt
from PIL import Image
from io import BytesIO

#
# # Replace <Subscription Key> with your valid subscription key.
subscription_key = "7b67ce7a521945949852e1ab9ee3e77e"
assert subscription_key
#
# # You must use the same region in your REST call as you used to get your
# # subscription keys. For example, if you got your subscription keys from
# # westus, replace "westcentralus" in the URI below with "westus".
# #
# # Free trial subscription keys are generated in the westcentralus region.
# # If you use a free trial subscription key, you shouldn't need to change
# # this region.
vision_base_url = "https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/"

analyze_url = vision_base_url + "analyze"


# Local Examples:
# food_path = "/Users/ASCguest/Desktop/salad.jpg"
# car = "/Users/ASCguest/Desktop/car.jpg"
# pasta = "/Users/ASCguest/Desktop/pasta.jpg"
# scenery = "/Users/ASCguest/Desktop/scenery.jpg"
# burger = "/Users/ASCguest/Desktop/burger.jpg"
# local_images = [food_path,car,pasta,scenery,burger]

# foods = []
# #businesses[]
# for i in range(0,len(local_images)):
#
image_data = open(local_images[i], "rb").read()
headers    = {'Ocp-Apim-Subscription-Key': subscription_key,
             'Content-Type': 'application/octet-stream'}
params     = {'visualFeatures': 'Categories,Description,Color'}
response = requests.post(analyze_url, headers=headers, params=params, data=image_data)
response.raise_for_status()
#
#
# #image = input("Please enter the image URL: \n")
# # Set image_url to the URL of an image that you want to analyze.
#
#Default approach
image_url = "https://upload.wikimedia.org/wikipedia/commons/a/a3/" + \
"Eq_it-na_pizza-margherita_sep2005_sml.jpg"

# image_data = urllib2.urlopen(image_url).read()
# media_id = 3
#
# sql = """
#     with s as (
#         select media_id
#         from images
#         where media_id = %(media_id)s
#     )
#     insert into images (media_id, data)
#     select %(media_id)s, %(data)s
#     where not exists (select 1 from s)
#     returning media_id
# ;"""
#
# data_insert_image = {
#     'media_id': media_id,
#     'data': psycopg2.Binary(image_data)
# }
#
# #image_url = str(image)
#
# #print(image)
# #Remote image
headers = {'Ocp-Apim-Subscription-Key': subscription_key }
params  = {'visualFeatures': 'Categories,Description,Color'}
data    = {'url': image_url}
response = requests.post(analyze_url, headers=headers, params=params, json=data)
response.raise_for_status()

#
# # The 'analysis' object contains various fields that describe the image. The most
# # relevant caption for the image is obtained from the 'description' property.
analysis = response.json();
#
#     print(analysis)
#
print(json.dumps(response.json()));
image_caption = analysis["description"]["captions"][0]["text"].capitalize()
#
image_name = str(analysis["categories"][0]['name'])
image_width = str(analysis["metadata"]['width'])
image_height = str(analysis["metadata"]['height'])
image_res = image_width + " x " + image_height
total_pixels = (analysis["metadata"]['width'] * analysis["metadata"]['height'])
image_mp = str(total_pixels/1000000)
print("Resolution: " + image_res + "\n")
print("Megapixels: " + image_mp + "\n")
# # Display the image and overlay it with the caption.
#
# #Remote
# #image = Image.open(BytesIO(requests.get(image_url).content))
#     image = Image.open(BytesIO(image_data))
# #classifier = ""

# #image_name = json.load(analysis)
# #print(image_name)
if ("food" in image_name):
    foods.append(image_name)
    plt.imshow(image)
    plt.axis("off")
    _ = plt.title(image_caption, size="x-large", y=-0.1)
    plt.show()
else:
    print("Not food" + "\n")
    print("It is a" + " " + image_name)

# for j in range(0,len(foods)):
#     print(foods[j])

try:
    conn = psycopg2.connect("dbname='food-central-data' user='foodcentral' host='localhost' password='hackmit1234!'")
except:
    print ("I am unable to connect to the database")

# cur = conn.cursor()
# cur.execute("""SELECT * from foods""")
# rows = cur.fetchall()

# for row in rows:
#     print(row)
cur = conn.cursor()
#cur.execute("""INSERT INTO foods VALUES('Photo','')""")
cur.execute('"INSERT INTO foods VALUES("' + str(3) + ",'pizza','" + str(analysis) + "')" )
print("Index: "+i)
print("Committed")
conn.commit()

# Fetching
# cur = conn.cursor()
# cur.execute("""SELECT * from foods WHERE id=6 """)
# rows = cur.fetchall()
#
# for row in rows:
#     print(row)


####################################
