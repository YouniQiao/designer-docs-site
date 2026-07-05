# getSystemResourceManager

## getSystemResourceManager

```TypeScript
export function getSystemResourceManager(): ResourceManager
```

获取系统资源管理ResourceManager对象。 > **说明** > > 当前接口获取到的系统资源管理ResourceManager对象中的Configuration为默认值。默认值如下： > {"locale": "", "direction": -1, "deviceType": -1, "screenDensity": 0, "colorMode": 1, "mcc": 0, "mnc": 0}。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.getSysResourceManager

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| ResourceManager | 系统资源管理对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001009 | Failed to access the system resource.  which is not mapped to application sandbox, This error code will be thrown. |

