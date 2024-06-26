import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  appendToLocalStorage(localStorageName: string, data) {
    const existingData = JSON.parse(localStorage.getItem(localStorageName) || '[]');
    existingData.push(data);
    localStorage.setItem(localStorageName, JSON.stringify(existingData));
  }
}
