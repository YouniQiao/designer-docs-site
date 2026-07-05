# resourceToSendableResource

## resourceToSendableResource

```TypeScript
export function resourceToSendableResource(resource: Resource): SendableResource
```

将Resource对象转换为SendableResource对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | Resource对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| SendableResource | 转换后的SendableResource对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types;  2.Parameter verification failed. |

