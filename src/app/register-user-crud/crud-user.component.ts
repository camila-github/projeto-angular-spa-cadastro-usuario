import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from '../shared/header/header.service';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.css']
})
export class CrudUserComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Usuário',
      icon: 'storefront',
      routeUrl: '/cadastro'
    }
  }

  ngOnInit(): void {
  }

  navigateToRegisterUserCreate(): void {
    this.router.navigate(['/cadastro/create'])
  }

}
