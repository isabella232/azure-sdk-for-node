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
 * PasswordCredential list operation result.
 */
class PasswordCredentialListResult extends Array {
  /**
   * Create a PasswordCredentialListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PasswordCredentialListResult
   *
   * @returns {object} metadata of PasswordCredentialListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PasswordCredentialListResult',
      type: {
        name: 'Composite',
        className: 'PasswordCredentialListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PasswordCredentialElementType',
                  type: {
                    name: 'Composite',
                    additionalProperties: {
                      type: {
                        name: 'Dictionary',
                        value: {
                            required: false,
                            serializedName: 'ObjectElementType',
                            type: {
                              name: 'Object'
                            }
                        }
                      }
                    },
                    className: 'PasswordCredential'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PasswordCredentialListResult;
