# isFeatureSupported

## isFeatureSupported

```TypeScript
function isFeatureSupported(featureId: long): boolean
```

Check whether the device supports a specified feature.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| featureId | long | 是 | Indicates the ID of the feature. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if this device supports the specified feature, returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2401000 | Operation failed. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let featureId = 0;
    let ret = wifiManager.isFeatureSupported(featureId);
    console.info("isFeatureSupported:" + ret);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }


```

