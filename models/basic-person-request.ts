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
import { BasicPersonRequestEmailInner } from './basic-person-request-email-inner';
// May contain unused imports in some cases
// @ts-ignore
import { PersonItemAllOfPhoneInner } from './person-item-all-of-phone-inner';

/**
 * 
 * @export
 * @interface BasicPersonRequest
 */
export interface BasicPersonRequest {
    /**
     * The ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used.
     * @type {number}
     * @memberof BasicPersonRequest
     */
    'owner_id'?: number;
    /**
     * The ID of the organization this person will belong to
     * @type {number}
     * @memberof BasicPersonRequest
     */
    'org_id'?: number;
    /**
     * An email address as a string or an array of email objects related to the person. The structure of the array is as follows: `[{ \"value\": \"mail@example.com\", \"primary\": \"true\", \"label\": \"main\" }]`. Please note that only `value` is required.
     * @type {Array<BasicPersonRequestEmailInner>}
     * @memberof BasicPersonRequest
     */
    'email'?: Array<BasicPersonRequestEmailInner>;
    /**
     * A phone number supplied as a string or an array of phone objects related to the person. The structure of the array is as follows: `[{ \"value\": \"12345\", \"primary\": \"true\", \"label\": \"mobile\" }]`. Please note that only `value` is required.
     * @type {Array<PersonItemAllOfPhoneInner>}
     * @memberof BasicPersonRequest
     */
    'phone'?: Array<PersonItemAllOfPhoneInner>;
    /**
     * The ID of the label.
     * @type {number}
     * @memberof BasicPersonRequest
     */
    'label'?: number;
    /**
     * 
     * @type {string}
     * @memberof BasicPersonRequest
     */
    'visible_to'?: BasicPersonRequestVisibleToConst;
    /**
     * 
     * @type {string}
     * @memberof BasicPersonRequest
     */
    'marketing_status'?: BasicPersonRequestMarketingStatusConst;
    /**
     * The optional creation date & time of the person in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof BasicPersonRequest
     */
    'add_time'?: string;
}

export const BasicPersonRequestVisibleToConst = {
    _1: '1',
    _3: '3',
    _5: '5',
    _7: '7'
} as const;

export type BasicPersonRequestVisibleToConst = typeof BasicPersonRequestVisibleToConst[keyof typeof BasicPersonRequestVisibleToConst];
export const BasicPersonRequestMarketingStatusConst = {
    no_consent: 'no_consent',
    unsubscribed: 'unsubscribed',
    subscribed: 'subscribed',
    archived: 'archived'
} as const;

export type BasicPersonRequestMarketingStatusConst = typeof BasicPersonRequestMarketingStatusConst[keyof typeof BasicPersonRequestMarketingStatusConst];


