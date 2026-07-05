# querySecurityEvent

## querySecurityEvent

```TypeScript
function querySecurityEvent(rules: Array<SecurityEventRule>, querier: Querier): void
```

Query security event information from security guard.

**起始版本：** 12

**需要权限：** 

 ohos.permission.QUERY_SECURITY_EVENT

**系统能力：** SystemCapability.Security.SecurityGuard

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rules | Array&lt;SecurityEventRule> | 是 | rule of get security event information. |
| querier | Querier | 是 | callback of receiving the query data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | check permission fail. |
| 202 | non-system application uses the system API. |
| 401 | invalid parameters.  Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

