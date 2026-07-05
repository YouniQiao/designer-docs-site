# BlanklessFrameInterpolationInfo

1.定义插帧状态信息 2.ArkWeb使能白屏插帧优化的场景 设备行为差异:仅支持手机平台，其他平台返回801

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## reason

```TypeScript
reason: string
```

插帧失败的原因 设备行为差异:仅支持手机平台，其他平台返回801

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

## state

```TypeScript
state: BlanklessFrameInterpolationState
```

1.当前插帧状态 设备行为差异:仅支持手机平台，其他平台返回801

**Type:** BlanklessFrameInterpolationState

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

## key

```TypeScript
key: string
```

1.唯一标识本页面的key值 设备行为差异:仅支持手机平台，其他平台返回801

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

## timestamp

```TypeScript
timestamp: number
```

帧插入或者移除的时间点 设备行为差异:仅支持手机平台，其他平台返回801 取值限定为整数。

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

