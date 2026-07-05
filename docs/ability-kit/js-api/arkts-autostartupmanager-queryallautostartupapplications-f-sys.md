# queryAllAutoStartupApplications

## queryAllAutoStartupApplications

```TypeScript
function queryAllAutoStartupApplications(callback: AsyncCallback<Array<AutoStartupInfo>>): void
```

查询自启动应用组件信息。使用callback异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_APP_BOOT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AutoStartupInfo>> | Yes | 回调函数。当查询自启动应用组件信息成功，err为undefined，data为获取到的Array；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied, interface caller does not have permission  "ohos.permission.MANAGE_APP_BOOT". |
| 202 | Permission denied, non-system app called system api. |
| 401 | The parameter check failed. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameters types. |
| 16000050 | Failed to connect to the system service. |

## queryAllAutoStartupApplications

```TypeScript
function queryAllAutoStartupApplications(): Promise<Array<AutoStartupInfo>>
```

查询自启动应用组件信息。使用Promise异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_APP_BOOT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AutoStartupInfo>> | Promise对象，返回自启动应用组件信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied, interface caller does not have permission  "ohos.permission.MANAGE_APP_BOOT". |
| 202 | Permission denied, non-system app called system api. |
| 401 | The parameter check failed. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameters types. |
| 16000050 | Failed to connect to the system service. |

