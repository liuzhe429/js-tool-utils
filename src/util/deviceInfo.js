/**
 * Copyright (c) 2019-2020 arleneLiu, All rights reserved.
 * @fileoverview 获取设备网络状态
 * @author arleneLiu | 543270835@qq.com
 * @version 0.0.1-alpha | 2019-11-01 | arleneLiu   //初始版本。
 *
 * @method getNetworkType        // 方法：获取网络状态
 * @param  No                    // 参数：无
 * @return networkType           // 返回：当前设备网络状态
 */

export default function getNetworkType () {
  var ua = navigator.userAgent;
  var networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other';
  networkStr = networkStr.toLowerCase().replace('nettype/', '');
  var networkType;
  switch (networkStr) {
    case 'wifi':
        networkType = 'wifi';
        break;
    case '4g':
        networkType = '4g';
        break;
    case '3g':
        networkType = '3g';
        break;
    case '3gnet':
        networkType = '3g';
        break;
    case '2g':
        networkType = '2g';
        break;
    default:
        networkType = 'out';
  }
  return networkType;
}
