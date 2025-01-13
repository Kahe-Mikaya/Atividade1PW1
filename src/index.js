import express from 'express';
import pg from 'pg'

const { Client } = pg   
const app = express;
const port = 3000;
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "atv1pw1",
    port: 5432,
    password: "postgres"
})

async function conectar() { 
    console.log("conectou")
    await client.connect();
    
}
conectar();