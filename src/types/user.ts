export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserLocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface UserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface UserDob {
  date: string;
  age: number;
}

export interface UserRegistered {
  date: string;
  age: number;
}

export interface UserId {
  name: string;
  value: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  gender: string;
  name: UserName;
  location: UserLocation;
  email: string;
  login: UserLogin;
  dob: UserDob;
  registered: UserRegistered;
  phone: string;
  cell: string;
  id: UserId;
  picture: UserPicture;
  nat: string;
}

export interface RandomUserResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
