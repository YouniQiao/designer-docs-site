# OnAcquireFormStateFn

```TypeScript
type OnAcquireFormStateFn = (want: Want) => formInfo.FormState
```

Called to return a {@link FormState} object. <p>You must override this callback if you want this ability to return the actual form state. Otherwise, this method returns {@link FormState#DEFAULT} by default.</p>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the description of the form for which the {@link formInfo#FormState}  is obtained. The description covers the bundle name, ability name, module name,  form name, and form dimensions. |

**Return value:**

| Type | Description |
| --- | --- |
| formInfo.FormState | Returns the {@link formInfo#FormState} object. |

