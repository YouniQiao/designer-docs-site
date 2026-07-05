# registerRemoteAuthCallback

## registerRemoteAuthCallback

```TypeScript
function registerRemoteAuthCallback(callback: IRemoteAuthCallback): void
```

注册远程认证回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_USER_AUTH_INTERNAL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | IRemoteAuthCallback | Yes | 用于获取远程身份验证WidgetParam并返回结果的回调 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. Called by non-system application. |
| 12500002 | General operation error. |

