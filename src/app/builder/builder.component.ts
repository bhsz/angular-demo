import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  fieldSelections: string[] = [
    "Color",
    "Checkbox",
    "Radio",
    "Text",
    "Date",
    "File",
    "Password",
    "Month",
  ];

  selectedField: string = "Checkbox";

  fieldLabel: string = "";

  formFields: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectChange(selectedField: string) {
    this.selectedField = selectedField;
  }

  handleLabelChange(fieldLabel: string) {
    this.fieldLabel = fieldLabel;
  }

  handleAddField() {
    var newField = {
      fieldType: this.selectedField,
      fieldLabel: this.fieldLabel,
    };
    this.formFields.push(newField);
    // Clears textfield. 
    this.fieldLabel = "";
  }

}
