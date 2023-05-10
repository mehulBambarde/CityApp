export class PointOfInterest {
    id: string;
    name: string;
    description: string;
  
    constructor(id: string, cityId: string, name: string, description: string) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  