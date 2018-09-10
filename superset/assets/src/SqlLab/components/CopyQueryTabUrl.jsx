/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from '../../components/CopyToClipboard';
import { storeQuery } from '../../utils/common';
import { t } from '../../locales';

const propTypes = {
  queryEditor: PropTypes.object.isRequired,
};

export default class CopyQueryTabUrl extends React.PureComponent {
  getUrl(callback) {
    const qe = this.props.queryEditor;
    const sharedQuery = {
      dbId: qe.dbId,
      title: qe.title,
      schema: qe.schema,
      autorun: qe.autorun,
      sql: qe.sql,
    };
    storeQuery(sharedQuery, callback);
  }

  render() {
    return (
      <CopyToClipboard
        inMenu
        copyNode={(
          <div>
            <div className="icon-container">
              <i className="fa fa-clipboard" />
            </div>
            <span>{t('Share query')}</span>
          </div>
        )}
        tooltipText={t('Copy URL to clipboard')}
        shouldShowText={false}
        getText={this.getUrl.bind(this)}
      />
    );
  }
}

CopyQueryTabUrl.propTypes = propTypes;
