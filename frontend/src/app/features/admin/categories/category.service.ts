import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from './category.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/categories';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiUrl);
  }

  getCategoryById(id: string) {
    return this.http.get<CategoryModel>(`${this.apiUrl}/${id}`);
  }

  createCategory(categoryModel: CategoryModel) {
    return this.http.post<CategoryModel>(this.apiUrl, categoryModel);
  }

  updateCategory(category: CategoryModel) {
    return this.http.put<CategoryModel>(`${this.apiUrl}/${category.id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
