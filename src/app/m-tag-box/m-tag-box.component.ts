import { LiveAnnouncer } from '@angular/cdk/a11y';
import { NgClass } from '@angular/common';
import { booleanAttribute, Component, computed, inject, Input, model, numberAttribute, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'm-tag-box',
  standalone: true,
  imports: [NgClass, MatFormFieldModule, MatChipsModule, MatIconModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule],
  templateUrl: './m-tag-box.component.html',
  styleUrl: './m-tag-box.component.scss'
})
export class MTagBoxComponent {

  tagCtrl!: FormControl<string[]>;
  @Input({ required: true }) controlName!: string;
  @Input() label!: string;
  @Input({ transform: numberAttribute }) maxChip?: number;
  @Input() dataSource: string[] = [];
  @Input({ transform: booleanAttribute }) required: boolean = true;
  tags: WritableSignal<string[]> = signal([]);
  readonly searchInput = model('');
  readonly filteredOptions = computed(() => {
    const input = this.searchInput().toLowerCase();
    return input
      ? this.dataSource.filter(d => d.toLowerCase().includes(input))
      : this.dataSource.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  constructor(private _parent: FormGroupDirective) {
    
  }
  
  ngOnInit() {
    if (!this.label) this.label = this.controlName;
    this.tagCtrl = this._parent.control.get(this.controlName) as FormControl<string[]>;
    this.tagCtrl.valueChanges.subscribe(v => this.tags.set(v));
    if(this.maxChip) this.tagCtrl.addValidators(this.maxValidator(this.maxChip));
  }

  inputEnd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    const tag = this.dataSource.find(d => d.toLocaleLowerCase() === value.toLowerCase());
    if(tag) this.toggleTag(tag);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    this.toggleTag(value);
    event.option.deselect();
  }

  toggleTag(value: string) {
    this.isTagSelected(value) ? this.remove(value) : this.add(value);
    this.searchInput.set('');
  }
  
  isTagSelected(tag: string): boolean {
    return this.tags().includes(tag);
  }

  add(tag: string) {
    this.tagCtrl.patchValue([...this.tags(), tag]);
  }

  remove(tag: string) {
    const x = this.tags().filter(t => t !== tag);
    this.tagCtrl.patchValue(x);
  }

  maxValidator(max: number): ValidatorFn {
    return (control: AbstractControl):
      ValidationErrors | null => {
      return (control.value && control.value.length > max)
        ? { max: true } : null;
    }
  };
}
