export class task {
  public constructor(
    public Id: string,
    public Title: string,
    public Status: string

  ) {}

}

export class TaskResolved{
  public constructor(public data:any[],public errormsg:string ){}
}
