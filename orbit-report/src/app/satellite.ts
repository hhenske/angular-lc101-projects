export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;

    }
    //this function gets the error "not a function" so ....
    shouldShowWarning() : boolean {
        //return this.type === 'Space Debris'
        //the above was given in a help session 
        if (this.type.toLowerCase() === 'space debris') {
            //something here needs to tell it use warning class
            return true;
            //text: "Instead of setting [class.ol-style] equal to a string, 
            //the changeColor variable is a boolean defined in the skill-set.component.ts file.
            // If changeColor is true, Angular adds the ol-style class of the tag. If changeColor 
            //is false, the class remains absent from the tag."
        }
    }
            
    

}
