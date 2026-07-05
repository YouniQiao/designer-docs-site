# getCurrentGroup

## getCurrentGroup

```TypeScript
function getCurrentGroup(): Promise<WifiP2pGroupInfo>
```

Obtains information about the current group.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getCurrentGroup

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

**系统能力：** SystemCapability.Communication.WiFi.P2P

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WifiP2pGroupInfo> | Returns the current group information. |

## getCurrentGroup

```TypeScript
function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void
```

Obtains information about the current group.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getCurrentGroup

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

**系统能力：** SystemCapability.Communication.WiFi.P2P

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;WifiP2pGroupInfo> | 是 |  |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

wifi.getCurrentGroup((err, data:wifi.WifiP2pGroupInfo) => {
   if (err) {
       console.error("get current P2P group error");
       return;
   }
  console.info("get current P2P group: " + JSON.stringify(data));
});

wifi.getCurrentGroup().then(data => {
  console.info("get current P2P group: " + JSON.stringify(data));
});

```

