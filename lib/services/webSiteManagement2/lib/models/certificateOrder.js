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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the CertificateOrder class.
 * @constructor
 * Certificate purchase order
 * @member {object} [certificates] State of the Key Vault secret
 * 
 * @member {string} [distinguishedName] Certificate distinguished name
 * 
 * @member {string} [domainVerificationToken] Domain Verification Token
 * 
 * @member {number} [validityInYears] Duration in years (must be between 1 and
 * 3)
 * 
 * @member {number} [keySize] Certificate Key Size
 * 
 * @member {string} [productType] Certificate product type. Possible values
 * include: 'StandardDomainValidatedSsl', 'StandardDomainValidatedWildCardSsl'
 * 
 * @member {boolean} [autoRenew] Auto renew
 * 
 * @member {string} [provisioningState] Status of certificate order. Possible
 * values include: 'Succeeded', 'Failed', 'Canceled', 'InProgress', 'Deleting'
 * 
 * @member {string} [status] Current order status. Possible values include:
 * 'Pendingissuance', 'Issued', 'Revoked', 'Canceled', 'Denied',
 * 'Pendingrevocation', 'PendingRekey', 'Unused', 'Expired', 'NotSubmitted'
 * 
 * @member {object} [signedCertificate] Signed certificate
 * 
 * @member {number} [signedCertificate.version] Version
 * 
 * @member {string} [signedCertificate.serialNumber] Serial Number
 * 
 * @member {string} [signedCertificate.thumbprint] Thumbprint
 * 
 * @member {string} [signedCertificate.subject] Subject
 * 
 * @member {date} [signedCertificate.notBefore] Valid from
 * 
 * @member {date} [signedCertificate.notAfter] Valid to
 * 
 * @member {string} [signedCertificate.signatureAlgorithm] Signature Algorithm
 * 
 * @member {string} [signedCertificate.issuer] Issuer
 * 
 * @member {string} [signedCertificate.rawData] Raw certificate data
 * 
 * @member {string} [csr] Last CSR that was created for this order
 * 
 * @member {object} [intermediate] Intermediate certificate
 * 
 * @member {number} [intermediate.version] Version
 * 
 * @member {string} [intermediate.serialNumber] Serial Number
 * 
 * @member {string} [intermediate.thumbprint] Thumbprint
 * 
 * @member {string} [intermediate.subject] Subject
 * 
 * @member {date} [intermediate.notBefore] Valid from
 * 
 * @member {date} [intermediate.notAfter] Valid to
 * 
 * @member {string} [intermediate.signatureAlgorithm] Signature Algorithm
 * 
 * @member {string} [intermediate.issuer] Issuer
 * 
 * @member {string} [intermediate.rawData] Raw certificate data
 * 
 * @member {object} [root] Root certificate
 * 
 * @member {number} [root.version] Version
 * 
 * @member {string} [root.serialNumber] Serial Number
 * 
 * @member {string} [root.thumbprint] Thumbprint
 * 
 * @member {string} [root.subject] Subject
 * 
 * @member {date} [root.notBefore] Valid from
 * 
 * @member {date} [root.notAfter] Valid to
 * 
 * @member {string} [root.signatureAlgorithm] Signature Algorithm
 * 
 * @member {string} [root.issuer] Issuer
 * 
 * @member {string} [root.rawData] Raw certificate data
 * 
 * @member {string} [serialNumber] Current serial number of the certificate
 * 
 * @member {date} [lastCertificateIssuanceTime] Certificate last issuance time
 * 
 * @member {date} [expirationTime] Certificate expiration time
 * 
 */
function CertificateOrder() {
  CertificateOrder['super_'].call(this);
}

util.inherits(CertificateOrder, models['Resource']);

/**
 * Defines the metadata of CertificateOrder
 *
 * @returns {object} metadata of CertificateOrder
 *
 */
CertificateOrder.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CertificateOrder',
    type: {
      name: 'Composite',
      className: 'CertificateOrder',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        kind: {
          required: false,
          serializedName: 'kind',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
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
        certificates: {
          required: false,
          serializedName: 'properties.certificates',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'CertificateOrderCertificateElementType',
                type: {
                  name: 'Composite',
                  className: 'CertificateOrderCertificate'
                }
            }
          }
        },
        distinguishedName: {
          required: false,
          serializedName: 'properties.distinguishedName',
          type: {
            name: 'String'
          }
        },
        domainVerificationToken: {
          required: false,
          serializedName: 'properties.domainVerificationToken',
          type: {
            name: 'String'
          }
        },
        validityInYears: {
          required: false,
          serializedName: 'properties.validityInYears',
          type: {
            name: 'Number'
          }
        },
        keySize: {
          required: false,
          serializedName: 'properties.keySize',
          type: {
            name: 'Number'
          }
        },
        productType: {
          required: false,
          serializedName: 'properties.productType',
          type: {
            name: 'Enum',
            allowedValues: [ 'StandardDomainValidatedSsl', 'StandardDomainValidatedWildCardSsl' ]
          }
        },
        autoRenew: {
          required: false,
          serializedName: 'properties.autoRenew',
          type: {
            name: 'Boolean'
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'Enum',
            allowedValues: [ 'Succeeded', 'Failed', 'Canceled', 'InProgress', 'Deleting' ]
          }
        },
        status: {
          required: false,
          serializedName: 'properties.status',
          type: {
            name: 'Enum',
            allowedValues: [ 'Pendingissuance', 'Issued', 'Revoked', 'Canceled', 'Denied', 'Pendingrevocation', 'PendingRekey', 'Unused', 'Expired', 'NotSubmitted' ]
          }
        },
        signedCertificate: {
          required: false,
          serializedName: 'properties.signedCertificate',
          type: {
            name: 'Composite',
            className: 'CertificateDetails'
          }
        },
        csr: {
          required: false,
          serializedName: 'properties.csr',
          type: {
            name: 'String'
          }
        },
        intermediate: {
          required: false,
          serializedName: 'properties.intermediate',
          type: {
            name: 'Composite',
            className: 'CertificateDetails'
          }
        },
        root: {
          required: false,
          serializedName: 'properties.root',
          type: {
            name: 'Composite',
            className: 'CertificateDetails'
          }
        },
        serialNumber: {
          required: false,
          serializedName: 'properties.serialNumber',
          type: {
            name: 'String'
          }
        },
        lastCertificateIssuanceTime: {
          required: false,
          serializedName: 'properties.lastCertificateIssuanceTime',
          type: {
            name: 'DateTime'
          }
        },
        expirationTime: {
          required: false,
          serializedName: 'properties.expirationTime',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = CertificateOrder;