const dashboardTypesenseSchema = {
  name: 'dashboardTypesense',
  fields: [
    { name: 'name', type: 'string', facet: true },
    { name: 'folderName', type: 'string', facet: true },
    { name: 'version', type: 'string', facet: true },
    { name: 'updateChecking', type: 'bool', facet: false },
    { name: 'visible', type: 'bool', facet: false },
    { name: 'sharing', type: 'string', facet: false },
    { name: 'status', type: 'string', facet: true },
    { name: 'rootNode', type: 'string', facet: false },
    { name: 'removable', type: 'string', facet: false },
  ],
  default_sorting_field: 'name', 
};

module.exports = {dashboardTypesenseSchema};
