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
import { AddActivityTypeRequest } from '../model';
// @ts-ignore
import { CreateUpdateDeleteActivityTypeResponse200 } from '../model';
// @ts-ignore
import { DeleteActivityTypesResponse200 } from '../model';
// @ts-ignore
import { GetActivityTypesResponse200 } from '../model';
// @ts-ignore
import { UpdateActivityTypeRequest } from '../model';
/**
 * ActivityTypesApi - axios parameter creator
 * @export
 */
export const ActivityTypesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a new activity type.
         * @summary Add new activity type
         * @param {AddActivityTypeRequest} [AddActivityTypeRequest] 

         * @throws {RequiredError}
         */
        addActivityType: async (AddActivityTypeRequest?: AddActivityTypeRequest, ): Promise<RequestArgs> => {
            const localVarPath = `/activityTypes`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["admin"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(AddActivityTypeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Marks an activity type as deleted.
         * @summary Delete an activity type
         * @param {number} id The ID of the activity type

         * @throws {RequiredError}
         */
        deleteActivityType: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteActivityType', 'id', id)
            const localVarPath = `/activityTypes/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["admin"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Marks multiple activity types as deleted.
         * @summary Delete multiple activity types in bulk
         * @param {string} ids The comma-separated activity type IDs

         * @throws {RequiredError}
         */
        deleteActivityTypes: async (ids: string, ): Promise<RequestArgs> => {
            // verify required parameter 'ids' is not null or undefined
            assertParamExists('deleteActivityTypes', 'ids', ids)
            const localVarPath = `/activityTypes`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["admin"], configuration)

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
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
         * Returns all activity types.
         * @summary Get all activity types

         * @throws {RequiredError}
         */
        getActivityTypes: async (): Promise<RequestArgs> => {
            const localVarPath = `/activityTypes`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["activities:read", "activities:full", "admin"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates an activity type.
         * @summary Update an activity type
         * @param {number} id The ID of the activity type
         * @param {UpdateActivityTypeRequest} [UpdateActivityTypeRequest] 

         * @throws {RequiredError}
         */
        updateActivityType: async (id: number, UpdateActivityTypeRequest?: UpdateActivityTypeRequest, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateActivityType', 'id', id)
            const localVarPath = `/activityTypes/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["admin"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(UpdateActivityTypeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ActivityTypesApi - functional programming interface
 * @export
 */
export const ActivityTypesApiFp = function(configuration?: Configuration) {

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
    const localVarAxiosParamCreator = ActivityTypesApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a new activity type.
         * @summary Add new activity type
         * @param {AddActivityTypeRequest} [AddActivityTypeRequest] 

         * @throws {RequiredError}
         */
        async addActivityType(AddActivityTypeRequest?: AddActivityTypeRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<CreateUpdateDeleteActivityTypeResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addActivityType(AddActivityTypeRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Marks an activity type as deleted.
         * @summary Delete an activity type
         * @param {number} id The ID of the activity type

         * @throws {RequiredError}
         */
        async deleteActivityType(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<CreateUpdateDeleteActivityTypeResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteActivityType(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Marks multiple activity types as deleted.
         * @summary Delete multiple activity types in bulk
         * @param {string} ids The comma-separated activity type IDs

         * @throws {RequiredError}
         */
        async deleteActivityTypes(ids: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteActivityTypesResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteActivityTypes(ids, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all activity types.
         * @summary Get all activity types

         * @throws {RequiredError}
         */
        async getActivityTypes(): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetActivityTypesResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActivityTypes();
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates an activity type.
         * @summary Update an activity type
         * @param {number} id The ID of the activity type
         * @param {UpdateActivityTypeRequest} [UpdateActivityTypeRequest] 

         * @throws {RequiredError}
         */
        async updateActivityType(id: number, UpdateActivityTypeRequest?: UpdateActivityTypeRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<CreateUpdateDeleteActivityTypeResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateActivityType(id, UpdateActivityTypeRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ActivityTypesApi - factory interface
 * @export
 */
export const ActivityTypesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ActivityTypesApiFp(configuration)
    return {
        /**
         * Adds a new activity type.
         * @summary Add new activity type
         * @param {ActivityTypesApiAddActivityTypeRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        addActivityType(requestParameters: ActivityTypesApiAddActivityTypeRequest = {}, ): Promise<CreateUpdateDeleteActivityTypeResponse200> {
            return localVarFp.addActivityType(requestParameters.AddActivityTypeRequest, ).then((request) => request(axios, basePath));
        },
        /**
         * Marks an activity type as deleted.
         * @summary Delete an activity type
         * @param {ActivityTypesApiDeleteActivityTypeRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteActivityType(requestParameters: ActivityTypesApiDeleteActivityTypeRequest, ): Promise<CreateUpdateDeleteActivityTypeResponse200> {
            return localVarFp.deleteActivityType(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Marks multiple activity types as deleted.
         * @summary Delete multiple activity types in bulk
         * @param {ActivityTypesApiDeleteActivityTypesRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteActivityTypes(requestParameters: ActivityTypesApiDeleteActivityTypesRequest, ): Promise<DeleteActivityTypesResponse200> {
            return localVarFp.deleteActivityTypes(requestParameters.ids, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns all activity types.
         * @summary Get all activity types

         * @throws {RequiredError}
         */
        getActivityTypes(): Promise<GetActivityTypesResponse200> {
            return localVarFp.getActivityTypes().then((request) => request(axios, basePath));
        },
        /**
         * Updates an activity type.
         * @summary Update an activity type
         * @param {ActivityTypesApiUpdateActivityTypeRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        updateActivityType(requestParameters: ActivityTypesApiUpdateActivityTypeRequest, ): Promise<CreateUpdateDeleteActivityTypeResponse200> {
            return localVarFp.updateActivityType(requestParameters.id, requestParameters.UpdateActivityTypeRequest, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addActivityType operation in ActivityTypesApi.
 * @export
 * @interface ActivityTypesApiAddActivityTypeRequest
 */
export interface ActivityTypesApiAddActivityTypeRequest {
    /**
     * 
     * @type {AddActivityTypeRequest}
     * @memberof ActivityTypesApiAddActivityType
     */
    readonly AddActivityTypeRequest?: AddActivityTypeRequest
}

/**
 * Request parameters for deleteActivityType operation in ActivityTypesApi.
 * @export
 * @interface ActivityTypesApiDeleteActivityTypeRequest
 */
export interface ActivityTypesApiDeleteActivityTypeRequest {
    /**
     * The ID of the activity type
     * @type {number}
     * @memberof ActivityTypesApiDeleteActivityType
     */
    readonly id: number
}

/**
 * Request parameters for deleteActivityTypes operation in ActivityTypesApi.
 * @export
 * @interface ActivityTypesApiDeleteActivityTypesRequest
 */
export interface ActivityTypesApiDeleteActivityTypesRequest {
    /**
     * The comma-separated activity type IDs
     * @type {string}
     * @memberof ActivityTypesApiDeleteActivityTypes
     */
    readonly ids: string
}

/**
 * Request parameters for updateActivityType operation in ActivityTypesApi.
 * @export
 * @interface ActivityTypesApiUpdateActivityTypeRequest
 */
export interface ActivityTypesApiUpdateActivityTypeRequest {
    /**
     * The ID of the activity type
     * @type {number}
     * @memberof ActivityTypesApiUpdateActivityType
     */
    readonly id: number

    /**
     * 
     * @type {UpdateActivityTypeRequest}
     * @memberof ActivityTypesApiUpdateActivityType
     */
    readonly UpdateActivityTypeRequest?: UpdateActivityTypeRequest
}

/**
 * ActivityTypesApi - object-oriented interface
 * @export
 * @class ActivityTypesApi
 * @extends {BaseAPI}
 */
export class ActivityTypesApi extends BaseAPI {
    /**
     * Adds a new activity type.
     * @summary Add new activity type
     * @param {ActivityTypesApiAddActivityTypeRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ActivityTypesApi
     */
    public addActivityType(requestParameters: ActivityTypesApiAddActivityTypeRequest = {}, ) {
        return ActivityTypesApiFp(this.configuration).addActivityType(requestParameters.AddActivityTypeRequest, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks an activity type as deleted.
     * @summary Delete an activity type
     * @param {ActivityTypesApiDeleteActivityTypeRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ActivityTypesApi
     */
    public deleteActivityType(requestParameters: ActivityTypesApiDeleteActivityTypeRequest, ) {
        return ActivityTypesApiFp(this.configuration).deleteActivityType(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks multiple activity types as deleted.
     * @summary Delete multiple activity types in bulk
     * @param {ActivityTypesApiDeleteActivityTypesRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ActivityTypesApi
     */
    public deleteActivityTypes(requestParameters: ActivityTypesApiDeleteActivityTypesRequest, ) {
        return ActivityTypesApiFp(this.configuration).deleteActivityTypes(requestParameters.ids, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all activity types.
     * @summary Get all activity types

     * @throws {RequiredError}
     * @memberof ActivityTypesApi
     */
    public getActivityTypes() {
        return ActivityTypesApiFp(this.configuration).getActivityTypes().then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an activity type.
     * @summary Update an activity type
     * @param {ActivityTypesApiUpdateActivityTypeRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ActivityTypesApi
     */
    public updateActivityType(requestParameters: ActivityTypesApiUpdateActivityTypeRequest, ) {
        return ActivityTypesApiFp(this.configuration).updateActivityType(requestParameters.id, requestParameters.UpdateActivityTypeRequest, ).then((request) => request(this.axios, this.basePath));
    }
}
