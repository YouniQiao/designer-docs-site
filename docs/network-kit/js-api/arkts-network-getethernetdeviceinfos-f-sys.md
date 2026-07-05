# getEthernetDeviceInfos (System API)

## Modules to Import

```TypeScript
import { ethernet } from '@ohos.net.ethernet';
```

## getEthernetDeviceInfos

```TypeScript
function getEthernetDeviceInfos(): Promise<Array<EthernetDeviceInfos>>
```

Get the ethernet mac address list.

**Since:** 20

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;EthernetDeviceInfos&gt;&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [2201005](../errorcode-net-ethernet.md#2201005-device-information-not-exist) | Device information does not exist. |

**Example**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

ethernet.getEthernetDeviceInfos().then((data: Array<ethernet.EthernetDeviceInfos>) => {
  console.info("getEthernetDeviceInfos data.length = " + JSON.stringify(data.length));
  for (let i = 0; i < data.length; i++) {
    console.info("getEthernetDeviceInfos = " + JSON.stringify(data[i]));
  }
}).catch((err: BusinessError) => {
  console.error("getEthernetDeviceInfos err = " + err.code);
});

```

