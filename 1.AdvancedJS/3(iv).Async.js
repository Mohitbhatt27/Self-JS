for (let i = 0; i<4; i++){
    setTimeout(function(){
        console.log(`${i}`);
    },i*1000);
}
 //0,1,2,3 printed 
 //4,4,4,4 in case of let as let is blocked space and everytime we will have new block value