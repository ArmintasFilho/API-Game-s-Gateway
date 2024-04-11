import APP from './src/app.js'; //importando APP do arquivo app.js.
const PORT = 3000; //Criando a porta 3000.

//Abrindo o servidor na porta 3000.
APP.listen(PORT, () => { 
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
