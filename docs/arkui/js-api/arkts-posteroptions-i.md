# PosterOptions

用于描述当前视频是否配置首帧送显。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showFirstFrame

```TypeScript
showFirstFrame?: boolean
```

当前视频是否配置首帧送显，当开启首帧送显时，[VideoOptions对象](arkts-videooptions-i.md#VideoOptions)中的previewUri字段不生效。 true：开启首帧送显；false：关闭首帧送显。 默认值：false

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentTransitionEffect

```TypeScript
contentTransitionEffect?: ContentTransitionEffect
```

当前视频的预览图内容变化时的转场动效。配置showFirstFrame为true（即配置开启首帧送显时），或未配置有效的[VideoOptions对象](arkts-videooptions-i.md#VideoOptions)的previewUri时，该字段不生 效。 默认值：ContentTransitionEffect.IDENTITY 设置为undefined或null时，取值为ContentTransitionEffect.IDENTITY。

**Type:** ContentTransitionEffect

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

