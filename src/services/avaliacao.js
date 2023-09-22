class ServiceAvaliacao{
    Somar(numA, numB){
        if(isNaN(numA) || isNaN(numB)){
            throw new Error('Parâmetros inválidos')
        }

        const result = numA + numB
        return result
    }

    Subtrair(numA, numB){
        if(isNaN(numA) || isNaN(numB)){
            throw new Error('Parâmetros inválidos')
        }

        const result = numA - numB
        return result
    }

    Dividir(numA, numB){
        if(isNaN(numA) || isNaN(numB)){
            throw new Error('Parâmetros inválidos')
        }

        const result = numA / numB
        return result
    }

    Multiplicar(numA, numB){
        if(isNaN(numA) || isNaN(numB)){
            throw new Error('Parâmetros inválidos')
        }

        const result = numA * numB
        return result
    }

    Radiciacao(num, raiz){
        if(isNaN(num) || isNaN(raiz)){
            throw new Error('Parâmetros inválidos')
        }

        const result = Math.pow(num, 1/raiz)
        return result
    }

    Potenciacao(num, potencia){
        if(isNaN(num) || isNaN(potencia)){
            throw new Error('Parâmetros inválidos')
        }

        const result = Math.pow(num, potencia)
        return result
    }
}

module.exports = ServiceAvaliacao
