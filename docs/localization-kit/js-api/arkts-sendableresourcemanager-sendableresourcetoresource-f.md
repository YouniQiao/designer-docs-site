# sendableResourceToResource

## sendableResourceToResource

```TypeScript
export function sendableResourceToResource(resource: SendableResource): Resource
```

将SendableResource对象转换为Resource对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | SendableResource | Yes | SendableResource对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Resource | 转换后的Resource对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types;  2.Parameter verification failed. |

