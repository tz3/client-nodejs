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
import NoteConnectToParams from './NoteConnectToParams';
import NoteParams from './NoteParams';
import NumberBoolean from './NumberBoolean';

/**
 * The Note model module.
 * @module model/Note
 * @version 1.0.0
 */
class Note {
    /**
     * Constructs a new <code>Note</code>.
     * @alias module:model/Note
     * @implements module:model/NoteConnectToParams
     * @implements module:model/NoteParams
     * @param content {String} Content of the note in HTML format. Subject to sanitization on the back-end.
     */
    constructor(content) { 
        NoteConnectToParams.initialize(this);NoteParams.initialize(this);
        Note.initialize(this, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content) { 
        obj['content'] = content;
    }

    /**
     * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Note} obj Optional instance to populate.
     * @return {module:model/Note} The populated <code>Note</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Note();
            NoteConnectToParams.constructFromObject(data, obj);
            NoteParams.constructFromObject(data, obj);

            if (data.hasOwnProperty('lead_id')) {
                obj['lead_id'] = ApiClient.convertToType(data['lead_id'], 'String');

                delete data['lead_id'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');

                delete data['content'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('pinned_to_lead_flag')) {
                obj['pinned_to_lead_flag'] = ApiClient.convertToType(data['pinned_to_lead_flag'], NumberBoolean);

                delete data['pinned_to_lead_flag'];
            }
            if (data.hasOwnProperty('pinned_to_deal_flag')) {
                obj['pinned_to_deal_flag'] = ApiClient.convertToType(data['pinned_to_deal_flag'], NumberBoolean);

                delete data['pinned_to_deal_flag'];
            }
            if (data.hasOwnProperty('pinned_to_organization_flag')) {
                obj['pinned_to_organization_flag'] = ApiClient.convertToType(data['pinned_to_organization_flag'], NumberBoolean);

                delete data['pinned_to_organization_flag'];
            }
            if (data.hasOwnProperty('pinned_to_person_flag')) {
                obj['pinned_to_person_flag'] = ApiClient.convertToType(data['pinned_to_person_flag'], NumberBoolean);

                delete data['pinned_to_person_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the lead the note will be attached to
 * @member {String} lead_id
 */
Note.prototype['lead_id'] = undefined;

/**
 * The ID of the deal the note will be attached to
 * @member {Number} deal_id
 */
Note.prototype['deal_id'] = undefined;

/**
 * The ID of the person this note will be attached to
 * @member {Number} person_id
 */
Note.prototype['person_id'] = undefined;

/**
 * The ID of the organization this note will be attached to
 * @member {Number} org_id
 */
Note.prototype['org_id'] = undefined;

/**
 * Content of the note in HTML format. Subject to sanitization on the back-end.
 * @member {String} content
 */
Note.prototype['content'] = undefined;

/**
 * ID of the user who will be marked as the author of this note. Only an admin can change the author.
 * @member {Number} user_id
 */
Note.prototype['user_id'] = undefined;

/**
 * Optional creation date & time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
Note.prototype['add_time'] = undefined;

/**
 * If set, then results are filtered by note to lead pinning state (`lead_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_lead_flag
 */
Note.prototype['pinned_to_lead_flag'] = undefined;

/**
 * If set, then results are filtered by note to deal pinning state (`deal_id` is also required).
 * @member {module:model/NumberBoolean} pinned_to_deal_flag
 */
Note.prototype['pinned_to_deal_flag'] = undefined;

/**
 * If set, then results are filtered by note to organization pinning state (`org_id` is also required).
 * @member {module:model/NumberBoolean} pinned_to_organization_flag
 */
Note.prototype['pinned_to_organization_flag'] = undefined;

/**
 * If set, then results are filtered by note to person pinning state (`person_id` is also required).
 * @member {module:model/NumberBoolean} pinned_to_person_flag
 */
Note.prototype['pinned_to_person_flag'] = undefined;


// Implement NoteConnectToParams interface:
/**
 * The ID of the lead the note will be attached to
 * @member {String} lead_id
 */
NoteConnectToParams.prototype['lead_id'] = undefined;
/**
 * The ID of the deal the note will be attached to
 * @member {Number} deal_id
 */
NoteConnectToParams.prototype['deal_id'] = undefined;
/**
 * The ID of the person this note will be attached to
 * @member {Number} person_id
 */
NoteConnectToParams.prototype['person_id'] = undefined;
/**
 * The ID of the organization this note will be attached to
 * @member {Number} org_id
 */
NoteConnectToParams.prototype['org_id'] = undefined;
// Implement NoteParams interface:
/**
 * Content of the note in HTML format. Subject to sanitization on the back-end.
 * @member {String} content
 */
NoteParams.prototype['content'] = undefined;
/**
 * ID of the user who will be marked as the author of this note. Only an admin can change the author.
 * @member {Number} user_id
 */
NoteParams.prototype['user_id'] = undefined;
/**
 * Optional creation date & time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
NoteParams.prototype['add_time'] = undefined;
/**
 * If set, then results are filtered by note to lead pinning state (`lead_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_lead_flag
 */
NoteParams.prototype['pinned_to_lead_flag'] = undefined;
/**
 * If set, then results are filtered by note to deal pinning state (`deal_id` is also required).
 * @member {module:model/NumberBoolean} pinned_to_deal_flag
 */
NoteParams.prototype['pinned_to_deal_flag'] = undefined;
/**
 * If set, then results are filtered by note to organization pinning state (`org_id` is also required).
 * @member {module:model/NumberBoolean} pinned_to_organization_flag
 */
NoteParams.prototype['pinned_to_organization_flag'] = undefined;
/**
 * If set, then results are filtered by note to person pinning state (`person_id` is also required).
 * @member {module:model/NumberBoolean} pinned_to_person_flag
 */
NoteParams.prototype['pinned_to_person_flag'] = undefined;




export default Note;
