import { Injectable } from "@angular/core";

@Injectable()
export class MyStorageProvider {

  constructor() {
  }

  static get title() {
    return 'MyStorageProvider';
  }


  uploadFile(file, name, dir, progressCallback, url, options) {

    // return new NativePromise((resolve, reject) => {
    // });
  }

  deleteFile(fileInfo) {

    // return new NativePromise((resolve, reject) => {
    // });
  }

  downloadFile(file) {

    // return new NativePromise((resolve, reject) => {


    // });
  }
}
