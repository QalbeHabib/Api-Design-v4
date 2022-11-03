// Some IMP Things to Notes
// GET product - get all the products (for an authenticated user)
// GET product/:id - get a product by a given ID
// POST product - create a new product
// PUT product/:id - update or replace a product that matches a given ID
// DELETE product/:id - delete a product by a give ID

import { Router } from 'express'
const router = Router()

// Open your Prisma schema alonge side and create Routes of Each Model


// Products Routes Model
router.get('/product', (req, res) => {
    res.json({ message: 'Product Router' })
})
router.get('/product/:id', (req, res) => {
    res.json({ message: 'We are in ID router' })
})
router.post("/product", (req, res) => { });
router.put('/product/:id', (req, res) => { })
router.put('/product/:id', (req, res) => { })



// Update Routes Model
router.get('/update', (req, res) => { })
router.get('/update/:id', (req, res) => { })
router.post('/update', (req, res) => { })
router.put('/update/:id', (req, res) => { })
router.delete('/update/:id', (req, res) => { })



// UpdatePoints Model
router.get('/updatepoint/:id', (req, res) => { })
router.post('/updatepoint', (req, res) => { })
router.put('/updatepoint/:id', (req, res) => { })
router.delete('/updatepoint/:id', (req, res) => { })


export default router


// User is noticiably missing. This is because User will have a special set of routes because of the importantance of that resource. For