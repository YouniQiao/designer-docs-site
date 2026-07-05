# getIpv6Info

## getIpv6Info

```TypeScript
function getIpv6Info(): Ipv6Info
```

Obtain the IPv6 information of the Wi-Fi connection. The IPv6 information includes the host IP address, gateway address, and DNS information.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Ipv6Info | Returns the IPv6 information of the Wi-Fi connection. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let info = wifiManager.getIpv6Info();
    console.info("info:" + JSON.stringify(info));
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

