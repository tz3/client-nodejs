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
import { AddFilterRequest } from '../models';
// @ts-ignore
import { DeleteFilterResponse200 } from '../models';
// @ts-ignore
import { DeleteFiltersResponse200 } from '../models';
// @ts-ignore
import { GetFilterResponse200 } from '../models';
// @ts-ignore
import { GetFiltersResponse200 } from '../models';
// @ts-ignore
import { PostFilterResponse200 } from '../models';
// @ts-ignore
import { UpdateFilterRequest } from '../models';
/**
 * FiltersApi - axios parameter creator
 * @export
 */
export const FiltersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with \'AND\', and only two second level condition groups are supported of which one must be glued with \'AND\' and the second with \'OR\'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
         * @summary Add a new filter
         * @param {AddFilterRequest} [AddFilterRequest] 

         * @throws {RequiredError}
         */
        addFilter: async (AddFilterRequest?: AddFilterRequest, ): Promise<RequestArgs> => {
            const localVarPath = `/filters`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["deals:full", "activities:full", "contacts:full"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(AddFilterRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Marks a filter as deleted.
         * @summary Delete a filter
         * @param {number} id The ID of the filter

         * @throws {RequiredError}
         */
        deleteFilter: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteFilter', 'id', id)
            const localVarPath = `/filters/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["deals:full", "activities:full", "contacts:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Marks multiple filters as deleted.
         * @summary Delete multiple filters in bulk
         * @param {string} ids The comma-separated filter IDs to delete

         * @throws {RequiredError}
         */
        deleteFilters: async (ids: string, ): Promise<RequestArgs> => {
            // verify required parameter 'ids' is not null or undefined
            assertParamExists('deleteFilters', 'ids', ids)
            const localVarPath = `/filters`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["deals:full", "activities:full", "contacts:full"], configuration)

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
         * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
         * @summary Get one filter
         * @param {number} id The ID of the filter

         * @throws {RequiredError}
         */
        getFilter: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFilter', 'id', id)
            const localVarPath = `/filters/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["deals:read", "deals:full", "activities:read", "activities:full", "contacts:read", "contacts:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
         * @summary Get all filter helpers

         * @throws {RequiredError}
         */
        getFilterHelpers: async (): Promise<RequestArgs> => {
            const localVarPath = `/filters/helpers`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["deals:read", "deals:full", "activities:read", "activities:full", "contacts:read", "contacts:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns data about all filters.
         * @summary Get all filters
         * @param {'deals' | 'leads' | 'org' | 'people' | 'products' | 'activity' | 'projects'} [type] The types of filters to fetch

         * @throws {RequiredError}
         */
        getFilters: async (type?: 'deals' | 'leads' | 'org' | 'people' | 'products' | 'activity' | 'projects', ): Promise<RequestArgs> => {
            const localVarPath = `/filters`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["deals:read", "deals:full", "activities:read", "activities:full", "contacts:read", "contacts:full"], configuration)

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * Updates an existing filter.
         * @summary Update filter
         * @param {number} id The ID of the filter
         * @param {UpdateFilterRequest} [UpdateFilterRequest] 

         * @throws {RequiredError}
         */
        updateFilter: async (id: number, UpdateFilterRequest?: UpdateFilterRequest, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateFilter', 'id', id)
            const localVarPath = `/filters/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["deals:full", "activities:full", "contacts:full"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(UpdateFilterRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};


/**
 * FiltersApi - functional programming interface
 * @export
 */
export const FiltersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FiltersApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with \'AND\', and only two second level condition groups are supported of which one must be glued with \'AND\' and the second with \'OR\'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
         * @summary Add a new filter
         * @param {AddFilterRequest} [AddFilterRequest] 

         * @throws {RequiredError}
         */
        async addFilter(AddFilterRequest?: AddFilterRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<PostFilterResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFilter(AddFilterRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Marks a filter as deleted.
         * @summary Delete a filter
         * @param {number} id The ID of the filter

         * @throws {RequiredError}
         */
        async deleteFilter(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteFilterResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFilter(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Marks multiple filters as deleted.
         * @summary Delete multiple filters in bulk
         * @param {string} ids The comma-separated filter IDs to delete

         * @throws {RequiredError}
         */
        async deleteFilters(ids: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteFiltersResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFilters(ids, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
         * @summary Get one filter
         * @param {number} id The ID of the filter

         * @throws {RequiredError}
         */
        async getFilter(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetFilterResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilter(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
         * @summary Get all filter helpers

         * @throws {RequiredError}
         */
        async getFilterHelpers(): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilterHelpers();
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns data about all filters.
         * @summary Get all filters
         * @param {'deals' | 'leads' | 'org' | 'people' | 'products' | 'activity' | 'projects'} [type] The types of filters to fetch

         * @throws {RequiredError}
         */
        async getFilters(type?: 'deals' | 'leads' | 'org' | 'people' | 'products' | 'activity' | 'projects', ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetFiltersResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilters(type, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates an existing filter.
         * @summary Update filter
         * @param {number} id The ID of the filter
         * @param {UpdateFilterRequest} [UpdateFilterRequest] 

         * @throws {RequiredError}
         */
        async updateFilter(id: number, UpdateFilterRequest?: UpdateFilterRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<PostFilterResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFilter(id, UpdateFilterRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FiltersApi - factory interface
 * @export
 */
export const FiltersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FiltersApiFp(configuration)
    return {
        /**
         * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with \'AND\', and only two second level condition groups are supported of which one must be glued with \'AND\' and the second with \'OR\'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
         * @summary Add a new filter
         * @param {FiltersApiAddFilterRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        addFilter(requestParameters: FiltersApiAddFilterRequest = {}, ): Promise<PostFilterResponse200> {
            return localVarFp.addFilter(requestParameters.AddFilterRequest, ).then((request) => request(axios, basePath));
        },
        /**
         * Marks a filter as deleted.
         * @summary Delete a filter
         * @param {FiltersApiDeleteFilterRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteFilter(requestParameters: FiltersApiDeleteFilterRequest, ): Promise<DeleteFilterResponse200> {
            return localVarFp.deleteFilter(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Marks multiple filters as deleted.
         * @summary Delete multiple filters in bulk
         * @param {FiltersApiDeleteFiltersRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteFilters(requestParameters: FiltersApiDeleteFiltersRequest, ): Promise<DeleteFiltersResponse200> {
            return localVarFp.deleteFilters(requestParameters.ids, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
         * @summary Get one filter
         * @param {FiltersApiGetFilterRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getFilter(requestParameters: FiltersApiGetFilterRequest, ): Promise<GetFilterResponse200> {
            return localVarFp.getFilter(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
         * @summary Get all filter helpers

         * @throws {RequiredError}
         */
        getFilterHelpers(): Promise<object> {
            return localVarFp.getFilterHelpers().then((request) => request(axios, basePath));
        },
        /**
         * Returns data about all filters.
         * @summary Get all filters
         * @param {FiltersApiGetFiltersRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getFilters(requestParameters: FiltersApiGetFiltersRequest = {}, ): Promise<GetFiltersResponse200> {
            return localVarFp.getFilters(requestParameters.type, ).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing filter.
         * @summary Update filter
         * @param {FiltersApiUpdateFilterRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        updateFilter(requestParameters: FiltersApiUpdateFilterRequest, ): Promise<PostFilterResponse200> {
            return localVarFp.updateFilter(requestParameters.id, requestParameters.UpdateFilterRequest, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addFilter operation in FiltersApi.
 * @export
 * @interface FiltersApiAddFilterRequest
 */
export interface FiltersApiAddFilterRequest {
    /**
     * 
     * @type {AddFilterRequest}
     * @memberof FiltersApiAddFilter
     */
    readonly AddFilterRequest?: AddFilterRequest
}

/**
 * Request parameters for deleteFilter operation in FiltersApi.
 * @export
 * @interface FiltersApiDeleteFilterRequest
 */
export interface FiltersApiDeleteFilterRequest {
    /**
     * The ID of the filter
     * @type {number}
     * @memberof FiltersApiDeleteFilter
     */
    readonly id: number
}

/**
 * Request parameters for deleteFilters operation in FiltersApi.
 * @export
 * @interface FiltersApiDeleteFiltersRequest
 */
export interface FiltersApiDeleteFiltersRequest {
    /**
     * The comma-separated filter IDs to delete
     * @type {string}
     * @memberof FiltersApiDeleteFilters
     */
    readonly ids: string
}

/**
 * Request parameters for getFilter operation in FiltersApi.
 * @export
 * @interface FiltersApiGetFilterRequest
 */
export interface FiltersApiGetFilterRequest {
    /**
     * The ID of the filter
     * @type {number}
     * @memberof FiltersApiGetFilter
     */
    readonly id: number
}

/**
 * Request parameters for getFilters operation in FiltersApi.
 * @export
 * @interface FiltersApiGetFiltersRequest
 */
export interface FiltersApiGetFiltersRequest {
    /**
     * The types of filters to fetch
     * @type {'deals' | 'leads' | 'org' | 'people' | 'products' | 'activity' | 'projects'}
     * @memberof FiltersApiGetFilters
     */
    readonly type?: 'deals' | 'leads' | 'org' | 'people' | 'products' | 'activity' | 'projects'
}

/**
 * Request parameters for updateFilter operation in FiltersApi.
 * @export
 * @interface FiltersApiUpdateFilterRequest
 */
export interface FiltersApiUpdateFilterRequest {
    /**
     * The ID of the filter
     * @type {number}
     * @memberof FiltersApiUpdateFilter
     */
    readonly id: number

    /**
     * 
     * @type {UpdateFilterRequest}
     * @memberof FiltersApiUpdateFilter
     */
    readonly UpdateFilterRequest?: UpdateFilterRequest
}

/**
 * FiltersApi - object-oriented interface
 * @export
 * @class FiltersApi
 * @extends {BaseAPI}
 */
export class FiltersApi extends BaseAPI {
    /**
     * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with \'AND\', and only two second level condition groups are supported of which one must be glued with \'AND\' and the second with \'OR\'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * @summary Add a new filter
     * @param {FiltersApiAddFilterRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof FiltersApi
     */
    public addFilter(requestParameters: FiltersApiAddFilterRequest = {}, ) {
        return FiltersApiFp(this.configuration).addFilter(requestParameters.AddFilterRequest, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks a filter as deleted.
     * @summary Delete a filter
     * @param {FiltersApiDeleteFilterRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof FiltersApi
     */
    public deleteFilter(requestParameters: FiltersApiDeleteFilterRequest, ) {
        return FiltersApiFp(this.configuration).deleteFilter(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks multiple filters as deleted.
     * @summary Delete multiple filters in bulk
     * @param {FiltersApiDeleteFiltersRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof FiltersApi
     */
    public deleteFilters(requestParameters: FiltersApiDeleteFiltersRequest, ) {
        return FiltersApiFp(this.configuration).deleteFilters(requestParameters.ids, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
     * @summary Get one filter
     * @param {FiltersApiGetFilterRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof FiltersApi
     */
    public getFilter(requestParameters: FiltersApiGetFilterRequest, ) {
        return FiltersApiFp(this.configuration).getFilter(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * @summary Get all filter helpers

     * @throws {RequiredError}
     * @memberof FiltersApi
     */
    public getFilterHelpers() {
        return FiltersApiFp(this.configuration).getFilterHelpers().then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns data about all filters.
     * @summary Get all filters
     * @param {FiltersApiGetFiltersRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof FiltersApi
     */
    public getFilters(requestParameters: FiltersApiGetFiltersRequest = {}, ) {
        return FiltersApiFp(this.configuration).getFilters(requestParameters.type, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an existing filter.
     * @summary Update filter
     * @param {FiltersApiUpdateFilterRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof FiltersApi
     */
    public updateFilter(requestParameters: FiltersApiUpdateFilterRequest, ) {
        return FiltersApiFp(this.configuration).updateFilter(requestParameters.id, requestParameters.UpdateFilterRequest, ).then((request) => request(this.axios, this.basePath));
    }
}