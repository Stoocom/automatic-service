import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      rating: {
        rate: 4.7,
        count: 500
      }
    },
  ];
  private nextId = 2;
  private categories: string[] = ["electronics", "jewelery", "men's clothing", "women's clothing"];

  findAll(): Product[] {
    return this.products;
  }

  findAllCategories(): string[] {
    return this.categories;
  }

  findOne(id: number): Product {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto): Product {
    const product: Product = {
      id: this.nextId++,
      ...createProductDto
    };
    this.products.push(product);
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    const currentProduct = { ...this.products[productIndex] }

    this.products[productIndex] = {
      ...currentProduct,
      title: updateProductDto.title ?? currentProduct.title,
      price: updateProductDto.price ?? currentProduct.price,
    };

    return this.products[productIndex];
  }

  remove(id: number) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    this.products.splice(productIndex, 1);
    return { success: true };
  }
}
