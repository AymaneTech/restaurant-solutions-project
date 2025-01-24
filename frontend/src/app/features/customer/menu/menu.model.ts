export interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export  interface MenuCategory {
  id: number;
  name: string;
  recipes: Recipe[];
}

export interface OrderItem {
  recipe: Recipe;
  quantity: number;
}

export interface Order {
  items: OrderItem[];
}
