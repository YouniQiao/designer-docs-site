# on

## on('wifiStateChange')

```TypeScript
function on(type: 'wifiStateChange', callback: Callback<number>): void
```

Subscribe Wi-Fi status change events.

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'wifiStateChange' | 是 | event name. |
| callback | Callback&lt;number> | 是 | the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

## on('wifiConnectionChange')

```TypeScript
function on(type: 'wifiConnectionChange', callback: Callback<number>): void
```

Subscribe Wi-Fi connection change events.

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'wifiConnectionChange' | 是 | event name. |
| callback | Callback&lt;number> | 是 | the callback of on, 0: disconnected, 1: connected |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

## on('wifiScanStateChange')

```TypeScript
function on(type: 'wifiScanStateChange', callback: Callback<number>): void
```

Subscribe Wi-Fi scan status change events.

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'wifiScanStateChange' | 是 | event name. |
| callback | Callback&lt;number> | 是 | the callback of on, 0: scan fail, 1: scan success |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

## on('wifiRssiChange')

```TypeScript
function on(type: 'wifiRssiChange', callback: Callback<number>): void
```

Subscribe Wi-Fi rssi change events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'wifiRssiChange' | 是 | event name. |
| callback | Callback&lt;number> | 是 | the callback of on |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

## on('hotspotStateChange')

```TypeScript
function on(type: 'hotspotStateChange', callback: Callback<number>): void
```

Subscribe Wi-Fi hotspot state change events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'hotspotStateChange' | 是 | event name. |
| callback | Callback&lt;number> | 是 | the callback of on,  0: inactive, 1: active, 2: activating, 3: de-activating |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

## on('p2pStateChange')

```TypeScript
function on(type: 'p2pStateChange', callback: Callback<number>): void
```

Subscribe P2P status change events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'p2pStateChange' | 是 | event name. |
| callback | Callback&lt;number> | 是 | the callback of on, 1: idle, 2: starting, 3:started, 4: closing, 5: closed |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

## on('p2pConnectionChange')

```TypeScript
function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void
```

Subscribe P2P connection change events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'p2pConnectionChange' | 是 | event name. |
| callback | Callback&lt;WifiP2pLinkedInfo> | 是 | the callback of on |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

## on('p2pDeviceChange')

```TypeScript
function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void
```

Subscribe P2P local device change events.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'p2pDeviceChange' | 是 | event name. |
| callback | Callback&lt;WifiP2pDevice> | 是 | the callback of on |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

## on('p2pPeerDeviceChange')

```TypeScript
function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void
```

Subscribe P2P peer device change events.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'p2pPeerDeviceChange' | 是 | event name. |
| callback | Callback&lt;WifiP2pDevice[]> | 是 | the callback of on |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

## on('p2pPersistentGroupChange')

```TypeScript
function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void
```

Subscribe P2P persistent group change events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'p2pPersistentGroupChange' | 是 | event name. |
| callback | Callback&lt;void> | 是 | the callback of on |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

## on('p2pDiscoveryChange')

```TypeScript
function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void
```

Subscribe P2P discovery events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'p2pDiscoveryChange' | 是 | event name. |
| callback | Callback&lt;number> | 是 | the callback of on |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

