import express, { Request, Response, NextFunction } from 'express';
import { Petshop } from "../Petshop"
import {validate as validateUuid, v4 as uuidv4} from 'uuid'

let clients: Petshop[] = [];

let usuario = new Petshop("478912385","Maispet",[])
clients.push(usuario)

export class PetshopController{

    
  static verifyPetShopById(request: Request, response: Response, next: NextFunction) {
      const id = request.params.id;
      const user = clients.find(client => client.id === id);
      if (!user) {
        return response.status(400).json("error:usuário inexistente");
      }
    
      next();
    }
  
    static getPetShop(request,response){
      return response.status(200).json(clients)
  }
  static getPetShopById(req,response){
      const id = req.params.id
      usuario = clients.find(client => client.id === id)
      if (!usuario) {
        return response.status(400).json("error:usuário inexistente");
      }
      return response.status(200).json(usuario)

  }


  static postPetshop(request,response){
    
      const dados = request.body as Petshop
      const petshop: Petshop |null = new Petshop(dados.cnpj,dados.name,[])
  
      if (!Petshop) {
        return response.status(400).json("error:usaario nao cadastrado")
      }
      clients.push(petshop)
      return response.status(200).json(petshop)

  }

}