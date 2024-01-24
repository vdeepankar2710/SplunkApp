const indexTypesenseSchema = {
  name: 'indexTypesense',
  fields: [
    { name: 'name', type: 'string', facet: true },
    { name: 'app', type: 'string', facet: true },
    { name: 'author', type: 'string', facet: true },
    { name: 'canList', type: 'bool', facet: false },
    { name: 'bucketMerging', type: 'string', facet: false },
    { name: 'enableDataArchive', type: 'bool', facet: false },
    { name: 'assureUTF8', type: 'bool', facet: false },
    { name: 'removable', type: 'bool', facet: false },
    { name: 'owner', type: 'string', facet: true },
    { name: 'modifiable', type: 'bool', facet: false },
    { name: 'sharing', type: 'string', facet: false },
    { name: 'status', type: 'string', facet: true },
    { name: 'coldPath', type: 'string', facet: false },
    { name: 'datatype', type: 'string', facet: true },
    { name: 'enableRealtimeSearch', type: 'bool', facet: false },
    { name: 'enableDataIntegrityControl', type: 'bool', facet: false },
    { name: 'indexThreads', type: 'string', facet: false },
    { name: 'maxMemMB', type: 'string', facet: false},
    { name: 'memPoolMB', type: 'string', facet: false},
    { name: 'syncMeta', type: 'bool', facet: false},
    { name: 'waitPeriodInSecsForManifestWrite', type: 'string', facet: false },
  ],
  default_sorting_field: 'name', 
};

module.exports = indexTypesenseSchema;
