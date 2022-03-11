import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { VinoService } from "src/app/shared/vino.service";


@Injectable()
 export class SpinnerInterceptor implements HttpInterceptor{
constructor(protected service: VinoService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       this.service.show();
       return next.handle(req).pipe(
           finalize(() => this.service.hide()));
    }
}