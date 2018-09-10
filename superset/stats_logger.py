# -*- coding: utf-8 -*-
"""
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
"""
# pylint: disable=C,R,W
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

import logging

from colorama import Fore, Style


class BaseStatsLogger(object):
    """Base class for logging realtime events"""

    def __init__(self, prefix='superset'):
        self.prefix = prefix

    def key(self, key):
        if self.prefix:
            return self.prefix + key
        return key

    def incr(self, key):
        """Increment a counter"""
        raise NotImplementedError()

    def decr(self, key):
        """Decrement a counter"""
        raise NotImplementedError()

    def gauge(self, key):
        """Setup a gauge"""
        raise NotImplementedError()


class DummyStatsLogger(BaseStatsLogger):
    def incr(self, key):
        logging.debug(
            Fore.CYAN + '[stats_logger] (incr) ' + key + Style.RESET_ALL)

    def decr(self, key):
        logging.debug((
            Fore.CYAN + '[stats_logger] (decr) ' + key +
            Style.RESET_ALL))

    def gauge(self, key, value):
        logging.debug((
            Fore.CYAN + '[stats_logger] (gauge) '
            '{key} | {value}' + Style.RESET_ALL).format(**locals()))


try:
    from statsd import StatsClient

    class StatsdStatsLogger(BaseStatsLogger):
        def __init__(self, host, port, prefix='superset'):
            self.client = StatsClient(host=host, port=port, prefix=prefix)

        def incr(self, key):
            self.client.incr(key)

        def decr(self, key):
            self.client.decr(key)

        def gauge(self, key):
            # pylint: disable=no-value-for-parameter
            self.client.gauge(key)

except Exception as e:
    pass
