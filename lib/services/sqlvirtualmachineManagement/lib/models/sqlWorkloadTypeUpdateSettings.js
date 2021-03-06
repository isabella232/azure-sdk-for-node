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
 * Set workload type to optimize storage for SQL Server.
 *
 */
class SqlWorkloadTypeUpdateSettings {
  /**
   * Create a SqlWorkloadTypeUpdateSettings.
   * @property {string} [sqlWorkloadType] SQL Server workload type. Possible
   * values include: 'GENERAL', 'OLTP', 'DW'
   */
  constructor() {
  }

  /**
   * Defines the metadata of SqlWorkloadTypeUpdateSettings
   *
   * @returns {object} metadata of SqlWorkloadTypeUpdateSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SqlWorkloadTypeUpdateSettings',
      type: {
        name: 'Composite',
        className: 'SqlWorkloadTypeUpdateSettings',
        modelProperties: {
          sqlWorkloadType: {
            required: false,
            serializedName: 'sqlWorkloadType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SqlWorkloadTypeUpdateSettings;
