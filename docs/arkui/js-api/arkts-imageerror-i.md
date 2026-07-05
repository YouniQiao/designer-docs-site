# ImageError

图片加载异常时触发回调的返回对象。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor)时该 事件不触发。

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## downloadInfo

```TypeScript
downloadInfo?: RequestDownloadInfo
```

网络图片下载的详细信息，包含下载资源、网络、性能等信息。当图片来源为网络图片且下载失败时将携带此字段。 默认值：null

**Type:** RequestDownloadInfo

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## componentHeight

```TypeScript
componentHeight: number
```

组件的高。 单位：px

**Type:** number

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## error

```TypeScript
error?: BusinessError<void>
```

图片加载异常返回的报错信息，其中code为错误码，message为错误信息。报错信息请参考以下错误信息的详细介绍。 默认值：{ code : -1, message : "" }

**Type:** BusinessError<void>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message: string
```

报错信息。

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## componentWidth

```TypeScript
componentWidth: number
```

组件的宽。 单位：px

**Type:** number

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

