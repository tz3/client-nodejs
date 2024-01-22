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
 * The UserProviderLinkSuccessResponseData model module.
 * @module model/UserProviderLinkSuccessResponseData
 * @version 1.0.0
 */
class UserProviderLinkSuccessResponseData {
    /**
     * Constructs a new <code>UserProviderLinkSuccessResponseData</code>.
     * @alias module:model/UserProviderLinkSuccessResponseData
     */
    constructor() { 
        
        UserProviderLinkSuccessResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserProviderLinkSuccessResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserProviderLinkSuccessResponseData} obj Optional instance to populate.
     * @return {module:model/UserProviderLinkSuccessResponseData} The populated <code>UserProviderLinkSuccessResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserProviderLinkSuccessResponseData();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');

                delete data['message'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The success message of the request
 * @member {String} message
 */
UserProviderLinkSuccessResponseData.prototype['message'] = undefined;






export default UserProviderLinkSuccessResponseData;
