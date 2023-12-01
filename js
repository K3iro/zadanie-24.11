function dodaj( obj, tab){
   let query = "insert info"+tab;
   query+= "(imie,nazwisko,plec,data,cokolwiek)";
   query+= obj.i;
   query+= obj.n;
   query= "WHERE id="+id;
   RTCPeerConnection.query(query)

}
const express = require("express");
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});


function usun(id,tab){
  connection.query(query);
  let query = "DELETE FROM "+tab+"WHERE id="+id
}


function pobierz(parametr,tab) {
  if(parametr){
    parametr = 'WHERE `name` = "Page" AND `age` > 45';
  }

 function aktaualizuj(id,obj,tab,war) {
  connection.query(query);
  let query='UPDATE'+tab
  if(war){
    query+='WHERE id='+id; 
  }
  query+="(imie,nazwisko,plec,data,cokolwiek)";
  query+="VALUES(";
  query+=obj.i;
  query+=obj.n;
  query+=")";   
}
   let query = 'SELECT * FROM ' +tab+ 'parametr';  
  connection.query()
      query,
      function(err, results, fields) {
        console.log(results); 
        console.log(fields);
        return fields;
      }
}
