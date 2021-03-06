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
 * Diagnostic details.
 *
 * @extends models['Resource']
 */
class DiagnosticContract extends models['Resource'] {
  /**
   * Create a DiagnosticContract.
   * @property {string} [alwaysLog] Specifies for what type of messages
   * sampling settings should not apply. Possible values include: 'allErrors'
   * @property {string} loggerId Resource Id of a target logger.
   * @property {object} [sampling] Sampling settings for Diagnostic.
   * @property {string} [sampling.samplingType] Sampling type. Possible values
   * include: 'fixed'
   * @property {number} [sampling.percentage] Rate of sampling for fixed-rate
   * sampling.
   * @property {object} [frontend] Diagnostic settings for incoming/outgoing
   * HTTP messages to the Gateway.
   * @property {object} [frontend.request] Diagnostic settings for request.
   * @property {array} [frontend.request.headers] Array of HTTP Headers to log.
   * @property {object} [frontend.request.body] Body logging settings.
   * @property {number} [frontend.request.body.bytes] Number of request body
   * bytes to log.
   * @property {object} [frontend.response] Diagnostic settings for response.
   * @property {array} [frontend.response.headers] Array of HTTP Headers to
   * log.
   * @property {object} [frontend.response.body] Body logging settings.
   * @property {number} [frontend.response.body.bytes] Number of request body
   * bytes to log.
   * @property {object} [backend] Diagnostic settings for incoming/outgoing
   * HTTP messages to the Backend
   * @property {object} [backend.request] Diagnostic settings for request.
   * @property {array} [backend.request.headers] Array of HTTP Headers to log.
   * @property {object} [backend.request.body] Body logging settings.
   * @property {number} [backend.request.body.bytes] Number of request body
   * bytes to log.
   * @property {object} [backend.response] Diagnostic settings for response.
   * @property {array} [backend.response.headers] Array of HTTP Headers to log.
   * @property {object} [backend.response.body] Body logging settings.
   * @property {number} [backend.response.body.bytes] Number of request body
   * bytes to log.
   * @property {boolean} [logClientIp] Log the ClientIP. Default is false.
   * @property {string} [httpCorrelationProtocol] Sets correlation protocol to
   * use for Application Insights diagnostics. Possible values include: 'None',
   * 'Legacy', 'W3C'
   * @property {string} [verbosity] The verbosity level applied to traces
   * emitted by trace policies. Possible values include: 'verbose',
   * 'information', 'error'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DiagnosticContract
   *
   * @returns {object} metadata of DiagnosticContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiagnosticContract',
      type: {
        name: 'Composite',
        className: 'DiagnosticContract',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          alwaysLog: {
            required: false,
            serializedName: 'properties.alwaysLog',
            type: {
              name: 'String'
            }
          },
          loggerId: {
            required: true,
            serializedName: 'properties.loggerId',
            type: {
              name: 'String'
            }
          },
          sampling: {
            required: false,
            serializedName: 'properties.sampling',
            type: {
              name: 'Composite',
              className: 'SamplingSettings'
            }
          },
          frontend: {
            required: false,
            serializedName: 'properties.frontend',
            type: {
              name: 'Composite',
              className: 'PipelineDiagnosticSettings'
            }
          },
          backend: {
            required: false,
            serializedName: 'properties.backend',
            type: {
              name: 'Composite',
              className: 'PipelineDiagnosticSettings'
            }
          },
          logClientIp: {
            required: false,
            serializedName: 'properties.logClientIp',
            type: {
              name: 'Boolean'
            }
          },
          httpCorrelationProtocol: {
            required: false,
            serializedName: 'properties.httpCorrelationProtocol',
            type: {
              name: 'String'
            }
          },
          verbosity: {
            required: false,
            serializedName: 'properties.verbosity',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DiagnosticContract;
