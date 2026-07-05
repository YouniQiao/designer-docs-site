# BlanklessInfo

页面首屏加载预测信息，主要包括首屏相似度预测值，首屏加载耗时预测值，预测错误码，应用需根据此信息来决策是否启用无白屏加载插帧方案。

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## loadingTime

```TypeScript
loadingTime: number
```

根据历史加载首屏耗时预测本次加载耗时，单位ms，取值范围需大于0。

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## similarity

```TypeScript
similarity: number
```

首屏相似度，根据历史加载首屏内容计算相似度，范围为[0, 1.0]，1.0表示完全一致，数值越接近1，相似度越高。该值存在滞后性，本地加载的相似性将在下次加载时才可反映。建议当相似度较低时，应用不启用无白屏加载插帧方案。

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## errCode

```TypeScript
errCode: WebBlanklessErrorCode
```

无白屏加载的异常错误码，见[WebBlanklessErrorCode](arkts-webview-webblanklesserrorcode-e.md#WebBlanklessErrorCode)定义。

**Type:** WebBlanklessErrorCode

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

