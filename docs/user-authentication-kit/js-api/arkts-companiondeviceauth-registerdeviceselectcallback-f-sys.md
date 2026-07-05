# registerDeviceSelectCallback

## registerDeviceSelectCallback

```TypeScript
function registerDeviceSelectCallback(callback: DeviceSelectCallback): void
```

注册伴随设备选择回调。当系统需要用户选择伴随设备时，会调用此回调，应用需在回调中返回用户选择的设备信息。通过此回调，应用可以实现自定义的设备选择逻辑，如弹出设备选择界面让用户选择。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DeviceSelectCallback | Yes | 伴随设备选择回调函数。系统调用时会传入选择目的（selectPurpose），应用需根据目的返回相应的DeviceSelectResult，  包含用户选择的设备信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 32600001 | The system service is not working properly. Please try again later. |

