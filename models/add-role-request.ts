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



/**
 * The details of the role
 * @export
 * @interface AddRoleRequest
 */
export interface AddRoleRequest {
    /**
     * The name of the role
     * @type {string}
     * @memberof AddRoleRequest
     */
    'name': string;
    /**
     * The ID of the parent role
     * @type {number}
     * @memberof AddRoleRequest
     */
    'parent_role_id'?: number;
}

