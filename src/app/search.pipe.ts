import { DataLists } from './data-lists';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dataList:DataLists[], searchTerm:string): DataLists[] {
    return dataList.filter((data)=> data.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

}
