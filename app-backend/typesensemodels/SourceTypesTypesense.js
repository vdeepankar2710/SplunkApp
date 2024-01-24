const sourceTypeTypesenseSchema = {
  name: 'sourceTypeTypesense',
  fields: [
    { name: 'name', type: 'string', facet: true },
    { name: 'app', type: 'string', facet: true },
    { name: 'author', type: 'string', facet: true },
    { name: 'removable', type: 'bool', facet: false },
    { name: 'owner', type: 'string', facet: true },
    { name: 'category', type: 'string', facet: true },
    { name: 'segmentation', type: 'string', facet: true },
    { name: 'charset', type: 'string', facet: true },
    { name: 'dateTimeCofig', type: 'string', facet: true },
    { name: 'indexdingExtractions', type: 'string', facet: true },
    { name: 'matchLimit', type: 'string', facet: true },
    { name: 'modifiable', type: 'bool', facet: false },
    { name: 'sharing', type: 'string', facet: true },
    { name: 'status', type: 'string', facet: true },
  ],
  default_sorting_field: 'name', 
};

module.exports = {sourceTypeTypesenseSchema};
