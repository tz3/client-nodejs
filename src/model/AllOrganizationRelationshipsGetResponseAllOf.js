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
import AdditionalData from './AdditionalData';
import AllOrganizationRelationshipsGetResponseAllOfRelatedObjects from './AllOrganizationRelationshipsGetResponseAllOfRelatedObjects';
import OrganizationRelationshipDetails from './OrganizationRelationshipDetails';

/**
 * The AllOrganizationRelationshipsGetResponseAllOf model module.
 * @module model/AllOrganizationRelationshipsGetResponseAllOf
 * @version 1.0.0
 */
class AllOrganizationRelationshipsGetResponseAllOf {
    /**
     * Constructs a new <code>AllOrganizationRelationshipsGetResponseAllOf</code>.
     * @alias module:model/AllOrganizationRelationshipsGetResponseAllOf
     */
    constructor() { 
        
        AllOrganizationRelationshipsGetResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AllOrganizationRelationshipsGetResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllOrganizationRelationshipsGetResponseAllOf} obj Optional instance to populate.
     * @return {module:model/AllOrganizationRelationshipsGetResponseAllOf} The populated <code>AllOrganizationRelationshipsGetResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOrganizationRelationshipsGetResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [OrganizationRelationshipDetails]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = AllOrganizationRelationshipsGetResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

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
 * The array of Organization Relationships
 * @member {Array.<module:model/OrganizationRelationshipDetails>} data
 */
AllOrganizationRelationshipsGetResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
AllOrganizationRelationshipsGetResponseAllOf.prototype['additional_data'] = undefined;

/**
 * @member {module:model/AllOrganizationRelationshipsGetResponseAllOfRelatedObjects} related_objects
 */
AllOrganizationRelationshipsGetResponseAllOf.prototype['related_objects'] = undefined;






export default AllOrganizationRelationshipsGetResponseAllOf;
