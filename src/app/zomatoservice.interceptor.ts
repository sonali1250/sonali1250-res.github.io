import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ZomatoServiceInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupRequest = req.clone({
            headers : req.headers.set('user-key', 'f620f59cf0b3d6e9e8b33713114b48e0')
        });
        return next.handle(dupRequest);
    }
}

@NgModule( {
    providers : [
        {
            provide : HTTP_INTERCEPTORS,
            useClass : ZomatoServiceInterceptor,
            multi : true
        }
    ]
})
export class InterceptorModule { }
