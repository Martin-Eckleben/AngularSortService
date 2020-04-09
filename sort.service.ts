import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SortService {

  // usage:
  // array = this.sortservice.mergeSortObj(array, 'row_from', 'desc'|'asc')

  constructor() { }

  private static CMP_GREATER_THAN = 1
  private static CMP_LESS_THAN = -1
  private static CMP_EQUAL = 0

  private compare(a, b):number {

    if(a < b){
      return SortService.CMP_LESS_THAN
    }
    else if(a > b) {
      return SortService.CMP_GREATER_THAN
    }
    else if(a === b) {
      return SortService.CMP_EQUAL
    }

    // not comparable -> error
    console.error("Cant compare", a, " and ", b)
    return SortService.CMP_EQUAL
  }

  public mergeSortObj(arr=[], attr=null, dir:'desc'|'asc'='desc', compareFunction?:(a,b)=>number) {
    if (arr.length === 0) {
      return []
    }

    if (attr === null || dir === null) {
      return null
    }

    let cmp = typeof compareFunction != "undefined" ? compareFunction : this.compare 

    var left = []
    var right = []
    var pivot = arr[0]
    for (var i = 1; i < arr.length; i++) {

      if (cmp(arr[i][attr], pivot[attr]) === SortService.CMP_GREATER_THAN) {
        if(dir=='asc')
          right.push(arr[i])
        else
          left.push(arr[i])
      } else {
        if(dir=='asc')
          left.push(arr[i])
        else
          right.push(arr[i])
      }

    }
    return this.mergeSortObj(left, attr, dir).concat(pivot, this.mergeSortObj(right, attr, dir))
  }

}