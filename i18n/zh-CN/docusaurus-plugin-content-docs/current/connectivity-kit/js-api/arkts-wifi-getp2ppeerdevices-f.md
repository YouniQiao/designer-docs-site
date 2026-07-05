# getP2pPeerDevices

## getP2pPeerDevices

```TypeScript
function getP2pPeerDevices(): Promise<WifiP2pDevice[]>
```

Obtains the information about the found devices.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getP2pPeerDevices

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

**系统能力：** SystemCapability.Communication.WiFi.P2P

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WifiP2pDevice[]> | Returns the found devices list. |

## getP2pPeerDevices

```TypeScript
function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void
```

Obtains the information about the found devices.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getP2pPeerDevices

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

**系统能力：** SystemCapability.Communication.WiFi.P2P

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;WifiP2pDevice[]> | 是 |  |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

wifi.getP2pPeerDevices((err, data:wifi.WifiP2pDevice) => {
   if (err) {
       console.error("get P2P peer devices error");
       return;
   }
  console.info("get P2P peer devices: " + JSON.stringify(data));
});

wifi.getP2pPeerDevices().then(data => {
  console.info("get P2P peer devices: " + JSON.stringify(data));
});

```

