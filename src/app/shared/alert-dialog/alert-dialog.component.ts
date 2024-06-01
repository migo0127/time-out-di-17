import { Component, Inject, Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IDialogData } from '../interface/dialog-data.interface';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [ MatDialogModule, NgIf ],
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  isHasContent: boolean;

  constructor(
    private dialog: MatDialog,
    private renderer: Renderer2,
    private overlayContainer: OverlayContainer,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
  ) {
    console.log('[AlertDialogComponent data]: ', this.data);
    this.isHasContent = !!this.data.content;
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // 可能會有多個 dialog 跳出疊加狀態，因此需要保持最後跳出的 dialog 在最上層
    if(this.dialog.openDialogs.length > 1){
      const containers: HTMLCollection = this.overlayContainer.getContainerElement().children;
      const lastContainer: Element = containers[containers.length - 1];
      if(lastContainer){
        const cdkContainer: HTMLDivElement = <HTMLDivElement>lastContainer.closest('.cdk-overlay-container');
        const idx: number = 1000 + containers.length;
        this.renderer.setStyle(cdkContainer, 'z-index', idx);
      }
    }
  }

}
