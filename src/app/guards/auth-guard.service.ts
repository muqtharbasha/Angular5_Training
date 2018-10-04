import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
    ){}

    canActivate(): boolean | Promise<boolean> | Observable<boolean> {
        return false;
    }
}