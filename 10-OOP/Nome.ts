export default class Name {
  private name: string
  constructor(name: string){
    if(name.length < 3){
      throw new Error('Name is too short')
    }
    this.name = name
  }
}