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
 * List of available countries with details.
 *
 */
class AvailableProvidersList {
  /**
   * Create a AvailableProvidersList.
   * @member {array} countries List of available countries.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AvailableProvidersList
   *
   * @returns {object} metadata of AvailableProvidersList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailableProvidersList',
      type: {
        name: 'Composite',
        className: 'AvailableProvidersList',
        modelProperties: {
          countries: {
            required: true,
            serializedName: 'countries',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AvailableProvidersListCountryElementType',
                  type: {
                    name: 'Composite',
                    className: 'AvailableProvidersListCountry'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AvailableProvidersList;