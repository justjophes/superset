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

from flask import request

from superset import tables_cache


def view_cache_key(*unused_args, **unused_kwargs):
    args_hash = hash(frozenset(request.args.items()))
    return 'view/{}/{}'.format(request.path, args_hash)


def memoized_func(timeout=5 * 60, key=view_cache_key):
    """Use this decorator to cache functions that have predefined first arg.

    memoized_func uses simple_cache and stored the data in memory.
    Key is a callable function that takes function arguments and
    returns the caching key.
    """
    def wrap(f):
        if tables_cache:
            def wrapped_f(cls, *args, **kwargs):
                cache_key = key(*args, **kwargs)
                o = tables_cache.get(cache_key)
                if not kwargs['force'] and o is not None:
                    return o
                o = f(cls, *args, **kwargs)
                tables_cache.set(cache_key, o, timeout=timeout)
                return o
        else:
            # noop
            def wrapped_f(cls, *args, **kwargs):
                return f(cls, *args, **kwargs)
        return wrapped_f
    return wrap
