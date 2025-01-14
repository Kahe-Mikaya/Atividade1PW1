import express, { Request, Response, NextFunction } from 'express';
import { Petshop } from "../Petshop"
import {validate as validateUuid, v4 as uuidv4} from 'uuid'

let clients: Petshop[] = [];

let usuario = new Petshop("478912385","Maispet",[])
clients.push(usuario)

export class PetshopController{

    
  static verifyUserById(request: Request, response: Response, next: NextFunction) {
      const id = request.params.id;
      const user = clients.find(client => client.id === id);
      if (!user) {
        return response.status(400).json("error:usuário inexistente");
      }
    
      next();
    }
  static getPetShop(request,response){
      return response.status(200).json(usuario)
  } 
}