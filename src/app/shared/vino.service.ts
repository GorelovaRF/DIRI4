import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User, Vino } from './vino.model';





@Injectable({
  providedIn: 'root'
})
export class VinoService {

  protected token!:string;
  isLoading = new Subject<boolean>();
  private headers = new HttpHeaders;
  constructor(protected http: HttpClient) { }

  public getProducts():Observable<Vino[]> {

    const url= 'http://localhost:3000/vinos/'

    return this.http.get<Vino[]>(url).pipe(catchError(this.handleError));
  }


  public getProductById(id:any):Observable<Vino> {

    const url=  `http://localhost:3000/vinos/${id}`
    return this.http.get<Vino>(url);
  
  }

  public createWine(vino:any):Observable<Vino> {
    const url = `http://localhost:3000/vinos`
    return this.http.post<Vino>(url,vino);
  }


  public login():Observable<any> {
    // const user = {usuario:email, password:pass};
    const url = `http://localhost:3000/usuarios`
    return this.http.get<any>(url)
  }


  public signup(user:any):Observable<any>{
    const url = `http://localhost:3000/usuarios`
    return this.http.post<any>(url,user);
  }




  show():void{
    this.isLoading.next(true)
  }
  hide():void{
    this.isLoading.next(false)
  }

  handleError(error:any){
    return throwError(error.message || "Server Error")

  }
}
