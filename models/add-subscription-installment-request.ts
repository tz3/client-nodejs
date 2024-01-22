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
 * @interface AddSubscriptionInstallmentRequest
 */
export interface AddSubscriptionInstallmentRequest {
    /**
     * The ID of the deal this installment subscription is associated with
     * @type {number}
     * @memberof AddSubscriptionInstallmentRequest
     */
    'deal_id': number;
    /**
     * The currency of the installment subscription. Accepts a 3-character currency code.
     * @type {string}
     * @memberof AddSubscriptionInstallmentRequest
     */
    'currency': string;
    /**
     * Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
     * @type {Array<object>}
     * @memberof AddSubscriptionInstallmentRequest
     */
    'payments': Array<object>;
    /**
     * Indicates that the deal value must be set to the installment subscription\'s total value
     * @type {boolean}
     * @memberof AddSubscriptionInstallmentRequest
     */
    'update_deal_value'?: boolean;
}
