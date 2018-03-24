export class Recipe {
  public name: String;
  public discription: String;
  public imagePath: String;

  constructor(name: String, discription: String, imagePath: String) {
    this.name = name;
    this.discription = discription;
    this.imagePath = imagePath;
  }
}
