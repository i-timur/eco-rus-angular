import {Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef} from '@angular/core';
import {CheckboxItem} from '@models/CheckboxItem';
import {HttpClient} from '@angular/common/http';
import {SexDto} from '../../../dto/sexDto';
import {ItemCategoryDto} from '../../../dto/ItemCategoryDto';

@Component({
  selector: 'app-mobile-filters',
  templateUrl: './mobile-filters.component.html',
  styleUrls: ['./mobile-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileFiltersComponent implements OnInit {
  order: 'popular' | 'price' | 'date' = 'popular';

  sexes: CheckboxItem[] = [];
  itemCategories: CheckboxItem[] = [];
  brands: CheckboxItem[] = [
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

  selectedItemCategories: string[] = [];
  selectedBrands: string[] = [];


  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.http.get<SexDto[]>('handbooks/sexes')
      .subscribe((sexes) => {
        this.sexes = sexes.map((sex) => Object.assign({}, {
          value: sex.name,
          label: sex.localizedName
        }));
        this.cdr.markForCheck();
      });
    this.http.get<ItemCategoryDto[]>('handbooks/item-categories')
      .subscribe((itemCategories) => {
        this.itemCategories = itemCategories.map((itemCategory) => Object.assign({}, {
          value: itemCategory.name,
          label: itemCategory.localizedName
        }));
        this.itemCategories.unshift({
          value: 'ALL',
          label: 'Выбрать все'
        });
        this.cdr.markForCheck();
      });
  }

  onItemCategoriesChange(values: string[]) {
    if (!this.selectedItemCategories.includes('ALL') && values.includes('ALL')) {
      this.itemCategories =
        this.itemCategories?.map((itemCategory) => Object.assign({}, {
          ...itemCategory,
          checked: true
        }));
    } else if (this.selectedItemCategories.includes('ALL') && !values.includes('ALL')) {
      this.itemCategories =
        this.itemCategories?.map((itemCategory) => Object.assign({}, {
          ...itemCategory,
          checked: false
        }));
    } else if (values.includes('ALL') && (values.length !== this.selectedItemCategories.length)) {
      const uncheckedValue = this.selectedItemCategories.filter((value) => !values.includes(value))[0];
      this.itemCategories =
        this.itemCategories?.map((itemCategory) => Object.assign({}, {
          ...itemCategory,
          checked: itemCategory.value === 'ALL' || itemCategory.value === uncheckedValue ? false : true
        }));
    };

    this.selectedItemCategories = this.itemCategories.filter((itemCategory) => itemCategory.checked)
      .map((itemCategory) => itemCategory.value);
  }

  onBrandChange(values: string[]) {
    if (!this.selectedBrands.includes('ALL') && values.includes('ALL')) {
      this.brands =
        this.brands?.map((brand) => Object.assign({}, {
          ...brand,
          checked: true
        }));
    } else if (this.selectedBrands.includes('ALL') && !values.includes('ALL')) {
      this.brands =
        this.brands?.map((brand) => Object.assign({}, {
          ...brand,
          checked: false
        }));
    } else if (values.includes('ALL') && (values.length !== this.selectedBrands.length)) {
      const uncheckedValue = this.selectedBrands.filter((value) => !values.includes(value))[0];
      this.brands =
        this.brands?.map((brand) => Object.assign({}, {
          ...brand,
          checked: brand.value === 'ALL' || brand.value === uncheckedValue ? false : true
        }));
    };

    this.selectedBrands = this.brands.filter((brand) => brand.checked)
      .map((brand) => brand.value);
  }

  resetFilter() {
    this.sexes = this.sexes.map((sex) => Object.assign({}, {
      ...sex,
      checked: false
    }));
    this.itemCategories = this.itemCategories.map((itemCategory) => Object.assign({}, {
      ...itemCategory,
      checked: false
    }));
    this.brands = this.brands.map((brand) => Object.assign({}, {
      ...brand,
      checked: false
    }));

    this.selectedItemCategories = [];
    this.selectedBrands = [];
  }
}
