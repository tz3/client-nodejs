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
 * @interface BaseDeal
 */
export interface BaseDeal {
    /**
     * The ID of the deal stage
     * @type {number}
     * @memberof BaseDeal
     */
    'stage_id'?: number;
    /**
     * The title of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'title'?: string;
    /**
     * The value of the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'value'?: number;
    /**
     * The currency associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'currency'?: string;
    /**
     * The creation date and time of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'add_time'?: string;
    /**
     * The last updated date and time of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'update_time'?: string;
    /**
     * The last updated date and time of the deal stage
     * @type {string}
     * @memberof BaseDeal
     */
    'stage_change_time'?: string;
    /**
     * Whether the deal is active or not
     * @type {boolean}
     * @memberof BaseDeal
     */
    'active'?: boolean;
    /**
     * Whether the deal is deleted or not
     * @type {boolean}
     * @memberof BaseDeal
     */
    'deleted'?: boolean;
    /**
     * The status of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'status'?: string;
    /**
     * The success probability percentage of the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'probability'?: number | null;
    /**
     * The date of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'next_activity_date'?: string;
    /**
     * The time of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'next_activity_time'?: string;
    /**
     * The ID of the next activity associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'next_activity_id'?: number | null;
    /**
     * The ID of the last activity associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'last_activity_id'?: number | null;
    /**
     * The date of the last activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'last_activity_date'?: string | null;
    /**
     * The reason for losing the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'lost_reason'?: string | null;
    /**
     * The visibility of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'visible_to'?: string;
    /**
     * The date and time of closing the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'close_time'?: string | null;
    /**
     * The ID of the pipeline associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'pipeline_id'?: number;
    /**
     * The date and time of changing the deal status as won
     * @type {string}
     * @memberof BaseDeal
     */
    'won_time'?: string;
    /**
     * The date and time of the first time changing the deal status as won
     * @type {string}
     * @memberof BaseDeal
     */
    'first_won_time'?: string;
    /**
     * The date and time of changing the deal status as lost
     * @type {string}
     * @memberof BaseDeal
     */
    'lost_time'?: string;
    /**
     * The number of products associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'products_count'?: number;
    /**
     * The number of files associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'files_count'?: number;
    /**
     * The number of notes associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'notes_count'?: number;
    /**
     * The number of followers associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'followers_count'?: number;
    /**
     * The number of emails associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'email_messages_count'?: number;
    /**
     * The number of activities associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'activities_count'?: number;
    /**
     * The number of completed activities associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'done_activities_count'?: number;
    /**
     * The number of incomplete activities associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'undone_activities_count'?: number;
    /**
     * The number of participants associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'participants_count'?: number;
    /**
     * The expected close date of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'expected_close_date'?: string;
    /**
     * The date and time of the last incoming email associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'last_incoming_mail_time'?: string;
    /**
     * The date and time of the last outgoing email associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'last_outgoing_mail_time'?: string;
    /**
     * The label or multiple labels assigned to the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'label'?: string;
    /**
     * The order number of the deal stage associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    'stage_order_nr'?: number;
    /**
     * The name of the person associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'person_name'?: string;
    /**
     * The name of the organization associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'org_name'?: string;
    /**
     * The subject of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'next_activity_subject'?: string;
    /**
     * The type of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'next_activity_type'?: string;
    /**
     * The duration of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'next_activity_duration'?: string;
    /**
     * The note of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'next_activity_note'?: string;
    /**
     * The deal value formatted with selected currency. E.g. US$500
     * @type {string}
     * @memberof BaseDeal
     */
    'formatted_value'?: string;
    /**
     * Probability times deal value. Probability can either be deal probability or if not set, then stage probability.
     * @type {number}
     * @memberof BaseDeal
     */
    'weighted_value'?: number;
    /**
     * The weighted_value formatted with selected currency. E.g. US$500
     * @type {string}
     * @memberof BaseDeal
     */
    'formatted_weighted_value'?: string;
    /**
     * The currency associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'weighted_value_currency'?: string;
    /**
     * The date and time of changing the deal status as rotten
     * @type {string}
     * @memberof BaseDeal
     */
    'rotten_time'?: string | null;
    /**
     * The name of the deal owner
     * @type {string}
     * @memberof BaseDeal
     */
    'owner_name'?: string;
    /**
     * The BCC email of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    'cc_email'?: string;
    /**
     * If the organization that is associated with the deal is hidden or not
     * @type {boolean}
     * @memberof BaseDeal
     */
    'org_hidden'?: boolean;
    /**
     * If the person that is associated with the deal is hidden or not
     * @type {boolean}
     * @memberof BaseDeal
     */
    'person_hidden'?: boolean;
}

