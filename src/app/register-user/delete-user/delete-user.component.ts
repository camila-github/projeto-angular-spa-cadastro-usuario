import { Router, ActivatedRoute } from "@angular/router";
import { RegisterUserService } from "../register-user.service";
import { RegisterUser } from "../register-user.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-delete-user",
  templateUrl: "./delete-user.component.html",
  styleUrls: ["./delete-user.component.css"],
})
export class DeleteUserComponent implements OnInit {
  registerUser: RegisterUser;

  constructor(
    private registerUserService: RegisterUserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.registerUserService.readById(id).subscribe((registerUser) => {
      this.registerUser = registerUser;
    });
  }

  deleteUser(): void {
    this.registerUserService.delete(this.registerUser.id).subscribe(() => {
      this.registerUserService.showMessage("Cadastro excluido com sucesso!");
      this.router.navigate(["/cadastro"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cadastro"]);
  }
}
