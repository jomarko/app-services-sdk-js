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


import { ClusterTarget } from './cluster-target';
import { ConnectorAllOf } from './connector-all-of';
import { ConnectorAllOfMetadata } from './connector-all-of-metadata';
import { KafkaConnectionSettings } from './kafka-connection-settings';
import { ObjectReference } from './object-reference';

/**
 * @type Connector
 * A connector holds the configuration to connect a Kafka topic to another system.
 * @export
 */
export type Connector = ConnectorAllOf & ObjectReference;


