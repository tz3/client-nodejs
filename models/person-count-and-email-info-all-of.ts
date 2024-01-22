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
 * 
 * @export
 * @interface PersonCountAndEmailInfoAllOf
 */
export interface PersonCountAndEmailInfoAllOf {
    /**
     * The count of email messages related to the person
     * @type {number}
     * @memberof PersonCountAndEmailInfoAllOf
     */
    'email_messages_count'?: number;
    /**
     * The count of activities related to the person
     * @type {number}
     * @memberof PersonCountAndEmailInfoAllOf
     */
    'activities_count'?: number;
    /**
     * The count of done activities related to the person
     * @type {number}
     * @memberof PersonCountAndEmailInfoAllOf
     */
    'done_activities_count'?: number;
    /**
     * The count of undone activities related to the person
     * @type {number}
     * @memberof PersonCountAndEmailInfoAllOf
     */
    'undone_activities_count'?: number;
    /**
     * The count of files related to the person
     * @type {number}
     * @memberof PersonCountAndEmailInfoAllOf
     */
    'files_count'?: number;
    /**
     * The count of notes related to the person
     * @type {number}
     * @memberof PersonCountAndEmailInfoAllOf
     */
    'notes_count'?: number;
    /**
     * The count of followers related to the person
     * @type {number}
     * @memberof PersonCountAndEmailInfoAllOf
     */
    'followers_count'?: number;
}
