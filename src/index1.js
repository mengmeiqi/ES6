/**
 * Created by dell on 2017/10/25.
 */
let a = 5;
let add = (x,y) => x+y ;
console.log(add(5,6));

class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log("我的名字是"+this.name);
    }
}
let p1 = new People('zhangsan',18);
console.log(p1.name);
p1.showName();