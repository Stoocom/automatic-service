export interface Product {
  title: string
  price: string
  description: string
  image: string
  category: string
}

export interface ProductType {
  id: number
  category: string
  description: string
  image: string
  price: number
  rating?: {
    rate: number
    count: number
  }
  title: string
}
