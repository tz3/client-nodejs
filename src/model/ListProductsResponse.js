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
import BaseResponse from './BaseResponse';
import ListProductAdditionalData from './ListProductAdditionalData';
import ListProductsResponseAllOf from './ListProductsResponseAllOf';
import ListProductsResponseAllOfRelatedObjects from './ListProductsResponseAllOfRelatedObjects';
import ProductListItem from './ProductListItem';

/**
 * The ListProductsResponse model module.
 * @module model/ListProductsResponse
 * @version 1.0.0
 */
class ListProductsResponse {
    /**
     * Constructs a new <code>ListProductsResponse</code>.
     * @alias module:model/ListProductsResponse
     * @implements module:model/BaseResponse
     * @implements module:model/ListProductsResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);ListProductsResponseAllOf.initialize(this);
        ListProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListProductsResponse} obj Optional instance to populate.
     * @return {module:model/ListProductsResponse} The populated <code>ListProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListProductsResponse();
            BaseResponse.constructFromObject(data, obj);
            ListProductsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ProductListItem]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ListProductAdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = ListProductsResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

                delete data['related_objects'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
ListProductsResponse.prototype['success'] = undefined;

/**
 * The array of products
 * @member {Array.<module:model/ProductListItem>} data
 */
ListProductsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/ListProductAdditionalData} additional_data
 */
ListProductsResponse.prototype['additional_data'] = undefined;

/**
 * @member {module:model/ListProductsResponseAllOfRelatedObjects} related_objects
 */
ListProductsResponse.prototype['related_objects'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement ListProductsResponseAllOf interface:
/**
 * The array of products
 * @member {Array.<module:model/ProductListItem>} data
 */
ListProductsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/ListProductAdditionalData} additional_data
 */
ListProductsResponseAllOf.prototype['additional_data'] = undefined;
/**
 * @member {module:model/ListProductsResponseAllOfRelatedObjects} related_objects
 */
ListProductsResponseAllOf.prototype['related_objects'] = undefined;




export default ListProductsResponse;

