'use strict'

var parentElement =document.getElementById('Sales');

var main = document.createElement('main');
parentElement.appendChild(main);



var table =document.createElement('table');
main.appendChild(table);
function header() {
var tr=document.createElement('tr');
table.appendChild(tr);

var td=document.createElement('td');
tr.appendChild(td);

for (var i=0 ;i< 14 ; i++){
                
var td =document.createElement('td')
    if (i<=6){
    td.textContent = i + 6 +'am ';
    tr.appendChild(td);}
    else {
    td.textContent = (i-6) +' pm ';
    tr.appendChild(td);    
    }};
var td=document.createElement('td');
td.textContent='Daily Total';
tr.appendChild(td);}

var numLocation =[];
var totalsinhour=[];
console.log(totalsinhour)

function Location (name, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer) {
    this.name=name;
    this.minHourlyCustomers=minHourlyCustomers;
    this.maxHourlyCustomers=maxHourlyCustomers;
    this.averageCookiesPerCustomer=averageCookiesPerCustomer;
    this.cookies = [];
     numLocation.push(this);
   

}


Location.prototype.cusPerHour=function() { 
var random= Math.floor(Math.random()*(this.maxHourlyCustomers-this.minHourlyCustomers+1))+this.minHourlyCustomers;
return random;  
};

Location.prototype.cookiesForHour=function (){ 
    var t=0;        
for(var i=0; i<15;i++){
this.cookies.push(  Math.floor(this.cusPerHour()*this.averageCookiesPerCustomer));
t=t+this.cookies[i];
};
this.cookies.push(t)
}

Location.prototype.totalInHour=function (){
      
for(var i=0; i<this.cookies.length;i++){
   if(isNaN(totalsinhour[i])){
 totalsinhour[i]=this.cookies[i];
   }
else{
totalsinhour [i]=totalsinhour[i]+this.cookies[i];
}
   
}};

Location.prototype.dailyTotal=function(){
    this.Total=this.Total+this.cookies[i]
}


Location.prototype.render=function(){
var tr =document.createElement('tr')
table.appendChild(tr);

      
for (var i=0 ;i< 16 ; i++){
if (i==0) {
var td=document.createElement('td');
td.textContent=this.name;
tr.appendChild(td);
  }         
else if (i<=14){
var td =document.createElement('td')
td.textContent = this.cookies[i] ;
tr.appendChild(td);}
else{
    var td=document.createElement('td'); 
td.textContent=this.cookies[i];
tr.appendChild(td); 

}
};
      
};




var seattle =new Location('Seattle',23,65,6.3);
var Tokyo = new Location ('Tokyo',3,24,1.2);
var Dubi =new Location ('Dubi',11,38,3.7);
var Paris = new Location ('Paris',20,38,2.3);
var Lima =new Location('Lima',2,16,4.6);


 
function footer (){    
var tr=document.createElement('tr');
table.appendChild(tr);
var td=document.createElement('td'); 
td.textContent='Totals';
tr.appendChild(td)
    
for (var i=1 ;i< totalsinhour.length ; i++){
    var td=document.createElement('td'); 
    td.textContent=totalsinhour[i];
    tr.appendChild(td);}
}

header();

for(var i=0 ; i<numLocation.length;i++) {
    
    numLocation[i].cusPerHour();
    numLocation[i].cookiesForHour();
    numLocation[i].render();
   numLocation[i].totalInHour();
}

footer ();