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

/**
 * The AddFollowerToPersonResponseAllOfData model module.
 * @module model/AddFollowerToPersonResponseAllOfData
 * @version 1.0.0
 */
class AddFollowerToPersonResponseAllOfData {
    /**
     * Constructs a new <code>AddFollowerToPersonResponseAllOfData</code>.
     * @alias module:model/AddFollowerToPersonResponseAllOfData
     */
    constructor() { 
        
        AddFollowerToPersonResponseAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddFollowerToPersonResponseAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFollowerToPersonResponseAllOfData} obj Optional instance to populate.
     * @return {module:model/AddFollowerToPersonResponseAllOfData} The populated <code>AddFollowerToPersonResponseAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddFollowerToPersonResponseAllOfData();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
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
 * The ID of the User who was added as a follower to a Person
 * @member {Number} user_id
 */
AddFollowerToPersonResponseAllOfData.prototype['user_id'] = undefined;

/**
 * The ID of the Follower
 * @member {Number} id
 */
AddFollowerToPersonResponseAllOfData.prototype['id'] = undefined;

/**
 * The ID of the Person to whom the follower was added
 * @member {Number} person_id
 */
AddFollowerToPersonResponseAllOfData.prototype['person_id'] = undefined;

/**
 * The date and time when the Follower was added to a Person. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
AddFollowerToPersonResponseAllOfData.prototype['add_time'] = undefined;






export default AddFollowerToPersonResponseAllOfData;
