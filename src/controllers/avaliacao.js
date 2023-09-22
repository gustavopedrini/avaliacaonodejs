const ServiceAvaliacao = require('../services/avaliacao.js');

const service = new ServiceAvaliacao();

class ControllerAvaliacao{
    Somar(req, res){
        try{
            const resultado = service.Somar(req.body.numA, req.body.numB)
            res.status(200).json({
                message: `RESULTADO: ${resultado}`
            })
            
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: 'Erro interno no servidor'
            })
        }
    }

    Subtrair(req, res){
        try{
            const resultado = service.Subtrair(req.body.numA, req.body.numB)
            res.status(200).json({
                message: `RESULTADO: ${resultado}`
            })
            
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: 'Erro interno no servidor'
            })
        }
    }

    Dividir(req, res){
        try{
            const resultado = service.Dividir(req.body.numA, req.body.numB)
            res.status(200).json({
                message: `RESULTADO: ${resultado}`
            })
            
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: 'Erro interno no servidor'
            })
        }
    }

    Multiplicar(req, res){
        try{
            const resultado = service.Multiplicar(req.body.numA, req.body.numB)
            res.status(200).json({
                message: `RESULTADO: ${resultado}`
            })
            
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: 'Erro interno no servidor'
            })
        }
    }

    Radiciacao(req, res){
        try{
            const resultado = service.Radiciacao(req.body.num, req.body.raiz)
            res.status(200).json({
                message: `RESULTADO: ${resultado}`
            })
            
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: 'Erro interno no servidor'
            })
        }
    }

    Potenciacao(req, res){
        try{
            const resultado = service.Potenciacao(req.body.num, req.body.potencia)
            res.status(200).json({
                message: `RESULTADO: ${resultado}`
            })
            
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: 'Erro interno no servidor'
            })
        }
    }
}

module.exports = ControllerAvaliacao