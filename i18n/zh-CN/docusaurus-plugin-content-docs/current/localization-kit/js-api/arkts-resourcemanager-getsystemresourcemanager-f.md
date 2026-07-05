# getSystemResourceManager

## getSystemResourceManager

```TypeScript
export function getSystemResourceManager(): ResourceManager
```

获取系统资源管理ResourceManager对象。 > **说明** > > 当前接口获取到的系统资源管理ResourceManager对象中的Configuration为默认值。默认值如下： > {"locale": "", "direction": -1, "deviceType": -1, "screenDensity": 0, "colorMode": 1, "mcc": 0, "mnc": 0}。

**起始版本：** 10

**废弃版本：** 20

**替代接口：** resourceManager.getSysResourceManager

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.ResourceManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ResourceManager | 系统资源管理对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9001009 | Failed to access the system resource.  which is not mapped to application sandbox, This error code will be thrown. |

