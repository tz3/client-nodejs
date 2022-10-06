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
import ProductSearchItemItemOwner from './ProductSearchItemItemOwner';

/**
 * The ProductSearchItemItem model module.
 * @module model/ProductSearchItemItem
 * @version 1.0.0
 */
class ProductSearchItemItem {
    /**
     * Constructs a new <code>ProductSearchItemItem</code>.
     * @alias module:model/ProductSearchItemItem
     */
    constructor() { 
        
        ProductSearchItemItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductSearchItemItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchItemItem} obj Optional instance to populate.
     * @return {module:model/ProductSearchItemItem} The populated <code>ProductSearchItemItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchItemItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');

                delete data['type'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');

                delete data['code'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'Number');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ProductSearchItemItemOwner.constructFromObject(data['owner']);

                delete data['owner'];
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], ['String']);

                delete data['custom_fields'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the product
 * @member {Number} id
 */
ProductSearchItemItem.prototype['id'] = undefined;

/**
 * The type of the item
 * @member {String} type
 */
ProductSearchItemItem.prototype['type'] = undefined;

/**
 * The name of the product
 * @member {String} name
 */
ProductSearchItemItem.prototype['name'] = undefined;

/**
 * The code of the product
 * @member {Number} code
 */
ProductSearchItemItem.prototype['code'] = undefined;

/**
 * The visibility of the product
 * @member {Number} visible_to
 */
ProductSearchItemItem.prototype['visible_to'] = undefined;

/**
 * @member {module:model/ProductSearchItemItemOwner} owner
 */
ProductSearchItemItem.prototype['owner'] = undefined;

/**
 * The custom fields
 * @member {Array.<String>} custom_fields
 */
ProductSearchItemItem.prototype['custom_fields'] = undefined;






export default ProductSearchItemItem;

