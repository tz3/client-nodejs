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
import { FieldsResponse200AllOfAdditionalData } from './fields-response200-all-of-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetDealsResponse200RelatedObjects } from './get-deals-response200-related-objects';
// May contain unused imports in some cases
// @ts-ignore
import { PersonItem } from './person-item';

/**
 * 
 * @export
 * @interface GetDealParticipantsResponse200
 */
export interface GetDealParticipantsResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetDealParticipantsResponse200
     */
    'success'?: boolean;
    /**
     * The array of participants
     * @type {Array<PersonItem>}
     * @memberof GetDealParticipantsResponse200
     */
    'data'?: Array<PersonItem>;
    /**
     * 
     * @type {FieldsResponse200AllOfAdditionalData}
     * @memberof GetDealParticipantsResponse200
     */
    'additional_data'?: FieldsResponse200AllOfAdditionalData;
    /**
     * 
     * @type {GetDealsResponse200RelatedObjects}
     * @memberof GetDealParticipantsResponse200
     */
    'related_objects'?: GetDealsResponse200RelatedObjects;
}
