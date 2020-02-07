export class ProfileModel {
  public user: string;
  public avatar: string;
  public email: string;
  public gender: string;
  public bio: string;

  constructor(m: ProfileDto) {
    this.user = m.user;
    this.avatar = m.avatar;
    this.email = m.email;
    this.gender = m.gender;
    this.bio = m.bio;
  }
}

export interface ProfileDto {
  user: string;
  avatar: string;
  email: string;
  gender: string;
  bio: string;
}
