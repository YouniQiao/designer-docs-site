# on

## on('systemAutoStartup')

```TypeScript
function on(type: 'systemAutoStartup', callback: AutoStartupCallback): void
```

注册监听应用组件开机自启动状态变化的回调函数。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_APP_BOOT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemAutoStartup' | Yes | 固定取值“systemAutoStartup”，表示为系统应用所调用。 |
| callback | AutoStartupCallback | Yes | 监听应用组件开机自启动状态变化的回调对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied, interface caller does not have permission  "ohos.permission.MANAGE_APP_BOOT". |
| 202 | Permission denied, non-system app called system api. |
| 401 | The parameter check failed. Possible causes: 1. Mandatory parameters are lef  unspecified; 2. Incorrect parameters types. |
| 16000050 | Failed to connect to the system service. |

