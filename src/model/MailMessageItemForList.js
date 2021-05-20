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
 *
 */

import ApiClient from '../ApiClient';
import MailMessageData from './MailMessageData';
import MailMessageItemForListAllOf from './MailMessageItemForListAllOf';
import MailParticipant from './MailParticipant';
import NumberBooleanDefault0 from './NumberBooleanDefault0';

/**
 * The MailMessageItemForList model module.
 * @module model/MailMessageItemForList
 * @version 1.0.0
 */
class MailMessageItemForList {
    /**
     * Constructs a new <code>MailMessageItemForList</code>.
     * @alias module:model/MailMessageItemForList
     * @implements module:model/MailMessageData
     * @implements module:model/MailMessageItemForListAllOf
     */
    constructor() { 
        MailMessageData.initialize(this);MailMessageItemForListAllOf.initialize(this);
        MailMessageItemForList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MailMessageItemForList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MailMessageItemForList} obj Optional instance to populate.
     * @return {module:model/MailMessageItemForList} The populated <code>MailMessageItemForList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MailMessageItemForList();
            MailMessageData.constructFromObject(data, obj);
            MailMessageItemForListAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], [MailParticipant]);

                delete data['from'];
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], [MailParticipant]);

                delete data['to'];
            }
            if (data.hasOwnProperty('cc')) {
                obj['cc'] = ApiClient.convertToType(data['cc'], [MailParticipant]);

                delete data['cc'];
            }
            if (data.hasOwnProperty('bcc')) {
                obj['bcc'] = ApiClient.convertToType(data['bcc'], [MailParticipant]);

                delete data['bcc'];
            }
            if (data.hasOwnProperty('body_url')) {
                obj['body_url'] = ApiClient.convertToType(data['body_url'], 'String');

                delete data['body_url'];
            }
            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');

                delete data['account_id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('mail_thread_id')) {
                obj['mail_thread_id'] = ApiClient.convertToType(data['mail_thread_id'], 'Number');

                delete data['mail_thread_id'];
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');

                delete data['subject'];
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = ApiClient.convertToType(data['snippet'], 'String');

                delete data['snippet'];
            }
            if (data.hasOwnProperty('mail_tracking_status')) {
                obj['mail_tracking_status'] = ApiClient.convertToType(data['mail_tracking_status'], 'String');

                delete data['mail_tracking_status'];
            }
            if (data.hasOwnProperty('mail_link_tracking_enabled_flag')) {
                obj['mail_link_tracking_enabled_flag'] = ApiClient.convertToType(data['mail_link_tracking_enabled_flag'], NumberBooleanDefault0);

                delete data['mail_link_tracking_enabled_flag'];
            }
            if (data.hasOwnProperty('read_flag')) {
                obj['read_flag'] = ApiClient.convertToType(data['read_flag'], NumberBooleanDefault0);

                delete data['read_flag'];
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'String');

                delete data['draft'];
            }
            if (data.hasOwnProperty('draft_flag')) {
                obj['draft_flag'] = ApiClient.convertToType(data['draft_flag'], NumberBooleanDefault0);

                delete data['draft_flag'];
            }
            if (data.hasOwnProperty('synced_flag')) {
                obj['synced_flag'] = ApiClient.convertToType(data['synced_flag'], NumberBooleanDefault0);

                delete data['synced_flag'];
            }
            if (data.hasOwnProperty('deleted_flag')) {
                obj['deleted_flag'] = ApiClient.convertToType(data['deleted_flag'], NumberBooleanDefault0);

                delete data['deleted_flag'];
            }
            if (data.hasOwnProperty('has_body_flag')) {
                obj['has_body_flag'] = ApiClient.convertToType(data['has_body_flag'], NumberBooleanDefault0);

                delete data['has_body_flag'];
            }
            if (data.hasOwnProperty('sent_flag')) {
                obj['sent_flag'] = ApiClient.convertToType(data['sent_flag'], NumberBooleanDefault0);

                delete data['sent_flag'];
            }
            if (data.hasOwnProperty('sent_from_pipedrive_flag')) {
                obj['sent_from_pipedrive_flag'] = ApiClient.convertToType(data['sent_from_pipedrive_flag'], NumberBooleanDefault0);

                delete data['sent_from_pipedrive_flag'];
            }
            if (data.hasOwnProperty('smart_bcc_flag')) {
                obj['smart_bcc_flag'] = ApiClient.convertToType(data['smart_bcc_flag'], NumberBooleanDefault0);

                delete data['smart_bcc_flag'];
            }
            if (data.hasOwnProperty('message_time')) {
                obj['message_time'] = ApiClient.convertToType(data['message_time'], 'Date');

                delete data['message_time'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'Date');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'Date');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('has_attachments_flag')) {
                obj['has_attachments_flag'] = ApiClient.convertToType(data['has_attachments_flag'], NumberBooleanDefault0);

                delete data['has_attachments_flag'];
            }
            if (data.hasOwnProperty('has_inline_attachments_flag')) {
                obj['has_inline_attachments_flag'] = ApiClient.convertToType(data['has_inline_attachments_flag'], NumberBooleanDefault0);

                delete data['has_inline_attachments_flag'];
            }
            if (data.hasOwnProperty('has_real_attachments_flag')) {
                obj['has_real_attachments_flag'] = ApiClient.convertToType(data['has_real_attachments_flag'], NumberBooleanDefault0);

                delete data['has_real_attachments_flag'];
            }
            if (data.hasOwnProperty('write_flag')) {
                obj['write_flag'] = ApiClient.convertToType(data['write_flag'], 'Boolean');

                delete data['write_flag'];
            }
            if (data.hasOwnProperty('nylas_id')) {
                obj['nylas_id'] = ApiClient.convertToType(data['nylas_id'], 'String');

                delete data['nylas_id'];
            }
            if (data.hasOwnProperty('s3_bucket')) {
                obj['s3_bucket'] = ApiClient.convertToType(data['s3_bucket'], 'String');

                delete data['s3_bucket'];
            }
            if (data.hasOwnProperty('s3_bucket_path')) {
                obj['s3_bucket_path'] = ApiClient.convertToType(data['s3_bucket_path'], 'String');

                delete data['s3_bucket_path'];
            }
            if (data.hasOwnProperty('external_deleted_flag')) {
                obj['external_deleted_flag'] = ApiClient.convertToType(data['external_deleted_flag'], 'Boolean');

                delete data['external_deleted_flag'];
            }
            if (data.hasOwnProperty('mua_message_id')) {
                obj['mua_message_id'] = ApiClient.convertToType(data['mua_message_id'], 'String');

                delete data['mua_message_id'];
            }
            if (data.hasOwnProperty('template_id')) {
                obj['template_id'] = ApiClient.convertToType(data['template_id'], 'Number');

                delete data['template_id'];
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');

                delete data['timestamp'];
            }
            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');

                delete data['item_type'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * ID of the mail message.
 * @member {Number} id
 */
MailMessageItemForList.prototype['id'] = undefined;

/**
 * The array of mail message sender (object)
 * @member {Array.<module:model/MailParticipant>} from
 */
MailMessageItemForList.prototype['from'] = undefined;

/**
 * The array of mail message receiver (object)
 * @member {Array.<module:model/MailParticipant>} to
 */
MailMessageItemForList.prototype['to'] = undefined;

/**
 * The array of mail message copies (object)
 * @member {Array.<module:model/MailParticipant>} cc
 */
MailMessageItemForList.prototype['cc'] = undefined;

/**
 * The array of mail message blind copies (object)
 * @member {Array.<module:model/MailParticipant>} bcc
 */
MailMessageItemForList.prototype['bcc'] = undefined;

/**
 * The mail message body URL
 * @member {String} body_url
 */
MailMessageItemForList.prototype['body_url'] = undefined;

/**
 * The connection account ID
 * @member {String} account_id
 */
MailMessageItemForList.prototype['account_id'] = undefined;

/**
 * ID of the user whom mail message will be assigned to
 * @member {Number} user_id
 */
MailMessageItemForList.prototype['user_id'] = undefined;

/**
 * ID of the mail message thread
 * @member {Number} mail_thread_id
 */
MailMessageItemForList.prototype['mail_thread_id'] = undefined;

/**
 * The subject of mail message
 * @member {String} subject
 */
MailMessageItemForList.prototype['subject'] = undefined;

/**
 * The snippet of mail message. Snippet length is up to 225 characters.
 * @member {String} snippet
 */
MailMessageItemForList.prototype['snippet'] = undefined;

/**
 * The status of tracking mail message. Value is `null` if tracking is not enabled.
 * @member {module:model/MailMessageItemForList.MailTrackingStatusEnum} mail_tracking_status
 */
MailMessageItemForList.prototype['mail_tracking_status'] = undefined;

/**
 * Whether the link tracking in mail message body is enabled.
 * @member {module:model/NumberBooleanDefault0} mail_link_tracking_enabled_flag
 */
MailMessageItemForList.prototype['mail_link_tracking_enabled_flag'] = undefined;

/**
 * Whether the mail message is read or not by the user
 * @member {module:model/NumberBooleanDefault0} read_flag
 */
MailMessageItemForList.prototype['read_flag'] = undefined;

/**
 * If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise `null`.
 * @member {String} draft
 */
MailMessageItemForList.prototype['draft'] = undefined;

/**
 * Whether the mail message is a draft or not
 * @member {module:model/NumberBooleanDefault0} draft_flag
 */
MailMessageItemForList.prototype['draft_flag'] = undefined;

/**
 * Whether the mail message is synced with the provider or not
 * @member {module:model/NumberBooleanDefault0} synced_flag
 */
MailMessageItemForList.prototype['synced_flag'] = undefined;

/**
 * Whether the mail message is deleted or not
 * @member {module:model/NumberBooleanDefault0} deleted_flag
 */
MailMessageItemForList.prototype['deleted_flag'] = undefined;

/**
 * Whether the mail message has a body or not
 * @member {module:model/NumberBooleanDefault0} has_body_flag
 */
MailMessageItemForList.prototype['has_body_flag'] = undefined;

/**
 * Whether the mail message has been sent or not
 * @member {module:model/NumberBooleanDefault0} sent_flag
 */
MailMessageItemForList.prototype['sent_flag'] = undefined;

/**
 * Whether the mail message has been sent from Pipedrive app or not
 * @member {module:model/NumberBooleanDefault0} sent_from_pipedrive_flag
 */
MailMessageItemForList.prototype['sent_from_pipedrive_flag'] = undefined;

/**
 * Whether the mail message has been created by Smart Email BCC feature or not
 * @member {module:model/NumberBooleanDefault0} smart_bcc_flag
 */
MailMessageItemForList.prototype['smart_bcc_flag'] = undefined;

/**
 * Creation or receival time of the mail message
 * @member {Date} message_time
 */
MailMessageItemForList.prototype['message_time'] = undefined;

/**
 * The insertion into the database time of the mail message
 * @member {Date} add_time
 */
MailMessageItemForList.prototype['add_time'] = undefined;

/**
 * The updating time in the database of the mail message
 * @member {Date} update_time
 */
MailMessageItemForList.prototype['update_time'] = undefined;

/**
 * Whether the mail message has an attachment or not
 * @member {module:model/NumberBooleanDefault0} has_attachments_flag
 */
MailMessageItemForList.prototype['has_attachments_flag'] = undefined;

/**
 * Whether the mail message has an inline attachment or not
 * @member {module:model/NumberBooleanDefault0} has_inline_attachments_flag
 */
MailMessageItemForList.prototype['has_inline_attachments_flag'] = undefined;

/**
 * Whether the mail message has an attachment (which is not inline) or not
 * @member {module:model/NumberBooleanDefault0} has_real_attachments_flag
 */
MailMessageItemForList.prototype['has_real_attachments_flag'] = undefined;

/**
 * We strongly advise you to avoid the use of this property. We will soon deprecate this property.
 * @member {Boolean} write_flag
 */
MailMessageItemForList.prototype['write_flag'] = undefined;

/**
 * The Mail Message ID assigned by the sync provider
 * @member {String} nylas_id
 */
MailMessageItemForList.prototype['nylas_id'] = undefined;

/**
 * The name of the S3 bucket
 * @member {String} s3_bucket
 */
MailMessageItemForList.prototype['s3_bucket'] = undefined;

/**
 * The path of the S3 bucket
 * @member {String} s3_bucket_path
 */
MailMessageItemForList.prototype['s3_bucket_path'] = undefined;

/**
 * If the Mail Message has been deleted on the provider side or not
 * @member {Boolean} external_deleted_flag
 */
MailMessageItemForList.prototype['external_deleted_flag'] = undefined;

/**
 * The Mail Message ID assigned by the mail user agent
 * @member {String} mua_message_id
 */
MailMessageItemForList.prototype['mua_message_id'] = undefined;

/**
 * The ID of the mail template
 * @member {Number} template_id
 */
MailMessageItemForList.prototype['template_id'] = undefined;

/**
 * The add date and time of the Mail Message
 * @member {String} timestamp
 */
MailMessageItemForList.prototype['timestamp'] = undefined;

/**
 * The type of the data item
 * @member {String} item_type
 */
MailMessageItemForList.prototype['item_type'] = undefined;

/**
 * The ID of the company
 * @member {Number} company_id
 */
MailMessageItemForList.prototype['company_id'] = undefined;


// Implement MailMessageData interface:
/**
 * ID of the mail message.
 * @member {Number} id
 */
MailMessageData.prototype['id'] = undefined;
/**
 * The array of mail message sender (object)
 * @member {Array.<module:model/MailParticipant>} from
 */
MailMessageData.prototype['from'] = undefined;
/**
 * The array of mail message receiver (object)
 * @member {Array.<module:model/MailParticipant>} to
 */
MailMessageData.prototype['to'] = undefined;
/**
 * The array of mail message copies (object)
 * @member {Array.<module:model/MailParticipant>} cc
 */
MailMessageData.prototype['cc'] = undefined;
/**
 * The array of mail message blind copies (object)
 * @member {Array.<module:model/MailParticipant>} bcc
 */
MailMessageData.prototype['bcc'] = undefined;
/**
 * The mail message body URL
 * @member {String} body_url
 */
MailMessageData.prototype['body_url'] = undefined;
/**
 * The connection account ID
 * @member {String} account_id
 */
MailMessageData.prototype['account_id'] = undefined;
/**
 * ID of the user whom mail message will be assigned to
 * @member {Number} user_id
 */
MailMessageData.prototype['user_id'] = undefined;
/**
 * ID of the mail message thread
 * @member {Number} mail_thread_id
 */
MailMessageData.prototype['mail_thread_id'] = undefined;
/**
 * The subject of mail message
 * @member {String} subject
 */
MailMessageData.prototype['subject'] = undefined;
/**
 * The snippet of mail message. Snippet length is up to 225 characters.
 * @member {String} snippet
 */
MailMessageData.prototype['snippet'] = undefined;
/**
 * The status of tracking mail message. Value is `null` if tracking is not enabled.
 * @member {module:model/MailMessageData.MailTrackingStatusEnum} mail_tracking_status
 */
MailMessageData.prototype['mail_tracking_status'] = undefined;
/**
 * Whether the link tracking in mail message body is enabled.
 * @member {module:model/NumberBooleanDefault0} mail_link_tracking_enabled_flag
 */
MailMessageData.prototype['mail_link_tracking_enabled_flag'] = undefined;
/**
 * Whether the mail message is read or not by the user
 * @member {module:model/NumberBooleanDefault0} read_flag
 */
MailMessageData.prototype['read_flag'] = undefined;
/**
 * If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise `null`.
 * @member {String} draft
 */
MailMessageData.prototype['draft'] = undefined;
/**
 * Whether the mail message is a draft or not
 * @member {module:model/NumberBooleanDefault0} draft_flag
 */
MailMessageData.prototype['draft_flag'] = undefined;
/**
 * Whether the mail message is synced with the provider or not
 * @member {module:model/NumberBooleanDefault0} synced_flag
 */
MailMessageData.prototype['synced_flag'] = undefined;
/**
 * Whether the mail message is deleted or not
 * @member {module:model/NumberBooleanDefault0} deleted_flag
 */
MailMessageData.prototype['deleted_flag'] = undefined;
/**
 * Whether the mail message has a body or not
 * @member {module:model/NumberBooleanDefault0} has_body_flag
 */
MailMessageData.prototype['has_body_flag'] = undefined;
/**
 * Whether the mail message has been sent or not
 * @member {module:model/NumberBooleanDefault0} sent_flag
 */
MailMessageData.prototype['sent_flag'] = undefined;
/**
 * Whether the mail message has been sent from Pipedrive app or not
 * @member {module:model/NumberBooleanDefault0} sent_from_pipedrive_flag
 */
MailMessageData.prototype['sent_from_pipedrive_flag'] = undefined;
/**
 * Whether the mail message has been created by Smart Email BCC feature or not
 * @member {module:model/NumberBooleanDefault0} smart_bcc_flag
 */
MailMessageData.prototype['smart_bcc_flag'] = undefined;
/**
 * Creation or receival time of the mail message
 * @member {Date} message_time
 */
MailMessageData.prototype['message_time'] = undefined;
/**
 * The insertion into the database time of the mail message
 * @member {Date} add_time
 */
MailMessageData.prototype['add_time'] = undefined;
/**
 * The updating time in the database of the mail message
 * @member {Date} update_time
 */
MailMessageData.prototype['update_time'] = undefined;
/**
 * Whether the mail message has an attachment or not
 * @member {module:model/NumberBooleanDefault0} has_attachments_flag
 */
MailMessageData.prototype['has_attachments_flag'] = undefined;
/**
 * Whether the mail message has an inline attachment or not
 * @member {module:model/NumberBooleanDefault0} has_inline_attachments_flag
 */
MailMessageData.prototype['has_inline_attachments_flag'] = undefined;
/**
 * Whether the mail message has an attachment (which is not inline) or not
 * @member {module:model/NumberBooleanDefault0} has_real_attachments_flag
 */
MailMessageData.prototype['has_real_attachments_flag'] = undefined;
/**
 * We strongly advise you to avoid the use of this property. We will soon deprecate this property.
 * @member {Boolean} write_flag
 */
MailMessageData.prototype['write_flag'] = undefined;
// Implement MailMessageItemForListAllOf interface:
/**
 * The Mail Message ID assigned by the sync provider
 * @member {String} nylas_id
 */
MailMessageItemForListAllOf.prototype['nylas_id'] = undefined;
/**
 * The name of the S3 bucket
 * @member {String} s3_bucket
 */
MailMessageItemForListAllOf.prototype['s3_bucket'] = undefined;
/**
 * The path of the S3 bucket
 * @member {String} s3_bucket_path
 */
MailMessageItemForListAllOf.prototype['s3_bucket_path'] = undefined;
/**
 * If the Mail Message has been deleted on the provider side or not
 * @member {Boolean} external_deleted_flag
 */
MailMessageItemForListAllOf.prototype['external_deleted_flag'] = undefined;
/**
 * The Mail Message ID assigned by the mail user agent
 * @member {String} mua_message_id
 */
MailMessageItemForListAllOf.prototype['mua_message_id'] = undefined;
/**
 * The ID of the mail template
 * @member {Number} template_id
 */
MailMessageItemForListAllOf.prototype['template_id'] = undefined;
/**
 * The add date and time of the Mail Message
 * @member {String} timestamp
 */
MailMessageItemForListAllOf.prototype['timestamp'] = undefined;
/**
 * The type of the data item
 * @member {String} item_type
 */
MailMessageItemForListAllOf.prototype['item_type'] = undefined;
/**
 * The ID of the company
 * @member {Number} company_id
 */
MailMessageItemForListAllOf.prototype['company_id'] = undefined;



/**
 * Allowed values for the <code>mail_tracking_status</code> property.
 * @enum {String}
 * @readonly
 */
MailMessageItemForList['MailTrackingStatusEnum'] = {

    /**
     * value: "opened"
     * @const
     */
    "opened": "opened",

    /**
     * value: "not opened"
     * @const
     */
    "not opened": "not opened"
};



export default MailMessageItemForList;

