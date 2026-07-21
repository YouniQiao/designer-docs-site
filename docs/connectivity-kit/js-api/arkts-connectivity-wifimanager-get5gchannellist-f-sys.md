# get5GChannelList (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="get5gchannellist"></a>
## get5GChannelList

```TypeScript
function get5GChannelList(): Array<number>
```

Obtain the supported 5G channel list of the device.

**Since:** 10

**Required permissions:** ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

<!--Device-wifiManager-function get5GChannelList(): Array<int>--><!--Device-wifiManager-function get5GChannelList(): Array<int>-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number&gt; | Returns 5G channel list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let channelList = wifiManager.get5GChannelList();
  console.info("channelList:" + JSON.stringify(channelList));    
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

