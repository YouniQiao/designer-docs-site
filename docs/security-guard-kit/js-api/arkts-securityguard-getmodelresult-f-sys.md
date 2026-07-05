# getModelResult

## getModelResult

```TypeScript
function getModelResult(rule: ModelRule): Promise<ModelResult>
```

Request security model result from security guard.

**Since:** 12

**Required permissions:** 

 ohos.permission.QUERY_SECURITY_MODEL_RESULT

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rule | ModelRule | Yes | indicates the security model rule. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ModelResult> | model Results with Promises. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | check permission fail. |
| 202 | non-system application uses the system API. |
| 401 | invalid parameters.  Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

