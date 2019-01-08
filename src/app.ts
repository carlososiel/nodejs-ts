
require('dotenv-safe').config()
import express = require('express');
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { CommodityController } from './controllers/commodity';

const app = createExpressServer({
    routePrefix: process.env.BASE_URL,
    controllers: [CommodityController]
})

app.listen(3000);