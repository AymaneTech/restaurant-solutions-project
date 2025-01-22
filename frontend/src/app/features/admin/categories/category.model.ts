export interface CategoryModel {
  id: number;
  name: string;
  itemCount: number;
  status: 'active' | 'inactive';
  description: string;
  imageUrl: string;
}
