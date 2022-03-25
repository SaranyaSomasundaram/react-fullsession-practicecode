//addition using map
var a = [10, 20, 30, 40]
var b = a.map(function (item)=>
{

    return item + item
});
//output
[20, 40, 60, 80]

//recursion
var result = [];
function recursion(a, i = 0) {
    if (i < a.length) {
        a[i] += a[i]
        result.push(a[i])
        i++;
        recursion(a, i)
    }
    return result
}
//output
recursion([10, 20, 30, 40])
[20, 40, 60, 80] 
