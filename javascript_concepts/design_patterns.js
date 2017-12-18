/*
    The constructor pattern
 */

//Three ways to create objects :

(function() {
    let x = {};
    let y = Object.create(Object.prototype);
    let z = new Object();
    x.a = 10;
    y.a = 20;
    z.a = 30;
})();

(function() {
    function Person(name, city) {
        this.name = name;
        this.city = city;
    }
    let p = new Person('Bharath', 'Bangalore');
    console.log("Person object = " + JSON.stringify(p));
})();

/*
    The module pattern
 */

var modulePattern = (function() {
    var counter = 0; //Private member

    //Private method
    var changeCounterValue = function(val) {
        counter = val;
        return counter;
    };

    return {
        increment: function() {
            return changeCounterValue(++counter);
        },

        decrement: function() {
            changeCounterValue(--counter);
        },

        resetCounter: function() {
            counter = 0;
        }
    }
})();

modulePattern.increment();
modulePattern.increment();
console.log('value after incrementing thrice = ' + modulePattern.increment());

/*
    Singleton pattern
 */

var SingletonClass = (function() {
    var instance = undefined;

    function init() {
        var counter = 0;
        return {
            increment() {
                return ++counter;
            },
            reset() {
                counter = 0;
            }
        }
    }

    return {
        getInstance() {
            if (instance !== undefined) {
                return instance
            } else {
                instance = init();
                return instance;
            }
        }
    }
})();

let singleObj = SingletonClass.getInstance();
singleObj.increment();
singleObj.increment();
console.log('Singleton pattern, increment called thrice = ' + singleObj.increment());



/*
    Factory pattern
 */

function Car(options) {
    this.color = options.color;
    this.wheels = options.wheels;
    this.gastype = options.gastype;
}

function Truck(options) {
    this.color = options.color;
    this.wheels = options.wheels;
    this.gastype = options.gastype;
}

function VehicleFactory() {

    VehicleFactory.prototype.vehicleClass = Car; // This is the default vehicle class;
    VehicleFactory.prototype.create = function(model) {
        switch(model.vehicleClass) {
            case 'car': this.vehicleClass = Car;
                        break;
            case 'truck':   this.vehicleClass = Truck;
                            break;
        }

        return new this.vehicleClass(model);
    }
}

let factory = new VehicleFactory();

let fordFiesta = factory.create({color: 'Black', wheels: '4', vehicleClass: 'car', gastype: 'diesel'});
let eicherTruck = factory.create({color: 'Red', wheels: '6', vehicleClass: 'truck', gastype: 'diesel'});

let isFiestaCar = fordFiesta instanceof Car;
let isEicherCar = eicherTruck instanceof Car;
let isEicherTruck = eicherTruck instanceof Truck;
console.log('Is ford fiesta a type of car = ' + isFiestaCar);
console.log('Is eicher a type of car = ' + isEicherCar);
console.log('Is eicher a type of truck = ' + isEicherTruck);





/*
    Prototype pattern
 */

/*
    Observable Pattern
 */

function Observable(subscribe) {
    this.subscribe = subscribe;
}

Observable.from = (values) => {
    return new Observable((observer) => {
        values.forEach(val => observer.next(val));
        observer.complete();
        return {
            unsubscribe() {
                console.log('unsubscribed');
            }
        }
    });
};

let observer = {
    next(val){
        console.log('Value = ' + val);
    },
    complete(){
        console.log('Execution completed');
    },
};

let x = Observable.from([1, 2, 3, 4]);
let sub = x.subscribe(observer);
sub.unsubscribe();

let y = new Observable(function(observer) {
    let counter = 0;
    let intId = setInterval(() => {
        observer.next(++counter);
        if (counter === 5) {
            clearInterval(intId);
            observer.complete();
        }
    }, 1000)  ;
});

y.subscribe({next(val) {console.log('Value = ' + val)}, complete() {console.log('Async Operation completed')}});
y.subscribe({next(val) {console.log('Value new= ' + val)}, complete() {console.log('Async new Operation completed')}});




