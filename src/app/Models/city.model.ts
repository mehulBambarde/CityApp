import { PointOfInterest } from "./point-of-interest.model";

export class City {
    id: string;
    name: string;
    description: string;
    pointsOfInterest: PointOfInterest[];
    
    constructor(id: string, name: string, description: string, pointsOfInterest: PointOfInterest[]) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.pointsOfInterest = pointsOfInterest;
    }
  }
  