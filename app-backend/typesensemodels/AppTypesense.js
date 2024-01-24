const appTypesenseSchema = {
  name: 'appsTypesense', 
  fields: [
    { name: 'name', type: 'string', facet: true },
    { name: 'folderName', type: 'string', facet: false },
    { name: 'removable', type: 'bool', facet: false },
    { name: 'author', type: 'string', facet: true },
    { name: 'updateChecking', type: 'bool', facet: false },
    { name: 'description', type: 'string', facet: true },
    { name: 'status', type: 'string', facet: false },
    { name: 'version', type: 'string', facet: false },
    { name: 'visible', type: 'bool', facet: false },
    { name: 'modifiable', type: 'bool', facet: false },
    { name: 'app', type: 'string', facet: true },
    { name: 'canChangePerms', type: 'bool', facet: false },
    { name: 'canList', type: 'bool', facet: false },
    { name: 'canShareApp', type: 'bool', facet: false },
  ],
  default_sorting_field: 'name', 
};
module.exports = {appTypesenseSchema};
// await typesenseClient.collections().create(appTypesenseSchema);
