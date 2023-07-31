function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    const car1=new car("Toyoto","corola",2022);
    const car2=new car("Henda","Civic",2021);
    console.log(car1.make);
    console.log(car1.model);
    console.log(car1.year);
    console.log(car2.make);
    console.log(car2.model);
    console.log(car2.year);
}