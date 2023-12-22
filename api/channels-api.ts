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
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AddChannel200Response } from '../models';
// @ts-ignore
import { AddChannel400Response } from '../models';
// @ts-ignore
import { AddChannel403Response } from '../models';
// @ts-ignore
import { AddChannelRequest } from '../models';
// @ts-ignore
import { DeleteChannel200Response } from '../models';
// @ts-ignore
import { DeleteConversation403Response } from '../models';
// @ts-ignore
import { DeleteConversation404Response } from '../models';
// @ts-ignore
import { ReceiveMessage200Response } from '../models';
// @ts-ignore
import { ReceiveMessage400Response } from '../models';
// @ts-ignore
import { ReceiveMessageRequest } from '../models';
/**
 * ChannelsApi - axios parameter creator
 * @export
 */
export const ChannelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Add a channel
         * @param {AddChannelRequest} [AddChannelRequest] 

         * @throws {RequiredError}
         */
        addChannel: async (AddChannelRequest?: AddChannelRequest, ): Promise<RequestArgs> => {
            const localVarPath = `/channels`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["messengers-integration"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(AddChannelRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Delete a channel
         * @param {string} id The ID of the channel provided by the integration

         * @throws {RequiredError}
         */
        deleteChannel: async (id: string, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteChannel', 'id', id)
            const localVarPath = `/channels/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["messengers-integration"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Delete a conversation
         * @param {string} channel_id The ID of the channel provided by the integration
         * @param {string} conversation_id The ID of the conversation provided by the integration

         * @throws {RequiredError}
         */
        deleteConversation: async (channel_id: string, conversation_id: string, ): Promise<RequestArgs> => {
            // verify required parameter 'channel_id' is not null or undefined
            assertParamExists('deleteConversation', 'channel_id', channel_id)
            // verify required parameter 'conversation_id' is not null or undefined
            assertParamExists('deleteConversation', 'conversation_id', conversation_id)
            const localVarPath = `/channels/{channel-id}/conversations/{conversation-id}`
                .replace(`{${"channel-id"}}`, encodeURIComponent(String(channel_id)))
                .replace(`{${"conversation-id"}}`, encodeURIComponent(String(conversation_id)));
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["messengers-integration"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Receives an incoming message
         * @param {ReceiveMessageRequest} [ReceiveMessageRequest] 

         * @throws {RequiredError}
         */
        receiveMessage: async (ReceiveMessageRequest?: ReceiveMessageRequest, ): Promise<RequestArgs> => {
            const localVarPath = `/channels/messages/receive`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["messengers-integration"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(ReceiveMessageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChannelsApi - functional programming interface
 * @export
 */
export const ChannelsApiFp = function(configuration?: Configuration) {

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
    const localVarAxiosParamCreator = ChannelsApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Add a channel
         * @param {AddChannelRequest} [AddChannelRequest] 

         * @throws {RequiredError}
         */
        async addChannel(AddChannelRequest?: AddChannelRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AddChannel200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addChannel(AddChannelRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Delete a channel
         * @param {string} id The ID of the channel provided by the integration

         * @throws {RequiredError}
         */
        async deleteChannel(id: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteChannel200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteChannel(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Delete a conversation
         * @param {string} channel_id The ID of the channel provided by the integration
         * @param {string} conversation_id The ID of the conversation provided by the integration

         * @throws {RequiredError}
         */
        async deleteConversation(channel_id: string, conversation_id: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteChannel200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteConversation(channel_id, conversation_id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Receives an incoming message
         * @param {ReceiveMessageRequest} [ReceiveMessageRequest] 

         * @throws {RequiredError}
         */
        async receiveMessage(ReceiveMessageRequest?: ReceiveMessageRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<ReceiveMessage200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.receiveMessage(ReceiveMessageRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChannelsApi - factory interface
 * @export
 */
export const ChannelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChannelsApiFp(configuration)
    return {
        /**
         * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Add a channel
         * @param {ChannelsApiAddChannelRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        addChannel(requestParameters: ChannelsApiAddChannelRequest = {}, ): Promise<AddChannel200Response> {
            return localVarFp.addChannel(requestParameters.AddChannelRequest, ).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Delete a channel
         * @param {ChannelsApiDeleteChannelRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteChannel(requestParameters: ChannelsApiDeleteChannelRequest, ): Promise<DeleteChannel200Response> {
            return localVarFp.deleteChannel(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Delete a conversation
         * @param {ChannelsApiDeleteConversationRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteConversation(requestParameters: ChannelsApiDeleteConversationRequest, ): Promise<DeleteChannel200Response> {
            return localVarFp.deleteConversation(requestParameters.channel_id, requestParameters.conversation_id, ).then((request) => request(axios, basePath));
        },
        /**
         * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
         * @summary Receives an incoming message
         * @param {ChannelsApiReceiveMessageRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        receiveMessage(requestParameters: ChannelsApiReceiveMessageRequest = {}, ): Promise<ReceiveMessage200Response> {
            return localVarFp.receiveMessage(requestParameters.ReceiveMessageRequest, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addChannel operation in ChannelsApi.
 * @export
 * @interface ChannelsApiAddChannelRequest
 */
export interface ChannelsApiAddChannelRequest {
    /**
     * 
     * @type {AddChannelRequest}
     * @memberof ChannelsApiAddChannel
     */
    readonly AddChannelRequest?: AddChannelRequest
}

/**
 * Request parameters for deleteChannel operation in ChannelsApi.
 * @export
 * @interface ChannelsApiDeleteChannelRequest
 */
export interface ChannelsApiDeleteChannelRequest {
    /**
     * The ID of the channel provided by the integration
     * @type {string}
     * @memberof ChannelsApiDeleteChannel
     */
    readonly id: string
}

/**
 * Request parameters for deleteConversation operation in ChannelsApi.
 * @export
 * @interface ChannelsApiDeleteConversationRequest
 */
export interface ChannelsApiDeleteConversationRequest {
    /**
     * The ID of the channel provided by the integration
     * @type {string}
     * @memberof ChannelsApiDeleteConversation
     */
    readonly channel_id: string

    /**
     * The ID of the conversation provided by the integration
     * @type {string}
     * @memberof ChannelsApiDeleteConversation
     */
    readonly conversation_id: string
}

/**
 * Request parameters for receiveMessage operation in ChannelsApi.
 * @export
 * @interface ChannelsApiReceiveMessageRequest
 */
export interface ChannelsApiReceiveMessageRequest {
    /**
     * 
     * @type {ReceiveMessageRequest}
     * @memberof ChannelsApiReceiveMessage
     */
    readonly ReceiveMessageRequest?: ReceiveMessageRequest
}

/**
 * ChannelsApi - object-oriented interface
 * @export
 * @class ChannelsApi
 * @extends {BaseAPI}
 */
export class ChannelsApi extends BaseAPI {
    /**
     * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @summary Add a channel
     * @param {ChannelsApiAddChannelRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public addChannel(requestParameters: ChannelsApiAddChannelRequest = {}, ) {
        return ChannelsApiFp(this.configuration).addChannel(requestParameters.AddChannelRequest, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @summary Delete a channel
     * @param {ChannelsApiDeleteChannelRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public deleteChannel(requestParameters: ChannelsApiDeleteChannelRequest, ) {
        return ChannelsApiFp(this.configuration).deleteChannel(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @summary Delete a conversation
     * @param {ChannelsApiDeleteConversationRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public deleteConversation(requestParameters: ChannelsApiDeleteConversationRequest, ) {
        return ChannelsApiFp(this.configuration).deleteConversation(requestParameters.channel_id, requestParameters.conversation_id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @summary Receives an incoming message
     * @param {ChannelsApiReceiveMessageRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public receiveMessage(requestParameters: ChannelsApiReceiveMessageRequest = {}, ) {
        return ChannelsApiFp(this.configuration).receiveMessage(requestParameters.ReceiveMessageRequest, ).then((request) => request(this.axios, this.basePath));
    }
}
