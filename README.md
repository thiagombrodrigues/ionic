Instruções para execução:

mkdir www

npm install --save @ionic-native/core


ionic platform add android

ionic plugin add cordova-plugin-camera --save

npm install --save @ionic-native/camera

ionic plugin add cordova-plugin-geolocation

npm install --save @ionic-native/geolocation

ionic plugin add --save cordova-plugin-contacts

npm install --save @ionic-native/contacts

ionic plugin add cordova-plugin-device-motion

npm install --save @ionic-native/device-motion

ionic plugin add --save cordova-plugin-nativestorage

npm install --save @ionic-native/native-storage

ionic plugin add cordova-sqlite-storage --save

npm install --save @ionic/storage


ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyBd2tYUNhXk_bLyGwT94bQad8nL5XiVJYk"
npm install --save @ionic-native/google-maps
