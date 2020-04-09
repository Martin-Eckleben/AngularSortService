# AngularSortService

# DISCLAIMER
Currently this is only a single not particularly well programmed method.  
If you dont provide a compare function it compares simply by js logical operators: <, >, ===.

# Sorting methods (currently only one)
mergesort an array of objects by an object property
```
mergeSortObj(arr=[], attr=null, dir:'desc'|'asc'='desc', compareFunction?:(a,b)=>number)
```

# Usage
Parameter dir is the sorting direction and is optional.  
A compareFunction can be provided if the standard logical operators >, <, === dont suffice.

# Examples
Simplest case:
```
people = this.sortservice.mergeSortObj(people, 'age')
```
With direction and compare function (in this example for moment dates):
```
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
