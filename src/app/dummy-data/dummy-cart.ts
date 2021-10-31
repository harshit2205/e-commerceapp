import { IProduct } from "../models/IProduct";

export class DummyCart{
    public static data: IProduct[] = 
    [{
      "pro_id": 4255,
      "pro_name": "General Purpose Trigger",
      "pro_catagory": "beverage",
      "pro_quantity": 65,
      "pro_price": 225,
      "pro_rating": 2,
      "pro_images": "http://dummyimage.com/213x100.png/5fa2dd/ffffff",
      "pro_description": "mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum"
    }, {
      "pro_id": 3862,
      "pro_name": "Juice - Cranberry, 341 Ml",
      "pro_catagory": "vegetable",
      "pro_quantity": 32,
      "pro_price": 697,
      "pro_rating": 2,
      "pro_images": "http://dummyimage.com/116x100.png/ff4444/ffffff",
      "pro_description": "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor"
    }, {
      "pro_id": 6294,
      "pro_name": "Black Currants",
      "pro_catagory": "beverage",
      "pro_quantity": 76,
      "pro_price": 287,
      "pro_rating": 5,
      "pro_images": "http://dummyimage.com/125x100.png/5fa2dd/ffffff",
      "pro_description": "sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu"
    }, {
      "pro_id": 8756,
      "pro_name": "Beef - Tender Tips",
      "pro_catagory": "vegetable",
      "pro_quantity": 40,
      "pro_price": 304,
      "pro_rating": 2,
      "pro_images": "http://dummyimage.com/124x100.png/cc0000/ffffff",
      "pro_description": "convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac"
    }];
}