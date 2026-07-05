# updatePolicyFile

## updatePolicyFile

```TypeScript
function updatePolicyFile(policyFile: PolicyFile): Promise<void>
```

Update the policy file.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_SECURITY_GUARD_CONFIG

**系统能力：** SystemCapability.Security.SecurityGuard

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| policyFile | PolicyFile | 是 | Indicates the policy file information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | check permission fail. |
| 202 | non-system application uses the system API. |
| 401 | invalid parameters.  Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

