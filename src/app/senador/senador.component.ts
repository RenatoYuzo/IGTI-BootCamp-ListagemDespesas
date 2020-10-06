import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SenadorService } from '../service/senador.service';
import { Senador } from '../model/senador';

@Component({
  selector: 'app-senador',
  templateUrl: './senador.component.html',
  styleUrls: ['./senador.component.css'],
})
export class SenadorComponent implements OnInit {
  constructor(private router: Router, private service: SenadorService) {}

  senadores: Senador[];

  ngOnInit() {
    this.getSenadores();
  }

  // Chama o serviço para obtém todos os senadores
  getSenadores() {
    this.service.getSenadores().subscribe((senadores: Senador[]) => {
      this.senadores = senadores;
    });
  }

  navigateTo(id: number) {
    this.router.navigate(['senadores', id]);
  }
}
