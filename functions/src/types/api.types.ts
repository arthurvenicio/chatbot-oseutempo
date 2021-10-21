export type RequestCity = {
  _declaration: {
    _attributes: {
      version: string;
      encoding: string;
    };
  };
  cidades: {
    cidade: {
      nome: {
        _text: string;
      };
      uf: {
        _text: string;
      };
      id: {
        _text: string;
      };
    };
  };
};

export type City = {
  cidade: {
    nome: string;
    uf: string;
    atualizacao: string;
    previsao: Previsao[];
  };
};

export type Previsao = {
  dia: string;
  tempo: string;
  maxima: string;
  minima: string;
  iuv: string;
};
