# off

## off('securityEventOccur')

```TypeScript
function off(type: 'securityEventOccur', securityEventInfo: SecurityEventInfo, callback?: Callback<SecurityEvent>): void
```

Unsubscribe the security event.

**Since:** 12

**Required permissions:** 

 ohos.permission.QUERY_SECURITY_EVENT

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'securityEventOccur' | Yes |  |
| securityEventInfo | SecurityEventInfo | Yes | Indicates the subscribed event information. |
| callback | Callback&lt;SecurityEvent> | No | Indicates the listener when the security event occurs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | check permission fail. |
| 202 | non-system application uses the system API. |
| 401 | invalid parameters.  Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

