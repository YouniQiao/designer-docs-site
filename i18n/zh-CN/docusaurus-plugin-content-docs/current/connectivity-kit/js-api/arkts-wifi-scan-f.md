# scan

## scan

```TypeScript
function scan(): boolean
```

Scans Wi-Fi hotspot. <p>This API works in asynchronous mode.</p>

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.scan

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the accessibility is succeed; returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
  wifi.scan();
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

