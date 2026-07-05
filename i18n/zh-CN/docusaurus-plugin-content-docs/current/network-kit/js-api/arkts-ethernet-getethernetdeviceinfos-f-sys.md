# getEthernetDeviceInfos

## getEthernetDeviceInfos

```TypeScript
function getEthernetDeviceInfos(): Promise<Array<EthernetDeviceInfos>>
```

Get the ethernet mac address list.

**起始版本：** 20

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;EthernetDeviceInfos>> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2201005 | Device information does not exist. |

**示例：**

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

