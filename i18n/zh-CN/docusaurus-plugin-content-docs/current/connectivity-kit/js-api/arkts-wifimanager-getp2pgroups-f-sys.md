# getP2pGroups

## getP2pGroups

```TypeScript
function getP2pGroups(): Promise<Array<WifiP2pGroupInfo>>
```

Obtain information about the groups.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;WifiP2pGroupInfo>> | Returns the information about own device info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

wifiManager.getP2pGroups((err: BusinessError, data:wifiManager.WifiP2pGroupInfo[]) => {
if (err) {
    console.error("get P2P groups error");
    return;
}
  console.info("get P2P groups: " + JSON.stringify(data));
});

wifiManager.getP2pGroups().then(data => {
  console.info("get P2P groups: " + JSON.stringify(data));
});
  

```

## getP2pGroups

```TypeScript
function getP2pGroups(callback: AsyncCallback<Array<WifiP2pGroupInfo>>): void
```

Obtain information about the groups.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;WifiP2pGroupInfo>> | 是 | Indicates callback of function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |
| 2801001 | Wi-Fi STA disabled. |

