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

/**
 * Parameters for adding an Application.
 *
 */
class ApplicationCreateParameters {
  /**
   * Create a ApplicationCreateParameters.
   * @member {boolean} [allowUpdates] A value indicating whether packages
   * within the application may be overwritten using the same version string.
   * @member {string} [displayName] The display name for the application.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationCreateParameters
   *
   * @returns {object} metadata of ApplicationCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationCreateParameters',
      type: {
        name: 'Composite',
        className: 'ApplicationCreateParameters',
        modelProperties: {
          allowUpdates: {
            required: false,
            serializedName: 'allowUpdates',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationCreateParameters;