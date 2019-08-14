import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: "accordion",
  templateUrl: "./accordian.component.html",
  styleUrls: ["./accordian.component.scss"]
})
export class AccordionComponent implements OnInit {

  accordionExapanded = false;
  @ViewChild("cc", null) cardContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {}

  ngOnInit() {
    this.cardContent.el.transition = "max-height 500ms, padding 500ms";
    this.renderer.setElementStyle(
      this.cardContent.el,
      "webkitTransition",
      "max-height 500ms, padding 500ms"
    );
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "0px");
    } else {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "500px");
      this.renderer.setElementStyle(
        this.cardContent.el,
        "padding",
        "0px"
      );
    }
    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-up" ? "arrow-down" : "arrow-up";
  }
}