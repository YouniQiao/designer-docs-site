# getSysResourceManager

## getSysResourceManager

```TypeScript
export function getSysResourceManager(): ResourceManager
```

获取系统资源管理对象。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| ResourceManager | 系统资源管理对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001009 | Failed to access the system resource.  which is not mapped to application sandbox, This error code will be thrown. |

