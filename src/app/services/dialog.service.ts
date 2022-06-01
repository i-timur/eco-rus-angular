import { Injectable, TemplateRef } from '@angular/core';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';
import {ModalContainerComponent} from '@components/modal-containers/modal-container/modal-container.component';
import {ComponentType} from '@angular/cdk/overlay';
import {
  FromRightModalContainerComponent
} from '@components/modal-containers/from-right-modal-container/from-right-modal-container.component';
import {
  FromBottomModalContainerComponent
} from '@components/modal-containers/from-bottom-modal-container/from-bottom-modal-container.component';

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

  openFromRightDialog<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<FromRightModalContainerComponent> {
    return this.dialog.openFromComponent(component, {
      maxWidth: 'none',
      ...config,
      containerComponent: FromRightModalContainerComponent
    });
  }

  openFromBottom<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<FromBottomModalContainerComponent> {
    return this.dialog.openFromComponent(component, {
      maxWidth: 'none',
      position: {bottom: '0'},
      ...config,
      containerComponent: FromBottomModalContainerComponent
    });
  }
}
