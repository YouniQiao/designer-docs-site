# getPowerConfig

## getPowerConfig

```TypeScript
function getPowerConfig(sceneName: string): string
```

按场景名称查询电源配置值。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.POWER_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sceneName | string | Yes | 电源配置的场景名称。最大长度128字节。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回电源配置值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 4900101 | Failed to connect to the service. |
| 4900400 | Invalid parameter. Possible causes:  1. The sceneName parameter is an empty string;  2. The length of sceneName parameter exceeds 128 bytes. |
| 4900501 | Failed to read the power configuration value. |

**Example**

```TypeScript
try {
    let configVal = power.getPowerConfig('scene_name_test');
    console.info('get power config success, configVal: ' + configVal);
} catch(err) {
    console.error('get power config failed, err: ' + err);
}

```

