# StatusMonitor

状态监听器对象。用于监听或获取模板状态、持续认证状态、可添加设备状态等信息。通过[getStatusMonitor]companionDeviceAuth.getStatusMonitor获取此对象。

**Since:** 23

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@kit.UserAuthenticationKit';
```

## getTemplateStatus

```TypeScript
getTemplateStatus(): Promise<TemplateStatus[]>
```

获取伴随设备模板状态。用于查询当前用户下所有已注册的伴随设备认证模板的状态信息，包括模板有效性、支持的业务范围、关联设备状态等。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TemplateStatus[]> | Promise对象，成功时返回当前用户下全部模板的状态列表，每个模板状态包含模板ID、有效性、设备信息等；失败时抛出相应错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32600001 | The system service is not working properly. Please try again later. |

## offAvailableDeviceChange

```TypeScript
offAvailableDeviceChange(callback?: AvailableDeviceStatusCallback): void
```

取消订阅可添加的伴随设备状态变化，使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AvailableDeviceStatusCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32600001 | The system service is not working properly. Please try again later. |

## offContinuousAuthChange

```TypeScript
offContinuousAuthChange(callback?: ContinuousAuthStatusCallback): void
```

取消订阅伴随设备的持续认证状态变化事件。取消后，应用将不再接收持续认证状态变化通知。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ContinuousAuthStatusCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32600001 | The system service is not working properly. Please try again later. |

## offTemplateChange

```TypeScript
offTemplateChange(callback?: TemplateStatusCallback): void
```

取消订阅模板的状态变化。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TemplateStatusCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32600001 | The system service is not working properly. Please try again later. |

## onAvailableDeviceChange

```TypeScript
onAvailableDeviceChange(callback: AvailableDeviceStatusCallback): void
```

订阅可添加的伴随设备状态变化。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AvailableDeviceStatusCallback | Yes | 处理可选设备更新的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32600001 | The system service is not working properly. Please try again later. |

## onContinuousAuthChange

```TypeScript
onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback): void
```

订阅伴随设备的持续认证状态。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | ContinuousAuthParam | Yes | 用于指定订阅的设备。 |
| callback | ContinuousAuthStatusCallback | Yes | 订阅的设备持续认证状态发生变化时执行此回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32600001 | The system service is not working properly. Please try again later. |
| 32600002 | The template is not found. |

## onTemplateChange

```TypeScript
onTemplateChange(callback: TemplateStatusCallback): void
```

订阅模板的状态变化。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TemplateStatusCallback | Yes | 回调函数，用于接收模板状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32600001 | The system service is not working properly. Please try again later. |

