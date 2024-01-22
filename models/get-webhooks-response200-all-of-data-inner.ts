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
 * @interface GetWebhooksResponse200AllOfDataInner
 */
export interface GetWebhooksResponse200AllOfDataInner {
    /**
     * The ID of the Webhook
     * @type {number}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'id'?: number;
    /**
     * The ID of the company related to the Webhook
     * @type {number}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'company_id'?: number;
    /**
     * The ID of the user who owns the Webhook
     * @type {number}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'owner_id'?: number;
    /**
     * The ID of the user related to the Webhook
     * @type {number}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'user_id'?: number;
    /**
     * The Webhook action
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'event_action'?: string;
    /**
     * The Webhook object
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'event_object'?: string;
    /**
     * The subscription URL of the Webhook
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'subscription_url'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'is_active'?: GetWebhooksResponse200AllOfDataInnerIsActiveConst;
    /**
     * The date when the Webhook was added
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'add_time'?: string;
    /**
     * The date when the Webhook was removed (if removed)
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'remove_time'?: string | null;
    /**
     * The type of the Webhook
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'type'?: GetWebhooksResponse200AllOfDataInnerTypeConst;
    /**
     * The username of the `subscription_url` of the Webhook
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'http_auth_user'?: string | null;
    /**
     * The password of the `subscription_url` of the Webhook
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'http_auth_password'?: string | null;
    /**
     * Any additional data related to the Webhook
     * @type {object}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'additional_data'?: object;
    /**
     * The removal reason of the Webhook (if removed)
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'remove_reason'?: string | null;
    /**
     * The last delivery time of the Webhook
     * @type {string}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'last_delivery_time'?: string | null;
    /**
     * The last delivery HTTP status of the Webhook
     * @type {number}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'last_http_status'?: number | null;
    /**
     * The ID of the admin of the Webhook
     * @type {number}
     * @memberof GetWebhooksResponse200AllOfDataInner
     */
    'admin_id'?: number;
}

export const GetWebhooksResponse200AllOfDataInnerIsActiveConst = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type GetWebhooksResponse200AllOfDataInnerIsActiveConst = typeof GetWebhooksResponse200AllOfDataInnerIsActiveConst[keyof typeof GetWebhooksResponse200AllOfDataInnerIsActiveConst];
export const GetWebhooksResponse200AllOfDataInnerTypeConst = {
    general: 'general',
    app: 'app'
} as const;

export type GetWebhooksResponse200AllOfDataInnerTypeConst = typeof GetWebhooksResponse200AllOfDataInnerTypeConst[keyof typeof GetWebhooksResponse200AllOfDataInnerTypeConst];

