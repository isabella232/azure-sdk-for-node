/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The relationship resource format.
 *
 * @extends models['ProxyResource']
 */
class RelationshipResourceFormat extends models['ProxyResource'] {
  /**
   * Create a RelationshipResourceFormat.
   * @member {string} [cardinality] The Relationship Cardinality. Possible
   * values include: 'OneToOne', 'OneToMany', 'ManyToMany'
   * @member {object} [displayName] Localized display name for the
   * Relationship.
   * @member {object} [description] Localized descriptions for the
   * Relationship.
   * @member {date} [expiryDateTimeUtc] The expiry date time in UTC.
   * @member {array} [fields] The properties of the Relationship.
   * @member {array} [lookupMappings] Optional property to be used to map
   * fields in profile to their strong ids in related profile.
   * @member {string} profileType Profile type.
   * @member {string} [provisioningState] Provisioning state. Possible values
   * include: 'Provisioning', 'Succeeded', 'Expiring', 'Deleting',
   * 'HumanIntervention', 'Failed'
   * @member {string} [relationshipName] The Relationship name.
   * @member {string} relatedProfileType Related profile being referenced.
   * @member {string} [relationshipGuidId] The relationship guid id.
   * @member {string} [tenantId] The hub name.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RelationshipResourceFormat
   *
   * @returns {object} metadata of RelationshipResourceFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RelationshipResourceFormat',
      type: {
        name: 'Composite',
        className: 'RelationshipResourceFormat',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          cardinality: {
            required: false,
            serializedName: 'properties.cardinality',
            type: {
              name: 'Enum',
              allowedValues: [ 'OneToOne', 'OneToMany', 'ManyToMany' ]
            }
          },
          displayName: {
            required: false,
            serializedName: 'properties.displayName',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          expiryDateTimeUtc: {
            required: false,
            serializedName: 'properties.expiryDateTimeUtc',
            type: {
              name: 'DateTime'
            }
          },
          fields: {
            required: false,
            serializedName: 'properties.fields',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyDefinition'
                  }
              }
            }
          },
          lookupMappings: {
            required: false,
            serializedName: 'properties.lookupMappings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RelationshipTypeMappingElementType',
                  type: {
                    name: 'Composite',
                    className: 'RelationshipTypeMapping'
                  }
              }
            }
          },
          profileType: {
            required: true,
            serializedName: 'properties.profileType',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          relationshipName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.relationshipName',
            type: {
              name: 'String'
            }
          },
          relatedProfileType: {
            required: true,
            serializedName: 'properties.relatedProfileType',
            type: {
              name: 'String'
            }
          },
          relationshipGuidId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.relationshipGuidId',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.tenantId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RelationshipResourceFormat;
