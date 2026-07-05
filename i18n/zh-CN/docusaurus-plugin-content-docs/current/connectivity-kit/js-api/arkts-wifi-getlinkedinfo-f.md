# getLinkedInfo

## getLinkedInfo

```TypeScript
function getLinkedInfo(): Promise<WifiLinkedInfo>
```

Obtains information about a Wi-Fi connection.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getLinkedInfo

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WifiLinkedInfo> | Returns Wi-Fi linked information. |

## getLinkedInfo

```TypeScript
function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void
```

Obtains information about a Wi-Fi connection.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getLinkedInfo

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;WifiLinkedInfo> | 是 |  |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

wifi.getLinkedInfo((err, data:wifi.WifiLinkedInfo) => {
    if (err) {
        console.error("get linked info error");
        return;
    }
    console.info("get wifi linked info: " + JSON.stringify(data));
});

wifi.getLinkedInfo().then(data => {
    console.info("get wifi linked info: " + JSON.stringify(data));
}).catch((error:number) => {
    console.info("get linked info error");
});

```

