/**
 * @description This is signup form config file to map it to the dynamic form
 */


import { IDynamicForm } from "../interfaces/form.interface";

export const signupFormConfig: IDynamicForm = {
    title: 'Signup',
    saveButton: 'Submit',
    formControls: [
      {
        "name": "firstName",
        "label": "First name",
        "value": null,
        "placeholder": "",
        "type": "text",
        "validators": [
          {
            "name": "pattern",
            "pattern": "^[aA-zZ]{3,15}$",
            "message": "First name should be 3-15 characters"
          },
          {
            "name": "required",
            "required": true,
            "message": "First Name is Required"
          },
        ]
      },
      {
        "name": "lastName",
        "label": "Last name",
        "value": "",
        "placeholder": "",
        "type": "text",
        "validators": [
          {
            "name": "pattern",
            "pattern": "^[aA-zZ]{2,15}$",
            "message": "Last name should be 2-15 characters"
          },
          {
            "name": "required",
            "required": true,
            "message": "Last Name is Required"
          },
        ]
      },
      {
        "name": "email",
        "label": "Email",
        "value": "",
        "placeholder": "",
        "type": "email",
        "validators": [
          {
            "name": "email",
            "email": "email",
            "message": "Email is not valid"
          },
          {
            "name": "required",
            "required": true,
            "message": "Email is required"
          },
          {
            "name": "pattern",
            "pattern": "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$",
            "message": "Email is not valid"
          }
        ]
      },
    ]
  }