# getScanResultsSync

## getScanResultsSync

```TypeScript
function getScanResultsSync(): Array<WifiScanInfo>
```

Obtain the scanned sta list.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** wifiManager.getScanInfoList

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or * (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;WifiScanInfo> | Returns information about scanned Wi-Fi hotspot if any. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

