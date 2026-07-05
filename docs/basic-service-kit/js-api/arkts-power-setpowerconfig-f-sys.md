# setPowerConfig

## setPowerConfig

```TypeScript
function setPowerConfig(sceneName: string, value: string): void
```

根据场景名称设置电源配置值。

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
| value | string | Yes | 电源配置值。最大长度128字节。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 4900101 | Failed to connect to the service. |
| 4900400 | Invalid parameter. Possible causes:  1. The sceneName or value parameter is an empty string;  2. The length of sceneName parameter exceeds 128 bytes;  3. The length of value parameter exceeds 128 bytes. |
| 4900601 | Failed to write the power configuration value. |

**Example**

```TypeScript
try {
    power.setPowerConfig('scene_name_test', 'value_test');
    console.info('set power config success');
} catch(err) {
    console.error('set power config failed, err: ' + err);
}

```

