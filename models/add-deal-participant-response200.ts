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
import { AddDealParticipantResponse200Data } from './add-deal-participant-response200-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetDealsResponse200RelatedObjects } from './get-deals-response200-related-objects';

/**
 * 
 * @export
 * @interface AddDealParticipantResponse200
 */
export interface AddDealParticipantResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof AddDealParticipantResponse200
     */
    'success'?: boolean;
    /**
     * 
     * @type {AddDealParticipantResponse200Data}
     * @memberof AddDealParticipantResponse200
     */
    'data'?: AddDealParticipantResponse200Data;
    /**
     * 
     * @type {GetDealsResponse200RelatedObjects}
     * @memberof AddDealParticipantResponse200
     */
    'related_objects'?: GetDealsResponse200RelatedObjects;
}

