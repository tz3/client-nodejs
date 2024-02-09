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
 * @interface AddWebhookRequest
 */
export interface AddWebhookRequest {
    /**
     * A full, valid, publicly accessible URL which determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the `subscription_url` and the chosen URL must not redirect to another link.
     * @type {string}
     * @memberof AddWebhookRequest
     */
    'subscription_url': string;
    /**
     * The type of action to receive notifications about. Wildcard will match all supported actions.
     * @type {string}
     * @memberof AddWebhookRequest
     */
    'event_action': AddWebhookRequestEventActionConst;
    /**
     * The type of object to receive notifications about. Wildcard will match all supported objects.
     * @type {string}
     * @memberof AddWebhookRequest
     */
    'event_object': AddWebhookRequestEventObjectConst;
    /**
     * The ID of the user that this webhook will be authorized with. You have the option to use a different user\'s `user_id`. If it is not set, the current user\'s `user_id` will be used. As each webhook event is checked against a user’s permissions, the webhook will only be sent if the user has access to the specified object(s). If you want to receive notifications for all events, please use a top-level admin user’s `user_id`.
     * @type {number}
     * @memberof AddWebhookRequest
     */
    'user_id'?: number;
    /**
     * The HTTP basic auth username of the subscription URL endpoint (if required)
     * @type {string}
     * @memberof AddWebhookRequest
     */
    'http_auth_user'?: string;
    /**
     * The HTTP basic auth password of the subscription URL endpoint (if required)
     * @type {string}
     * @memberof AddWebhookRequest
     */
    'http_auth_password'?: string;
    /**
     * The webhook\'s version
     * @type {string}
     * @memberof AddWebhookRequest
     */
    'version'?: AddWebhookRequestVersionConst;
}

export const AddWebhookRequestEventActionConst = {
    added: 'added',
    updated: 'updated',
    merged: 'merged',
    deleted: 'deleted',
    Star: '*'
} as const;

export type AddWebhookRequestEventActionConst = typeof AddWebhookRequestEventActionConst[keyof typeof AddWebhookRequestEventActionConst];
export const AddWebhookRequestEventObjectConst = {
    activity: 'activity',
    activityType: 'activityType',
    deal: 'deal',
    note: 'note',
    organization: 'organization',
    person: 'person',
    pipeline: 'pipeline',
    product: 'product',
    stage: 'stage',
    user: 'user',
    Star: '*'
} as const;

export type AddWebhookRequestEventObjectConst = typeof AddWebhookRequestEventObjectConst[keyof typeof AddWebhookRequestEventObjectConst];
export const AddWebhookRequestVersionConst = {
    _1_0: '1.0',
    _2_0: '2.0'
} as const;

export type AddWebhookRequestVersionConst = typeof AddWebhookRequestVersionConst[keyof typeof AddWebhookRequestVersionConst];


