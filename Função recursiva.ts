class ArithmeticProgression{
    initial_term: number;
    diff: number;
    constructor(i: number, diff: number){
        this.initial_term = i;
        this.diff = diff;
    }
    get_nth_term(n:number): number{
    if (n == 1){
            return this.initial_term; //Ao usar a estrutura recursiva com um numero elevado de chamadas, pode ocorrer o evento "Stack Overflow"//
        } else {                     //Onde ocorre um consumo muito alto de CPU e memória RAM//
            return this.get_nth_term(n-1) + this.diff;
        }
    }
}

let my_ap = new ArithmeticProgression(6, 10);
console.log("First term: ", my_ap.get_nth_term(1));
console.log("Fourth term: ", my_ap.get_nth_term(5161));

export{};