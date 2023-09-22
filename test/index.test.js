const { describe, expect, it } = require('@jest/globals');
const ServiceAvaliacao = require('../src/services/avaliacao.js')

describe('Testes da avaliacao', () => {
    const service = new ServiceAvaliacao()

    beforeAll(async () => {
        console.info('Iniciando TDD com Jest!');
    });

    afterAll(() => {
        console.info('Testes Encerrados!');
    });

    // ============================= SOMAR ============================= //
    it('Should sum [numA] with [numB] and show the [result]', () => {
        const result = service.Somar(2,3)

        expect(result).toBe(5)
    })

    it('Should sum [numA] with [numB] and show the [result]', () => {
        const result = service.Somar(2,-3)

        expect(result).toBe(-1)
    })

    it('Should sum [numA] with [numB] and show the [result]', () => {
        const result = service.Somar(2.5,3)

        expect(result).toBe(5.5)
    })

    // ERROR
    it('Should ERROR', () => {
        const result = () => service.Somar(2,"batata")
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    it('Should ERROR', () => {
        const result = () => service.Somar("batata",2)
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    // ============================= SUBTRAIR ============================= //
    it('Should subtract [numA] with [numB] and show the [result]', () => {
        const result = service.Subtrair(3,2)

        expect(result).toBe(1)
    })

    it('Should subtract [numA] with [numB] and show the [result]', () => {
        const result = service.Subtrair(3,-2)

        expect(result).toBe(5)
    })

    it('Should subtract [numA] with [numB] and show the [result]', () => {
        const result = service.Subtrair(3.5,2)

        expect(result).toBe(1.5)
    })

    // ERROR
    it('Should ERROR', () => {
        const result = () => service.Subtrair(2,"batata")
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    it('Should ERROR', () => {
        const result = () => service.Subtrair("batata",2)
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    // ============================= DIVIDIR ============================= //
    it('Should divide [numA] by [numB] and show the [result]', () => {
        const result = service.Dividir(4,2)

        expect(result).toBe(2)
    })

    it('Should divide [numA] by [numB] and show the [result]', () => {
        const result = service.Dividir(4,-2)

        expect(result).toBe(-2)
    })

    it('Should divide [numA] by [numB] and show the [result]', () => {
        const result = service.Dividir(4.5,2)

        expect(result).toBe(2.25)
    })

    // ERROR
    it('Should ERROR', () => {
        const result = () => service.Dividir(2,"batata")

        expect(result).toThrowError("Parâmetros inválidos")
    })

    it('Should ERROR', () => {
        const result = () => service.Dividir("batata",2)
        expect(result).toThrowError("Parâmetros inválidos")
    })

    // ============================= MULTIPLICAR ============================= //
    it('Should multiply [numA] by [numB] and show the [result]', () => {
        const result = service.Multiplicar(2,2)

        expect(result).toBe(4)
    })

    it('Should multiply [numA] by [numB] and show the [result]', () => {
        const result = service.Multiplicar(2,-2)

        expect(result).toBe(-4)
    })

    it('Should multiply [numA] by [numB] and show the [result]', () => {
        const result = service.Multiplicar(2.5,2)

        expect(result).toBe(5)
    })

    // ERROR
    it('Should ERROR', () => {
        const result = () => service.Multiplicar(2,"batata")
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    it('Should ERROR', () => {
        const result = () => service.Multiplicar("batata",2)
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    // ============================= RADICIACAO ============================= //
    it('Should show the [result] of the [raiz] root of [num]', () => {
        const result = service.Radiciacao(25,2)

        expect(result).toBe(5)
    })

    it('Should show the [result] of the [raiz] root of [num]', () => {
        const result = service.Radiciacao(8,3)

        expect(result).toBe(2)
    })

    it('Should show the [result] of the [raiz] root of [num]', () => {
        const result = service.Radiciacao(-25,2)

        expect(result).toBe(NaN)
    })

    it('Should show the [result] of the [raiz] root of [num]', () => {
        const result = service.Radiciacao(-8,3)

        expect(result).toBe(NaN)
    })

    it('Should show the [result] of the [raiz] root of [num]', () => {
        const result = service.Radiciacao(6.25,2.5)

        expect(result).toBe(2.081383018504683)
    })

    // ERROR
    it('Should ERROR', () => {
        const result = () => service.Radiciacao(2,"batata")
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    it('Should ERROR', () => {
        const result = () => service.Radiciacao("batata",2)
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    // ============================= POTENCIACAO ============================= //
    it('Should show the [result] of the exponentiation of [num] by [potencia]', () => {
        const result = service.Potenciacao(5, 2)

        expect(result).toBe(25)
    })

    it('Should show the [result] of the exponentiation of [num] by [potencia]', () => {
        const result = service.Potenciacao(-2, 3)

        expect(result).toBe(-8)
    })

    it('Should show the [result] of the exponentiation of [num] by [potencia]', () => {
        const result = service.Potenciacao(2.5, 2)

        expect(result).toBe(6.25)
    })

    // ERROR
    it('Should ERROR', () => {
        const result = () => service.Potenciacao(1, "batata")
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    it('Should ERROR', () => {
        const result = () => service.Potenciacao("batata", 1)
        
        expect(result).toThrowError("Parâmetros inválidos")
    })
})