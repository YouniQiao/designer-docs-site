# off (System API)

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

## off('streamChange')

```TypeScript
function off(type: 'streamChange', callback?: Callback<number>): void
```

Unsubscribe Wi-Fi stream change events.

<p>All callback functions will be deregistered If there is no specific callback parameter.</p>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:streamChange

**Required permissions:** ohos.permission.MANAGE_WIFI_CONNECTION

<!--Device-wifi-function off(type: 'streamChange', callback?: Callback<number>): void--><!--Device-wifi-function off(type: 'streamChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'streamChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | No | the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional |


## off('hotspotStaJoin')

```TypeScript
function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void
```

Unsubscribe Wi-Fi hotspot sta join events.

<p>All callback functions will be deregistered If there is no specific callback parameter.</p>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:hotspotStaJoin

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifi-function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void--><!--Device-wifi-function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStaJoin' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<StationInfo> | No | the callback of on |


## off('hotspotStaLeave')

```TypeScript
function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void
```

Unsubscribe Wi-Fi hotspot sta leave events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:hotspotStaLeave

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifi-function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void--><!--Device-wifi-function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStaLeave' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<StationInfo> | No | the callback of on |

