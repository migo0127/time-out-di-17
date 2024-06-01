import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModules } from './product-modules';
import { ProductProviders } from './product-providers';
import { HttpClient } from '@angular/common/http';
import { TimeoutService } from '@core/service/time-out.service';
import { ITimeoutConfig, ITimeoutConfigResponse } from '@core/interface/time-out-config.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ ...ProductModules ],
  providers: [ ...ProductProviders ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export default class ProductComponent {

  productForm: FormGroup;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  optionList: string[] = ['Option 1', 'Option 2', 'Option 3'];

  toppingsControl(): AbstractControl<string> | null {
    return this.productForm.get('toppings');
  }

  optionControl(): AbstractControl<string> | null {
    return this.productForm.get('option');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private timeoutService: TimeoutService,
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void {
    this.http.get<ITimeoutConfigResponse<ITimeoutConfig>>('../../assets/mock/timeout-config-mock.json').subscribe((req: ITimeoutConfigResponse<ITimeoutConfig>) => {
      const { idleLimit = null, idleWarning = null } = { ...req.returnData };
      this.timeoutService.setTimeoutConfig({idleLimit, idleWarning});
      this.timeoutService.startTimer();
    });
  }

  private initLoginForm(): void {
    this.productForm = this.fb.group({
      toppings: ['', [ Validators.required ]],
      option:  ['', [ Validators.required ]],
    })
  }

  goToPage(url: string): void {
    this.router.navigateByUrl(`pages/${url}`);
  }

  ngOnDestroy(): void {
    this.timeoutService.clearTimer();
  }

}
