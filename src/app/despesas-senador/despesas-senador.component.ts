import { Component, OnInit } from '@angular/core';
import { DespesasSenadorService } from '../service/despesas-senador.service';
import { ActivatedRoute } from '@angular/router';
import { Despesa } from '../model/despesa';

@Component({
  selector: 'app-despesas-senador',
  templateUrl: './despesas-senador.component.html',
  styleUrls: ['./despesas-senador.component.css'],
})
export class DespesasSenadorComponent implements OnInit {
  constructor(
    private service: DespesasSenadorService,
    private route: ActivatedRoute
  ) {}

  id: string = '0';
  despesaSenador: Despesa = {
    id: 0,
    nomeSenador: '',
    despesas: [
      {
        tipo: 0,
        fornec: '',
        ano: 0,
        mes: 0,
        dia: 0,
        valor: 0,
      },
    ],
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
    this.getDespesasPorSenador();
  }

  // Chama o serviço para obtém todas as despesas do senador passado no id
  getDespesasPorSenador() {
    this.service
      .getDespesasPorSenador(this.id)
      .subscribe((despesas: Despesa) => {
        this.despesaSenador = despesas;
      });
  }
}
