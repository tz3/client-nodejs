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
import LeadValue from './LeadValue';
import VisibleTo from './VisibleTo';

/**
 * The AddLeadRequest model module.
 * @module model/AddLeadRequest
 * @version 1.0.0
 */
class AddLeadRequest {
    /**
     * Constructs a new <code>AddLeadRequest</code>.
     * @alias module:model/AddLeadRequest
     * @param title {String} The name of the lead
     */
    constructor(title) { 
        
        AddLeadRequest.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>AddLeadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddLeadRequest} obj Optional instance to populate.
     * @return {module:model/AddLeadRequest} The populated <code>AddLeadRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddLeadRequest();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('label_ids')) {
                obj['label_ids'] = ApiClient.convertToType(data['label_ids'], ['String']);

                delete data['label_ids'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'Number');

                delete data['organization_id'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = LeadValue.constructFromObject(data['value']);

                delete data['value'];
            }
            if (data.hasOwnProperty('expected_close_date')) {
                obj['expected_close_date'] = ApiClient.convertToType(data['expected_close_date'], 'Date');

                delete data['expected_close_date'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('was_seen')) {
                obj['was_seen'] = ApiClient.convertToType(data['was_seen'], 'Boolean');

                delete data['was_seen'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The name of the lead
 * @member {String} title
 */
AddLeadRequest.prototype['title'] = undefined;

/**
 * The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used.
 * @member {Number} owner_id
 */
AddLeadRequest.prototype['owner_id'] = undefined;

/**
 * The IDs of the lead labels which will be associated with the lead
 * @member {Array.<String>} label_ids
 */
AddLeadRequest.prototype['label_ids'] = undefined;

/**
 * The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless `organization_id` is specified.
 * @member {Number} person_id
 */
AddLeadRequest.prototype['person_id'] = undefined;

/**
 * The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless `person_id` is specified.
 * @member {Number} organization_id
 */
AddLeadRequest.prototype['organization_id'] = undefined;

/**
 * @member {module:model/LeadValue} value
 */
AddLeadRequest.prototype['value'] = undefined;

/**
 * The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.
 * @member {Date} expected_close_date
 */
AddLeadRequest.prototype['expected_close_date'] = undefined;

/**
 * The visibility of the lead. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width: 40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width: 40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
AddLeadRequest.prototype['visible_to'] = undefined;

/**
 * A flag indicating whether the lead was seen by someone in the Pipedrive UI
 * @member {Boolean} was_seen
 */
AddLeadRequest.prototype['was_seen'] = undefined;






export default AddLeadRequest;

