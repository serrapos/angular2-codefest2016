import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'filter'
})

export class FilterTextPipe implements PipeTransform{
    transform(items, args){
        console.log("items->"+items);
        console.log("args->"+args);
        
       
        if(!args || !args[0]){
            return items;
        }else if(items) {
            return items.filter(item => item.name.indexOf(args[0]) !== -1);
        }
         return items;
    }
}