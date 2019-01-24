import {Component} from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})

export class CarComponent {
    /**
     * Расход топлива (литров/милю)
     */
    public expense = 0.25;

    /**
     * Марка автомобиля
     */
    public carMake = 'Lincoln';

    /**
     * Модель автомобиля
     */
    public carModel = 'Navigator';

    /**
     * Количество миль на спидометре
     */
    public mileage = 200;

    /**
     * Объем топливного бака
     */
    public fuelTankCapacity = 87;

    /**
     * Текущее количество топлива в баке
     */
    public fuel = 10;

    /**
     * Характеристики автомобиля
     */
    public specifications = ['Двигатель: 3.5 литра', 'Максимальная скорость: 250 км/ч'];

    /**
     * Произвести заправку топлива в бак автомобиля
     */
    public refuel(fuel) {
        fuel = Number(fuel);
        // Свободный обьем в топливном баке
        const freeFuelSpace = this.fuelTankCapacity - this.fuel;

        if (fuel <= 0) {
            return console.error('The amount of fuel must be greater than zero');
        }

        this.fuel +=  freeFuelSpace > fuel ? fuel : freeFuelSpace;
    }

    /**
     * Выполнить поездку на указанное растояние, с соответсвующим расходом топлива автомобилем
     */
    public drive(miles) {
        miles = Number(miles);

        if (miles <= 0) {
            return console.error('Number of miles must be greater than zero');
        }

        const possibleMiles = this.fuel / this.expense;

        this.mileage += possibleMiles <= miles ? possibleMiles : miles;
        this.fuel = possibleMiles <= miles ? 0 : this.fuel - miles * this.expense;

        if (!this.fuel) {
            return console.error('You need to refuel');
        }
    }
}
