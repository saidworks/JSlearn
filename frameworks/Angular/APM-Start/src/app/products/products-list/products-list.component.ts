import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit,OnDestroy {

  pageTitle:String = "Products List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private ProductService: ProductService) {
  }

  ngOnInit(): void {
    this.sub = this.ProductService.getProducts().subscribe({
      next:response => {
        this.products = response ;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
  ngOnDestroy():void{
    this.sub.unsubscribe;
  }

  private _listFilter: string ='';
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts : IProduct[] = [];
  products: IProduct[] = [];

  // toggle image to hide or show
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  //filter by input word linked by ngModel
  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
  onRatingClicked(message: string) : void {
    this.pageTitle = "Product List" + message;
  }


}
