# unregisterDeviceSelectCallback

## unregisterDeviceSelectCallback

```TypeScript
function unregisterDeviceSelectCallback(): void
```

取消注册伴随设备选择回调。取消后，系统将不再调用应用注册的设备选择回调，设备选择将回退到系统默认行为。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 32600001 | The system service is not working properly. Please try again later. |

