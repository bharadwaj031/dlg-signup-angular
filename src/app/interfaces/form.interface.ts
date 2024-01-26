export interface IDynamicForm {
    title: string
    saveButton: string
    formControls: IFormControl[]
}

export interface IFormControl {
    name: string
    label: string
    value: string | null
    placeholder: string
    type: 'text' | 'textarea' | 'email' | 'radio' | 'select' | 'date'
    radioOptions?: string[]
    selectOptions?: Array<{id: number, value: string}>
    validators: IFormValidator[]

}

export interface IFormValidator {
    name: 'pattern' | 'required' | 'email' | 'minlength' | 'maxlength'
    pattern?: string
    message: string
    required?: boolean
    minlength?: string
    maxlength?: string
    email?: 'email'
}
