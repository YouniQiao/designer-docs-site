# LifecycleForm

interface of form lifecycle.

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## onAcquireFormState

```TypeScript
onAcquireFormState?(want: Want): formInfo.FormState
```

Called to return a {@link FormState} object.
<p>You must override this callback if you want this ability to return the actual form state. Otherwise,
this method returns {@link FormState#DEFAULT} by default.</p>

**Since:** 8

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the description of the form for which the {@link formInfo#FormState} is obtained.The description covers the bundle name, ability name, module name, form name, formdimensions. |

**Return value:**

| Type | Description |
| --- | --- |
| formInfo.FormState | Returns the {@link formInfo#FormState} object. |

## onCastToNormal

```TypeScript
onCastToNormal?(formId: string): void
```

Called when the form provider is notified that a temporary form is successfully converted to a normal form.

**Since:** 8

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the ID of the form. |

## onCreate

```TypeScript
onCreate?(want: Want): formBindingData.FormBindingData
```

Called to return a {@link formBindingData.FormBindingData} object.

**Since:** 8

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the detailed information for creating a {@link formBindingData#FormBindingData}.The {@code Want} object must include the form ID, form name, and grid style of the form,which can be obtained from {@link formInfo#FormParam#IDENTITY_KEY},{@link formInfo#FormParam#NAME_KEY}, and {@link formInfo#FormParam#DIMENSION_KEY},respectively. Such form information must be managed as persistent data for further formacquisition, update, and deletion. |

**Return value:**

| Type | Description |
| --- | --- |
| formBindingData.FormBindingData | Returns the created {@link formBindingData#FormBindingData} object. |

## onDestroy

```TypeScript
onDestroy?(formId: string): void
```

Called to notify the form provider that a specified form has been deleted. Override this method if
you want your application, as the form provider, to be notified of form deletion.

**Since:** 8

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the ID of the deleted form. |

## onEvent

```TypeScript
onEvent?(formId: string, message: string): void
```

Called when a specified message event defined by the form provider is triggered. This method is valid only for
JS forms.

**Since:** 8

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the ID of the form on which the message event is triggered, which isprovided by the client to the form provider. |
| message | string | Yes | Indicates the value of the {@code params} field of the message event. This parameteris used to identify the specific component on which the event is triggered. |

## onUpdate

```TypeScript
onUpdate?(formId: string): void
```

Called to notify the form provider to update a specified form.

**Since:** 8

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the ID of the form to update. |

## onVisibilityChange

```TypeScript
onVisibilityChange?(newStatus: Record<string, number>): void
```

Called when the form provider receives form events from the system.

**Since:** 11

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newStatus | Record&lt;string, number&gt; | Yes | Indicates the form events occurred. The key in the {@code Map}object indicates form ID,and the value indicates the event type,which can be either{@link formInfo#VisibilityType#FORM_VISIBLE} or{@link formInfo#VisibilityType#FORM_INVISIBLE}.{@link formInfo#VisibilityType#FORM_VISIBLE}means that the form becomes visible, and{@link formInfo#VisibilityType#FORM_INVISIBLE}means that the form becomes invisible. |

