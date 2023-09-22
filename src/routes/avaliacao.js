const express = require('express')
const ControllerAvaliacao = require('../controllers/avaliacao.js')

const controller = new ControllerAvaliacao()
const router = express.Router()

router.get('/api/operacoes', (_, res) => {
    res.json({
        message: `As OPERACOES disponíveis são:
        - SOMAR: /api/somar
        - SUBTRAIR: /api/subtrair
        - DIVIDIR: /api/dividir
        - MULTIPLICAR: /api/multiplicar
        - RADICIAÇÃO: /api/radiciacao
        - POTENCIAÇÃO: /api/potenciacao`
    })
})

router.post('/api/somar', controller.Somar)
router.post('/api/subtrair', controller.Subtrair)
router.post('/api/dividir', controller.Dividir)
router.post('/api/multiplicar', controller.Multiplicar)
router.post('/api/radiciacao', controller.Radiciacao)
router.post('/api/potenciacao', controller.Potenciacao)

module.exports = router