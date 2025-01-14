

import express, { Request, Response, NextFunction, response } from 'express';
import { Pet } from './Pet';
import { Petshop } from './Petshop';
import { PetshopController }  from "./controlers/PetshopController";
import { request } from 'node:http';



  let clients: Petshop[] = [];
  let usuario
  const server = express();
  server.use(express.json());


  server.get('/users',PetshopController.getPetShop)

  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  }); 

  