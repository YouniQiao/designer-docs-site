# LifecycleForm

interface of form lifecycle.

**起始版本：** 7

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onAcquireFormState

```TypeScript
onAcquireFormState?(want: Want): formInfo.FormState
```

Called to return a {@link FormState} object. <p>You must override this callback if you want this ability to return the actual form state. Otherwise, this method returns {@link FormState#DEFAULT} by default.</p>

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the description of the form for which the {@link formInfo#FormState} is obtained.  The description covers the bundle name, ability name, module name, form name, form  dimensions. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| formInfo.FormState | Returns the {@link formInfo#FormState} object. |

## onCastToNormal

```TypeScript
onCastToNormal?(formId: string): void
```

Called when the form provider is notified that a temporary form is successfully converted to a normal form.

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the ID of the form. |

## onCreate

```TypeScript
onCreate?(want: Want): formBindingData.FormBindingData
```

Called to return a {@link formBindingData.FormBindingData} object.

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the detailed information for creating a {@link formBindingData#FormBindingData}.  The {@code Want} object must include the form ID, form name, and grid style of the form,  which can be obtained from {@link formInfo#FormParam#IDENTITY_KEY},  {@link formInfo#FormParam#NAME_KEY}, and {@link formInfo#FormParam#DIMENSION_KEY},  respectively. Such form information must be managed as persistent data for further form  acquisition, update, and deletion. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| formBindingData.FormBindingData | Returns the created {@link formBindingData#FormBindingData} object. |

## onDestroy

```TypeScript
onDestroy?(formId: string): void
```

Called to notify the form provider that a specified form has been deleted. Override this method if you want your application, as the form provider, to be notified of form deletion.

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the ID of the deleted form. |

## onEvent

```TypeScript
onEvent?(formId: string, message: string): void
```

Called when a specified message event defined by the form provider is triggered. This method is valid only for JS forms.

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the ID of the form on which the message event is triggered, which is  provided by the client to the form provider. |
| message | string | 是 | Indicates the value of the {@code params} field of the message event. This parameter  is used to identify the specific component on which the event is triggered. |

## onShare

```TypeScript
onShare?(formId: string): { [key: string]: any }
```

Called when the system shares the form.

**起始版本：** 9

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the ID of the deleted form. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| { [key: string]: any } | Returns the wantParams object. |

## onShareForm

```TypeScript
onShareForm?(formId: string): Record<string, Object>
```

Called when the system shares the form. The ability of this function is same as onShare. If both are set, this function will be called.

**起始版本：** 11

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the ID of the deleted form. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Record&lt;string, Object> | Returns the wantParams object. |

## onUpdate

```TypeScript
onUpdate?(formId: string): void
```

Called to notify the form provider to update a specified form.

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the ID of the form to update. |

## onVisibilityChange

```TypeScript
onVisibilityChange?(newStatus: Record<string, number>): void
```

Called when the form provider receives form events from the system.

**起始版本：** 11

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| newStatus | Record&lt;string, number> | 是 | Indicates the form events occurred. The key in the {@code Map}  object indicates form ID,and the value indicates the event type,  which can be either  {@link formInfo#VisibilityType#FORM_VISIBLE} or  {@link formInfo#VisibilityType#FORM_INVISIBLE}.  {@link formInfo#VisibilityType#FORM_VISIBLE}  means that the form becomes visible, and  {@link formInfo#VisibilityType#FORM_INVISIBLE}  means that the form becomes invisible. |

