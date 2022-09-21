/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'cd-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements AfterViewInit {
  private _autofocus = false;

  @Input() placeholder = 'Filter';
  @Input() value?: string;

  @Input()
  get autofocus() {
    return this._autofocus;
  }
  set autofocus(value: boolean) {
    this._autofocus = coerceBooleanProperty(value);
  }

  @Output() valueChange = new EventEmitter<string | undefined>();

  @ViewChild('inputRef', { read: ElementRef, static: true }) inputRef!: ElementRef;

  focusOnInput = () => {
    this.inputRef.nativeElement.focus();
  };

  ngAfterViewInit(): void {
    if (!this._autofocus) return;
    setTimeout(this.focusOnInput, 0);
  }

  updateValue(newValue: string | undefined) {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  onValueChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.updateValue(input.value);
  }

  onClearClick() {
    this.updateValue(undefined);
  }
}
