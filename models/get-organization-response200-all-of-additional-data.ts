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


// May contain unused imports in some cases
// @ts-ignore
import { GetOrganizationResponse200AllOfAdditionalDataFollowers } from './get-organization-response200-all-of-additional-data-followers';

/**
 * 
 * @export
 * @interface GetOrganizationResponse200AllOfAdditionalData
 */
export interface GetOrganizationResponse200AllOfAdditionalData {
    /**
     * 
     * @type {GetOrganizationResponse200AllOfAdditionalDataFollowers}
     * @memberof GetOrganizationResponse200AllOfAdditionalData
     */
    'followers'?: GetOrganizationResponse200AllOfAdditionalDataFollowers;
    /**
     * Dropbox email for the organization
     * @type {string}
     * @memberof GetOrganizationResponse200AllOfAdditionalData
     */
    'dropbox_email'?: string;
}

