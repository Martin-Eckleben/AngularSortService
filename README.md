# AngularSortService

**DISCLAIMER:**  
Currently this is only a single not particularly well programmed method.  
It compares simply by js logical operators: <, >, ===.

**Sorting methods:**  
(currently only one)  

// this sorts an array of objects by one property
mergeSortObj(arr=[], attr=null, dir:'desc'|'asc'='desc', compareFunction?:(a,b)=>number)

**Examples:**  
```
people = this.sortservice.mergeSortObj(people, 'age')

timestamps = this.sortService.mergeSortObj(
  timestamps,
  'created_at',
  'desc',
  (a:Moment,b:Moment)=>{
    if(a.isAfter(b))
      return 1
    if(a.isBefore(b))
      return -1
    else
      return 0
  }
)
```
