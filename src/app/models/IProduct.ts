export interface IProduct{
    pro_id: number;
    pro_name: string;
    pro_catagory: string;
    pro_quantity: number;
    pro_price: number;
    pro_rating: number;
    pro_images: string;
    pro_description : string;

}

export class Product implements IProduct{
    
    pro_id!: number;
    pro_name!: string;
    pro_catagory!: string;
    pro_quantity!: number;
    pro_price!: number;
    pro_rating!: number;
    pro_images!: string;
    pro_description!: string;

    getPro_id(): number {
        return this.pro_id;
    }

    getPro_name(): string {
        return this.pro_name;
    }

    getPro_catagory(): string {
        return this.pro_catagory;
    }

    getPro_quantity(): number {
        return this.pro_quantity;
    }

    getPro_price(): number {
        return this.pro_price;
    }

    getPro_rating(): number {
        return this.pro_rating;
    }

    getPro_images(): string {
        return this.pro_images;
    }

    getPro_description(): string {
        return this.pro_description;
    }

    toString() : string{
        return this.pro_id + ": "+ this.pro_name + ": " + this.pro_price;
    }
}