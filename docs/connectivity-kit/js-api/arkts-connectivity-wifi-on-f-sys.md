# on (System API)

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="on"></a>
## on('streamChange')

```TypeScript
function on(type: 'streamChange', callback: Callback<number>): void
```

Subscribe Wi-Fi stream change events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:streamChange

**Required permissions:** ohos.permission.MANAGE_WIFI_CONNECTION

<!--Device-wifi-function on(type: 'streamChange', callback: Callback<number>): void--><!--Device-wifi-function on(type: 'streamChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'streamChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | Yes | the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional |


<a id="on-1"></a>
## on('hotspotStaJoin')

```TypeScript
function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void
```

Subscribe Wi-Fi hotspot sta join events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:hotspotStaJoin

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifi-function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void--><!--Device-wifi-function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStaJoin' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;StationInfo&gt; | Yes | the callback of on |


<a id="on-2"></a>
## on('hotspotStaLeave')

```TypeScript
function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void
```

Subscribe Wi-Fi hotspot sta leave events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:hotspotStaLeave

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifi-function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void--><!--Device-wifi-function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStaLeave' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;StationInfo&gt; | Yes | the callback of on |

