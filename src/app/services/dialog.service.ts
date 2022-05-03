import { Injectable, TemplateRef } from '@angular/core';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';
import {ModalContainerComponent} from '@components/modals/modal-container/modal-container.component';
import {ComponentType} from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: Dialog) {}

  openFromTemplate<T>(template: TemplateRef<T>, config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
    return this.dialog.openFromTemplate(template, {
      maxWidth: 'none',
      ...config,
      containerComponent: ModalContainerComponent,
    });
  }

  openDialog<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
    return this.dialog.openFromComponent(component, {
      maxWidth: 'none',
      ...config,
      containerComponent: ModalContainerComponent,
    });
  }
}
