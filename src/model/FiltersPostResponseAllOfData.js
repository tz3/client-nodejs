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
import FilterType from './FilterType';

/**
 * The FiltersPostResponseAllOfData model module.
 * @module model/FiltersPostResponseAllOfData
 * @version 1.0.0
 */
class FiltersPostResponseAllOfData {
    /**
     * Constructs a new <code>FiltersPostResponseAllOfData</code>.
     * @alias module:model/FiltersPostResponseAllOfData
     */
    constructor() { 
        
        FiltersPostResponseAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FiltersPostResponseAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FiltersPostResponseAllOfData} obj Optional instance to populate.
     * @return {module:model/FiltersPostResponseAllOfData} The populated <code>FiltersPostResponseAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FiltersPostResponseAllOfData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = FilterType.constructFromObject(data['type']);

                delete data['type'];
            }
            if (data.hasOwnProperty('temporary_flag')) {
                obj['temporary_flag'] = ApiClient.convertToType(data['temporary_flag'], 'Boolean');

                delete data['temporary_flag'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'Number');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('custom_view_id')) {
                obj['custom_view_id'] = ApiClient.convertToType(data['custom_view_id'], 'Number');

                delete data['custom_view_id'];
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], Object);

                delete data['conditions'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the created filter
 * @member {Number} id
 */
FiltersPostResponseAllOfData.prototype['id'] = undefined;

/**
 * The name of the created filter
 * @member {String} name
 */
FiltersPostResponseAllOfData.prototype['name'] = undefined;

/**
 * The activity flag of the created filter
 * @member {Boolean} active_flag
 */
FiltersPostResponseAllOfData.prototype['active_flag'] = undefined;

/**
 * @member {module:model/FilterType} type
 */
FiltersPostResponseAllOfData.prototype['type'] = undefined;

/**
 * If the created filter is temporary or not
 * @member {Boolean} temporary_flag
 */
FiltersPostResponseAllOfData.prototype['temporary_flag'] = undefined;

/**
 * The User ID of the created filter
 * @member {Number} user_id
 */
FiltersPostResponseAllOfData.prototype['user_id'] = undefined;

/**
 * The add time of the created filter
 * @member {String} add_time
 */
FiltersPostResponseAllOfData.prototype['add_time'] = undefined;

/**
 * The update time of the created filter
 * @member {String} update_time
 */
FiltersPostResponseAllOfData.prototype['update_time'] = undefined;

/**
 * The visibility group ID of the created filter
 * @member {Number} visible_to
 */
FiltersPostResponseAllOfData.prototype['visible_to'] = undefined;

/**
 * The custom view ID of the created filter
 * @member {Number} custom_view_id
 */
FiltersPostResponseAllOfData.prototype['custom_view_id'] = undefined;

/**
 * The created filter conditions object
 * @member {Object} conditions
 */
FiltersPostResponseAllOfData.prototype['conditions'] = undefined;






export default FiltersPostResponseAllOfData;
