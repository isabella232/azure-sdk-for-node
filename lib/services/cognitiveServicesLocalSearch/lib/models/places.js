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
 * Defines a local entity answer.
 *
 * @extends models['SearchResultsAnswer']
 */
class Places extends models['SearchResultsAnswer'] {
  /**
   * Create a Places.
   * @property {array} value A list of local entities, such as restaurants or
   * hotels.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Places
   *
   * @returns {object} metadata of Places
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Places',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'Places',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          readLink: {
            required: false,
            readOnly: true,
            serializedName: 'readLink',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          potentialAction: {
            required: false,
            readOnly: true,
            serializedName: 'potentialAction',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Action'
                  }
              }
            }
          },
          immediateAction: {
            required: false,
            readOnly: true,
            serializedName: 'immediateAction',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Action'
                  }
              }
            }
          },
          preferredClickthroughUrl: {
            required: false,
            readOnly: true,
            serializedName: 'preferredClickthroughUrl',
            type: {
              name: 'String'
            }
          },
          adaptiveCard: {
            required: false,
            readOnly: true,
            serializedName: 'adaptiveCard',
            type: {
              name: 'String'
            }
          },
          queryContext: {
            required: false,
            readOnly: true,
            serializedName: 'queryContext',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'QueryContext',
              className: 'QueryContext'
            }
          },
          totalEstimatedMatches: {
            required: false,
            readOnly: true,
            serializedName: 'totalEstimatedMatches',
            type: {
              name: 'Number'
            }
          },
          isFamilyFriendly: {
            required: false,
            readOnly: true,
            serializedName: 'isFamilyFriendly',
            type: {
              name: 'Boolean'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Places;