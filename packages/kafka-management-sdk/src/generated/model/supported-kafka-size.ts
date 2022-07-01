/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Management API
 * Kafka Management API is a REST API to manage Kafka instances
 *
 * The version of the OpenAPI document: 1.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SupportedKafkaSizeBytesValueItem } from './supported-kafka-size-bytes-value-item';

/**
 * Supported Kafka Size
 * @export
 * @interface SupportedKafkaSize
 */
export interface SupportedKafkaSize {
    /**
     * Unique identifier of this Kafka instance size.
     * @type {string}
     * @memberof SupportedKafkaSize
     */
    'id'?: string;
    /**
     * Display name of this Kafka instance size.
     * @type {string}
     * @memberof SupportedKafkaSize
     */
    'display_name'?: string;
    /**
     * 
     * @type {SupportedKafkaSizeBytesValueItem}
     * @memberof SupportedKafkaSize
     */
    'ingress_throughput_per_sec'?: SupportedKafkaSizeBytesValueItem;
    /**
     * 
     * @type {SupportedKafkaSizeBytesValueItem}
     * @memberof SupportedKafkaSize
     */
    'egress_throughput_per_sec'?: SupportedKafkaSizeBytesValueItem;
    /**
     * Maximum amount of total connections available to this Kafka instance size.
     * @type {number}
     * @memberof SupportedKafkaSize
     */
    'total_max_connections'?: number;
    /**
     * 
     * @type {SupportedKafkaSizeBytesValueItem}
     * @memberof SupportedKafkaSize
     */
    'max_data_retention_size'?: SupportedKafkaSizeBytesValueItem;
    /**
     * Maximum amount of total partitions available to this Kafka instance size.
     * @type {number}
     * @memberof SupportedKafkaSize
     */
    'max_partitions'?: number;
    /**
     * Maximum data retention period available to this Kafka instance size.
     * @type {string}
     * @memberof SupportedKafkaSize
     */
    'max_data_retention_period'?: string;
    /**
     * Maximium connection attempts per second available to this Kafka instance size.
     * @type {number}
     * @memberof SupportedKafkaSize
     */
    'max_connection_attempts_per_sec'?: number;
    /**
     * 
     * @type {SupportedKafkaSizeBytesValueItem}
     * @memberof SupportedKafkaSize
     */
    'max_message_size'?: SupportedKafkaSizeBytesValueItem;
    /**
     * Minimum number of in-sync replicas.
     * @type {number}
     * @memberof SupportedKafkaSize
     */
    'min_in_sync_replicas'?: number;
    /**
     * Replication factor available to this Kafka instance size.
     * @type {number}
     * @memberof SupportedKafkaSize
     */
    'replication_factor'?: number;
    /**
     * List of Availability Zone modes that this Kafka instance size supports. The possible values are \"single\", \"multi\".
     * @type {Array<string>}
     * @memberof SupportedKafkaSize
     */
    'supported_az_modes'?: Array<string>;
    /**
     * The limit lifespan of the kafka instance in seconds. If not specified then the instance never expires.
     * @type {number}
     * @memberof SupportedKafkaSize
     */
    'lifespan_seconds'?: number | null;
    /**
     * Quota consumed by this Kafka instance size.
     * @type {number}
     * @memberof SupportedKafkaSize
     */
    'quota_consumed'?: number;
    /**
     * Quota type used by this Kafka instance size.
     * @type {string}
     * @memberof SupportedKafkaSize
     */
    'quota_type'?: string;
    /**
     * Data plane cluster capacity consumed by this Kafka instance size.
     * @type {number}
     * @memberof SupportedKafkaSize
     */
    'capacity_consumed'?: number;
    /**
     * Maturity level of the size. Can be \"stable\" or \"preview\".
     * @type {string}
     * @memberof SupportedKafkaSize
     */
    'maturity_status'?: string;
}

