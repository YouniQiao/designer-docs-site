# MediaQueryListener

媒体查询的句柄，并包含了申请句柄时的首次查询结果。媒体查询根据设置的条件语句，比如'(width <= 600vp)'，比较系统信息，若首次查询时相关信息未初始化，matches返回false。 继承自[MediaQueryResult]mediaquery.MediaQueryResult。

**Inheritance:** MediaQueryListenerextends: MediaQueryResult.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { mediaquery } from '@kit.ArkUI';
```

## off('change')

```TypeScript
off(type: 'change', callback?: Callback<MediaQueryResult>): void
```

通过句柄向对应的查询条件取消注册回调，当媒体属性发生变更时不再触发指定的回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'change' | Yes | 必须填写字符串'change'。 |
| callback | Callback&lt;MediaQueryResult> | No | 需要取消注册的回调，如果参数缺省则注销该句柄下所有的回调。 |

**Example**

```TypeScript
import { mediaquery } from '@kit.ArkUI';

let listener: mediaquery.MediaQueryListener = mediaquery.matchMediaSync('(orientation: landscape)'); // Listen for landscape events.
function onPortrait(mediaQueryResult:mediaquery.MediaQueryResult) {
  if (mediaQueryResult.matches) {
    // do something here
  } else {
    // do something here
  }
}
listener.on('change', onPortrait) // Register the media query listener.
listener.off('change', onPortrait) // Unregister the callback.

```

## on('change')

```TypeScript
on(type: 'change', callback: Callback<MediaQueryResult>): void
```

通过句柄向对应的查询条件注册回调，当媒体属性发生变更时会触发该回调。 > **说明：** > > 注册的回调中不允许进一步调用on或off。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'change' | Yes | 必须填写字符串'change'。 |
| callback | Callback&lt;MediaQueryResult> | Yes | 向媒体查询注册的回调。 |

