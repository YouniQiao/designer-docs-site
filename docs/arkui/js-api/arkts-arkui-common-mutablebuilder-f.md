# mutableBuilder

## mutableBuilder

```TypeScript
declare function mutableBuilder<Args extends Object[]>(builder: BuilderCallback): MutableBuilder<Args>
```

Defining mutableBuilder function.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | BuilderCallback | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MutableBuilder&lt;Args&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

