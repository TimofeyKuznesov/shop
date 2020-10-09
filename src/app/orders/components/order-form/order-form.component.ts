import { isArray } from 'util';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomValidators } from 'src/app/core/validators';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {
  fields = [{
    label: 'Fist name',
    name: 'name'
  },
  {
    label: 'Surname',
    name: 'surname'
  },
  {
    label: 'Email',
    name: 'email'
  },
  {
    label: 'Phone',
    name: 'phones',
    isArray: true
  },
  {
    label: 'Pickup',
    name: 'pickup',
    type: 'checkbox',
    class: 'form-check-input'
  },
  {
    label: 'Address',
    name: 'address',
    type: 'textarea'
  }
];
  orderFormGroup: FormGroup;
  validationMessage = {
    name: '',
    email: ''
  };

  private unsubscribe: Subject<void> = new Subject();
  private validationMessagesMap = {
    name: {
      required: 'Please enter your name.',
      minlength: 'Name must be more that 5 symbols'
    },
    email: {
      required: 'Please enter your email.',
      emailMatch: 'Not correct email'
    }
  };

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.buildForm();
    this.watchValueChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getFieldArray(name: string) {
    return this.orderFormGroup.get(name) as FormArray;
  }
  getField(name: string) {
    return this.orderFormGroup.get(name);
  }

  onAddRow(name: string) {
    this.getFieldArray(name).push(this.fb.control('', [Validators.required]));
  }

  onRemoveRow(name: string, i: number) {
    this.getFieldArray(name).removeAt(i);
  }

  onBlur(event: FocusEvent) {
    const name = (event.target as Element).id;
    if (['name', 'email'].includes(name)) {
      this.setValidationMessage(name);
    }
  }

  getError(name: string) {
    return this.validationMessage[name];
  }

  private buildForm() {
    this.orderFormGroup = this.fb.group({
      name: ['', [Validators.required, CustomValidators.minLengthValidator(5)]],
      surname: [''],
      email: ['', {validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      phones: this.fb.array([new FormControl('')]),
      pickup: [''],
      address: ['']
    });
  }

  private watchValueChanges() {
    this.getField('name').valueChanges
        .pipe(takeUntil(this.unsubscribe))
        .subscribe();
  }

  private setValidationMessage(controlName: string) {
    const c = this.getField(controlName);
    for (const field in this.validationMessage) {
      if (!this.getField(field).errors) {
        this.validationMessage[field] = '';
      }
    }

    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage[controlName] = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }
}
