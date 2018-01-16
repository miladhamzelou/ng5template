import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercepted request ... ");

        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${this.cookieService.get('testing') }`)});

        console.log("Sending request with new header now ...",authReq);

        // request = request.clone({
        //       setHeaders: {
        //         Authorization: `Bearer ${this.auth.getToken()}`
        //       }
        //     });


        //send the newly created request
        return next.handle(authReq)
            .catch((error, caught) => {
                //intercept the respons error and displace it to the console
                console.log("Error Occurred");
                console.log(error);
                //return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }
}
