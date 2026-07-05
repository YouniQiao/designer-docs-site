# OnAcquireFormDataFn

```TypeScript
type OnAcquireFormDataFn = (formId: string) => Record<string, Object>
```

Called when the system acquire the form data.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the ID of the form. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Record&lt;string, Object> | Returns the wantParams object. |

