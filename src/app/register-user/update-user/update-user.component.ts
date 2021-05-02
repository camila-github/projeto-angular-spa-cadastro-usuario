import { RegisterUser } from "../register-user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { RegisterUserService } from "../register-user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"],
})
export class UpdateUserComponent implements OnInit {
  registerUser: RegisterUser;

  constructor(
    private registerUserService: RegisterUserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.registerUserService.readById(id).subscribe((registerUser) => {
      this.registerUser = registerUser;
    });
  }

  updateUser(): void {
    this.registerUserService.update(this.registerUser).subscribe(() => {
      this.registerUserService.showMessage("Usuário atualizado com sucesso!");
      this.router.navigate(["/cadastro"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cadastro"]);
  }
}
