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
import Field from './Field';

/**
 * The FieldResponseAllOf model module.
 * @module model/FieldResponseAllOf
 * @version 1.0.0
 */
class FieldResponseAllOf {
    /**
     * Constructs a new <code>FieldResponseAllOf</code>.
     * @alias module:model/FieldResponseAllOf
     */
    constructor() { 
        
        FieldResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldResponseAllOf} obj Optional instance to populate.
     * @return {module:model/FieldResponseAllOf} The populated <code>FieldResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Field.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/Field} data
 */
FieldResponseAllOf.prototype['data'] = undefined;






export default FieldResponseAllOf;

