function TodoApp(cap){
    this.capacity = cap;
    this.todos = [];

    //Function to add tasks to the todo list
    this.AddTask = (id,task)=>{
        if(this.todos.length < this.capacity){
            this.todos.push({
                TaskID : id,
                Task : task,
                status : false
            });
            console.log("Task ",id," added Successfully");
        }
        else{
            console.log("Task ",id," not added as capacity is full");
        }
    }

    //Function to remove tasks from the todo list
    this.RemoveTask = (id)=>{
        for(let i=0;i<this.todos.length;i++){
            if(this.todos[i].TaskID == id){
                this.todos.splice(i,1);
                console.log("Task ",id," Removed Successfully");
                return;
            }
        }
        console.log("Task ",id," not found");
    }


    //Function to update the task 
    this.UpdateTask = (id,text)=>{
        for(let i=0;i<this.todos.length;i++){
            if(this.todos[i].TaskID == id){
                this.todos[i].Task = text;
                console.log("Task ",id," Updated Successfully");
                return;
            }
        }
        console.log("Task ",id," not found");
    }

    //Function to Printing all the tasks in the todo list
    this.GetAllTasks = ()=>{
        console.log(this.todos);
    }

    //Function to mark tasks as complete
    this.UpdateTaskAsCompleted = (id)=>{
        for(let i=0;i<this.todos.length;i++){
            if(this.todos[i].TaskID == id){
                this.todos[i].status = true;
                console.log("Task ",id," Marked as Completed Successfully");
                return;
            }
        }
        console.log("Task ",id," not found");
    }
}

let App1 = new TodoApp(10);
for(let i = 0 ; i < 12 ; i++){
    App1.AddTask(i+1,"Task "+(i+1).toString());
}
App1.GetAllTasks();
for(let i = 7 ; i < 10 ; i++){
    App1.RemoveTask(i);
}
App1.GetAllTasks();
for(let i = 0 ; i < 5 ; i++){
    App1.UpdateTask(i+1,"Task Update "+(i+1).toString());
}
App1.GetAllTasks();
for(let i = 0 ; i < 5 ; i++){
    App1.UpdateTaskAsCompleted(i+1);
}
App1.GetAllTasks();