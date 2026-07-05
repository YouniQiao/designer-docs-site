# setApplicationAutoStartup

## setApplicationAutoStartup

```TypeScript
function setApplicationAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<void>): void
```

设置应用组件开机自启动。使用callback异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_APP_BOOT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AutoStartupInfo | Yes | 要设置的开机自启动应用组件信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置应用组件开机自启动成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied, interface caller does not have permission  "ohos.permission.MANAGE_APP_BOOT". |
| 202 | Permission denied, non-system app called system api. |
| 401 | The parameter check failed. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameters types. |
| 16000004 | Cannot start an invisible component. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Failed to connect to the system service. |

## setApplicationAutoStartup

```TypeScript
function setApplicationAutoStartup(info: AutoStartupInfo): Promise<void>
```

设置应用组件开机自启动。使用Promise异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_APP_BOOT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AutoStartupInfo | Yes | 要设置的开机自启动应用组件信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied, interface caller does not have permission  "ohos.permission.MANAGE_APP_BOOT". |
| 202 | Permission denied, non-system app called system api. |
| 401 | The parameter check failed. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameters types. |
| 16000004 | Cannot start an invisible component. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Failed to connect to the system service. |

