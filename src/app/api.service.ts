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
  getAllping(){
    return  this.httpClient.get(`${this.API_URL}/pingAll`);
}
createInstruction(instruction:Instruction):Observable<Instruction>{
  return this.httpClient.post<Instruction>(`${this.API_URL}/addinstruction/`,instruction);
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
}
  