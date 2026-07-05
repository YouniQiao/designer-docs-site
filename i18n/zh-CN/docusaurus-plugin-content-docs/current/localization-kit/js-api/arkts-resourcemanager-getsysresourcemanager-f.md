# getSysResourceManager

## getSysResourceManager

```TypeScript
export function getSysResourceManager(): ResourceManager
```

获取系统资源管理对象。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.ResourceManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ResourceManager | 系统资源管理对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9001009 | Failed to access the system resource.  which is not mapped to application sandbox, This error code will be thrown. |

