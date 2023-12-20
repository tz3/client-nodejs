/* tslint:disable */
/* eslint-disable */
/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AddOrganizationRelationshipRequest } from '../model';
// @ts-ignore
import { AddOrganizationRelationshipResponse200 } from '../model';
// @ts-ignore
import { DeleteOrganizationRelationshipResponse200 } from '../model';
// @ts-ignore
import { GetOrganizationRelationshipResponse200 } from '../model';
// @ts-ignore
import { GetOrganizationRelationshipsResponse200 } from '../model';
// @ts-ignore
import { OrganizationRelationship } from '../model';
// @ts-ignore
import { UpdateOrganizationRelationshipResponse200 } from '../model';
/**
 * OrganizationRelationshipsApi - axios parameter creator
 * @export
 */
export const OrganizationRelationshipsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates and returns an organization relationship.
         * @summary Create an organization relationship
         * @param {AddOrganizationRelationshipRequest} [AddOrganizationRelationshipRequest] 

         * @throws {RequiredError}
         */
        addOrganizationRelationship: async (AddOrganizationRelationshipRequest?: AddOrganizationRelationshipRequest, ): Promise<RequestArgs> => {
            const localVarPath = `/organizationRelationships`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["contacts:full"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(AddOrganizationRelationshipRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an organization relationship and returns the deleted ID.
         * @summary Delete an organization relationship
         * @param {number} id The ID of the organization relationship

         * @throws {RequiredError}
         */
        deleteOrganizationRelationship: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteOrganizationRelationship', 'id', id)
            const localVarPath = `/organizationRelationships/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["contacts:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finds and returns an organization relationship from its ID.
         * @summary Get one organization relationship
         * @param {number} id The ID of the organization relationship
         * @param {number} [org_id] The ID of the base organization for the returned calculated values

         * @throws {RequiredError}
         */
        getOrganizationRelationship: async (id: number, org_id?: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getOrganizationRelationship', 'id', id)
            const localVarPath = `/organizationRelationships/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["contacts:read", "contacts:full"], configuration)

            if (org_id !== undefined) {
                localVarQueryParameter['org_id'] = org_id;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets all of the relationships for a supplied organization ID.
         * @summary Get all relationships for organization
         * @param {number} org_id The ID of the organization to get relationships for

         * @throws {RequiredError}
         */
        getOrganizationRelationships: async (org_id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'org_id' is not null or undefined
            assertParamExists('getOrganizationRelationships', 'org_id', org_id)
            const localVarPath = `/organizationRelationships`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["contacts:read", "contacts:full"], configuration)

            if (org_id !== undefined) {
                localVarQueryParameter['org_id'] = org_id;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates and returns an organization relationship.
         * @summary Update an organization relationship
         * @param {number} id The ID of the organization relationship
         * @param {OrganizationRelationship} [OrganizationRelationship] 

         * @throws {RequiredError}
         */
        updateOrganizationRelationship: async (id: number, OrganizationRelationship?: OrganizationRelationship, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateOrganizationRelationship', 'id', id)
            const localVarPath = `/organizationRelationships/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["contacts:full"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(OrganizationRelationship, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizationRelationshipsApi - functional programming interface
 * @export
 */
export const OrganizationRelationshipsApiFp = function(configuration?: Configuration) {

    /**
    * Axios interceptor to add the SDK version as a User-Agent header
    * */
    globalAxios.interceptors.request.use(function (config) {
        const version = require("../../package.json").version;
        config.headers['User-Agent'] = `Pipedrive-SDK-Javascript-${version}`;
        return config;
    });

    /**
    * Axios response interceptor to modify response structure
    */
    globalAxios.interceptors.response.use(function (response) {
        return response.hasOwnProperty('success') ? response : response.data;
    }, function (error) {
        if(error?.response?.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    });
    const localVarAxiosParamCreator = OrganizationRelationshipsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates and returns an organization relationship.
         * @summary Create an organization relationship
         * @param {AddOrganizationRelationshipRequest} [AddOrganizationRelationshipRequest] 

         * @throws {RequiredError}
         */
        async addOrganizationRelationship(AddOrganizationRelationshipRequest?: AddOrganizationRelationshipRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AddOrganizationRelationshipResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addOrganizationRelationship(AddOrganizationRelationshipRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an organization relationship and returns the deleted ID.
         * @summary Delete an organization relationship
         * @param {number} id The ID of the organization relationship

         * @throws {RequiredError}
         */
        async deleteOrganizationRelationship(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteOrganizationRelationshipResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOrganizationRelationship(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Finds and returns an organization relationship from its ID.
         * @summary Get one organization relationship
         * @param {number} id The ID of the organization relationship
         * @param {number} [org_id] The ID of the base organization for the returned calculated values

         * @throws {RequiredError}
         */
        async getOrganizationRelationship(id: number, org_id?: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetOrganizationRelationshipResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrganizationRelationship(id, org_id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets all of the relationships for a supplied organization ID.
         * @summary Get all relationships for organization
         * @param {number} org_id The ID of the organization to get relationships for

         * @throws {RequiredError}
         */
        async getOrganizationRelationships(org_id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetOrganizationRelationshipsResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrganizationRelationships(org_id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates and returns an organization relationship.
         * @summary Update an organization relationship
         * @param {number} id The ID of the organization relationship
         * @param {OrganizationRelationship} [OrganizationRelationship] 

         * @throws {RequiredError}
         */
        async updateOrganizationRelationship(id: number, OrganizationRelationship?: OrganizationRelationship, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<UpdateOrganizationRelationshipResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOrganizationRelationship(id, OrganizationRelationship, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizationRelationshipsApi - factory interface
 * @export
 */
export const OrganizationRelationshipsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizationRelationshipsApiFp(configuration)
    return {
        /**
         * Creates and returns an organization relationship.
         * @summary Create an organization relationship
         * @param {OrganizationRelationshipsApiAddOrganizationRelationshipRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        addOrganizationRelationship(requestParameters: OrganizationRelationshipsApiAddOrganizationRelationshipRequest = {}, ): Promise<AddOrganizationRelationshipResponse200> {
            return localVarFp.addOrganizationRelationship(requestParameters.AddOrganizationRelationshipRequest, ).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an organization relationship and returns the deleted ID.
         * @summary Delete an organization relationship
         * @param {OrganizationRelationshipsApiDeleteOrganizationRelationshipRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteOrganizationRelationship(requestParameters: OrganizationRelationshipsApiDeleteOrganizationRelationshipRequest, ): Promise<DeleteOrganizationRelationshipResponse200> {
            return localVarFp.deleteOrganizationRelationship(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Finds and returns an organization relationship from its ID.
         * @summary Get one organization relationship
         * @param {OrganizationRelationshipsApiGetOrganizationRelationshipRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getOrganizationRelationship(requestParameters: OrganizationRelationshipsApiGetOrganizationRelationshipRequest, ): Promise<GetOrganizationRelationshipResponse200> {
            return localVarFp.getOrganizationRelationship(requestParameters.id, requestParameters.org_id, ).then((request) => request(axios, basePath));
        },
        /**
         * Gets all of the relationships for a supplied organization ID.
         * @summary Get all relationships for organization
         * @param {OrganizationRelationshipsApiGetOrganizationRelationshipsRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getOrganizationRelationships(requestParameters: OrganizationRelationshipsApiGetOrganizationRelationshipsRequest, ): Promise<GetOrganizationRelationshipsResponse200> {
            return localVarFp.getOrganizationRelationships(requestParameters.org_id, ).then((request) => request(axios, basePath));
        },
        /**
         * Updates and returns an organization relationship.
         * @summary Update an organization relationship
         * @param {OrganizationRelationshipsApiUpdateOrganizationRelationshipRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        updateOrganizationRelationship(requestParameters: OrganizationRelationshipsApiUpdateOrganizationRelationshipRequest, ): Promise<UpdateOrganizationRelationshipResponse200> {
            return localVarFp.updateOrganizationRelationship(requestParameters.id, requestParameters.OrganizationRelationship, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addOrganizationRelationship operation in OrganizationRelationshipsApi.
 * @export
 * @interface OrganizationRelationshipsApiAddOrganizationRelationshipRequest
 */
export interface OrganizationRelationshipsApiAddOrganizationRelationshipRequest {
    /**
     * 
     * @type {AddOrganizationRelationshipRequest}
     * @memberof OrganizationRelationshipsApiAddOrganizationRelationship
     */
    readonly AddOrganizationRelationshipRequest?: AddOrganizationRelationshipRequest
}

/**
 * Request parameters for deleteOrganizationRelationship operation in OrganizationRelationshipsApi.
 * @export
 * @interface OrganizationRelationshipsApiDeleteOrganizationRelationshipRequest
 */
export interface OrganizationRelationshipsApiDeleteOrganizationRelationshipRequest {
    /**
     * The ID of the organization relationship
     * @type {number}
     * @memberof OrganizationRelationshipsApiDeleteOrganizationRelationship
     */
    readonly id: number
}

/**
 * Request parameters for getOrganizationRelationship operation in OrganizationRelationshipsApi.
 * @export
 * @interface OrganizationRelationshipsApiGetOrganizationRelationshipRequest
 */
export interface OrganizationRelationshipsApiGetOrganizationRelationshipRequest {
    /**
     * The ID of the organization relationship
     * @type {number}
     * @memberof OrganizationRelationshipsApiGetOrganizationRelationship
     */
    readonly id: number

    /**
     * The ID of the base organization for the returned calculated values
     * @type {number}
     * @memberof OrganizationRelationshipsApiGetOrganizationRelationship
     */
    readonly org_id?: number
}

/**
 * Request parameters for getOrganizationRelationships operation in OrganizationRelationshipsApi.
 * @export
 * @interface OrganizationRelationshipsApiGetOrganizationRelationshipsRequest
 */
export interface OrganizationRelationshipsApiGetOrganizationRelationshipsRequest {
    /**
     * The ID of the organization to get relationships for
     * @type {number}
     * @memberof OrganizationRelationshipsApiGetOrganizationRelationships
     */
    readonly org_id: number
}

/**
 * Request parameters for updateOrganizationRelationship operation in OrganizationRelationshipsApi.
 * @export
 * @interface OrganizationRelationshipsApiUpdateOrganizationRelationshipRequest
 */
export interface OrganizationRelationshipsApiUpdateOrganizationRelationshipRequest {
    /**
     * The ID of the organization relationship
     * @type {number}
     * @memberof OrganizationRelationshipsApiUpdateOrganizationRelationship
     */
    readonly id: number

    /**
     * 
     * @type {OrganizationRelationship}
     * @memberof OrganizationRelationshipsApiUpdateOrganizationRelationship
     */
    readonly OrganizationRelationship?: OrganizationRelationship
}

/**
 * OrganizationRelationshipsApi - object-oriented interface
 * @export
 * @class OrganizationRelationshipsApi
 * @extends {BaseAPI}
 */
export class OrganizationRelationshipsApi extends BaseAPI {
    /**
     * Creates and returns an organization relationship.
     * @summary Create an organization relationship
     * @param {OrganizationRelationshipsApiAddOrganizationRelationshipRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof OrganizationRelationshipsApi
     */
    public addOrganizationRelationship(requestParameters: OrganizationRelationshipsApiAddOrganizationRelationshipRequest = {}, ) {
        return OrganizationRelationshipsApiFp(this.configuration).addOrganizationRelationship(requestParameters.AddOrganizationRelationshipRequest, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an organization relationship and returns the deleted ID.
     * @summary Delete an organization relationship
     * @param {OrganizationRelationshipsApiDeleteOrganizationRelationshipRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof OrganizationRelationshipsApi
     */
    public deleteOrganizationRelationship(requestParameters: OrganizationRelationshipsApiDeleteOrganizationRelationshipRequest, ) {
        return OrganizationRelationshipsApiFp(this.configuration).deleteOrganizationRelationship(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finds and returns an organization relationship from its ID.
     * @summary Get one organization relationship
     * @param {OrganizationRelationshipsApiGetOrganizationRelationshipRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof OrganizationRelationshipsApi
     */
    public getOrganizationRelationship(requestParameters: OrganizationRelationshipsApiGetOrganizationRelationshipRequest, ) {
        return OrganizationRelationshipsApiFp(this.configuration).getOrganizationRelationship(requestParameters.id, requestParameters.org_id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets all of the relationships for a supplied organization ID.
     * @summary Get all relationships for organization
     * @param {OrganizationRelationshipsApiGetOrganizationRelationshipsRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof OrganizationRelationshipsApi
     */
    public getOrganizationRelationships(requestParameters: OrganizationRelationshipsApiGetOrganizationRelationshipsRequest, ) {
        return OrganizationRelationshipsApiFp(this.configuration).getOrganizationRelationships(requestParameters.org_id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates and returns an organization relationship.
     * @summary Update an organization relationship
     * @param {OrganizationRelationshipsApiUpdateOrganizationRelationshipRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof OrganizationRelationshipsApi
     */
    public updateOrganizationRelationship(requestParameters: OrganizationRelationshipsApiUpdateOrganizationRelationshipRequest, ) {
        return OrganizationRelationshipsApiFp(this.configuration).updateOrganizationRelationship(requestParameters.id, requestParameters.OrganizationRelationship, ).then((request) => request(this.axios, this.basePath));
    }
}
