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
 * Azure Storage workload-specific additional information for job.
 *
 */
class AzureStorageJobExtendedInfo {
  /**
   * Create a AzureStorageJobExtendedInfo.
   * @member {array} [tasksList] List of tasks for this job
   * @member {object} [propertyBag] Job properties.
   * @member {string} [dynamicErrorMessage] Non localized error message on job
   * execution.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureStorageJobExtendedInfo
   *
   * @returns {object} metadata of AzureStorageJobExtendedInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureStorageJobExtendedInfo',
      type: {
        name: 'Composite',
        className: 'AzureStorageJobExtendedInfo',
        modelProperties: {
          tasksList: {
            required: false,
            serializedName: 'tasksList',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AzureStorageJobTaskDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'AzureStorageJobTaskDetails'
                  }
              }
            }
          },
          propertyBag: {
            required: false,
            serializedName: 'propertyBag',
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
          dynamicErrorMessage: {
            required: false,
            serializedName: 'dynamicErrorMessage',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureStorageJobExtendedInfo;