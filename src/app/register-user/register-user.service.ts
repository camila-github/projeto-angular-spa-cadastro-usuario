import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { RegisterUser } from "./register-user.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RegisterUserService {
  baseUrl = "http://localhost:3000/cadastro";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(registerUser: RegisterUser): Observable<RegisterUser> {
    return this.http.post<RegisterUser>(this.baseUrl, registerUser).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<RegisterUser[]> {
    return this.http.get<RegisterUser[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<RegisterUser> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<RegisterUser>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(registerUser: RegisterUser): Observable<RegisterUser> {
    const url = `${this.baseUrl}/${registerUser.id}`;
    return this.http.put<RegisterUser>(url, registerUser).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<RegisterUser> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<RegisterUser>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
