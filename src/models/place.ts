export type PlaceLocation = { lat: number; lng: number };

export type PlaceType = {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: PlaceLocation;
};

export default class Place implements PlaceType {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: PlaceLocation;

  constructor(title: string, imageUri: string, address: string, location: PlaceLocation) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat: 0.141241, lng: 127.121 }
    this.id = new Date().toString() + Math.random().toString();
  }
}
