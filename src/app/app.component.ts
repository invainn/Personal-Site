import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public isCollapsed: boolean = true;
  public mobileMode: boolean = false;
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  toggleCollapse(): void {
  	this.isCollapsed = !this.isCollapsed;
  }

  toggleOutsideCollapse(): void {
    if(!this.isCollapsed) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  toggleMobile(): void {
    this.mobileMode = !this.mobileMode;
  }
}
