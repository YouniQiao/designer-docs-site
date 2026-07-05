# updatePolicyFile

## updatePolicyFile

```TypeScript
function updatePolicyFile(policyFile: PolicyFile): Promise<void>
```

Update the policy file.

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_SECURITY_GUARD_CONFIG

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policyFile | PolicyFile | Yes | Indicates the policy file information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | check permission fail. |
| 202 | non-system application uses the system API. |
| 401 | invalid parameters.  Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

