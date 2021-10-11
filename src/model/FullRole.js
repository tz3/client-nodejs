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
import FullRoleAllOf from './FullRoleAllOf';
import SubRole from './SubRole';

/**
 * The FullRole model module.
 * @module model/FullRole
 * @version 1.0.0
 */
class FullRole {
    /**
     * Constructs a new <code>FullRole</code>.
     * @alias module:model/FullRole
     * @implements module:model/SubRole
     * @implements module:model/FullRoleAllOf
     */
    constructor() { 
        SubRole.initialize(this);FullRoleAllOf.initialize(this);
        FullRole.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FullRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FullRole} obj Optional instance to populate.
     * @return {module:model/FullRole} The populated <code>FullRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FullRole();
            SubRole.constructFromObject(data, obj);
            FullRoleAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('parent_role_id')) {
                obj['parent_role_id'] = ApiClient.convertToType(data['parent_role_id'], 'Number');

                delete data['parent_role_id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('assignment_count')) {
                obj['assignment_count'] = ApiClient.convertToType(data['assignment_count'], 'String');

                delete data['assignment_count'];
            }
            if (data.hasOwnProperty('sub_role_count')) {
                obj['sub_role_count'] = ApiClient.convertToType(data['sub_role_count'], 'String');

                delete data['sub_role_count'];
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');

                delete data['level'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the parent Role
 * @member {Number} parent_role_id
 */
FullRole.prototype['parent_role_id'] = undefined;

/**
 * The name of the Role
 * @member {String} name
 */
FullRole.prototype['name'] = undefined;

/**
 * The ID of the Role
 * @member {Number} id
 */
FullRole.prototype['id'] = undefined;

/**
 * If the Role is active or not
 * @member {Boolean} active_flag
 */
FullRole.prototype['active_flag'] = undefined;

/**
 * The number of Users assigned to this Role
 * @member {String} assignment_count
 */
FullRole.prototype['assignment_count'] = undefined;

/**
 * The number of sub-roles
 * @member {String} sub_role_count
 */
FullRole.prototype['sub_role_count'] = undefined;

/**
 * The level of Role in the role hierarchy
 * @member {Number} level
 */
FullRole.prototype['level'] = undefined;


// Implement SubRole interface:
/**
 * The ID of the parent Role
 * @member {Number} parent_role_id
 */
SubRole.prototype['parent_role_id'] = undefined;
/**
 * The name of the Role
 * @member {String} name
 */
SubRole.prototype['name'] = undefined;
/**
 * The ID of the Role
 * @member {Number} id
 */
SubRole.prototype['id'] = undefined;
/**
 * If the Role is active or not
 * @member {Boolean} active_flag
 */
SubRole.prototype['active_flag'] = undefined;
/**
 * The number of Users assigned to this Role
 * @member {String} assignment_count
 */
SubRole.prototype['assignment_count'] = undefined;
/**
 * The number of sub-roles
 * @member {String} sub_role_count
 */
SubRole.prototype['sub_role_count'] = undefined;
// Implement FullRoleAllOf interface:
/**
 * The level of Role in the role hierarchy
 * @member {Number} level
 */
FullRoleAllOf.prototype['level'] = undefined;




export default FullRole;
