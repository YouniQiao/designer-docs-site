# getIpInfo

## getIpInfo

```TypeScript
function getIpInfo(): IpInfo
```

Obtains the IP information of a Wi-Fi connection. <p>The IP information includes the host IP address, gateway address, and DNS information.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getIpInfo

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IpInfo | Returns the IP information of the Wi-Fi connection. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
  let info = wifi.getIpInfo();
  console.info("info:" + JSON.stringify(info));
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

