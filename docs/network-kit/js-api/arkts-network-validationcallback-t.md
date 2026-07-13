# ValidationCallback

```TypeScript
export type ValidationCallback = (context: ValidationContext) => boolean | Promise<boolean>
```

Self defined remote validation.
This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | ValidationContext | Yes | Certificate context. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean \| Promise&lt;boolean&gt; | Returns a boolean value indicating whether the validation is successful.Promise used to return the result. The value true indicates valid, and false indicates invalid. |

