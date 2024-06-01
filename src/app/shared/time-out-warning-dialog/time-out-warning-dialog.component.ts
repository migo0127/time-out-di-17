import { Component, Inject, Renderer2, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ITimeoutWarningDialogData } from '../interface/dialog-data.interface';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AsyncPipe, DecimalPipe, NgIf } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-time-out-warning-dialog',
  standalone: true,
  imports: [ MatDialogModule, NgIf, AsyncPipe, DecimalPipe ],
  templateUrl: './time-out-warning-dialog.component.html',
  styleUrls: ['./time-out-warning-dialog.component.scss']
})
export class TimeOutWarningDialogComponent {

  afk: Signal<number>;
  idleTime: Signal<number>;

  constructor(
    private dialog: MatDialog,
    private renderer: Renderer2,
    private overlayContainer: OverlayContainer,
    @Inject(MAT_DIALOG_DATA) public data: ITimeoutWarningDialogData,
  ) {
    console.log('[TimeOutWarningComponent data]: ', this.data);
    const idleLimit: WritableSignal<number> = signal(this.data.content.idleLimit);
    this.idleTime = computed(() => (idleLimit() - this.data.content.idleWarning) / 60 );
    this.afk = <Signal<number>>toSignal(
      this.data.content.afk.pipe(map((afk: number) => idleLimit() - afk))
    );
    // effect(() => {
    //   console.log('content: ',this.content());
    // });
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
