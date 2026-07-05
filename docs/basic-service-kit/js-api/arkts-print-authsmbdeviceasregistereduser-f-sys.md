# authSmbDeviceAsRegisteredUser

## authSmbDeviceAsRegisteredUser

```TypeScript
function authSmbDeviceAsRegisteredUser(host: SharedHost, username: string, password: string): Promise<PrinterInformation[]>
```

以注册用户身份对SMB设备进行身份验证，并获取可用打印机。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | SharedHost | Yes | 要进行身份验证的SMB主机。 |
| username | string | Yes | 用于鉴权的用户名。 |
| password | string | Yes | 用于身份验证的密码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PrinterInformation[]> | Promise that resolves with the list of available printers. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |
| 13100012 | SMB account is locked due to multiple failed login attempts. |
| 13100013 | SMB connection failed (network error, host unreachable, or port blocked). |
| 13100014 | Invalid login account or password. |

