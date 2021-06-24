/* tslint:disable */
/* eslint-disable */
/**
 * Connector Service Fleet Manager
 * Connector Service Fleet Manager is a Rest API to manage connectors.
 *
 * The version of the OpenAPI document: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ConnectorAllOfMetadata
 */
export interface ConnectorAllOfMetadata {
    /**
     * 
     * @type {string}
     * @memberof ConnectorAllOfMetadata
     */
    kafka_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorAllOfMetadata
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorAllOfMetadata
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorAllOfMetadata
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorAllOfMetadata
     */
    updated_at?: string;
    /**
     * 
     * @type {number}
     * @memberof ConnectorAllOfMetadata
     */
    resource_version?: number;
}

