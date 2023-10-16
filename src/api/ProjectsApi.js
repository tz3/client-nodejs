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
import AddProjectResponse201 from '../model/AddProjectResponse201';
import DeleteProjectResponse200 from '../model/DeleteProjectResponse200';
import GetActivitiesCollectionResponse200 from '../model/GetActivitiesCollectionResponse200';
import GetProjectBoardsResponse200 from '../model/GetProjectBoardsResponse200';
import GetProjectGroupsResponse200 from '../model/GetProjectGroupsResponse200';
import GetProjectPhasesResponse200 from '../model/GetProjectPhasesResponse200';
import GetProjectPlanResponse200 from '../model/GetProjectPlanResponse200';
import GetProjectResponse200 from '../model/GetProjectResponse200';
import GetProjectsResponse200 from '../model/GetProjectsResponse200';
import GetTasksResponse200 from '../model/GetTasksResponse200';
import ProjectPostObject from '../model/ProjectPostObject';
import ProjectPutObject from '../model/ProjectPutObject';
import ProjectPutPlanItemBodyObject from '../model/ProjectPutPlanItemBodyObject';
import UpdateProjectResponse200 from '../model/UpdateProjectResponse200';
import UpdatedActivityPlanItem200 from '../model/UpdatedActivityPlanItem200';
import UpdatedTaskPlanItem200 from '../model/UpdatedTaskPlanItem200';

/**
* Projects service.
* @module api/ProjectsApi
* @version 1.0.0
*/
export default class ProjectsApi {

    /**
    * Constructs a new ProjectsApi. 
    * @alias module:api/ProjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Add a project
     * Adds a new project. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectPostObject} opts.projectPostObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddProjectResponse201} and HTTP response
     */
    addProjectWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['projectPostObject'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
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
      let returnType = AddProjectResponse201;
      return this.apiClient.callApi(
        '/projects', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a project
     * Adds a new project. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectPostObject} opts.projectPostObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddProjectResponse201}
     */
    addProject(opts) {
      return this.addProjectWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Archive a project
     * Archives a project.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateProjectResponse200} and HTTP response
     */
    archiveProjectWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling archiveProject");
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
      let returnType = UpdateProjectResponse200;
      return this.apiClient.callApi(
        '/projects/{id}/archive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Archive a project
     * Archives a project.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateProjectResponse200}
     */
    archiveProject(id) {
      return this.archiveProjectWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a project
     * Marks a project as deleted.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteProjectResponse200} and HTTP response
     */
    deleteProjectWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProject");
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
      let returnType = DeleteProjectResponse200;
      return this.apiClient.callApi(
        '/projects/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a project
     * Marks a project as deleted.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteProjectResponse200}
     */
    deleteProject(id) {
      return this.deleteProjectWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get details of a project
     * Returns the details of a specific project. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the `key` value of project fields.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectResponse200} and HTTP response
     */
    getProjectWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProject");
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
      let returnType = GetProjectResponse200;
      return this.apiClient.callApi(
        '/projects/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get details of a project
     * Returns the details of a specific project. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the `key` value of project fields.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectResponse200}
     */
    getProject(id) {
      return this.getProjectWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Returns project activities
     * Returns activities linked to a specific project.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetActivitiesCollectionResponse200} and HTTP response
     */
    getProjectActivitiesWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProjectActivities");
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
      let returnType = GetActivitiesCollectionResponse200;
      return this.apiClient.callApi(
        '/projects/{id}/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns project activities
     * Returns activities linked to a specific project.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetActivitiesCollectionResponse200}
     */
    getProjectActivities(id) {
      return this.getProjectActivitiesWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Returns project groups
     * Returns all active groups under a specific project.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectGroupsResponse200} and HTTP response
     */
    getProjectGroupsWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProjectGroups");
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
      let returnType = GetProjectGroupsResponse200;
      return this.apiClient.callApi(
        '/projects/{id}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns project groups
     * Returns all active groups under a specific project.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectGroupsResponse200}
     */
    getProjectGroups(id) {
      return this.getProjectGroupsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Returns project plan
     * Returns information about items in a project plan. Items consists of tasks and activities and are linked to specific project phase and group.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectPlanResponse200} and HTTP response
     */
    getProjectPlanWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProjectPlan");
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
      let returnType = GetProjectPlanResponse200;
      return this.apiClient.callApi(
        '/projects/{id}/plan', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns project plan
     * Returns information about items in a project plan. Items consists of tasks and activities and are linked to specific project phase and group.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectPlanResponse200}
     */
    getProjectPlan(id) {
      return this.getProjectPlanWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Returns project tasks
     * Returns tasks linked to a specific project.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTasksResponse200} and HTTP response
     */
    getProjectTasksWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProjectTasks");
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
      let returnType = GetTasksResponse200;
      return this.apiClient.callApi(
        '/projects/{id}/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns project tasks
     * Returns tasks linked to a specific project.
     * @param {Number} id The ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTasksResponse200}
     */
    getProjectTasks(id) {
      return this.getProjectTasksWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all projects
     * Returns all projects. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor For pagination, the marker (an opaque string value) representing the first item on the next page
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.filterId The ID of the filter to use
     * @param {String} opts.status If supplied, includes only projects with the specified statuses. Possible values are `open`, `completed`, `canceled` and `deleted`. By default `deleted` projects are not returned.
     * @param {Number} opts.phaseId If supplied, only projects in specified phase are returned
     * @param {Boolean} opts.includeArchived If supplied with `true` then archived projects are also included in the response. By default only not archived projects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectsResponse200} and HTTP response
     */
    getProjectsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;







      let pathParams = {
      };
      let queryParams = {
        'cursor': opts['cursor'] === undefined ? opts['cursor'] : opts['cursor'],
        'limit': opts['limit'] === undefined ? opts['limit'] : opts['limit'],
        'filter_id': opts['filter_id'] === undefined ? opts['filterId'] : opts['filter_id'],
        'status': opts['status'] === undefined ? opts['status'] : opts['status'],
        'phase_id': opts['phase_id'] === undefined ? opts['phaseId'] : opts['phase_id'],
        'include_archived': opts['include_archived'] === undefined ? opts['includeArchived'] : opts['include_archived'],
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
      let returnType = GetProjectsResponse200;
      return this.apiClient.callApi(
        '/projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all projects
     * Returns all projects. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor For pagination, the marker (an opaque string value) representing the first item on the next page
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.filterId The ID of the filter to use
     * @param {String} opts.status If supplied, includes only projects with the specified statuses. Possible values are `open`, `completed`, `canceled` and `deleted`. By default `deleted` projects are not returned.
     * @param {Number} opts.phaseId If supplied, only projects in specified phase are returned
     * @param {Boolean} opts.includeArchived If supplied with `true` then archived projects are also included in the response. By default only not archived projects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectsResponse200}
     */
    getProjects(opts) {
      return this.getProjectsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all project boards
     * Returns all projects boards that are not deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectBoardsResponse200} and HTTP response
     */
    getProjectsBoardsWithHttpInfo() {
      const opts = {}
      let postBody = null;

      let pathParams = {
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
      let returnType = GetProjectBoardsResponse200;
      return this.apiClient.callApi(
        '/projects/boards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all project boards
     * Returns all projects boards that are not deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectBoardsResponse200}
     */
    getProjectsBoards() {
      return this.getProjectsBoardsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get project phases
     * Returns all active project phases under a specific board.
     * @param {Number} boardId ID of the board for which phases are requested
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectPhasesResponse200} and HTTP response
     */
    getProjectsPhasesWithHttpInfo(boardId) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'boardId' is set
      if (boardId === undefined || boardId === null) {
        throw new Error("Missing the required parameter 'boardId' when calling getProjectsPhases");
      }

      let pathParams = {
      };
      let queryParams = {
        'board_id': boardId,
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
      let returnType = GetProjectPhasesResponse200;
      return this.apiClient.callApi(
        '/projects/phases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get project phases
     * Returns all active project phases under a specific board.
     * @param {Number} boardId ID of the board for which phases are requested
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectPhasesResponse200}
     */
    getProjectsPhases(boardId) {
      return this.getProjectsPhasesWithHttpInfo(boardId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update activity in project plan
     * Updates an activity phase or group in a project.
     * @param {Number} id The ID of the project
     * @param {Number} activityId The ID of the activity
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectPutPlanItemBodyObject} opts.projectPutPlanItemBodyObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdatedActivityPlanItem200} and HTTP response
     */
    putProjectPlanActivityWithHttpInfo(id, activityId, opts) {
      opts = opts || {};
      let postBody = opts['projectPutPlanItemBodyObject'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putProjectPlanActivity");
      }

      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling putProjectPlanActivity");
      }


      let pathParams = {
        'id': id,
        'activityId': activityId,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
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
      let returnType = UpdatedActivityPlanItem200;
      return this.apiClient.callApi(
        '/projects/{id}/plan/activities/{activityId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update activity in project plan
     * Updates an activity phase or group in a project.
     * @param {Number} id The ID of the project
     * @param {Number} activityId The ID of the activity
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectPutPlanItemBodyObject} opts.projectPutPlanItemBodyObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdatedActivityPlanItem200}
     */
    putProjectPlanActivity(id, activityId, opts) {
      return this.putProjectPlanActivityWithHttpInfo(id, activityId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update task in project plan
     * Updates a task phase or group in a project.
     * @param {Number} id The ID of the project
     * @param {Number} taskId The ID of the task
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectPutPlanItemBodyObject} opts.projectPutPlanItemBodyObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdatedTaskPlanItem200} and HTTP response
     */
    putProjectPlanTaskWithHttpInfo(id, taskId, opts) {
      opts = opts || {};
      let postBody = opts['projectPutPlanItemBodyObject'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putProjectPlanTask");
      }

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling putProjectPlanTask");
      }


      let pathParams = {
        'id': id,
        'taskId': taskId,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
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
      let returnType = UpdatedTaskPlanItem200;
      return this.apiClient.callApi(
        '/projects/{id}/plan/tasks/{taskId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update task in project plan
     * Updates a task phase or group in a project.
     * @param {Number} id The ID of the project
     * @param {Number} taskId The ID of the task
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectPutPlanItemBodyObject} opts.projectPutPlanItemBodyObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdatedTaskPlanItem200}
     */
    putProjectPlanTask(id, taskId, opts) {
      return this.putProjectPlanTaskWithHttpInfo(id, taskId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a project
     * Updates a project.
     * @param {Number} id The ID of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectPutObject} opts.projectPutObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateProjectResponse200} and HTTP response
     */
    updateProjectWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['projectPutObject'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProject");
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

      let contentTypes = ['application/json', ];
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
      let returnType = UpdateProjectResponse200;
      return this.apiClient.callApi(
        '/projects/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a project
     * Updates a project.
     * @param {Number} id The ID of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectPutObject} opts.projectPutObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateProjectResponse200}
     */
    updateProject(id, opts) {
      return this.updateProjectWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
