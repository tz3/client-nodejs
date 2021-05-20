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
import BulkDeleteResponse from '../model/BulkDeleteResponse';
import DeleteResponse from '../model/DeleteResponse';
import FieldResponse from '../model/FieldResponse';
import FieldTypeAsString from '../model/FieldTypeAsString';
import FieldsResponse from '../model/FieldsResponse';

/**
* DealFields service.
* @module api/DealFieldsApi
* @version 1.0.0
*/
export default class DealFieldsApi {

    /**
    * Constructs a new DealFieldsApi. 
    * @alias module:api/DealFieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a new deal field
     * Adds a new deal field. For more information on adding a new custom field, see <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {String} name Name of the field
     * @param {Object} opts Optional parameters
     * @param {String} opts.options When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{\\\"id\\\":123,\\\"label\\\":\\\"Existing Item\\\"},{\\\"label\\\":\\\"New Item\\\"}]`
     * @param {module:model/FieldTypeAsString} opts.fieldType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldResponse} and HTTP response
     */
    addDealFieldWithHttpInfo(name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addDealField");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': name,
        'options': opts['options'],
        'field_type': opts['fieldType']
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = FieldResponse;
      return this.apiClient.callApi(
        '/dealFields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a new deal field
     * Adds a new deal field. For more information on adding a new custom field, see <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {String} name Name of the field
     * @param {Object} opts Optional parameters
     * @param {String} opts.options When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{\\\"id\\\":123,\\\"label\\\":\\\"Existing Item\\\"},{\\\"label\\\":\\\"New Item\\\"}]`
     * @param {module:model/FieldTypeAsString} opts.fieldType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldResponse}
     */
    addDealField(name, opts) {
      return this.addDealFieldWithHttpInfo(name, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a deal field
     * Marks a field as deleted. For more information on how to delete a custom field, see <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Number} id ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteResponse} and HTTP response
     */
    deleteDealFieldWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDealField");
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
      let returnType = DeleteResponse;
      return this.apiClient.callApi(
        '/dealFields/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a deal field
     * Marks a field as deleted. For more information on how to delete a custom field, see <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Number} id ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteResponse}
     */
    deleteDealField(id) {
      return this.deleteDealFieldWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete multiple deal fields in bulk
     * Marks multiple fields as deleted.
     * @param {String} ids Comma-separated field IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BulkDeleteResponse} and HTTP response
     */
    deleteDealFieldsWithHttpInfo(ids) {
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling deleteDealFields");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': ids
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BulkDeleteResponse;
      return this.apiClient.callApi(
        '/dealFields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete multiple deal fields in bulk
     * Marks multiple fields as deleted.
     * @param {String} ids Comma-separated field IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BulkDeleteResponse}
     */
    deleteDealFields(ids) {
      return this.deleteDealFieldsWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one deal field
     * Returns data about a specific deal field.
     * @param {Number} id ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldResponse} and HTTP response
     */
    getDealFieldWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDealField");
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
      let returnType = FieldResponse;
      return this.apiClient.callApi(
        '/dealFields/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one deal field
     * Returns data about a specific deal field.
     * @param {Number} id ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldResponse}
     */
    getDealField(id) {
      return this.getDealFieldWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all deal fields
     * Returns data about all deal fields
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldsResponse} and HTTP response
     */
    getDealFieldsWithHttpInfo() {
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
      let returnType = FieldsResponse;
      return this.apiClient.callApi(
        '/dealFields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all deal fields
     * Returns data about all deal fields
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldsResponse}
     */
    getDealFields() {
      return this.getDealFieldsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a deal field
     * Updates a deal field. See an example of updating custom fields’ values in <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Number} id ID of the field
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of the field
     * @param {String} opts.options When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{\\\"id\\\":123,\\\"label\\\":\\\"Existing Item\\\"},{\\\"label\\\":\\\"New Item\\\"}]`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldResponse} and HTTP response
     */
    updateDealFieldWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDealField");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name'],
        'options': opts['options']
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = FieldResponse;
      return this.apiClient.callApi(
        '/dealFields/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a deal field
     * Updates a deal field. See an example of updating custom fields’ values in <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Number} id ID of the field
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of the field
     * @param {String} opts.options When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{\\\"id\\\":123,\\\"label\\\":\\\"Existing Item\\\"},{\\\"label\\\":\\\"New Item\\\"}]`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldResponse}
     */
    updateDealField(id, opts) {
      return this.updateDealFieldWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
