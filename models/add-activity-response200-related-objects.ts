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
import { AddActivityResponse200RelatedObjectsOrganization } from './add-activity-response200-related-objects-organization';
// May contain unused imports in some cases
// @ts-ignore
import { AddActivityResponse200RelatedObjectsPerson } from './add-activity-response200-related-objects-person';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponse200RelatedObjectsDeal } from './get-activities-response200-related-objects-deal';
// May contain unused imports in some cases
// @ts-ignore
import { GetActivitiesResponse200RelatedObjectsUser } from './get-activities-response200-related-objects-user';

/**
 * 
 * @export
 * @interface AddActivityResponse200RelatedObjects
 */
export interface AddActivityResponse200RelatedObjects {
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjectsUser}
     * @memberof AddActivityResponse200RelatedObjects
     */
    'user'?: GetActivitiesResponse200RelatedObjectsUser;
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjectsDeal}
     * @memberof AddActivityResponse200RelatedObjects
     */
    'deal'?: GetActivitiesResponse200RelatedObjectsDeal;
    /**
     * 
     * @type {AddActivityResponse200RelatedObjectsPerson}
     * @memberof AddActivityResponse200RelatedObjects
     */
    'person'?: AddActivityResponse200RelatedObjectsPerson;
    /**
     * 
     * @type {AddActivityResponse200RelatedObjectsOrganization}
     * @memberof AddActivityResponse200RelatedObjects
     */
    'organization'?: AddActivityResponse200RelatedObjectsOrganization;
}

