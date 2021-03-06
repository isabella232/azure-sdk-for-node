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
 * The list of values of a secret resource, paged if the number of results
 * exceeds the limits of a single message. The next set of results can be
 * obtained by executing the same query with the continuation token provided in
 * the previous page.
 *
 */
class PagedSecretValueResourceDescriptionList {
  /**
   * Create a PagedSecretValueResourceDescriptionList.
   * @property {string} [continuationToken] The continuation token parameter is
   * used to obtain next set of results. The continuation token is included in
   * the response of the API when the results from the system do not fit in a
   * single response. When this value is passed to the next API call, the API
   * returns next set of results. If there are no further results, then the
   * continuation token is not included in the response.
   * @property {array} [items] One page of the list.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PagedSecretValueResourceDescriptionList
   *
   * @returns {object} metadata of PagedSecretValueResourceDescriptionList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PagedSecretValueResourceDescriptionList',
      type: {
        name: 'Composite',
        className: 'PagedSecretValueResourceDescriptionList',
        modelProperties: {
          continuationToken: {
            required: false,
            serializedName: 'ContinuationToken',
            type: {
              name: 'String'
            }
          },
          items: {
            required: false,
            serializedName: 'Items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SecretValueResourceDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'SecretValueResourceDescription'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PagedSecretValueResourceDescriptionList;
