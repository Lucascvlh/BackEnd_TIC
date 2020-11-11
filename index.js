const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const {
    Prestadores,
    Enderecos, 
    Arquivos, 
    Usuarios, 
    Servicos,
    Agendamentos} = require('./app/models');
const app = express();
const port = 3000
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false}));

//PRESTADORES
app.get('/prestadores', async(req,res) =>{
  try{
    const prestadores = await Prestadores.findAll();
    return res.json(prestadores);
  } catch(err){
    return res.status(400).json({
      error:err.message
    });
  }
})

app.post('/create/prestadores', async(req, res)=>{
  try{
    const{
      id_endereco,
      nome,
      email,
      senha,
      descricao,
      hr_func,
      permissao,
      pontuacao,
      cpf,
      cnpj
      } = req.body;
    
    const prestadores = await Prestadores.create({
      id_endereco,
      nome,
      email,
      senha,
      descricao,
      hr_func,
      permissao,
      pontuacao,
      cpf,
      cnpj
    });
    return res.status(201).json(prestadores)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.delete('/prestadores/:id', async(req, res)=>{
  try{
    const prestador = Prestadores.destroy({
      where: { id: req.params.id }
    })
    return res.status(200).json(prestador)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
	
})

app.put('/prestadores/:id', (req, res) => {
  try {
    const{
      nome,
      id_endereco,
      email,
      senha,
      descricao,
      hr_func,
      permissao,
      pontuacao,
      cpf,
      cnpj
      } = req.body;
    Prestadores.update({
      id_endereco:id_endereco,
      nome:nome, 
      email:email,
      senha:senha,
      descricao:descricao,
      hr_func:hr_func,
      permissao:permissao,
      pontuacao:pontuacao,
      cpf:cpf,
      cnpj:cnpj},
      {where:{id: req.params.id}})
    return res.status(200).json(req.body)
  } catch (err) {
    return res.status(400).json({
      error:err.message
    })
  }
});

//ENDERECOS
app.get('/endereco', async(req,res) =>{
  try{
    const enderecos = await Enderecos.findAll();
    return res.json(enderecos);
  } catch(err){
    return res.status(400).json({
      error:err.message
    });
  }
})

app.post('/create/endereco', async(req, res)=>{
  try{
    const{
      rua,
      numero,
      bairro,
      uf,
      cidade,
      cep
      } = req.body;
    
    const endereco = await Enderecos.create({
      rua,
      numero,
      bairro,
      uf,
      cidade,
      cep
    });
    return res.status(201).json(endereco)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.delete('/endereco/:id', async(req, res)=>{
  try{
    const endereco = Enderecos.destroy({
      where: { id: req.params.id }
    })
    return res.status(200).json(endereco)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.put('/endereco/:id', (req, res) => {
  try {
    const{
      rua,
      numero,
      bairro,
      uf,
      cidade,
      cep
      } = req.body;
    Enderecos.update({
      rua:rua,
      numero:numero,
      bairro:bairro,
      uf:uf,
      cidade:cidade,
      cep:cep},
      {where:{id: req.params.id}})
    return res.status(200).json(req.body)
  } catch (err) {
    return res.status(400).json({
      error:err.message
    })
  }
});


//ARQUIVOS
app.get('/arquivos', async(req,res) =>{
  try{
    const arquivos = await Arquivos.findAll();
    return res.json(arquivos);
  } catch(err){
    return res.status(400).json({
      error:err.message
    });
  }
})

app.post('/create/arquivos', async(req, res)=>{
  try{
    const{
      id_prestador,
      caminho,
      nome,
      extencao
      } = req.body;
    
    const arquivo = await Arquivos.create({
      id_prestador,
      caminho,
      nome,
      extencao
    });
    return res.status(201).json(arquivo)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.delete('/arquivos/:id', async(req, res)=>{
  try{
    const arquivo = Arquivos.destroy({
      where: { id: req.params.id }
    })
    return res.status(200).json(arquivo)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.put('/arquivos/:id', (req, res) => {
  try {
    const{
      id_prestador,
      caminho,
      nome,
      extencao
      } = req.body;
    Arquivos.update({
      id_prestador:id_prestador,
      caminho:caminho,
      nome:nome,
      extencao:extencao},
      {where:{id: req.params.id}})
    return res.status(200).json(req.body)
  } catch (err) {
    return res.status(400).json({
      error:err.message
    })
  }
});

//USUARIOS
app.get('/usuarios', async(req,res) =>{
  try{
    const usuario = await Usuarios.findAll();
    return res.json(usuario);
  } catch(err){
    return res.status(400).json({
      error:err.message
    });
  }
})

app.post('/create/usuario', async(req, res)=>{
  try{
    const{
      nome,
      email,
      senha
      } = req.body;
    
    const usuario = await Usuarios.create({
      nome,
      email,
      senha
    });
    return res.status(201).json(usuario)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.delete('/usuario/:id', async(req, res)=>{
  try{
    const usuario = Usuarios.destroy({
      where: { id: req.params.id }
    })
    return res.status(200).json(usuario)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.put('/usuario/:id', (req, res) => {
  try {
    const{
      nome,
      email,
      senha
      } = req.body;
    Enderecos.update({
      nome:nome,
      email:email,
      senha:senha},
      {where:{id: req.params.id}})
    return res.status(200).json(req.body)
  } catch (err) {
    return res.status(400).json({
      error:err.message
    })
  }
});

//SERVICOS
app.get('/servicos', async(req,res) =>{
  try{
    const servico = await Servicos.findAll();
    return res.json(servico);
  } catch(err){
    return res.status(400).json({
      error:err.message
    });
  }
})

app.post('/create/servicos', async(req, res)=>{
  try{
    const{
      nome_servico,
      descricao,
      duracao,
      categoria,
      valor
      } = req.body;
    
    const servico = await Servicos.create({
      nome_servico,
      descricao,
      duracao,
      categoria,
      valor
    });
    return res.status(201).json(servico)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.delete('/servicos/:id', async(req, res)=>{
  try{
    const servico = Servicos.destroy({
      where: { id: req.params.id }
    })
    return res.status(200).json(servico)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.put('/servicos/:id', (req, res) => {
  try {
    const{
      nome_servico,
      descricao,
      duracao,
      categoria,
      valor
      } = req.body;
    Enderecos.update({
      nome_servico:nome_servico,
      descricao:descricao,
      duracao:duracao,
      categoria:categoria,
      valor:valor},
      {where:{id: req.params.id}})
    return res.status(200).json(req.body)
  } catch (err) {
    return res.status(400).json({
      error:err.message
    })
  }
});

//AGENDAMENTOS
app.get('/agendamento', async(req,res) =>{
  try{
    const agendamento = await Agendamentos.findAll();
    return res.json(agendamento);
  } catch(err){
    return res.status(400).json({
      error:err.message
    });
  }
})

app.post('/create/agendamento', async(req, res)=>{
  try{
    const{
      id_usuario,
      id_prestador,
      id_servico,
      data_marcada,
      hora_marcada,
      descricao,
      cancelamento
      } = req.body;
    
    const agendamento = await Agendamentos.create({
      id_usuario,
      id_prestador,
      id_servico,
      data_marcada,
      hora_marcada,
      descricao,
      cancelamento
    });
    return res.status(201).json(agendamento)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.delete('/agendamento/:id', async(req, res)=>{
  try{
    const agendamento = Agendamentos.destroy({
      where: { id: req.params.id }
    })
    return res.status(200).json(agendamento)
  } catch(err){
    return res.status(400).json({
      error:err.message
    })
  }
})

app.put('/agendamento/:id', (req, res) => {
  try {
    const{
      id_usuario,
      id_prestador,
      id_servico,
      data_marcada,
      hora_marcada,
      descricao,
      cancelamento
      } = req.body;
    Enderecos.update({
      id_usuario:id_usuario,
      id_prestador:id_prestador,
      id_servico:id_servico,
      data_marcada:data_marcada,
      hora_marcada:hora_marcada,
      descricao:descricao,
      cancelamento:cancelamento},
      {where:{id: req.params.id}})
    return res.status(200).json(req.body)
  } catch (err) {
    return res.status(400).json({
      error:err.message
    })
  }
});


app.listen(port, console.log(`Servidor rodando na porta ${port}`));
