const reportTypesenseSchema = {
  name: 'reportTypesense',
  fields: [
    { name: 'name', type: 'string', facet: true },
    { name: 'app', type: 'string', facet: true },
    { name: 'author', type: 'string', facet: true },
    { name: 'owner', type: 'string', facet: true },
    { name: 'modifiable', type: 'bool', facet: false },
    { name: 'sharing', type: 'string', facet: false },
    { name: 'visible', type: 'string', facet: false },
    { name: 'scheduled', type: 'bool', facet: false },
    { name: 'scheduledAs', type: 'string', facet: true },
    { name: 'schedulePriority', type: 'string', facet: true },
    { name: 'scheduleWindow', type: 'string', facet: false },
  ],
  default_sorting_field: 'name', 
};

module.exports = {reportTypesenseSchema};
