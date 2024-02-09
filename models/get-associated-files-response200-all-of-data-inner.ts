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
 * The file data
 * @export
 * @interface GetAssociatedFilesResponse200AllOfDataInner
 */
export interface GetAssociatedFilesResponse200AllOfDataInner {
    /**
     * The ID of the file
     * @type {number}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'id'?: number;
    /**
     * The ID of the user to associate the file with
     * @type {number}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'user_id'?: number;
    /**
     * The ID of the deal to associate the file with
     * @type {number}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'deal_id'?: number;
    /**
     * The ID of the person to associate the file with
     * @type {number}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'person_id'?: number;
    /**
     * The ID of the organization to associate the file with
     * @type {number}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'org_id'?: number;
    /**
     * The ID of the product to associate the file with
     * @type {number}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'product_id'?: number;
    /**
     * The ID of the activity to associate the file with
     * @type {number}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'activity_id'?: number;
    /**
     * The ID of the lead to associate the file with
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'lead_id'?: string;
    /**
     * The date and time when the file was added/created. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'add_time'?: string;
    /**
     * The last updated date and time of the file. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'update_time'?: string;
    /**
     * The original name of the file
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'file_name'?: string;
    /**
     * The size of the file
     * @type {number}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'file_size'?: number;
    /**
     * Whether the user is active or not. false = Not activated, true = Activated
     * @type {boolean}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'active_flag'?: boolean;
    /**
     * Whether the file was uploaded as inline or not
     * @type {boolean}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'inline_flag'?: boolean;
    /**
     * The location type to send the file to. Only googledrive is supported at the moment.
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'remote_location'?: string;
    /**
     * The ID of the remote item
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'remote_id'?: string;
    /**
     * The ID of the inline attachment
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'cid'?: string;
    /**
     * The location of the cloud storage
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    's3_bucket'?: string;
    /**
     * The ID of the mail message to associate the file with
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'mail_message_id'?: string;
    /**
     * The ID of the mail template to associate the file with
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'mail_template_id'?: string;
    /**
     * The name of the deal associated with the dile
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'deal_name'?: string;
    /**
     * The name of the person associated with the file
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'person_name'?: string;
    /**
     * The name of the organization associated with the file
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'org_name'?: string;
    /**
     * The name of the product associated with the file
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'product_name'?: string;
    /**
     * The name of the lead associated with the file
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'lead_name'?: string;
    /**
     * The URL of the download file
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'url'?: string;
    /**
     * The visible name of the file
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'name'?: string;
    /**
     * The description of the file
     * @type {string}
     * @memberof GetAssociatedFilesResponse200AllOfDataInner
     */
    'description'?: string;
}

