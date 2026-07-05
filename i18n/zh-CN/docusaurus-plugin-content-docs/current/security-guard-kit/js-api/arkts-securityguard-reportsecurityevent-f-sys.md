# reportSecurityEvent

## reportSecurityEvent

```TypeScript
function reportSecurityEvent(securityEvent: SecurityEvent): void
```

Report security information to the security guard.

**起始版本：** 12

**需要权限：** 

 ohos.permission.REPORT_SECURITY_EVENT

**系统能力：** SystemCapability.Security.SecurityGuard

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| securityEvent | SecurityEvent | 是 | indicates the information to be reported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | check permission fail. |
| 202 | non-system application uses the system API. |
| 401 | invalid parameters.  Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

