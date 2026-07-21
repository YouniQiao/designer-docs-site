# on (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="on"></a>
## on('streamChange')

```TypeScript
function on(type: 'streamChange', callback: Callback<number>): void
```

Subscribe Wi-Fi stream change events.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_WIFI_CONNECTION

<!--Device-wifiManager-function on(type: 'streamChange', callback: Callback<number>): void--><!--Device-wifiManager-function on(type: 'streamChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'streamChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | Yes | the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |


<a id="on-1"></a>
## on('deviceConfigChange')

```TypeScript
function on(type: 'deviceConfigChange', callback: Callback<number>): void
```

Subscribe Wi-Fi device config change events.

**Since:** 9

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function on(type: 'deviceConfigChange', callback: Callback<number>): void--><!--Device-wifiManager-function on(type: 'deviceConfigChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceConfigChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | Yes | the callback of on, 0: config is added, 1: config is changed, 2: config is removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |


<a id="on-2"></a>
## on('hotspotStaJoin')

```TypeScript
function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void
```

Subscribe Wi-Fi hotspot sta join events.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifiManager-function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void--><!--Device-wifiManager-function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStaJoin' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;StationInfo&gt; | Yes | the callback of on |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2601000](../errorcode-wifi.md#2601000-hotspot-module-error) | Operation failed. |


<a id="on-3"></a>
## on('hotspotStaLeave')

```TypeScript
function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void
```

Subscribe Wi-Fi hotspot sta leave events.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifiManager-function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void--><!--Device-wifiManager-function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStaLeave' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;StationInfo&gt; | Yes | the callback of on |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2601000](../errorcode-wifi.md#2601000-hotspot-module-error) | Operation failed. |

