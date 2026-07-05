# requestAutoSave

## requestAutoSave

```TypeScript
export function requestAutoSave(context: UIContext, callback?: AutoSaveCallback): void
```

请求保存表单数据。使用callback异步回调。 如果当前表单没有提供表单切换的功能，可以通过此接口保存历史表单输入数据，保存请求完成时会触发该回调。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | UIContext | 是 | UI context in which the auto-save operation will be performed. |
| callback | AutoSaveCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes: 1. Get instance id failed;  2. Parse instance id failed; 3. The second parameter is not of type callback. |
| 16000050 | Internal error. |

