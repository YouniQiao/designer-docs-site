# OnShareFormFn

```TypeScript
type OnShareFormFn = (formId: string) => Record<string, Object>
```

Called when the system shares the form.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Indicates the ID of the form. |

**Return value:**

| Type | Description |
| --- | --- |
| Record&lt;string, Object> | Returns the wantParams object. |

