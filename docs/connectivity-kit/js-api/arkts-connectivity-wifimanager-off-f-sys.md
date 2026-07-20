# off (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## off('streamChange')

```TypeScript
function off(type: 'streamChange', callback?: Callback<number>): void
```

Unsubscribe Wi-Fi stream change events.All callback functions will be deregistered If there is no specific callback parameter.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_WIFI_CONNECTION

<!--Device-wifiManager-function off(type: 'streamChange', callback?: Callback<number>): void--><!--Device-wifiManager-function off(type: 'streamChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'streamChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | No | the callback of off |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

let recvStreamChangeFunc = (result:number) => {
    console.info("Receive stream change event: " + result);
}

// Register an event.
wifiManager.on("streamChange", recvStreamChangeFunc);

// Unregister an event.
wifiManager.off("streamChange", recvStreamChangeFunc);


```


## off('deviceConfigChange')

```TypeScript
function off(type: 'deviceConfigChange', callback?: Callback<number>): void
```

Subscribe Wi-Fi device config change events.

**Since:** 9

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function off(type: 'deviceConfigChange', callback?: Callback<number>): void--><!--Device-wifiManager-function off(type: 'deviceConfigChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceConfigChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | No | the callback of off,0: config is added, 1: config is changed, 2: config is removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

let recvDeviceConfigChangeFunc = (result:number) => {
    console.info("Receive device config change event: " + result);
}

// Register an event.
wifiManager.on("deviceConfigChange", recvDeviceConfigChangeFunc);

// Unregister an event.
wifiManager.off("deviceConfigChange", recvDeviceConfigChangeFunc);


```


## off('hotspotStaJoin')

```TypeScript
function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void
```

Unsubscribe Wi-Fi hotspot sta join events.All callback functions will be deregistered If there is no specific callback parameter.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifiManager-function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void--><!--Device-wifiManager-function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStaJoin' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<StationInfo> | No | the callback of off |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2601000](../errorcode-wifi.md#2601000-hotspot-module-error) | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

let recvHotspotStaJoinFunc = (result:wifiManager.StationInfo) => {
    console.info("Receive hotspot sta join event: " + result);
}

// Register an event.
wifiManager.on("hotspotStaJoin", recvHotspotStaJoinFunc);

// Unregister an event.
wifiManager.off("hotspotStaJoin", recvHotspotStaJoinFunc);


```


## off('hotspotStaLeave')

```TypeScript
function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void
```

Unsubscribe Wi-Fi hotspot sta leave events.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifiManager-function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void--><!--Device-wifiManager-function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStaLeave' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<StationInfo> | No | the callback of off |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2601000](../errorcode-wifi.md#2601000-hotspot-module-error) | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

let recvHotspotStaLeaveFunc = (result:wifiManager.StationInfo) => {
    console.info("Receive hotspot sta leave event: " + result);
}

// Register an event.
wifiManager.on("hotspotStaLeave", recvHotspotStaLeaveFunc);

// Unregister an event.
wifiManager.off("hotspotStaLeave", recvHotspotStaLeaveFunc);


```

