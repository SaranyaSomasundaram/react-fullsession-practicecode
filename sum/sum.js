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
------------------* --------------------------------
//find that how many times the item repeated usig object:
var a = ["apple", "mango", "apple", "jackfruit", "mango", "apple"]

//using forEach
var result = [];
a.forEach((item) => {
    if (result[item]) {

        result[item] = result[item] + 1

    } else {

        result[item] = 1
    }

})
//output
result
{ apple: 3, mango: 2, jackfruit: 1 }

//using for loop:
var getresult = {}
for (var i = 0; i < a.length; i++) {
    var item = a[i]
    if (getresult[item]) {
        getresult[item] = getresult[item] + 1

    } else {

        getresult[item] = 1

    }


}
//output
getresult
{ apple: 3, mango: 2, jackfruit: 1 }

//using reducemethod

a.reduce((acc, item) => {
    if (acc[item]) {
        acc[item] = acc[item] + 1
    } else {
        acc[item] = 1

    }

    return acc;

}, {})

//output
{ apple: 3, mango: 2, jackfruit: 1 }

//using recursion:

var getdata = {}
function recursion(a, i = 0) {
    if (i < a.length) {

        if (getdata[a[i]]) {

            getdata[a[i]] = getdata[a[i]] + 1;
        } else {

            getdata[a[i]] = 1
        }
        i++;
        recursion(a, i)

    }
    return getdata
}

//output:
recursion(["apple", "mango", "apple", "jackfruit", "mango", "apple"])
{ apple: 3, mango: 2, jackfruit: 1 }

//duplicate counts in singel value:
var a = [1, 2, 3, 3, 2, 2, 4]

var result = {}
a.forEach((item) => {

    if (result[item]) {
        result[item] = result[item] + 1;

    } else {

        result[item] = 1


    }
})

//output
var m = result

result
{ 1: 1, 2: 3, 3: 2, 4: 1 }

var x=Object.values(m)
undefined
x
[1, 3, 2, 1]
var b=x.filter((item)=>
    {
     return item >1  
        
    })

b
[3, 2]
b.length
2