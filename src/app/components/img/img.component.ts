import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = "";
  @Output() loaded =  new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  counter = 0;

  constructor() {
    // Before render
    // No async -- once time 
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    // Before and during render
    // Changes inputs -- multiple times
    console.log('ngOnchanges', 'imgValue =>', this.img);
  }
  
  ngOnInit(): void {
    // Before render
    // Async - fetch API -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    window.setInterval(()=> {
      this.counter += 1;
      console.log('run counter');
    }, 1000);
  }

  ngAfterViewInit() {
    // After render
    // Handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // Delete
    console.log('ngOnDestroy');
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('load hijo')
    this.loaded.emit(this.img);
  }

}
