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
 * Describes the list of API Keys of an Application Insights Component.
 */
class ApplicationInsightsComponentAPIKeyListResult extends Array {
  /**
   * Create a ApplicationInsightsComponentAPIKeyListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApplicationInsightsComponentAPIKeyListResult
   *
   * @returns {object} metadata of ApplicationInsightsComponentAPIKeyListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationInsightsComponentAPIKeyListResult',
      type: {
        name: 'Composite',
        className: 'ApplicationInsightsComponentAPIKeyListResult',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationInsightsComponentAPIKeyElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationInsightsComponentAPIKey'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationInsightsComponentAPIKeyListResult;