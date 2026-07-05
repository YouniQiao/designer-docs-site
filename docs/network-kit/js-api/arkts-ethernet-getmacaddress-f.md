# getMacAddress

## getMacAddress

```TypeScript
function getMacAddress(): Promise<Array<MacAddressInfo>>
```

Get the ethernet mac address list.

**Since:** 14

**Required permissions:** 

 ohos.permission.GET_ETHERNET_LOCAL_MAC

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;MacAddressInfo>> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2201005 | Device information does not exist. |

**Example**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

ethernet.getMacAddress().then((data: Array<ethernet.MacAddressInfo>) => {
  console.info("getMacAddress promise data = " + JSON.stringify(data));
}).catch((error: BusinessError) => {
  console.error("getMacAddress promise error = " + JSON.stringify(error));
});

```

