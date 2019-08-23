import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders
} from "@angular/common/http";

export class Interceptordemo implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const httpreq = req.clone({

      headers:new HttpHeaders().set('Content-Type','application/json')

    });
    console.log(httpreq);
    return next.handle(httpreq);
  }
}
