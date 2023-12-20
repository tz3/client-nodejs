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
 * @interface BaseMailThreadAllOf
 */
export interface BaseMailThreadAllOf {
    /**
     * ID of the mail thread
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'id'?: number;
    /**
     * The connection account ID
     * @type {string}
     * @memberof BaseMailThreadAllOf
     */
    'account_id'?: string;
    /**
     * ID of the user whom mail message will be assigned to
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'user_id'?: number;
    /**
     * The subject
     * @type {string}
     * @memberof BaseMailThreadAllOf
     */
    'subject'?: string;
    /**
     * A snippet
     * @type {string}
     * @memberof BaseMailThreadAllOf
     */
    'snippet'?: string;
    /**
     * 
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'read_flag'?: BaseMailThreadAllOfReadFlagConst;
    /**
     * Mail tracking status
     * @type {string}
     * @memberof BaseMailThreadAllOf
     */
    'mail_tracking_status'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'has_attachments_flag'?: BaseMailThreadAllOfHasAttachmentsFlagConst;
    /**
     * 
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'has_inline_attachments_flag'?: BaseMailThreadAllOfHasInlineAttachmentsFlagConst;
    /**
     * 
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'has_real_attachments_flag'?: BaseMailThreadAllOfHasRealAttachmentsFlagConst;
    /**
     * 
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'deleted_flag'?: BaseMailThreadAllOfDeletedFlagConst;
    /**
     * 
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'synced_flag'?: BaseMailThreadAllOfSyncedFlagConst;
    /**
     * 
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'smart_bcc_flag'?: BaseMailThreadAllOfSmartBccFlagConst;
    /**
     * 
     * @type {number}
     * @memberof BaseMailThreadAllOf
     */
    'mail_link_tracking_enabled_flag'?: BaseMailThreadAllOfMailLinkTrackingEnabledFlagConst;
}

export const BaseMailThreadAllOfReadFlagConst = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type BaseMailThreadAllOfReadFlagConst = typeof BaseMailThreadAllOfReadFlagConst[keyof typeof BaseMailThreadAllOfReadFlagConst];
export const BaseMailThreadAllOfHasAttachmentsFlagConst = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type BaseMailThreadAllOfHasAttachmentsFlagConst = typeof BaseMailThreadAllOfHasAttachmentsFlagConst[keyof typeof BaseMailThreadAllOfHasAttachmentsFlagConst];
export const BaseMailThreadAllOfHasInlineAttachmentsFlagConst = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type BaseMailThreadAllOfHasInlineAttachmentsFlagConst = typeof BaseMailThreadAllOfHasInlineAttachmentsFlagConst[keyof typeof BaseMailThreadAllOfHasInlineAttachmentsFlagConst];
export const BaseMailThreadAllOfHasRealAttachmentsFlagConst = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type BaseMailThreadAllOfHasRealAttachmentsFlagConst = typeof BaseMailThreadAllOfHasRealAttachmentsFlagConst[keyof typeof BaseMailThreadAllOfHasRealAttachmentsFlagConst];
export const BaseMailThreadAllOfDeletedFlagConst = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type BaseMailThreadAllOfDeletedFlagConst = typeof BaseMailThreadAllOfDeletedFlagConst[keyof typeof BaseMailThreadAllOfDeletedFlagConst];
export const BaseMailThreadAllOfSyncedFlagConst = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type BaseMailThreadAllOfSyncedFlagConst = typeof BaseMailThreadAllOfSyncedFlagConst[keyof typeof BaseMailThreadAllOfSyncedFlagConst];
export const BaseMailThreadAllOfSmartBccFlagConst = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type BaseMailThreadAllOfSmartBccFlagConst = typeof BaseMailThreadAllOfSmartBccFlagConst[keyof typeof BaseMailThreadAllOfSmartBccFlagConst];
export const BaseMailThreadAllOfMailLinkTrackingEnabledFlagConst = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type BaseMailThreadAllOfMailLinkTrackingEnabledFlagConst = typeof BaseMailThreadAllOfMailLinkTrackingEnabledFlagConst[keyof typeof BaseMailThreadAllOfMailLinkTrackingEnabledFlagConst];


