class ArithmeticProgression{
    initial_term: number;
    diff: number;
    constructor(i: number, diff: number){
        this.initial_term = i;
        this.diff = diff;
    }
    get_nth_term(n:number): number{
        let term = this.initial_term;
        for (let i = 1; i < n; i++) { //Usando a estrutura de iteração nesse caso, o problema de Stack Overflow não ocorre
            term += this.diff;        //pois, ele utiliza um loop para poder fazer sua progressão//
        }
        return term;
    }
}

let my_ap = new ArithmeticProgression(6, 10);
console.log("First term: ", my_ap.get_nth_term(1));
console.log("Fourth term: ", my_ap.get_nth_term(5161));


