'use strict'


function Location (name, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer) {
    this.name=name;
    this.minHourlyCustomers=minHourlyCustomers;
    this.maxHourlyCustomers=maxHourlyCustomers;
    this.averageCookiesPerCustomer=averageCookiesPerCustomer;
    this. cookies = [];
    this.Total=0;

};

var seattle =new Location('Seattle',23,65,6.3);
   

function cusPerHour() {
var random= Math.floor(Math.random()*(this.maxHourlyCustomers-this.minHourlyCustomers+1))+this.minHourlyCustomers;
return random;  
};
    
function cookiesForHour (){         
for(var i=0; i<15;i++){
this.cookies.push(  Math.floor(this.cusPerHour()*this.averageCookiesPerCustomer));
}};
        
    function sumTotal(){
    for(var i=0; i<15;i++){
    this.Total=this.Total+this.cookies[i];
    }
    };
           
    function render{
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
    };
    
    seattle.cusPerHour();
    seattle.cookiesForHour();
    seattle.sumTotal();
    seattle.render();
    console.log(seattle);
    