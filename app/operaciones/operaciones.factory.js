'use strict';

Operaciones.$inject = ['APP_CONSTANTS'];

function Operaciones(CONSTANTS) {
    var service = {
        calcular: calcularIva,
        desglosar: desglosarIva
    };

    return service;

    ////////////////////

    function calcularIva(valor) {
        var iva = valor * CONSTANTS.IVA;
        var total = valor + iva;
        return {
            importe: valor,
            iva: iva,
            total: total
        }
    }

    function desglosarIva(total) {
        var importe = total / (1 + CONSTANTS.IVA);
        var iva = total - importe;
        return {
            importe: importe,
            iva: iva,
            total: total
        }
    }
}

module.exports = Operaciones;