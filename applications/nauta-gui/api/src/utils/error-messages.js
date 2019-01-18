/**
 * INTEL CONFIDENTIAL
 * Copyright (c) 2018 Intel Corporation
 *
 * The source code contained or described herein and all documents related to
 * the source code ("Material") are owned by Intel Corporation or its suppliers
 * or licensors. Title to the Material remains with Intel Corporation or its
 * suppliers and licensors. The Material contains trade secrets and proprietary
 * and confidential information of Intel or its suppliers and licensors. The
 * Material is protected by worldwide copyright and trade secret laws and treaty
 * provisions. No part of the Material may be used, copied, reproduced, modified,
 * published, uploaded, posted, transmitted, distributed, or disclosed in any way
 * without Intel's prior express written permission.
 *
 * No license under any patent, copyright, trade secret or other intellectual
 * property right is granted to or conferred upon you by disclosure or delivery
 * of the Materials, either expressly, by implication, inducement, estoppel or
 * otherwise. Any license under such intellectual property rights must be express
 * and approved by Intel in writing.
 */

module.exports = {
  GENERAL: {
    INTERNAL_SERVER_ERROR: 'Internal server error',
    BAD_REQUEST: 'Missing data'
  },
  AUTH: {
    INVALID_TOKEN: 'Provided token is invalid.',
    MISSING_TOKEN: 'Missing authorization token',
    FORBIDDEN_OPERATION: 'Forbidden operation.',
    UNAUTHORIZED_OPERATION: 'Unauthorized operation.'
  },
  ELASTICSEARCH: {
    CANNOT_GET_SEARCH_RESULT: 'Cannot get search result'
  },
  K8S: {
    CUSTOM_OBJECT: {
      CANNOT_LIST: 'Cannot list custom objects'
    },
    PODS: {
      CANNOT_LIST: 'Cannot list pods objects'
    }
  }
};