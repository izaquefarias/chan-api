class Tabelas {

    init(conexao){
        this.conexao = conexao;
        this.criaTabelaAtendimentos()
    }
    criarTabelaAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos(
            id INT NOT NULL AUTO_INCREMENT,
            nome VARCHAR(100) NOT NULL,
            endereco VARCHAR(200),
            agendamento ENUM('agendado', 'concluido', 'em curso', 'cancelado'),

            --restricoes
            PRIMARY KEY(id))`;
        this.conexao.query(sql, ()=> {
            if(erro) console.log(erro);
            else console.log('Tabela Atendimentos criada com sucesso!')
        })
    }

}

module.exports = new Tabelas();