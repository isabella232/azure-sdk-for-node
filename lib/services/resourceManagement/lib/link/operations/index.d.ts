/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * ResourceLinks
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ManagementLinkClient.
 */
export interface ResourceLinks {

    /**
     * Deletes a resource link.
     *
     * @param {string} linkId The fully qualified Id of the resource link. For
     * example,
     * /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(linkId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(linkId: string, callback: ServiceCallback<void>): void;

    /**
     * Create a resource link.
     *
     * @param {string} linkId The fully qualified Id of the resource link. For
     * example,
     * /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
     * 
     * @param {object} parameters Create or update resource link parameters.
     * 
     * @param {object} [parameters.properties]
     * 
     * @param {string} parameters.properties.targetId The fully qualified target
     * resource Id. For example,
     * /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite.
     * 
     * @param {string} [parameters.properties.notes] The resource link notes.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(linkId: string, parameters: models.ResourceLink, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceLink>): void;
    createOrUpdate(linkId: string, parameters: models.ResourceLink, callback: ServiceCallback<models.ResourceLink>): void;

    /**
     * Gets a resource link.
     *
     * @param {string} linkId The fully qualified Id of the resource link. For
     * example,
     * /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(linkId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceLink>): void;
    get(linkId: string, callback: ServiceCallback<models.ResourceLink>): void;

    /**
     * Gets a list of resource links under the subscription.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the list resource
     * links operation. The supported filter for list resource links is targetId.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAtSubscription(options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceLinkResult>): void;
    listAtSubscription(callback: ServiceCallback<models.ResourceLinkResult>): void;

    /**
     * Gets a list of resource links at and below the specified source scope. For
     * example, to list resource links at and under a resource group, set the
     * scope to
     * /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
     *
     * @param {string} scope The fully qualified Id of the source resource scope.
     * For example, to list resource links at and under a resource group, set the
     * scope to
     * /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the list resource
     * links operation. To list links only at the specified scope (not below the
     * scope), use Filter.atScope(). Possible values include: 'atScope()'
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAtSourceScope(scope: string, options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceLinkResult>): void;
    listAtSourceScope(scope: string, callback: ServiceCallback<models.ResourceLinkResult>): void;

    /**
     * Gets a list of resource links under the subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAtSubscriptionNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceLinkResult>): void;
    listAtSubscriptionNext(nextPageLink: string, callback: ServiceCallback<models.ResourceLinkResult>): void;

    /**
     * Gets a list of resource links at and below the specified source scope. For
     * example, to list resource links at and under a resource group, set the
     * scope to
     * /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAtSourceScopeNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceLinkResult>): void;
    listAtSourceScopeNext(nextPageLink: string, callback: ServiceCallback<models.ResourceLinkResult>): void;
}
