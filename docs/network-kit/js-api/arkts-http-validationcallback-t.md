# ValidationCallback

```TypeScript
export type ValidationCallback = (context: ValidationContext) => boolean | Promise<boolean>
```

Self defined remote validation. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetStack

| Type | Description |
| --- | --- |
| (context: ValidationContext) => boolean |  |
| Promise&lt;boolean> |  |

