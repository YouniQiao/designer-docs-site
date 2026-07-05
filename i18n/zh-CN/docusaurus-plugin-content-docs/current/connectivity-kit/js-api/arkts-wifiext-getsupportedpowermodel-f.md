# getSupportedPowerModel

## getSupportedPowerModel

```TypeScript
function getSupportedPowerModel(): Promise<Array<PowerModel>>
```

Obtains the supported power model.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.AP.Extension

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;PowerModel>> | Returns the array of supported power model. |

## getSupportedPowerModel

```TypeScript
function getSupportedPowerModel(callback: AsyncCallback<Array<PowerModel>>): void
```

Obtains the supported power model.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.AP.Extension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;PowerModel>> | 是 | callback function, no return value. |

