interface FormElements extends HTMLFormControlsCollection {
    gender: HTMLInputElement;
}
export interface YourFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}
