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

/**
 * The available skus operation response.
 */
class AvailableSkusResult extends Array {
  /**
   * Create a AvailableSkusResult.
   * @member {string} [nextLink] Link for the next set of skus.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AvailableSkusResult
   *
   * @returns {object} metadata of AvailableSkusResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailableSkusResult',
      type: {
        name: 'Composite',
        className: 'AvailableSkusResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SkuInformationElementType',
                  type: {
                    name: 'Composite',
                    className: 'SkuInformation'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailableSkusResult;
