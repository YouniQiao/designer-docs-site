# configure

## configure

```TypeScript
function configure(featureId: UserStatusFeature, detail: string): int
```

Configures feature parameters.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| featureId | UserStatusFeature | Yes | Feature to configure. |
| detail | string | Yes | Detailed feature parameters in JSON format. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns 0 if the operation succeeds; otherwise, returns a non-zero value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 33900001 | Service exception. Possible causes:  1. Invalid parameter.  2. Node-API invocation exception, such as invalid Node-API status. |

