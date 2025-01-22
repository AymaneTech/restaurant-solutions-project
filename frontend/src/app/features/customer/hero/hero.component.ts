import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  standalone: true,
})
export class HeroComponent implements OnInit, OnDestroy{
  currentImageIndex1 = 0;
  currentImageIndex2 = 0;
  currentImageIndex3 = 0;

  images1 = ['https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg'];
  images2 = ['https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg'];
  images3 = ['https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg', 'https://i.pinimg.com/736x/e2/dd/46/e2dd4664bc2fab6e650ed71521e62841.jpg'];

  private intervals: number[] = [];

  ngOnInit() {
    this.intervals.push(
      window.setInterval(() => {
        this.currentImageIndex1 = (this.currentImageIndex1 + 1) % this.images1.length;
      }, 3000)
    );

    this.intervals.push(
      window.setInterval(() => {
        this.currentImageIndex2 = (this.currentImageIndex2 + 1) % this.images2.length;
      }, 3000)
    );

    this.intervals.push(
      window.setInterval(() => {
        this.currentImageIndex3 = (this.currentImageIndex3 + 1) % this.images3.length;
      }, 3000)
    );
  }

  ngOnDestroy() {
    this.intervals.forEach(interval => window.clearInterval(interval));
  }

}
