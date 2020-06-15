'use strict'

var seattle ={
    Location : 'Seattle',
    minHourlyCustomers : 23,
    maxHourlyCustomers: 65,
    averageCookiesPerCustomer : 6.3,
    cusPerHour: function(){       
    var randomNum=generateRandomCust(this.minHourlyCustomers,this.maxHourlyCustomers);
     return randomNum;  
     console.log(this.randomNum);
        },
    
    cookies : [],
    cookiesForHour: function(){
           
        for(var i=0; i<15;i++){
        this.cookies.push(  Math.floor(this.cusPerHour()*this.averageCookiesPerCustomer));
            
        }
    },
    Total: 0,
    sumTotal:function(){
        for(var i=0; i<15;i++){
            this.Total=this.Total+this.cookies[i];
                
        }

       },
       
    render : function(){
        var parentElement =document.getElementById('Sales');

        
        var main = document.createElement('main');
        parentElement.appendChild(main);

        var h2 =document.createElement('h2');
        h2.textContent=this.Location;
        main.appendChild(h2);

        var p = document.createElement('p');
        main.appendChild(p);

        var ul =document.createElement('ul');
        p.appendChild(ul);
       
        for (var i=0 ;i< 14 ; i++){
            
            var li =document.createElement('li')
            if (i<=6){
            li.textContent = i + 6 +'am : '+ this.cookies[i] + 'cookies';
            //console.log(this.cookies[i])
            ul.appendChild(li);}
            else {
            li.textContent = (i-6) +' pm : '+ this.cookies[i]+ 'cookies';
            ul.appendChild(li);    
              }
            //console.log(li.textContent)
         };
        var li=document.createElement('li');
        li.textContent='Total : '+this.Total;
        ul.appendChild(li);

       }         
                 
    }

 
var Tokyo ={
    Location : 'Tokyo',
    minHourlyCustomers : 3,
    maxHourlyCustomers: 24,
    averageCookiesPerCustomer : 1.2,
         cusPerHour: function(){       
         var randomNum=generateRandomCust(this.minHourlyCustomers,this.maxHourlyCustomers);
         return randomNum;  
         console.log(this.randomNum);
            },
    
    cookies : [],
    cookiesForHour: function(){
               
               for(var i=0; i<15;i++){
              this.cookies.push(  Math.floor(this.cusPerHour()*this.averageCookiesPerCustomer));
                
                }
             // console.log('this is inside'+this.cookies);
        },
    Total: 0,
    sumTotal:function(){
            for(var i=0; i<15;i++){
                this.Total=this.Total+this.cookies[i];}} ,      
           
    render : function(){
        var parentElement =document.getElementById('Sales');
    
            
        var main = document.createElement('main');
            parentElement.appendChild(main);
    
        var h2 =document.createElement('h2');
            h2.textContent=this.Location;
            main.appendChild(h2);
    
        var p = document.createElement('p');
            main.appendChild(p);
    
        var ul =document.createElement('ul');
            p.appendChild(ul);
           
        for (var i=0 ;i< 14 ; i++){
                
        var li =document.createElement('li')
                if (i<=6){
                li.textContent = i + 6 +'am : '+ this.cookies[i] + 'cookies';
                //console.log(this.cookies[i])
                ul.appendChild(li);}
                else {
                li.textContent = (i-6) +' pm : '+ this.cookies[i]+ 'cookies';
                ul.appendChild(li);    
                  }
                //console.log(li.textContent)
             }
             var li=document.createElement('li');
        li.textContent='Total : '+this.Total;
        ul.appendChild(li);
           }         
                     
} 


 
var Dubi ={
    Location : 'Dubi',
    minHourlyCustomers : 11,
    maxHourlyCustomers: 38,
    averageCookiesPerCustomer :3.7,
         cusPerHour: function(){       
         var randomNum=generateRandomCust(this.minHourlyCustomers,this.maxHourlyCustomers);
         return randomNum;  
         console.log(this.randomNum);
            },
    
    cookies : [],
    cookiesForHour: function(){
               
               for(var i=0; i<15;i++){
              this.cookies.push(  Math.floor(this.cusPerHour()*this.averageCookiesPerCustomer));
                
                }
             // console.log('this is inside'+this.cookies);
        },
        Total: 0,
        sumTotal:function(){
            for(var i=0; i<15;i++){
                this.Total=this.Total+this.cookies[i];}  },     
           
    render : function(){
        var parentElement =document.getElementById('Sales');
    
            
        var main = document.createElement('main');
            parentElement.appendChild(main);
    
        var h2 =document.createElement('h2');
            h2.textContent=this.Location;
            main.appendChild(h2);
    
        var p = document.createElement('p');
            main.appendChild(p);
    
        var ul =document.createElement('ul');
            p.appendChild(ul);
           
        for (var i=0 ;i< 14 ; i++){
                
        var li =document.createElement('li')
                if (i<=6){
                li.textContent = i + 6 +'am : '+ this.cookies[i] + 'cookies';
                //console.log(this.cookies[i])
                ul.appendChild(li);}
                else {
                li.textContent = (i-6) +' pm : '+ this.cookies[i]+ 'cookies';
                ul.appendChild(li);    
                  }
                //console.log(li.textContent)
             }
             var li=document.createElement('li');
        li.textContent='Total : '+this.Total;
        ul.appendChild(li);
           }         
                     
} ;

var Paris ={
    Location : 'Paris',
    minHourlyCustomers : 20,
    maxHourlyCustomers: 38,
    averageCookiesPerCustomer : 2.3,
     cusPerHour: function(){       
     var randomNum=generateRandomCust(this.minHourlyCustomers,this.maxHourlyCustomers);
     return randomNum;  
     console.log(this.randomNum);
        },

    cookies : [],
    cookiesForHour: function(){
           
           for(var i=0; i<15;i++){
          this.cookies.push(  Math.floor(this.cusPerHour()*this.averageCookiesPerCustomer));
            
            }
         // console.log('this is inside'+this.cookies);
        },
        Total :0,
        sumTotal:function(){
            for(var i=0; i<15;i++){
                this.Total=this.Total+this.cookies[i];}  },
       
    render : function(){
        var parentElement =document.getElementById('Sales');

        
        var main = document.createElement('main');
        parentElement.appendChild(main);

        var h2 =document.createElement('h2');
        h2.textContent=this.Location;
        main.appendChild(h2);

        var p = document.createElement('p');
        main.appendChild(p);

        var ul =document.createElement('ul');
        p.appendChild(ul);
       
        for (var i=0 ;i< 14 ; i++){
            
            var li =document.createElement('li')
            if (i<=6){
            li.textContent = i + 6 +'am : '+ this.cookies[i] + 'cookies';
            //console.log(this.cookies[i])
            ul.appendChild(li);}
            else {
            li.textContent = (i-6) +' pm : '+ this.cookies[i]+ 'cookies';
            ul.appendChild(li);    
              }
            //console.log(li.textContent)
         }
         var li=document.createElement('li');
        li.textContent='Total : '+this.Total;
        ul.appendChild(li);
       }         
                 
    }

 
var Lima ={
    Location : 'Lima',
    minHourlyCustomers : 2,
    maxHourlyCustomers: 16,
    averageCookiesPerCustomer : 4.6,
         cusPerHour: function(){       
         var randomNum=generateRandomCust(this.minHourlyCustomers,this.maxHourlyCustomers);
         return randomNum;  
         console.log(this.randomNum);
            },
    
    cookies : [],
    cookiesForHour: function(){
               
               for(var i=0; i<15;i++){
              this.cookies.push(  Math.floor(this.cusPerHour()*this.averageCookiesPerCustomer));
                
                }
             // console.log('this is inside'+this.cookies);
        },
        Total :0,
        sumTotal:function(){
            for(var i=0; i<15;i++){
                this.Total=this.Total+this.cookies[i];}  },       
           
    render : function(){
        var parentElement =document.getElementById('Sales');
    
            
        var main = document.createElement('main');
            parentElement.appendChild(main);
    
        var h2 =document.createElement('h2');
            h2.textContent=this.Location;
            main.appendChild(h2);
    
        var p = document.createElement('p');
            main.appendChild(p);
    
        var ul =document.createElement('ul');
            p.appendChild(ul);
           
        for (var i=0 ;i< 14 ; i++){
                
        var li =document.createElement('li')
                if (i<=6){
                li.textContent = i + 6 +'am : '+ this.cookies[i] + 'cookies';
                //console.log(this.cookies[i])
                ul.appendChild(li);}
                else {
                li.textContent = (i-6) +' pm : '+ this.cookies[i]+ 'cookies';
                ul.appendChild(li);    
                  }
                //console.log(li.textContent)
             }
             var li=document.createElement('li');
        li.textContent='Total : '+this.Total;
        ul.appendChild(li);
           }         
                     
} 








seattle.cusPerHour();
seattle.cookiesForHour();
seattle.sumTotal();
seattle.render();
//console.log(seattle);



Tokyo.cusPerHour();
Tokyo.cookiesForHour();
Tokyo.sumTotal();
Tokyo.render();
//console.log(Tokyo);



Paris.cusPerHour();
Paris.cookiesForHour();
Paris.sumTotal();
Paris.render();
//console.log(Paris);



Dubi.cusPerHour();
Dubi.cookiesForHour();
Dubi.sumTotal();
Dubi.render();
//console.log(Dubi);



Lima.cusPerHour();
Lima.cookiesForHour();
Lima.sumTotal();
Lima.render();
//console.log(Lima);




function generateRandomCust(min , max){
    var random= Math.floor(Math.random()*(max-min+1))+min;    
    return random ;

    }
   



