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
 * The moved deals average age by the stage
 * @export
 * @interface GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysByStagesInner
 */
export interface GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysByStagesInner {
    /**
     * The stage ID
     * @type {number}
     * @memberof GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysByStagesInner
     */
    'stage_id'?: number;
    /**
     * The average deals age in specific stage
     * @type {number}
     * @memberof GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysByStagesInner
     */
    'value'?: number;
}
