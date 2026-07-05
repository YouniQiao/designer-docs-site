# getSystemPasteboard

## getSystemPasteboard

```TypeScript
function getSystemPasteboard(): SystemPasteboard
```

Obtains **SystemPasteboard** object.

**起始版本：** 6

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SystemPasteboard | SystemPasteboard object. |

**示例：**

```TypeScript
// 获取系统剪贴板对象 
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();

```

