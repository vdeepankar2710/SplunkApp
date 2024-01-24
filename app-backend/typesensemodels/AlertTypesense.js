const alertTypesenseSchema = {
  name: 'alertTypesense',
  fields: [
    { name: 'name', type: 'string', facet: true },
    { name: 'app', type: 'string', facet: true },
    { name: 'author', type: 'string', facet: true },
    { name: 'contentType', type: 'string', facet: false },
    { name: 'description', type: 'string', facet: true },
    { name: 'maxResults', type: 'int32', facet: false },
    { name: 'maxTime', type: 'string', facet: false },
    { name: 'priority', type: 'string', facet: false },
    { name: 'trackAlert', type: 'bool', facet: false },
    { name: 'owner', type: 'string', facet: true },
  ],
  default_sorting_field: 'name', 
};
module.exports = alertTypesenseSchema;