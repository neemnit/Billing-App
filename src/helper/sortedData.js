const sortedData = (data, key,order) => {
    
    let result = []
    if(key === 'name'){
        result = data.sort((a,b) => {
                    const aName =  a.name.toLowerCase(),   bName = b.name.toLowerCase()

                    if(aName < bName){
                        return -1
                    }
                    if(aName > bName){
                        return 1
                    }
                    
                    return 0
                })
    } if(key==="price"){
          
        result=data.sort((a,b)=>{
        //    if(a.price-b.price<b.price){
        //        return -1
        //    }
        //    if(b.price-a.price<0){
        //     return -1
        // }
        if(order==="asc"){
            return a.price-b.price
        }
        if(order==="desc"){
            return b.price-a.price
        }
        
    
           
        })
    }
     else {

     
        result = data.sort((a,b) => a.mobile - b.mobile)
    }
    console.log('result',result)
    return result
}

export default sortedData