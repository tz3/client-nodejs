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
import GetProjectBoardResponse200 from '../model/GetProjectBoardResponse200';
import GetProjectPhaseResponse200 from '../model/GetProjectPhaseResponse200';
import GetProjectTemplateResponse200 from '../model/GetProjectTemplateResponse200';
import GetProjectTemplatesResponse200 from '../model/GetProjectTemplatesResponse200';

/**
* ProjectTemplates service.
* @module api/ProjectTemplatesApi
* @version 1.0.0
*/
export default class ProjectTemplatesApi {

    /**
    * Constructs a new ProjectTemplatesApi. 
    * @alias module:api/ProjectTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Get details of a template
     * Returns the details of a specific project template.
     * @param {Number} id The ID of the project template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectTemplateResponse200} and HTTP response
     */
    getProjectTemplateWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProjectTemplate");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetProjectTemplateResponse200;
      return this.apiClient.callApi(
        '/projectTemplates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get details of a template
     * Returns the details of a specific project template.
     * @param {Number} id The ID of the project template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectTemplateResponse200}
     */
    getProjectTemplate(id) {
      return this.getProjectTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all project templates
     * Returns all not deleted project templates. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor For pagination, the marker (an opaque string value) representing the first item on the next page
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectTemplatesResponse200} and HTTP response
     */
    getProjectTemplatesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;



      let pathParams = {
      };
      let queryParams = {
        'cursor': opts['cursor'] === undefined ? opts['cursor'] : opts['cursor'],
        'limit': opts['limit'] === undefined ? opts['limit'] : opts['limit'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetProjectTemplatesResponse200;
      return this.apiClient.callApi(
        '/projectTemplates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all project templates
     * Returns all not deleted project templates. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor For pagination, the marker (an opaque string value) representing the first item on the next page
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectTemplatesResponse200}
     */
    getProjectTemplates(opts) {
      return this.getProjectTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get details of a board
     * Returns the details of a specific project board.
     * @param {Number} id The ID of the project board
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectBoardResponse200} and HTTP response
     */
    getProjectsBoardWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProjectsBoard");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetProjectBoardResponse200;
      return this.apiClient.callApi(
        '/projects/boards/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get details of a board
     * Returns the details of a specific project board.
     * @param {Number} id The ID of the project board
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectBoardResponse200}
     */
    getProjectsBoard(id) {
      return this.getProjectsBoardWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get details of a phase
     * Returns the details of a specific project phase.
     * @param {Number} id The ID of the project phase
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectPhaseResponse200} and HTTP response
     */
    getProjectsPhaseWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProjectsPhase");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetProjectPhaseResponse200;
      return this.apiClient.callApi(
        '/projects/phases/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get details of a phase
     * Returns the details of a specific project phase.
     * @param {Number} id The ID of the project phase
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectPhaseResponse200}
     */
    getProjectsPhase(id) {
      return this.getProjectsPhaseWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
