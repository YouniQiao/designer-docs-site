# getDeviceMacAddress

## getDeviceMacAddress

```TypeScript
function getDeviceMacAddress(): string[]
```

Obtains the MAC address of a Wi-Fi device. Wi-Fi must be enabled. <p>The MAC address is unique and cannot be changed.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getDeviceMacAddress

**需要权限：** 

 ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string[] | Returns the MAC address of the Wi-Fi device. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let ret = wifi.getDeviceMacAddress();
    console.info("deviceMacAddress:" + JSON.stringify(ret));
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}


```

