/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.ProductsController;
const Product = testerlib.Product;
const FindProductsByNameResponse = testerlib.FindProductsByNameResponse;
const NumberBooleanEnum = testerlib.NumberBooleanEnum;
const VisibleToEnum = testerlib.VisibleToEnum;
const BasicDeal = testerlib.BasicDeal;
const Status2Enum = testerlib.Status2Enum;
const UserIDs = testerlib.UserIDs;
const NewFollowerResponse = testerlib.NewFollowerResponse;
const DeleteProductFollowerResponse = testerlib.DeleteProductFollowerResponse;

describe("ProductsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Returns data about all products.
     */
    it("should testTestGetAllProducts response", function testTestGetAllProductsTest(done) {
        // parameters for the API call
        let input = [];
        input['userId'] = null;
        input['filterId'] = null;
        input['firstChar'] = null;
        input['start'] = 0;
        input['limit'] = null;

        controller.getAllProducts(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"success": true, "data": [{"id": 1, "name": "Mechanical Pencil", "code": "MPENCIL", "description": null, "unit": null, "tax": 0, "category": null, "active_flag": true, "selectable": true, "first_char": "m", "visible_to": "3", "owner_id": {"id": 10100010, "name": "Test User", "email": "example@test.com", "has_pic": true, "pic_hash": "5df5332929fab76702207f38b29a5d88", "active_flag": true, "value": 10100010}, "files_count": null, "followers_count": 0, "add_time": "2019-12-19 11: 36: 49", "update_time": "2019-12-19 11: 36: 49", "prices": [{"id": 1, "product_id": 1, "price": 5, "currency": "EUR", "cost": 2, "overhead_cost": null}]}], "additional_data": {}, "related_objects": null, "user": {"10100010": {"id": 10100010, "name": "Test User", "email": "example@test.com", "has_pic": true, "pic_hash": "5df5332929fab76702207f38b29a5d88", "active_flag": true}}}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * Adds a new product to the products inventory. For more information on how to add a product, see <a href="https://pipedrive.readme.io/docs/adding-a-product" target="_blank" rel="noopener noreferrer">this tutorial</a>.
     */
    it("should testTestAddAProduct response", function testTestAddAProductTest(done) {
        // parameters for the API call
        let input = [];
        input['contentType'] = null;
        input['body'] = null;

        controller.addAProduct(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

});