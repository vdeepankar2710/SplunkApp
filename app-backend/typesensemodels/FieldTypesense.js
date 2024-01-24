const fieldTypesenseSchema = {
  name: 'fieldTypesense',
  fields: [
    { name: 'name', type: 'string', facet: true },
    { name: 'app', type: 'string', facet: true },
    { name: 'author', type: 'string', facet: true },
    { name: 'removable', type: 'bool', facet: false },
    { name: 'owner', type: 'string', facet: true },
    { name: 'modifiable', type: 'bool', facet: false },
    { name: 'sharing', type: 'string', facet: false },
    { name: 'status', type: 'string', facet: false},
    { name: 'indexed', type: 'string', facet: false },
    { name: 'indexedValue', type: 'string', facet: false },
  ],
  default_sorting_field: 'name', 
};

module.exports = {fieldTypesenseSchema};
