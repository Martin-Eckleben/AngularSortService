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

  private compare(node1, node2, attr, dir):number {
    var attr1 = node1[attr]
    var attr2 = node2[attr]

    if(dir=='desc' && attr1 < attr2){
      return SortService.CMP_LESS_THAN
    }
    else if(dir=='asc' && attr1 > attr2) {
      return SortService.CMP_GREATER_THAN
    }
    else if(attr1 === attr2) {
      return SortService.CMP_EQUAL
    }

    // not comparable -> error
    console.error("Cant compare", attr1, " and ", attr2)
    return SortService.CMP_EQUAL
  }

  public mergeSortObj(arr=[], attr=null, dir:'desc'|'asc') {
    if (arr.length === 0) {
      return []
    }

    if (attr === null || dir === null) {
      return null
    }

    var left = []
    var right = []
    var pivot = arr[0]
    for (var i = 1; i < arr.length; i++) {

      if (this.compare(arr[i], pivot, attr, dir) === SortService.CMP_GREATER_THAN) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }
    return this.mergeSortObj(left, attr, dir).concat(pivot, this.mergeSortObj(right, attr, dir))
  }

}