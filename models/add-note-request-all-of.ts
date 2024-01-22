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
 * @interface AddNoteRequestAllOf
 */
export interface AddNoteRequestAllOf {
    /**
     * The content of the note in HTML format. Subject to sanitization on the back-end.
     * @type {string}
     * @memberof AddNoteRequestAllOf
     */
    'content': string;
    /**
     * The ID of the lead the note will be attached to. This property is required unless one of (`deal_id/person_id/org_id`) is specified.
     * @type {string}
     * @memberof AddNoteRequestAllOf
     */
    'lead_id'?: string;
    /**
     * The ID of the deal the note will be attached to. This property is required unless one of (`lead_id/person_id/org_id`) is specified.
     * @type {number}
     * @memberof AddNoteRequestAllOf
     */
    'deal_id'?: number;
    /**
     * The ID of the person this note will be attached to. This property is required unless one of (`deal_id/lead_id/org_id`) is specified.
     * @type {number}
     * @memberof AddNoteRequestAllOf
     */
    'person_id'?: number;
    /**
     * The ID of the organization this note will be attached to. This property is required unless one of (`deal_id/lead_id/person_id`) is specified.
     * @type {number}
     * @memberof AddNoteRequestAllOf
     */
    'org_id'?: number;
}
