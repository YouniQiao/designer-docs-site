# setPowerModel

## setPowerModel

```TypeScript
function setPowerModel(model: PowerModel): boolean
```

Set the current Wi-Fi power mode.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManagerExt/wifiManagerExt.setPowerMode

**需要权限：** 

 ohos.permission.MANAGE_WIFI_HOTSPOT_EXT

**系统能力：** SystemCapability.Communication.WiFi.AP.Extension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| model | PowerModel | 是 | model indicates model file description to be loaded. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the Wi-Fi is active; returns {@code false} otherwise. |

