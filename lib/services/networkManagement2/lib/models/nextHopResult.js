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
 * The information about next hop from the specified VM.
 *
 */
class NextHopResult {
  /**
   * Create a NextHopResult.
   * @property {string} [nextHopType] Next hop type. Possible values include:
   * 'Internet', 'VirtualAppliance', 'VirtualNetworkGateway', 'VnetLocal',
   * 'HyperNetGateway', 'None'
   * @property {string} [nextHopIpAddress] Next hop IP Address
   * @property {string} [routeTableId] The resource identifier for the route
   * table associated with the route being returned. If the route being
   * returned does not correspond to any user created routes then this field
   * will be the string 'System Route'.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NextHopResult
   *
   * @returns {object} metadata of NextHopResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NextHopResult',
      type: {
        name: 'Composite',
        className: 'NextHopResult',
        modelProperties: {
          nextHopType: {
            required: false,
            serializedName: 'nextHopType',
            type: {
              name: 'String'
            }
          },
          nextHopIpAddress: {
            required: false,
            serializedName: 'nextHopIpAddress',
            type: {
              name: 'String'
            }
          },
          routeTableId: {
            required: false,
            serializedName: 'routeTableId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NextHopResult;
