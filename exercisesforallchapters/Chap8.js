
// Retry
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2){
       return a * b;
    } else{
       throw new MultiplicatorUnitFailure("Error")
    }
   }
   
   function multiply(a, b){
       
       for (;;){
        try{
            return primitiveMultiply(a, b)
        }catch(error){
            if(!(error instanceof MultiplicatorUnitFailure)){
                throw error
            }
        }
    }}
   console.log(multiply(4,9)) 

   // The Locked Box
   const box = {
    locked: true,
    unlock (){
        this.locked = false;
    },
    lock(){
        this.locked = true;
    },
    _content: [],
    get content(){
        if(this.locked) throw new Error("Locked!");
        return this._content;
    }

   }

   function withBoxUnclocked(body){
    let locked = box.locked;
    if(! locked){
        return body()
    }
    box.unlock();
    try{
        return body()
    } finally{
        box.lock()
    }

   }

   withBoxUnclocked(function(){
    box.content.push("gold peice")
   });

   try{
    withBoxUnclocked(function(){
        throw new Error("Pirates on the Horizon! Abort Mission!")
    });
   } catch(error){
    console.log("Error raised:", error)
   }
   console.log(box.locked)