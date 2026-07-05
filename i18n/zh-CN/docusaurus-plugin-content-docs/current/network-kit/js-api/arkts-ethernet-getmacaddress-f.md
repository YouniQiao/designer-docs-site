# getMacAddress

## getMacAddress

```TypeScript
function getMacAddress(): Promise<Array<MacAddressInfo>>
```

Get the ethernet mac address list.

**起始版本：** 14

**需要权限：** 

 ohos.permission.GET_ETHERNET_LOCAL_MAC

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;MacAddressInfo>> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2201005 | Device information does not exist. |

**示例：**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

ethernet.getMacAddress().then((data: Array<ethernet.MacAddressInfo>) => {
  console.info("getMacAddress promise data = " + JSON.stringify(data));
}).catch((error: BusinessError) => {
  console.error("getMacAddress promise error = " + JSON.stringify(error));
});

```

