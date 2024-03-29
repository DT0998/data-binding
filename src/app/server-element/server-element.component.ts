import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //none, native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // binding prop outside of this component
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  // view child ref element
  @ViewChild("heading", { static: true }) header: ElementRef;
  // view content child ref element
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  constructor() {
    console.log("constructor called.");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called.");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngOnInit called.");
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
    console.log(
      `Text Content of paragraph: ${this.paragraph.nativeElement.textContent}`
    );
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called.");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called.");
    console.log(
      `Text Content of paragraph: ${this.paragraph.nativeElement.textContent}`
    );
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called.");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called.");
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called.");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called.");
  }
}
