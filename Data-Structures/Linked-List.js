
/**********CREATES A NODE************/
function Node(value){
	this.value = value;
	this.next = null;
}

/*********CREATES THE LIST**********/
function LinkedList(value){
	this.head = null;
	this.tail = null;

/*******ADDS A NODE*******/
	this.add = function(value){
		var node = new Node(value);

   		if(this.head == null){ 

   			this.head = node; 
   		}

    	if(this.tail != null){ 

    		this.tail.next = node; 
    	}

    	this.tail = node;
	};

/*******REMOVES NODE AT CERTAIN LOCATION********/
	this.remove = function(index){
		var prev = null;
		var node = this.head;
		var i = 0;

		while(node != null && i++ < index) {
    		prev = node;
    		node = node.next;
  		}

 		if(prev == null){

 		 this.head = node.next;
 		}

  		else{

   		prev.next = node.next;
   		}
	};
	
}

var list = new LinkedList();
list.add(2);
list.add(4);
list.add(6);

console.log(list);