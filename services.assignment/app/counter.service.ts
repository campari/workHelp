
export class CounterService {
    counters = {'active': 0, 'inactive': 0};

    addCounter(type){
        if(type == 'active'){
            this.counters.active++;     
        }else{
            this.counters.inactive++;
        }   
    }

}