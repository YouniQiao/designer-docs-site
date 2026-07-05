# getDeviceMacAddress

## getDeviceMacAddress

```TypeScript
function getDeviceMacAddress(): string[]
```

Obtain the MAC address of a Wi-Fi device. Wi-Fi must be enabled. The MAC address is unique and cannot be changed.

**起始版本：** 15

**需要权限：** 

 ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string[] | Returns the MAC address of the Wi-Fi device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let ret = wifiManager.getDeviceMacAddress();
    console.info("deviceMacAddress:" + JSON.stringify(ret));
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }


```

