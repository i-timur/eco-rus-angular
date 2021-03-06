import { Component, ChangeDetectionStrategy } from '@angular/core';
import {CheckboxItem} from '@models/CheckboxItem';

@Component({
  selector: 'app-mobile-map-filters',
  templateUrl: './mobile-map-filters.component.html',
  styleUrls: ['./mobile-map-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileMapFiltersComponent {

  shops: CheckboxItem[] = [
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

  onMaterialChange(values: string[]) {
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
  }

  resetFilter() {
    this.shops = this.shops.map((shop) => Object.assign({}, {
      ...shop,
      checked: false
    }));
    this.materials = this.materials.map((material) => Object.assign({}, {
      ...material,
      checked: false
    }));

    this.selectedShops = [];
    this.selectedMaterials = [];
  }
}
