# BackgroundImageOptions

定义背景图选项。 > **说明：** > > 背景图片的同步加载可能会带来潜在性能问题，详情可见[Image](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#image-1)中说明。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## syncLoad

```TypeScript
syncLoad?: boolean
```

是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。 默认值：false false：异步加载图片。 true：同步加载图片。

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## repeat

```TypeScript
repeat?: ImageRepeat
```

设置背景图片的重复样式。默认值为ImageRepeat.NoRepeat。

**Type:** ImageRepeat

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

