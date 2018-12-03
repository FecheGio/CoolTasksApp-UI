var Task = /** @class */ (function () {
    function Task(data) {
        this.Name = "";
        this.CreationDate = new Date();
        this.Completed = false;
        if (data) {
            this.Id = data.id;
            this.Name = data.name;
            if (data.creationDate)
                this.CreationDate = new Date(data.creationDate);
            this.Completed = data.completed;
        }
    }
    return Task;
}());
export { Task };
//# sourceMappingURL=task.js.map