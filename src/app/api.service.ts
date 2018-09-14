import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:1330';
  constructor(private  httpClient:  HttpClient) { }
  getAllping(){
    return  this.httpClient.get(`${this.API_URL}/pingAll`);
}
createInstruction(instruction){
  return this.httpClient.post(`${this.API_URL}/addinstruction/`,instruction);
}
getAllpingchart(){
  return this.httpClient.get(`${this.API_URL}/pingAlls`);
}
getallUsers(){
  return this.httpClient.get(`${this.API_URL}/allusers`);
}
}
