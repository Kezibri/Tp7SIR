export class Person {
	constructor(
    public id?: number,
    public firstName?: string,
    public familyName?: string,
    public mail?: string,
    public homes?: any,
    public friends?: Person[],
    public devices?: any,
  ) {
  }
}
