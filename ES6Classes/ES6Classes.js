
/* Create a class that represents a vehicle. When coding your class ensure that the value of
direction is only between 0-359 (representing a
compass) in any instance.
Create two subclasses. Create a bus subclass that
includes a property for numberOfSeats and creates
an ambulance subclass that has methods to turn the
siren on and off.  */


class Vehicle {
    constructor(color, direction, currentSpeed, topSpeed) {
        this._color = color;
        this._direction = direction;
        this._currentSpeed = currentSpeed;
        this._topSpeed = topSpeed;
        this._engineStarted = false;

    }


    //Methods
    turnOn() {
        this._engineStarted = true;
        this._currentSpeed = 0;
        const status = "Ready";
        return status;
    }


    status() {
        const vehicle_status = `${this._color}, ${this._engineStarted}, ${this._direction}, ${this._currentSpeed}, ${this._topSpeed}`;
        return vehicle_status;
    }


    turnOff() {
        if (this._currentSpeed > 0) {
            const status = "Please don't stop your Engine while you driving. First reduce the speed to 0";
            return status;
        } else {
            this._engineStarted = false;
            const status = "Engine Turned Off";
            return status;
        }
    }


    accelerate() {
        this._topSpeed = this._currentSpeed;
        if (this._engineStarted == false) {
            const status = "Engine Off. Please first press the start button";
            return status;
        } else {
            this._topSpeed = this._currentSpeed;
            this._currentSpeed += 10;
            if (this._topSpeed == 130) {
                this._currentSpeed = this._topSpeed;
                const status = `Your Speed is ${this._topSpeed}. Top speed reached`;
                return status;
            } else {
                const status = `Accelerating. Speed is now ${this._currentSpeed}.`;
                return status;
            }
        }


    }


    brake() {

        if (this._engineStarted == false) {
            const status = "Engine Off. Please first press the start button";
            return status;
        } else if (this._currentSpeed == 0) {
            const status = `Your current speed is ${this._currentSpeed} Km/h, braking isn't necessary`;
            return status;
        } else {
            this._currentSpeed = this._currentSpeed - 10;
            const status = `Braking. Speed is now ${this._currentSpeed}.`;
            return status;
        }
    }

    /*I saw this as a clock, 12 O'Clock are 0°, meaning driving forward straight, right is between 1 and 179° and left 181-359°, not sure if i get the exactly idea, but is the best i could do it :D, i tried several times different aproaches, but nothing worked as intended. If is completely wrong, please help me with some advices :D */
    turnRight() {
        for (this._direction = 1; this._direction <= 179; this._direction++) {
            const status = "You turned Right";
            return status;
        }


    }
    turnLeft() {
        for (this._direction = 359; this._direction >= 181; this._direction--) {
            const status = "You turned Left";
            return status;
        }

    }

}


//Subclass Bus 
class Bus extends Vehicle {
    constructor(color, numberOfSeats, direction, currentSpeed, topSpeed) {
        super(color, numberOfSeats, direction, currentSpeed, topSpeed);
        this._numbersOfSeats = numberOfSeats;
    }
    status() {
        const bus_status = `${this._color}, ${this._numbersOfSeats}`;
        return bus_status; 
    }
}

//Subclass Ambulance
class Ambulance extends Vehicle {
    constructor(color, sirenOn, sirenOff) {
        super(color, sirenOn, sirenOff);
        this._sirenOn = sirenOn;
        this._sirenOff = sirenOff;
    }

    status() {
        this._sirenOn = false;
        const ambulance_status = `${this._color}, ${this._sirenOn}`;
        return ambulance_status;
    }

    sirenOn() {
        if(this._engineStarted){
            this._sirenOn = true;
            const ambulance_status = "Emergency Sirens On";
            return ambulance_status;
        }else{
            const ambulance_status = "Engine Off. Please first press the start button";
            return ambulance_status;
        }   
    }

    sirenOff(){
        if(this._sirenOn){
            this._sirenOn = false;
            const ambulance_status = "Sirens Turned Off";
            return ambulance_status;
        }else{
            const ambulance_status = "The Sirens are already Off";
            return ambulance_status;
        }
    }
}




