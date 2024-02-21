// A Vector Type

class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus (otherVec){
         return new Vec (this.x + otherVec.x , this.y + otherVec.y)

    };
    minus (otherVec){
        return new Vec(this.x - otherVec.x, this.y -otherVec.y)

    };
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y )

    };
    
}
let Vector1 = new Vec(5,4)
let Vector2 = new Vec(2,3)
//console.log(Vector1.plus(Vector2))

//console.log(Vector2.length)

//Group

class Group {
    constructor() {
        this.members = [];

    }
    add (value){
        if (!this.has(value)){
            this.members.push(value)
        }

    }
    delete (value){
        this.members = this.members.filter(element => element !== value);

    }
    has(value){
        return this.members.includes(value)

    }
    static from (iterableObject){
        let group = new Group;
        for (let value of iterableObject){
            group.add(value)
        }
        return group;
    }

// Question 3 -Iterable Groups starts here, and its part of Question 2
[Symbol.iterator](){
    return new GroupIterator(this);
}
}
class GroupIterator{
    constructor(group){
        this.group = group;
        this.position = 0;
    }
    next(){
        if(this.position >= this.group.members.length){
            return {done: true}
        }else {
            let result = {value: this.group.members[this.position], done : false};
            this.position++;
            return result;
        }
    }
}

for (let value of Group.from(['a', 'b', 'c'])){
    console.log(value);
}









// Borrowing a Method

let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));