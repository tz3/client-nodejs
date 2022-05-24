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
import BasePersonItemPhone from './BasePersonItemPhone';
import BasicPerson from './BasicPerson';
import BasicPersonEmail from './BasicPersonEmail';
import MarketingStatus from './MarketingStatus';
import UpdatePersonAllOf from './UpdatePersonAllOf';
import VisibleTo from './VisibleTo';

/**
 * The UpdatePerson model module.
 * @module model/UpdatePerson
 * @version 1.0.0
 */
class UpdatePerson {
    /**
     * Constructs a new <code>UpdatePerson</code>.
     * @alias module:model/UpdatePerson
     * @implements module:model/UpdatePersonAllOf
     * @implements module:model/BasicPerson
     */
    constructor() { 
        UpdatePersonAllOf.initialize(this);BasicPerson.initialize(this);
        UpdatePerson.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePerson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePerson} obj Optional instance to populate.
     * @return {module:model/UpdatePerson} The populated <code>UpdatePerson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePerson();
            UpdatePersonAllOf.constructFromObject(data, obj);
            BasicPerson.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], [BasicPersonEmail]);

                delete data['email'];
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], [BasePersonItemPhone]);

                delete data['phone'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('marketing_status')) {
                obj['marketing_status'] = ApiClient.convertToType(data['marketing_status'], MarketingStatus);

                delete data['marketing_status'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The name of the person
 * @member {String} name
 */
UpdatePerson.prototype['name'] = undefined;

/**
 * The ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
UpdatePerson.prototype['owner_id'] = undefined;

/**
 * The ID of the organization this person will belong to
 * @member {Number} org_id
 */
UpdatePerson.prototype['org_id'] = undefined;

/**
 * List of email data related to the person
 * @member {Array.<module:model/BasicPersonEmail>} email
 */
UpdatePerson.prototype['email'] = undefined;

/**
 * List of phone data related to the person
 * @member {Array.<module:model/BasePersonItemPhone>} phone
 */
UpdatePerson.prototype['phone'] = undefined;

/**
 * The visibility of the person. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
UpdatePerson.prototype['visible_to'] = undefined;

/**
 * If the person does not have a valid email address, then the marketing status is **not set** and `no_consent` is returned for the `marketing_status` value when the new person is created. If the change is forbidden, the status will remain unchanged for every call that tries to modify the marketing status. Please be aware that it is only allowed **once** to change the marketing status from an old status to a new one.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`no_consent`</td><td>The customer has not given consent to receive any marketing communications</td></tr><tr><td>`unsubscribed`</td><td>The customers have unsubscribed from ALL marketing communications</td></tr><tr><td>`subscribed`</td><td>The customers are subscribed and are counted towards marketing caps</td></tr><tr><td>`archived`</td><td>The customers with `subscribed` status can be moved to `archived` to save consent, but they are not paid for</td></tr></table>
 * @member {module:model/MarketingStatus} marketing_status
 */
UpdatePerson.prototype['marketing_status'] = undefined;

/**
 * The optional creation date & time of the person in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
UpdatePerson.prototype['add_time'] = undefined;


// Implement UpdatePersonAllOf interface:
/**
 * The name of the person
 * @member {String} name
 */
UpdatePersonAllOf.prototype['name'] = undefined;
// Implement BasicPerson interface:
/**
 * The ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
BasicPerson.prototype['owner_id'] = undefined;
/**
 * The ID of the organization this person will belong to
 * @member {Number} org_id
 */
BasicPerson.prototype['org_id'] = undefined;
/**
 * List of email data related to the person
 * @member {Array.<module:model/BasicPersonEmail>} email
 */
BasicPerson.prototype['email'] = undefined;
/**
 * List of phone data related to the person
 * @member {Array.<module:model/BasePersonItemPhone>} phone
 */
BasicPerson.prototype['phone'] = undefined;
/**
 * The visibility of the person. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
BasicPerson.prototype['visible_to'] = undefined;
/**
 * If the person does not have a valid email address, then the marketing status is **not set** and `no_consent` is returned for the `marketing_status` value when the new person is created. If the change is forbidden, the status will remain unchanged for every call that tries to modify the marketing status. Please be aware that it is only allowed **once** to change the marketing status from an old status to a new one.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`no_consent`</td><td>The customer has not given consent to receive any marketing communications</td></tr><tr><td>`unsubscribed`</td><td>The customers have unsubscribed from ALL marketing communications</td></tr><tr><td>`subscribed`</td><td>The customers are subscribed and are counted towards marketing caps</td></tr><tr><td>`archived`</td><td>The customers with `subscribed` status can be moved to `archived` to save consent, but they are not paid for</td></tr></table>
 * @member {module:model/MarketingStatus} marketing_status
 */
BasicPerson.prototype['marketing_status'] = undefined;
/**
 * The optional creation date & time of the person in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
BasicPerson.prototype['add_time'] = undefined;




export default UpdatePerson;
