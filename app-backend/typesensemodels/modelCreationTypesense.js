const alertTypesenseSchema = require('./AlertTypesense');
const dashboardTypesenseSchema = require('./DashboardTypesense');
const fieldTypesenseSchema = require('./FieldTypesense');
const indexTypesenseSchema = require('./IndexesTypesense');
const lookupTypesenseSchema = require('./LookupTypesense');
const reportTypesenseSchema = require('./ReportTypesense');
const sourceTypeTypesenseSchema = require('./SourceTypesTypesense');
const appTypesenseSchema = require('./AppTypesense');
const typesenseClient  = require('../typesenseClient');


async function createSchema(schema, typesense) {
    const collectionsList = await typesense.collections().retrieve()
    var toCreate = collectionsList.find((value, index, array) => {
        return value['name'] == schema['name']
    })

    if (!toCreate) {
        await typesense.collections('alert').create(schema)
    }
}


const modelCreation = async () => {
    const schemas = [
        alertTypesenseSchema,
        dashboardTypesenseSchema,
        fieldTypesenseSchema,
        indexTypesenseSchema,
        lookupTypesenseSchema,
        reportTypesenseSchema,
        sourceTypeTypesenseSchema,
        appTypesenseSchema
    ]
    
    try {
        // await Promise.all(schemas.map(schema => typesenseClient.collections(`${schema}`).create(schema)));
        // await typesenseClient.collections('alert').create(alertTypesenseSchema);
        await createSchema(alertTypesenseSchema, typesenseClient)
        console.log('All collections created into typesense successfully.');
    } catch (error) {
        console.error('Error creating collections:', error);
    }
}

modelCreation().catch(err => {
    throw err;
})
module.exports = { modelCreation };