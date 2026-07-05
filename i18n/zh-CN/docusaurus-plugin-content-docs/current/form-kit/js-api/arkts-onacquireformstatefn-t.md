# OnAcquireFormStateFn

```TypeScript
type OnAcquireFormStateFn = (want: Want) => formInfo.FormState
```

Called to return a {@link FormState} object. <p>You must override this callback if you want this ability to return the actual form state. Otherwise, this method returns {@link FormState#DEFAULT} by default.</p>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the description of the form for which the {@link formInfo#FormState}  is obtained. The description covers the bundle name, ability name, module name,  form name, and form dimensions. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| formInfo.FormState | Returns the {@link formInfo#FormState} object. |

