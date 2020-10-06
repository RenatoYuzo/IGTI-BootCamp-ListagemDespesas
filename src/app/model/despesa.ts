export interface Despesa {
  id: number;
  nomeSenador: string;
  despesas: [
    {
      tipo: number;
      fornec: string;
      ano: number;
      mes: number;
      dia: number;
      valor: number;
    }
  ];
}
