const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/database');
const Tabelas = require('./infraestrutura/database/tabelas');
const port = 3003;

conexao.connect((erro)=>{
    if(erro){
        console.log(erro);
    }else{
        Tabelas.init(conexao);
        
        const app = customExpress();

        app.listen(port, () => console.log(`Servidor iniciado na porta: ${port}`));
    };
});