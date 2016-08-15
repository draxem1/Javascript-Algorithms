
/*****CREATES A NODE*********/
function Node(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

/***********THE TREE*********/
function BinarySearchTree(){
	this.root = null;


/**************ADDS NODES************/
	this.add = function(value){
		 var root = this.root;

   		if(!root){
      		this.root = new Node(value);
      		return;
   		}

   		var currentNode = root;
   		var newNode = new Node(value); 

   		while(currentNode){

   			/******MOVES HIGHER VALUES LEFT******/
      		if(value < currentNode.value){

          		if(!currentNode.left){
             		currentNode.left = newNode;
            	 break;
         		 }
          		else{
             		currentNode = currentNode.left;
        		}
    		 }

    		 /******MOVES LESSER VALUES RIGHt*******/
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
	};


/**************FINDS THE MIN******************/
	this.min = function(){
		var node = this.root;
		var low;

		if(!node.left){
			low = node.value;
		}

		while(node){
           
      if(node.left){
       	node=node.left;
				low = node.value;
			}
			else{
				break;
			}
		}
		console.log(low);
	};

/***************FINDS THE MAX***************/
	this.max = function(){
		var node = this.root;
		var hi;

		if(!node.right){
			hi = node.value;
		}

		while(node){

			if(node.right){
				node = node.right;
				hi = node.value;
			}
			else{
				break;
			}
		}
		console.log(hi);
	};

/************SEARCHES TREE FOR NODE**********/
	this.search = function(value){
		var node = this.root;
		var location;
         

		while(node){
   				
   				if(value < node.value){
   					node = node.left;
   					location = node;
   				}
   				else if(value > node.value){
   					node = node.right;
   					location = node;
   				}
   				else if(value == node.value){
   					location = node;
   					break;
   				}
   				else{
   					break;
   				}
   		}

   		if(location == null){
   			console.log("IT DOESN'T EXIST!!");
   		}
   		else{
			console.log(location);
		}
	};

}

var tree = new BinarySearchTree();
tree.add(17);
tree.add(26);
tree.add(7);
tree.add(2);
tree.add(3);
tree.add(6);

console.log(tree);
