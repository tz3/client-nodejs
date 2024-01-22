/* tslint:disable */
/* eslint-disable */
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
 */



/**
 * 
 * @export
 * @interface AddFilterRequest
 */
export interface AddFilterRequest {
    /**
     * The name of the filter
     * @type {string}
     * @memberof AddFilterRequest
     */
    'name': string;
    /**
     * The conditions of the filter as a JSON object. Please note that a maximum of 16 conditions is allowed per filter and `date` values must be supplied in the `YYYY-MM-DD` format. It requires a minimum structure as follows: `{\"glue\":\"and\",\"conditions\":[{\"glue\":\"and\",\"conditions\": [CONDITION_OBJECTS]},{\"glue\":\"or\",\"conditions\":[CONDITION_OBJECTS]}]}`. Replace `CONDITION_OBJECTS` with JSON objects of the following structure: `{\"object\":\"\",\"field_id\":\"\", \"operator\":\"\",\"value\":\"\", \"extra_value\":\"\"}` or leave the array empty. Depending on the object type you should use another API endpoint to get `field_id`. There are five types of objects you can choose from: `\"person\"`, `\"deal\"`, `\"organization\"`, `\"product\"`, `\"activity\"` and you can use these types of operators depending on what type of a field you have: `\"IS NOT NULL\"`, `\"IS NULL\"`, `\"<=\"`, `\">=\"`, `\"<\"`, `\">\"`, `\"!=\"`, `\"=\"`, `\"LIKE \'$%\'\"`, `\"LIKE \'%$%\'\"`, `\"NOT LIKE \'$%\'\"`. To get a better understanding of how filters work try creating them directly from the Pipedrive application.
     * @type {object}
     * @memberof AddFilterRequest
     */
    'conditions': object;
    /**
     * 
     * @type {string}
     * @memberof AddFilterRequest
     */
    'type': AddFilterRequestTypeConst;
}

export const AddFilterRequestTypeConst = {
    deals: 'deals',
    leads: 'leads',
    org: 'org',
    people: 'people',
    products: 'products',
    activity: 'activity',
    projects: 'projects'
} as const;

export type AddFilterRequestTypeConst = typeof AddFilterRequestTypeConst[keyof typeof AddFilterRequestTypeConst];

