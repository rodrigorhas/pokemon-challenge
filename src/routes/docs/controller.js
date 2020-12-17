import express from "express";
import swaggerUi from "swagger-ui-express"
import projectPackage from '../../../package.json'
import swaggerJsdoc from "swagger-jsdoc";

const router = express.Router();

export const specs = swaggerJsdoc({
    swaggerDefinition: {
        info: {
            title: 'Pokemon API',
            version: projectPackage.version,
            description: 'Test Express API with autogenerated swagger doc',
        },
    },
    apis: ['./src/routes/**/*.js'],
})

router.get('/api-docs', swaggerUi.setup(specs));

export default router