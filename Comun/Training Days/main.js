const competidores = {
    _ficha: {
      nome: [],
      treino: [],
      dias: [],
    },
    protocolo(nomeCompetidor, treinoCompetidor, diasCompetidor) {
      this._ficha.nome.push(nomeCompetidor);
      this._ficha.treino.push(treinoCompetidor);
      this._ficha.dias.push(diasCompetidor);
    },
  };
  
  const mostrarNaTela = () => {
    let { _ficha } = competidores;
    for (let i in _ficha.nome) {
      console.log(`Competidor: ${_ficha.nome[i]}.`);
      console.log(`Treinara ${_ficha.treino[i]} por ${_ficha.dias[i]} dias.`);
    }
  };
  
  executar = () => {
    const nomeID = "Paulo";
    const treino = () => {
      const random = Math.floor(Math.random() * 3);
      return random === 0 ? "Maratona" : random === 1 ? "Triathlon" : "Pentatlo";
    };
    const dias = () => {
      return treinoID == "Maratona" ? 50 : treinoID == "Triathlon" ? 100 : 200
    };
    treinoID = treino()
    diasID = dias()
    competidores.protocolo(nomeID, treinoID, diasID);
    mostrarNaTela();
  };
  
  executar();
  