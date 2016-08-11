
/**************CREATES THE INDEX***************/
function Index(val, key){
	this.data = val;
	this.key = key;
}

function HashTable(){
	this.location = [];
	this.range = 20;

/************ADDS DATA TO KEY'S INDEX*************/
	this.add = function(val, key){
		var index = new Index(val, key);
		var i = index.key % this.range;

		if(!this.location[i]){
			this.location[i] = index;
			return;
		}

		while(this.location[i]){

			i++;

			if(!this.location[i]){
				this.location[i] = index;
				break;
			}
		}
	};

/**************HASH SEARCH BY KEY***************/
	this.search = function(key){
		var i = key % this.range;

		if(this.location[i].key == key){
			console.log(this.location[i]);
			return;
		}

		while(this.location[i].key != key){

			i++;

			if(this.location[i].key == key){
				console.log(this.location[i]);
				break;
			}
		}
	};

/************DELETES DATA AT KEY'S INDEX**********/
	this.delete = function(key){
		var i = key % this.range;

		if(this.location[i].key == key){
			this.location[i] = null;
			return;
		}

		while(this.location[i].key != key){

			i++;

			if(this.location[i].key == key){
				this.location[i] = null;
				break;
			}
		}
	};
}

var table = new HashTable();

table.add("dog", 4);
table.add("cat", 17);
table.add("parot", 10);
table.add("mouse", 7);
table.add("elephant", 24);
table.add("butterfly", 1);
table.add("dolphin", 19);
table.add("horse", 19);
table.add("frog", 16);

console.log(table.location);
