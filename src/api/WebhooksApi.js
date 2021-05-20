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
 *
 */


import ApiClient from "../ApiClient";
import BaseResponseWithStatus from '../model/BaseResponseWithStatus';
import Unauthorized from '../model/Unauthorized';
import Webhook from '../model/Webhook';
import WebhookBadRequest from '../model/WebhookBadRequest';
import Webhooks from '../model/Webhooks';
import WebhooksDeleteForbiddenSchema from '../model/WebhooksDeleteForbiddenSchema';

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.0.0
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new webhook
     * Creates a new webhook and returns its details. Note that specifying an event which triggers the webhook combines 2 parameters - `event_action` and `event_object`. E.g., use `*.*` for getting notifications about all events, `added.deal` for any newly added deals, `deleted.persons` for any deleted persons, etc. See <a href=\"https://pipedrive.readme.io/docs/guide-for-webhooks?ref=api_reference\">https://pipedrive.readme.io/docs/guide-for-webhooks</a> for more details.
     * @param {String} subscriptionUrl A full, valid, publicly accessible URL. Determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the `subscription_url`.
     * @param {module:model/String} eventAction Type of action to receive notifications about. Wildcard will match all supported actions.
     * @param {module:model/String} eventObject Type of object to receive notifications about. Wildcard will match all supported objects.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The ID of the user this webhook will be authorized with. If not set, current authorized user will be used. Note that this does not filter only certain user's events — rather, this specifies the user's permissions under which each event is checked. Events about objects the selected user is not entitled to access are not sent. If you want to receive notifications for all events, a top-level admin user should be used.
     * @param {String} opts.httpAuthUser HTTP basic auth username of the subscription URL endpoint (if required).
     * @param {String} opts.httpAuthPassword HTTP basic auth password of the subscription URL endpoint (if required).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Webhook} and HTTP response
     */
    addWebhookWithHttpInfo(subscriptionUrl, eventAction, eventObject, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subscriptionUrl' is set
      if (subscriptionUrl === undefined || subscriptionUrl === null) {
        throw new Error("Missing the required parameter 'subscriptionUrl' when calling addWebhook");
      }
      // verify the required parameter 'eventAction' is set
      if (eventAction === undefined || eventAction === null) {
        throw new Error("Missing the required parameter 'eventAction' when calling addWebhook");
      }
      // verify the required parameter 'eventObject' is set
      if (eventObject === undefined || eventObject === null) {
        throw new Error("Missing the required parameter 'eventObject' when calling addWebhook");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'subscription_url': subscriptionUrl,
        'event_action': eventAction,
        'event_object': eventObject,
        'user_id': opts['userId'],
        'http_auth_user': opts['httpAuthUser'],
        'http_auth_password': opts['httpAuthPassword']
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new webhook
     * Creates a new webhook and returns its details. Note that specifying an event which triggers the webhook combines 2 parameters - `event_action` and `event_object`. E.g., use `*.*` for getting notifications about all events, `added.deal` for any newly added deals, `deleted.persons` for any deleted persons, etc. See <a href=\"https://pipedrive.readme.io/docs/guide-for-webhooks?ref=api_reference\">https://pipedrive.readme.io/docs/guide-for-webhooks</a> for more details.
     * @param {String} subscriptionUrl A full, valid, publicly accessible URL. Determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the `subscription_url`.
     * @param {module:model/String} eventAction Type of action to receive notifications about. Wildcard will match all supported actions.
     * @param {module:model/String} eventObject Type of object to receive notifications about. Wildcard will match all supported objects.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The ID of the user this webhook will be authorized with. If not set, current authorized user will be used. Note that this does not filter only certain user's events — rather, this specifies the user's permissions under which each event is checked. Events about objects the selected user is not entitled to access are not sent. If you want to receive notifications for all events, a top-level admin user should be used.
     * @param {String} opts.httpAuthUser HTTP basic auth username of the subscription URL endpoint (if required).
     * @param {String} opts.httpAuthPassword HTTP basic auth password of the subscription URL endpoint (if required).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Webhook}
     */
    addWebhook(subscriptionUrl, eventAction, eventObject, opts) {
      return this.addWebhookWithHttpInfo(subscriptionUrl, eventAction, eventObject, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete existing webhook
     * Deletes the specified webhook.
     * @param {Number} id The ID of the webhook to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BaseResponseWithStatus} and HTTP response
     */
    deleteWebhookWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWebhook");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BaseResponseWithStatus;
      return this.apiClient.callApi(
        '/webhooks/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete existing webhook
     * Deletes the specified webhook.
     * @param {Number} id The ID of the webhook to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BaseResponseWithStatus}
     */
    deleteWebhook(id) {
      return this.deleteWebhookWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all webhooks
     * Returns data about all webhooks of a company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Webhooks} and HTTP response
     */
    getWebhooksWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Webhooks;
      return this.apiClient.callApi(
        '/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all webhooks
     * Returns data about all webhooks of a company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Webhooks}
     */
    getWebhooks() {
      return this.getWebhooksWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
