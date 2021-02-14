import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  // All of the opotions in dropdown list. 
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

  // Default selected field in dropdown list.
  selectedField: string = "Color";

  fieldLabel: string = "";

  // Fields will be added into this array.
  formFields: any[] = [];

  ngOnInit(): void {
  }

  // Updates value of selectedField when the value of dropdown list is changed.
  handleSelectChange(selectedField: string) {
    this.selectedField = selectedField;
  }

  // Updates value of fieldLabel when value of textfield is changed.
  handleLabelChange(fieldLabel: string) {
    this.fieldLabel = fieldLabel;
  }

  // Function is called when Add Field button is clicked.
  handleAddField() {
    if (this.fieldLabel !== "") {
      var newField = {
        fieldType: this.selectedField,
        fieldLabel: this.fieldLabel,
      };
      // Add new field to formFields.
      this.formFields.push(newField);
      // Clears textfield. 
      this.fieldLabel = "";
    }
  }

  // Clears the form.
  handleClearForm() {
    this.formFields = [];
  }

  handleDeleteField(i: number) {
    // Removes element at index i.
    this.formFields.splice(i, 1);
  }

}
