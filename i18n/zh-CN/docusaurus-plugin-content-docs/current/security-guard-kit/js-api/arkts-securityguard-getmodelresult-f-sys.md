# getModelResult

## getModelResult

```TypeScript
function getModelResult(rule: ModelRule): Promise<ModelResult>
```

Request security model result from security guard.

**起始版本：** 12

**需要权限：** 

 ohos.permission.QUERY_SECURITY_MODEL_RESULT

**系统能力：** SystemCapability.Security.SecurityGuard

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rule | ModelRule | 是 | indicates the security model rule. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ModelResult> | model Results with Promises. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | check permission fail. |
| 202 | non-system application uses the system API. |
| 401 | invalid parameters.  Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

