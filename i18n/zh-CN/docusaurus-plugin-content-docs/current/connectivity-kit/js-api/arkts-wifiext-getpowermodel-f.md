# getPowerModel

## getPowerModel

```TypeScript
function getPowerModel(): Promise<PowerModel>
```

Obtains the current Wi-Fi power mode.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManagerExt/wifiManagerExt.getPowerMode

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.AP.Extension

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PowerModel> | Returns the current Wi-Fi power mode. If a value less than zero is returned, it indicates a failure. |

## getPowerModel

```TypeScript
function getPowerModel(callback: AsyncCallback<PowerModel>): void
```

Obtains the current Wi-Fi power mode.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManagerExt/wifiManagerExt.getPowerMode

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.AP.Extension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;PowerModel> | 是 | callback function, no return value. |

