import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Crop} from "@ionic-native/crop";
import {Vibration} from "@ionic-native/vibration";
/*
  Generated class for the CreatequotePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'createquotepage',
  templateUrl: 'createquote.html'
})
export class CreateQuotePage {
  public path : string;




constructor(private vibration : Vibration, private crop: Crop, private camera: Camera, private imagePicker: ImagePicker,public navCtrl: NavController, public navParams: NavParams) {
  this.path = '../assets/PickImage.png';
}

pickFromGallery(){
  this.vibration.vibrate(50);
  let option = {
    title : 'Select Picture',
    message : 'Select 1 Picture',
    maximumImagesCount : 1,
    outType : 0 // 0-path 1-base64
  }
  this.imagePicker.getPictures(option).then((results) => {
    for (var i = 0; i < results.length; i++) {
      this.path = results[i];
      console.log('Image URI: ' + results[i]);
    }
  }, (err) => { });
}
pickFromCamera(){
  this.vibration.vibrate(50);
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((url) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    this.path = url;
    console.log('Image URI: ' + this.path);
  }, (err) => {
    // Handle error
  });
}
cropImage(){
  this.vibration.vibrate(50);
  let option = {
    targetHeight : 100,
    targetWidth : 100,
    quality : 100
  }
  this.crop.crop(this.path, option)
    .then(
      newImage => { this.path = newImage},

      error => console.error('Error cropping image', error)
    );
}
}
