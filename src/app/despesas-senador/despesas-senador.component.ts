import { Component, OnInit } from '@angular/core';
import { DespesasSenadorService } from '../service/despesas-senador.service';
import { ActivatedRoute } from '@angular/router';
import { Despesa } from '../model/despesa';
import { TipoDespesa } from '../model/tipoDespesa';

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

  despesasTotais: TipoDespesa[] = [];

  valorTotal1: number = 0;
  valorTotal2: number = 0;

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

        let tipo1: TipoDespesa = {
          idTipo: 1,
          nomeDespesa: 'Aluguel de imóveis e despesas concernentes a eles',
          idSenador: this.id,
          valorTotal: 0,
        };
        let tipo2: TipoDespesa = {
          idTipo: 2,
          nomeDespesa: 'Divulgação da atividade parlamentar',
          idSenador: this.id,
          valorTotal: 0,
        };
        let tipo3: TipoDespesa = {
          idTipo: 3,
          nomeDespesa:
            'Aquisição de material de consumo para uso no escritório',
          idSenador: this.id,
          valorTotal: 0,
        };
        let tipo4: TipoDespesa = {
          idTipo: 4,
          nomeDespesa: 'Passagens aéreas, aquáticas e terrestres nacionais',
          idSenador: this.id,
          valorTotal: 0,
        };
        let tipo5: TipoDespesa = {
          idTipo: 5,
          nomeDespesa:
            'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos',
          idSenador: this.id,
          valorTotal: 0,
        };
        let tipo6: TipoDespesa = {
          idTipo: 6,
          nomeDespesa: 'Locomoção, hospedagem, alimentação e combustíveis',
          idSenador: this.id,
          valorTotal: 0,
        };
        let tipo7: TipoDespesa = {
          idTipo: 7,
          nomeDespesa: 'Serviços de Segurança Privada',
          idSenador: this.id,
          valorTotal: 0,
        };

        this.despesaSenador.despesas.forEach((d) => {
          switch (d.tipo) {
            case 1: {
              tipo1.valorTotal += d.valor;
              break;
            }
            case 2: {
              tipo2.valorTotal += d.valor;
              break;
            }
            case 3: {
              tipo3.valorTotal += d.valor;
              break;
            }
            case 4: {
              tipo4.valorTotal += d.valor;
              break;
            }
            case 5: {
              tipo5.valorTotal += d.valor;
              break;
            }
            case 6: {
              tipo6.valorTotal += d.valor;
              break;
            }
            case 7: {
              tipo7.valorTotal += d.valor;
              break;
            }
          }
        });

        this.despesasTotais = [tipo1, tipo2, tipo3, tipo4, tipo5, tipo6, tipo7];

        this.despesaSenador.despesas.forEach((d) => {
          this.valorTotal1 += d.valor;
        });
        this.despesasTotais.forEach((d) => {
          this.valorTotal2 += d.valorTotal;
        });
      });
  }
}
