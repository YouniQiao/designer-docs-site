# stopSecurityEventCollector

## stopSecurityEventCollector

```TypeScript
function stopSecurityEventCollector(rule: CollectorRule): void
```

stop the collector.

**Since:** 12

**Required permissions:** 

 ohos.permission.QUERY_SECURITY_EVENT

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rule | CollectorRule | Yes | rule of collect security event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | check permission fail. |
| 202 | non-system application uses the system API. |
| 401 | invalid parameters.  Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

