function Product(
  _id,
  _name,
  _frontCam,
  _backCam,
  _screen,
  _price,
  img,
  _desc,
  _type
) {
  this.id = _id;
  this.name = _name;
  this.frontCamera = _frontCam;
  this.backCamera = _backCam;
  this.screen = _screen;
  this.price = _price;
  this.img = img;
  this.desc = _desc;
  this.type = _type;
}
