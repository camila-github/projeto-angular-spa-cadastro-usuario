import { RegisterUser } from '../register-user.model';
import { RegisterUserService } from '../register-user.service';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  formUsuario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  registerUser: RegisterUser = {
    name: '',
    email: '',
    telefone: null,
    cep: null,   
    bairro: '',
    complemento: '',
    uf :'', 
    localidade: '', 
    logradouro: '',
    urlFoto: ''
  }

  constructor(private registerUserService: RegisterUserService, private http: HttpClient,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.registerUserService.create(this.registerUser).subscribe(() => {
      this.registerUserService.showMessage('Cadastro criado com sucesso!')
      this.router.navigate(['/cadastro'])
    })

  }

  consultaCEP(cep, form) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.http.get(`//viacep.com.br/ws/${cep}/json/`)
      .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf
      }
    });

    console.log(formulario);
  }

  cancel(): void {
    this.router.navigate(['/cadastro'])
  }
}
