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
export const defaultViewport = {
  longitude: 6.85236157047845,
  latitude: 31.222656842808707,
  zoom: 1,
  bearing: 0,
  pitch: 0,
};

const METER_TO_MILE = 1609.34;
export function unitToRadius(unit, num) {
  if (unit === 'square_m') {
    return Math.sqrt(num / Math.PI);
  } else if (unit === 'radius_m') {
    return num;
  } else if (unit === 'radius_km') {
    return num * 1000;
  } else if (unit === 'radius_miles') {
    return num * METER_TO_MILE;
  } else if (unit === 'square_km') {
    return Math.sqrt(num / Math.PI) * 1000;
  } else if (unit === 'square_miles') {
    return Math.sqrt(num / Math.PI) * METER_TO_MILE;
  }
  return null;
}
