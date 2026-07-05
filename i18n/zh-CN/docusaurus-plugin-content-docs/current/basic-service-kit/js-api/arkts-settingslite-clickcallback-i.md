# ClickCallback

Defines a callback used to return whether the application started by double-pressing the function key is the application itself.

**起始版本：** 24

**系统能力：** SystemCapability.Applications.Settings.Core.Lite

## onResult

```TypeScript
onResult(result: boolean): void
```

Called to determine whether the application can be started by double-pressing the function key.

**起始版本：** 24

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| result | boolean | 是 | The specified application is started by double-pressing the function key if  true is returned. Otherwise, an unexpected application is started. |

