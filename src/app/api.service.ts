import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import {User} from 'src/app/all-user/user'
import { Observable } from 'rxjs';
import { Instruction } from './instruction-send/Instruction';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  us : Observable<User[]>;
  API_URL  =  'http://localhost:1330';
  constructor(private  httpClient:  HttpClient) { }
  getAllping():Observable<string[]>{
    return  this.httpClient.get<string[]>(`${this.API_URL}/pingAll`);
}
createInstruction(instruction:Instruction):Observable<Instruction>{
  console.log(instruction);
  var a = JSON.stringify(instruction);
  var b = JSON.parse(a);
  return this.httpClient.post<Instruction>(`${this.API_URL}/addinstruction/`,b);
}
getAllpingchart(sender){
  return this.httpClient.post(`${this.API_URL}/getpingbysender/`,sender);
}
getallUsers():Observable<string[]>{
  return this.httpClient.get<string[]>(`${this.API_URL}/userAll`);
}
getUserbyName(name):Observable<string>{
  return this.httpClient.post<string>(`${this.API_URL}/userbyname`,name);
}
updateuser(name):Observable<string>{
  return this.httpClient.post<string>(`${this.API_URL}/updateUser`,name);
}
}
  