export class Task {
    public Id: number;
    public Name: string = "";
    public CreationDate: Date = new Date();
    public Completed: boolean = false;

    constructor(data?: any){
        if(data){
            this.Id = data.id;
            this.Name = data.name;

            if(data.creationDate)
            this.CreationDate = new Date(data.creationDate);

            this.Completed = data.completed;
        }
    }
}
