# OnErrorFn

```TypeScript
type OnErrorFn = (code: number, name: string, message: string) => void
```

Defines a OnError function.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.VerticalPanel

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | The code returned if the UIAbility or UIExtensionAbility failed to start. |
| name | string | 是 | The name returned if the UIAbility or UIExtensionAbility failed to start. |
| message | string | 是 | The message returned if the UIAbility or UIExtensionAbility failed to start. |

