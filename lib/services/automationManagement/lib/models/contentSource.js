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
 * Definition of the content source.
 *
 */
class ContentSource {
  /**
   * Create a ContentSource.
   * @member {object} [hash] Gets or sets the hash.
   * @member {string} [hash.algorithm] Gets or sets the content hash algorithm
   * used to hash the content.
   * @member {string} [hash.value] Gets or sets expected hash value of the
   * content.
   * @member {string} [type] Gets or sets the content source type. Possible
   * values include: 'embeddedContent', 'uri'
   * @member {string} [value] Gets or sets the value of the content. This is
   * based on the content source type.
   * @member {string} [version] Gets or sets the version of the content.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentSource
   *
   * @returns {object} metadata of ContentSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentSource',
      type: {
        name: 'Composite',
        className: 'ContentSource',
        modelProperties: {
          hash: {
            required: false,
            serializedName: 'hash',
            type: {
              name: 'Composite',
              className: 'ContentHash'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentSource;