# isFeatureSupported

## isFeatureSupported

```TypeScript
function isFeatureSupported(featureId: number): boolean
```

Checks whether this device supports a specified feature.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.isFeatureSupported

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| featureId | number | 是 | Indicates the ID of the feature. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if this device supports the specified feature, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
  let featureId = 0;
  let ret = wifi.isFeatureSupported(featureId);
  console.info("isFeatureSupported:" + ret);
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}


```

