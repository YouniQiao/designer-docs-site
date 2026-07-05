# OnFillSuccessFn

```TypeScript
type OnFillSuccessFn = (viewData: ViewData) => void
```

Called when auto fill request is successfully handled.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| viewData | ViewData | 是 | Indicates the ui context where the filling operation will be performed. |

