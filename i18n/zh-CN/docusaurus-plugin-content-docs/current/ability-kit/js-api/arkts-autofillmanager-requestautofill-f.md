# requestAutoFill

## requestAutoFill

```TypeScript
export function requestAutoFill(context: UIContext, request: FillRequest, callback?: AutoFillCallback): void
```

Trigger an auto fill request.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | UIContext | 是 | Indicates the ui context where the filling operation will be performed. |
| request | FillRequest | 是 | Indicates the struct of automatic filling request. |
| callback | AutoFillCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000050 | Internal error. |

