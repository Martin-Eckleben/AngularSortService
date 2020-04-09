import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SortService {

  // usage:
  // array = this.sortservice.mergeSortObj(array, 'row_from', SortService.DIR_ASC)

  constructor() { }

  public static CMP_GREATER_THAN = 1
  public static CMP_LESS_THAN = -1
  public static CMP_EQUAL = 0
  public static DIR_ASC = 1
  public static DIR_DSC = 2

  sortAsc(node1, node2, attr) {
    var attr1 = node1[attr]
    var attr2 = node2[attr]

    if (attr1 < attr2) {
      return SortService.CMP_LESS_THAN
    } else if (attr1 === attr2) {
      return SortService.CMP_EQUAL
    }
    return SortService.CMP_GREATER_THAN
  }

  sortDsc(node1, node2, attr) {
    var attr1 = node1[attr]
    var attr2 = node2[attr]

    if (attr1 > attr2) {
      return SortService.CMP_LESS_THAN
    } else if (attr1 === attr2) {
      return SortService.CMP_EQUAL
    }
    return SortService.CMP_GREATER_THAN
  }

  mergeSortObj(arr, attr, dir) {
    if (arr.length === 0) {
      return []
    }

    if (typeof attr === 'undefined' || attr === null) {
      return []
    }

    if (typeof dir === 'undefined' || dir === null) {
      return []
    }

    var cmp = (dir === SortService.DIR_ASC) ? this.sortAsc : this.sortDsc

    var left = []
    var right = []
    var pivot = arr[0]
    for (var i = 1; i < arr.length; i++) {
      if (cmp(arr[i], pivot, attr) === SortService.CMP_GREATER_THAN) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }
    return this.mergeSortObj(left, attr, dir).concat(pivot, this.mergeSortObj(right, attr, dir))
  }

}
