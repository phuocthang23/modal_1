class Human {
    constructor(weight,fruit,gene){
        this.weight = weight;
        this.fruit = fruit;
        this.gene = gene;
    }

    //method 
    eatFruit(){
        return this.weight + 0.1;
    } 
    isfruit(){
        return true
    }
}