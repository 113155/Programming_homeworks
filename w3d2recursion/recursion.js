// Recursion homework

// 1. 

const { reverse } = require("dns");
const { copyFileSync } = require("fs");

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

// Recursive function
function printTree(root){
    console.log(root.name + " : " + root.value);
    if (root.children && root.children.length>0){

        root.children.forEach(child => printTree(child));

    }
}

printTree(node1);


// Iterative solution
function printNamesIteratively(root){
    console.log(root.name+":"+root.value);
    if(root.children && root.children.length>0){
        root.children.forEach(function(child){
            console.log(child.name+":"+ child.value);
            if(child.children && child.children.length>0)
            child.children.forEach(function(grandChild){
                console.log(grandChild.name+" : "+grandChild.value);
            })
        })
    }
}
printNamesIteratively(node1);





// 2.
// Recursive solution in array
function printTreeArray(root){
    let arr = [];
    printTree(node1, arr);
    return arr;
}
function printTree(root,arr){
    arr.push(root.name + " : " + root.value);
    if (root.children && root.children.length>0){

        root.children.forEach(child => printTree(child, arr));

    }
}

console.log(printTreeArray(node1));

// Iterative solution in array
function printNamesIteratively(root){
    let arr = [];
    arr.push(root.name+" : "+root.value);
    if(root.children && root.children.length>0){
        root.children.forEach(function(child){
            arr.push(child.name+" : "+ child.value);
            if(child.children && child.children.length>0)
            child.children.forEach(function(grandChild){
               arr.push(grandChild.name+" : "+grandChild.value);
            })
        })
    }
    return arr;
}
console.log(printNamesIteratively(node1));

// Recursion Practice
function TreeNode(value) {
    this.value = value;
    this.descendants = [];
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendants
abe.descendants.push(homer);
homer.descendants.push(bart, lisa, maggie);

// 1.
function printNames(root) {
    console.log(root.value);
    if (root.descendants && root.descendants.length>0){
        root.descendants.forEach(child => printNames(child));
    }
}
printNames(abe);

 // 2.
function contains(tree, name){
    if (tree.value === name)
    return true;
    if (tree.descendants && tree.descendants.length>0 ){
        for (let item of tree.descendants){
            if (contains(item, name))
            return true;

        }
    }
    return false;
}
console.log(contains(abe, "Abee"));



// 3. 

function getMatchingTree(tree,name){
    if(tree.value===name){
        return tree;
    }
    if(tree.descendents && tree.descendents.length>0){
        for(let item of tree.descendents){
           let matchingNode = getMatchingTree(item,name);
           if(matchingNode){
                return matchingNode; 
           }
        }
    }
    return null;
}
console.log("getMatchingTree ",getMatchingTree(abe,"Abe"));




/* 4. Create a new constructor function ListNode (based on TreeNode below) and use 
it to generate a linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree. */

function ListNode(value,next){
    this.value = value;
    this.next = next;
}

let maggieNode = new ListNode(maggie.value, null);
let lisaNode = new ListNode(lisa.value, maggieNode);
let bartNode = new ListNode(bart.value, lisaNode);
let homerNode = new ListNode(homer.value, bartNode);
let abeNode =  new ListNode(abe.value, homerNode);

console.log(JSON.stringify(abeNode));

/* 5. Given a target value in the list, return the node that contains the target value or null if no match.
findListNode(list, “Bart”) */
function ListNode(value,next){
    this.value = value;
    this.next = next;
    
   
}

function findListNode(listNode, str){
    if (listNode.next === null){
        if(listNode.value === str){
            return listNode;
        }
    
    }
    else {

        if(listNode.value === str){
            return listNode;
        }
        return  findListNode(listNode.next, str);
    }
    return null;
}


let maggieNode = new ListNode(maggie.value, null);
let lisaNode = new ListNode("Lisa", maggieNode);
let bartNode = new ListNode(bart.value, lisaNode);
let homerNode = new ListNode(homer.value, bartNode);
let abeNode =  new ListNode(abe.value, homerNode);

console.log(findListNode(abeNode, "Lisa"));


console.log(JSON.stringify(list.findListNode(abeNode, "Lisa")));

console.log(list);


/* 6. Write a recursive function, treeModifier, that will take a tree and a modifier function as
parameters. Walk through the tree and apply the function to each node. The function should
apply the following operations to each node. treeModifier(tree, modiferFunc)
• allCaps(node) will change the value of a node to be all caps.
• addStars(node) will change the value to have *** in front and behind the node value.
• reverseNode(node) will reverse the string of the node value. Abe -> ebA
Call your recursive function with each of these modifier functions. */

function treeModifier(tree, modifierFunc) {
    tree.value = modifierFunc(tree.value);
    
    if (tree.descendants && tree.descendants.length > 0) {
        tree.descendants.forEach(item => treeModifier(item, modifierFunc));
    }
}

function modifierFunc(str) {
    
    str = allCaps(str);
    str = addStars(str);
    str = reverseNode(str);
    return str;
}

function allCaps(str) {
  
   return str.toUpperCase(str);
   
}

function addStars(str) {
   return "***" + str + "***";
    
}

function reverseNode(str) {
    let spl = str.split("");
    let rev = spl.reverse();
    let joinBack = rev.join("");
    return joinBack;

}
treeModifier(abe, modifierFunc);



/* 7. Write a recursive function, treeCollector(tree) that will walk the tree and collect the values of
each node into an array [“Abe”, “Homer”, “Bart”, “Lisa”, “Maggie”] for this tree. You may want
to use an accumulator variable that is external to the function to hold the values. */

function arrFunc(tree){
    let array = [];
    treeCollector(tree, array);
    return array;

}
function treeCollector(tree, array){
    array.push(tree.value);
    if (tree.descendants && tree.descendants.length>0){
        tree.descendants.forEach(item => treeCollector(item, array));
    }
}
console.log(arrFunc(abe));




/* 8. Write code to illustrate the use of the spread operator for the following use cases. Use the
Mocha test file, spreadTests.js, for functions using these.
a) Copy an array
b) Concatenate arrays into a new array
c) Concatenate an array and a new array element
d) Use an array as arguments
e) Use Math.min and Math.max
f) Combine several objects into a single object */

// a.
let a = [1,2,3,4];
let b = [...a];
console.log(b);


// b.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// c.
let arr3 = [1,2,3];
let mergedArray2 = [0, ...arr3];
console.log(mergedArray2);


// d.
function productEven(...more){
    let product = 1;
    for (let i = 0; i < more.length; i++){
        if (more[i] % 2 === 0){
            product *= more[i];
        }
    }
    return product;
}
console.log(productEven(1,2,3,4,5));


// e.
let arr4 = [8, 3, -9, -24, 5, 1];
console.log(Math.max(arr4));
console.log(Math.max(...arr4));
console.log(Math.min(arr4));
console.log(Math.min(...arr4));

// f.
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { x: 3, y: 4, z: 5 };
let obj3 = { i: 6, j: 7, k: 8 };
let combinedObject = {...obj1, ...obj2, ...obj3};
console.log(combinedObject);


/* 9. Write code to illustrate the use of the rest operator
a. In a destructurng assignment
b. In a function call */

// a. 

let [name1, name2, ...rest] = ["I", "like", "to", "study", "JavaScript.", "Do you?"];
console.log(name1,name2,rest);

// b. 
function callMe(a,b,c,d){
    console.log("Hello Dee");
}
callMe(...rest);
