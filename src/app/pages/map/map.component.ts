import { Component, ChangeDetectionStrategy } from '@angular/core';
import {CheckboxItem} from '@models/CheckboxItem';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {

  shops: CheckboxItem[] = [
    {
      value: 'ALL',
      label: 'Выбрать все'
    },
    {
      value: 'HM',
      label: 'H&M'
    },
    {
      value: 'PB',
      label: 'P&B'
    },
    {
      value: 'ADIDAS',
      label: 'Adidas'
    },
    {
      value: 'NIKE',
      label: 'Nike'
    },
    {
      value: 'REEBOK',
      label: 'Reebok'
    }
  ];
  materials: CheckboxItem[] = [
    {
      label: 'Выбрать все',
      value: 'ALL'
    },
    {
      label: 'Обувь',
      value: 'SHOES'
    },
    {
      label: 'Старая одежда',
      value: 'OLD_WEAR'
    },
    {
      label: 'Стекло',
      value: 'GLASS'
    },
    {
      label: 'Бумага',
      value: 'PAPER'
    },
    {
      label: 'Металл',
      value: 'METAL'
    },
    {
      label: 'Батарейка',
      value: 'ACCUM'
    }
  ];

  selectedShops: string[] = [];
  selectedMaterials: string[] = [];

  isShopsOpen: boolean = false;
  isMaterialsOpen: boolean = false;

  shopsTitle: string = 'Магазины';
  materialsTitle: string = 'Материалы';

  shopsTouched: boolean = false;
  materialsTouched: boolean = false;

  onShopsChange(values: string[]) {
    if (!this.shopsTouched) {
      this.shopsTouched = true;
    }

    if (!this.selectedShops.includes('ALL') && values.includes('ALL')) {
      this.shops =
        this.shops?.map((shop) => Object.assign({}, {
          ...shop,
          checked: true
        }));
    } else if (this.selectedShops.includes('ALL') && !values.includes('ALL')) {
      this.shops =
        this.shops?.map((shop) => Object.assign({}, {
          ...shop,
          checked: false
        }));
    } else if (values.includes('ALL') && (values.length !== this.selectedShops.length)) {
      const uncheckedValue = this.selectedShops.filter((value) => !values.includes(value))[0];
      this.shops =
        this.shops?.map((shop) => Object.assign({}, {
          ...shop,
          checked: shop.value === 'ALL' || shop.value === uncheckedValue ? false : true
        }));
    };

    this.selectedShops = this.shops.filter((shops) => shops.checked)
      .map((shops) => shops.value);

    this.shopsTitle = this.selectedShops.includes('ALL') ?
      `Выбрано ${this.selectedShops.length - 1} магазина` :
      `Выбрано ${this.selectedShops.length} магазина`
  }

  onMaterialsChange(values: string[]) {
    if (!this.materialsTouched) {
      this.materialsTouched = true;
    }

    if (!this.selectedMaterials.includes('ALL') && values.includes('ALL')) {
      this.materials =
        this.materials?.map((material) => Object.assign({}, {
          ...material,
          checked: true
        }));
    } else if (this.selectedMaterials.includes('ALL') && !values.includes('ALL')) {
      this.materials =
        this.materials?.map((material) => Object.assign({}, {
          ...material,
          checked: false
        }));
    } else if (values.includes('ALL') && (values.length !== this.selectedMaterials.length)) {
      const uncheckedValue = this.selectedMaterials.filter((value) => !values.includes(value))[0];
      this.materials =
        this.materials?.map((material) => Object.assign({}, {
          ...material,
          checked: material.value === 'ALL' || material.value === uncheckedValue ? false : true
        }));
    };

    this.selectedMaterials = this.materials.filter((material) => material.checked)
      .map((material) => material.value);

    this.materialsTitle = this.selectedMaterials.includes('ALL') ?
      `Выбрано ${this.selectedMaterials.length - 1} материалов` :
      `Выбрано ${this.selectedMaterials.length} материала`
  }
}
