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
 * Description of the check name availability request properties.
 *
 */
class CheckNameAvailability {
  /**
   * Create a CheckNameAvailability.
   * @member {string} name The namespace name to check for availability. The
   * namespace name can contain only letters, numbers, and hyphens. The
   * namespace must start with a letter, and it must end with a letter or
   * number.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CheckNameAvailability
   *
   * @returns {object} metadata of CheckNameAvailability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CheckNameAvailability',
      type: {
        name: 'Composite',
        className: 'CheckNameAvailability',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CheckNameAvailability;
