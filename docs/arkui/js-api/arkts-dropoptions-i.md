# DropOptions

设置落入过程的参数。

**Since:** 15

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## disableDataPrefetch

```TypeScript
disableDataPrefetch?: boolean
```

设置拖拽是否提前获取数据。true表示不提前获取数据，false表示提前获取数据，默认值为false。 **说明：** 当使用[startDataLoading](arkts-dragevent-i.md#startDataLoading)获取数据时需设置该参数为true，防止拖拽提前获取数据。

**Type:** boolean

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

