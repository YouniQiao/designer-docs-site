# mutableBuilder

## mutableBuilder

```TypeScript
declare function mutableBuilder<Args extends Object[]>(builder: BuilderCallback): MutableBuilder<Args>
```

Defining mutableBuilder function.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-unnamed-declare function mutableBuilder<Args extends Object[]>(builder: BuilderCallback): MutableBuilder<Args>--><!--Device-unnamed-declare function mutableBuilder<Args extends Object[]>(builder: BuilderCallback): MutableBuilder<Args>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [BuilderCallback](arkts-arkui-buildercallback-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MutableBuilder](arkts-arkui-common-mutablebuilder-c.md)<Args> | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

