import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { HouseStatus } from "../enums/house-status.enum";

@Directive({
  selector: '[appColorsStatus]'
})
export class ColorStatusDirective implements OnInit {

  @Input() public houseStatus;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
      console.log(HouseStatus.FOR_RENT);
      if(this.houseStatus === HouseStatus.FOR_RENT) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
      }

      if(this.houseStatus === HouseStatus.SOLD) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
      }
  }
}
