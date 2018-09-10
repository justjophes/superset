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
import Jed from 'jed';

const DEFAULT_LANGUAGE_PACK = {
  domain: 'superset',
  locale_data: {
    superset: {
      '': {
        domain: 'superset',
        lang: 'en',
        plural_forms: 'nplurals=1; plural=0',
      },
    },
  },
};

const i18n = (function () {
  let languagePack = DEFAULT_LANGUAGE_PACK;

  if (typeof window !== 'undefined') {
    const root = document.getElementById('app');
    const bootstrapData = root ? JSON.parse(root.getAttribute('data-bootstrap')) : {};
    if (bootstrapData.common && bootstrapData.common.language_pack) {
      languagePack = bootstrapData.common.language_pack;
      delete bootstrapData.common.locale;
      delete bootstrapData.common.language_pack;
    }
  }

  return new Jed(languagePack);
}());

export default i18n;
