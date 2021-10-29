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
import AdditionalDataWithPagination from './AdditionalDataWithPagination';
import BaseNote from './BaseNote';

/**
 * The GetNotes model module.
 * @module model/GetNotes
 * @version 1.0.0
 */
class GetNotes {
    /**
     * Constructs a new <code>GetNotes</code>.
     * @alias module:model/GetNotes
     */
    constructor() { 
        
        GetNotes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetNotes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetNotes} obj Optional instance to populate.
     * @return {module:model/GetNotes} The populated <code>GetNotes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetNotes();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BaseNote]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalDataWithPagination.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
GetNotes.prototype['success'] = undefined;

/**
 * The array of Notes
 * @member {Array.<module:model/BaseNote>} data
 */
GetNotes.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalDataWithPagination} additional_data
 */
GetNotes.prototype['additional_data'] = undefined;






export default GetNotes;

