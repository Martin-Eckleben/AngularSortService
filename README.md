# AngularSortService

**DISCLAIMER:**  
Currently this is only a single not particularly well programmed method.  
It compares simply by js logical operators: <, >, ===.

**Sorting methods:**  
(currently only one)  
mergeSortObj(arr, attr:string, dir:'desc'|'asc')

**Example:**  
people = this.sortservice.mergeSortObj(people, 'age', 'desc')
