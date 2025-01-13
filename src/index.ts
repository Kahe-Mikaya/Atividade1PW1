import express, { Request, Response, NextFunction } from 'express';
import { Pet } from './Pet';


  
  type Petshop = {
    id: string;
    cnpj: string;
    name: string;
    pets: Pet[];
  }

  let clients: Petshop[] = [];

  const server = express();
  server.use((req, res, next) => {
    // Digamos que estamos adicionando um usuário fictício
    req.usuario = { id: 1, nome: 'João' };
    next();  // Chama o próximo middleware ou rota
  })
  server.request.usuario
server.use(express.json());
function verifyUserById(request: Request, response: Response, next: NextFunction) {
    const id = request.params.id;
    const user = clients.find(client => client.id === id);
    if (!user) {
      return response.status(400).json("error:usuário inexistente");
    }
  
    request.usuario = user;
    next();
  }