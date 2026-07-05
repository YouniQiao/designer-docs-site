# NavigationConfiguration

导航配置选项。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stackSizeLimit

```TypeScript
stackSizeLimit?: number
```

导航页面堆栈大小限制。 说明： -限制导航页面堆栈中活动页面节点的最大数量。 -超过限制时，自动销毁最旧的页节点 以先进先出（先进先出）的顺序。 -完全保留页面的NavPathInfo，支持页面重建。 - value <=0不限制页面堆栈大小（默认值）。 - value >0将堆栈大小限制为指定值。 取值范围为全体整数。

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

