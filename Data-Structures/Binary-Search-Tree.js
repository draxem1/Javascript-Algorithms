
/********CREATES NODE**********/
function Node(value){
	this.value = value;
	this.left = null;
	this.rigth = null;
}

/********ROOT OF TREE*********/
function BinarySearchTree(){
	this.root = null;
}

/********PUSHES NODES ONTO TREE**********/
BinarySearchTree.prototype.push = function(val){
   var root = this.root;
   var currentNode = root;
   var newNode = new Node(val); 

   if(!root){
      this.root = new Node(val);
      return;
   }

   while(currentNode){

   		/****LESSER VALUES GO LEFT****/
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }

     /********HIGHRER VALUES GO RIGHT*****/
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

}

var tree = new BinarySearchTree();
tree.push(3);
tree.push(2);
tree.push(4);
tree.push(1);
tree.push(5);
console.log(tree);
