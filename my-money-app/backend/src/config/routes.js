const express = require('express')

module.exports = function(server){

    //Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Mapeamento das rotas de Ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}

