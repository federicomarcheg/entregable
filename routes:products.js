const express = require('express');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - nombre
 *         - precio
 *       properties:
 *         id:
 *           type: string
 *           description: El ID automático del producto
 *         nombre:
 *           type: string
 *           description: El nombre del producto
 *         precio:
 *           type: number
 *           description: El precio del producto
 *         descripcion:
 *           type: string
 *           description: La descripción del producto
 *       example:
 *         id: d5fE_asz
 *         nombre: Producto A
 *         precio: 29.99
 *         descripcion: Un producto de alta calidad
 */

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: API para productos
 */

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Devuelve la lista de todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 */
router.get('/', (req, res) => {
  // Lógica para obtener productos
  res.status(200).json([]);
});

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtiene un producto por id
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del producto
 *     responses:
 *       200:
 *         description: El producto específico
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:id', (req, res) => {
  // Lógica para obtener un producto por id
  res.status(200).json({});
});

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: Producto creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       400:
 *         description: Error en los datos de entrada
 */
router.post('/', (req, res) => {
  // Lógica para crear un nuevo producto
  res.status(201).json({});
});

// Exportar el router
module.exports = router;