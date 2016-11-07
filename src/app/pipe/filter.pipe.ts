import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'filter'
})

export class FilterTextPipe implements PipeTransform{
    transform(items: any, args: string[]): any {
        if(!args[0]) return items;   
        return items.filter(item => item.name.toLocaleLowerCase().indexOf(args) > -1);
    }
}