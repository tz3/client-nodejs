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


// May contain unused imports in some cases
// @ts-ignore
import { SearchProductsResponse200AllOfDataItemsInnerItemOwner } from './search-products-response200-all-of-data-items-inner-item-owner';

/**
 * 
 * @export
 * @interface SearchProductsResponse200AllOfDataItemsInnerItem
 */
export interface SearchProductsResponse200AllOfDataItemsInnerItem {
    /**
     * The ID of the product
     * @type {number}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    'id'?: number;
    /**
     * The type of the item
     * @type {string}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    'type'?: string;
    /**
     * The name of the product
     * @type {string}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    'name'?: string;
    /**
     * The code of the product
     * @type {number}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    'code'?: number;
    /**
     * The visibility of the product
     * @type {number}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    'visible_to'?: number;
    /**
     * 
     * @type {SearchProductsResponse200AllOfDataItemsInnerItemOwner}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    'owner'?: SearchProductsResponse200AllOfDataItemsInnerItemOwner;
    /**
     * The custom fields
     * @type {Array<string>}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    'custom_fields'?: Array<string>;
}
