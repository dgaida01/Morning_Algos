class MaxHeap{
    constructor(){
        this.values =[null]
    }

    insert(num){

        this.values.push(num);
        let idx = this.values.length -1;
        let idxParent = Math.floor(idx/2);
        while(this.values[idx]>this.values[idxParent] && idx>1){
            
            [this.values[idx], this.values[idxParent]]=[this.values[idxParent],this.values[idx]];
            idx=idxParent;
            idxParent = Math.floor(idx/2);
        }
        return this
    }

    extractMax(){

        //swap the min value with the last value so you can pop it out
        //save the min value to return later
        //compare childer to the parent (index *2 gets left, (index *2) +1 gets right)
        //while the parent is larger than the left or right, if both choose smaller of the two
        //recalculate the index and children
        // repeat , return the poped value at end

        let parentIdx = 1
        let left = parentIdx*2;
        let right = (parentIdx*2)+1;
        let direction=1;
        [this.values[parentIdx],this.values[this.values.length-1]]=[this.values[this.values.length-1],this.values[parentIdx]];
        let result =this.values.pop()

        while(left <this.values.length|| right<this.values.length){

            if(this.values[left]>=this.values[right] || this.values[right]==undefined){
                direction=left;
            }
            else{
                direction =right;
            }

            if(this.values[parentIdx]<this.values[direction]){
                [this.values[parentIdx],this.values[direction]]=[this.values[direction],this.values[parentIdx]];
            }
           
        parentIdx = direction;
        left = parentIdx*2;
        right = (parentIdx*2)+1;


        }
        console.log(this.values);
        return result;
    }

    //recersive version
    rextractMax(parentIdx=1,values=this.values){
        let left = parentIdx*2;
        let right = (parentIdx*2)+1;
        let result=null;

        if(left >values.length-1 && right>values.length-1){
            return values;
        }
        if(parentIdx==1){
            [values[parentIdx],values[values.length-1]]=[values[values.length-1],values[parentIdx]];
            result =this.values.pop()
        }

        let direction=1;

        if(values[left]>=values[right] || values[right]==undefined){
            direction=left;
        }
        else{
            direction =right;
        }
        if(values[parentIdx]<values[direction]){
            [values[parentIdx],values[direction]]=[values[direction],values[parentIdx]];
            this.rextractMax(direction)
        }
        else{
            return result;
        }
        
        console.log(values);
        return result;
    }




}

let myMaxHeap = new MaxHeap();

myMaxHeap.insert(25).insert(30).insert(22).insert(15).insert(11).insert(27).insert(1).insert(2).insert(4);
 console.log(myMaxHeap);
    console.log(myMaxHeap.extractMax());
