'use strict';

IvaFactory.$inject = ['CONSTANTS'];

function IvaFactory(CONSTANTS) {
    var iva = {
        importe: 0,
        impuesto: 0,
        total: 0
    };

    var service = {
        calcular: calcularIva,
        desglosar: desglosarIva,
        obtener: obtener
    };

    return service;

    ////////////////////

    function calcularIva(importe) {
        iva.importe = importe;
        iva.impuesto = iva.importe * CONSTANTS.IVA;
        iva.total = iva.importe + iva.impuesto;
    }

    function desglosarIva(total) {
        iva.total = total;
        iva.importe = iva.total / (1 + CONSTANTS.IVA);
        iva.impuesto = iva.total - iva.importe;
    }

    function obtener() {
        return iva;
    }
}

module.exports = IvaFactory;