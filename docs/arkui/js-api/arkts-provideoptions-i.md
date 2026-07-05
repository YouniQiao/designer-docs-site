# ProvideOptions

Defines the options of Provide PropertyDecorator.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## allowOverride

```TypeScript
allowOverride?: string
```

Override the @Provide of any parent or parent of parent @Component.@Provide({allowOverride: "name"}) is also allowed to be used even when there is no ancestor @Component whose @Provide would be overridden.

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

