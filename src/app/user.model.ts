export class userDetails {
  public name: String;
  public email: String;
  public username: string;
  public id: number;
  constructor(userDetails: any) {
    this.name = userDetails.name;
    this.email = userDetails.email;
    this.id = userDetails.id;
    this.username = userDetails.username;

  }
}
