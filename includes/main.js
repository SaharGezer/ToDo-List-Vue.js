const app = new Vue({
    el: '#app',
    data: {
        title : 'To Do List',
        newTodo: '',
        todos: [],
    },
    methods: {
        addTodo(){
            if(this.newTodo != '')
            {
                this.todos.push({
                    title: this.newTodo,
                    done: false
                });
            }
            else{
                alert("Empty Input - Try Again")
            }
            this.newTodo ='';
        },
        removeTodo(todo){
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex,1);
        },
        allDone(){
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }
});