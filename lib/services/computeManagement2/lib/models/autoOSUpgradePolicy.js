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
 * The configuration parameters used for performing automatic OS upgrade.
 *
 */
class AutoOSUpgradePolicy {
  /**
   * Create a AutoOSUpgradePolicy.
   * @member {boolean} [disableAutoRollback] Whether OS image rollback feature
   * should be disabled. Default value is false.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AutoOSUpgradePolicy
   *
   * @returns {object} metadata of AutoOSUpgradePolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutoOSUpgradePolicy',
      type: {
        name: 'Composite',
        className: 'AutoOSUpgradePolicy',
        modelProperties: {
          disableAutoRollback: {
            required: false,
            serializedName: 'disableAutoRollback',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = AutoOSUpgradePolicy;
