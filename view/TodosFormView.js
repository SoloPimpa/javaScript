class TodosFormView{
    el = null;
    #form = null;

    constructor(form) {
        this.#initForm();
        this.#form = form;
    }

    #initForm() {
        this.el = document.createElement('form');
        this.el.id = 'newTaskForm';

        this.divListEl = document.createElement('div')
        this.divListEl.className = 'list';
        this.el.append(this.divListEl);

        this.el.addEventListener('submit', (e) => {
            e.preventDefault();
            const newTodo = this.getFormValues(e.target);
            this.addTodo(newTodo);
            this.resetForm();
        })

        this.inputContainerEl = document.createElement('div');
        this.inputContainerEl.className = 'input-container';
        this.divListEl.append(this.inputContainerEl);


        this.inputEl = document.createElement('input');
        this.inputEl.className = 'u-full-width';
        this.inputEl.type = 'text';
        this.inputEl.id = 'taskNameInput';
        this.inputContainerEl.append(this.inputEl);

        this.submitBtnEl = document.createElement('input');
        this.submitBtnEl.className = 'u-full-width btn-save';
        this.submitBtnEl.type = 'submit';
        this.submitBtnEl.id = 'submitBtn';
        this.submitBtnEl.value = 'Save';
        this.divListEl.append(this.submitBtnEl);
    }

    getFormValues() {
        return {
            title: this.inputEl.value
        }
    };

    addTodo(todo) {
        this.#form.addTodo(todo);
    }

    resetForm(){
        this.inputEl.value = '';
    }
}