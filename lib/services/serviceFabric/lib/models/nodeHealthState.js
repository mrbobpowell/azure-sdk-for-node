/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Represents the health state of a node, which contains the node identifier
 * and its aggregated health state.
 *
 * @extends models['EntityHealthState']
 */
class NodeHealthState extends models['EntityHealthState'] {
  /**
   * Create a NodeHealthState.
   * @member {string} [name]
   * @member {object} [id]
   * @member {string} [id.id] Value of the node Id. This is a 128 bit integer.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NodeHealthState
   *
   * @returns {object} metadata of NodeHealthState
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeHealthState',
      type: {
        name: 'Composite',
        className: 'NodeHealthState',
        modelProperties: {
          aggregatedHealthState: {
            required: false,
            serializedName: 'AggregatedHealthState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'Id',
            type: {
              name: 'Composite',
              className: 'NodeId'
            }
          }
        }
      }
    };
  }
}

module.exports = NodeHealthState;
