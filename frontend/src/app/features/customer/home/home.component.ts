import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './home.component.html',
  standalone: true,
})
export class HomeComponent implements OnInit, OnDestroy {
  currentImageIndex = 0;

  images1 = ['https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg'];
  images2 = ['https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg'];
  images3 = ['https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg'];

  private intervals: number[] = [];

  ngOnInit() {
    this.setInterval(this.currentImageIndex, this.images1.length);
    this.setInterval(this.currentImageIndex, this.images2.length);
    this.setInterval(this.currentImageIndex, this.images3.length);
  }

  setInterval(imageIndex: number, imageLength: number) {
    this.intervals.push(
      window.setInterval(() => {
        imageIndex = (imageIndex + 1) % imageLength;
      }, 3000)
    );
  }

  ngOnDestroy() {
    this.intervals.forEach(interval => window.clearInterval(interval));
  }

}
