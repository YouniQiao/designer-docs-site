# connectToCandidateConfig

## connectToCandidateConfig

```TypeScript
function connectToCandidateConfig(networkId: int): void
```

Connect to a specified candidate hotspot by networkId, only the configuration which is added by ourself is allowed to be connected. This method connect to a configuration at a time. The app must be in the foreground.

**起始版本：** 12

**需要权限：** 

 ohos.permission.SET_WIFI_INFO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | int | 是 | Network ID which will be connected. The value of networkId cannot be less than 0. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let networkId = 0; // 候选网络ID，在添加候选网络时生成
    wifiManager.connectToCandidateConfig(networkId);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }
  

```

## connectToCandidateConfig

```TypeScript
function connectToCandidateConfig(settings: ConnectSettings): Promise<void>
```

Connect to the specified candidate hotspot using connect settings.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.SET_WIFI_INFO

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| settings | ConnectSettings | 是 | Indicates the connection settings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Returns the promise object that used to return the operation result.  If the operation fails, an error message is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |
| 2501005 | The user does not respond. |
| 2501006 | The user refused the action. |
| 2501007 | Parameter validation failed. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let setting:wifiManager.ConnectSettings = { networkId: 0 }; // 候选网络ID，在添加候选网络时生成
    wifiManager.connectToCandidateConfig(setting);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }
  

```

