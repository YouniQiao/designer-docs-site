# Router

Defines the Router interface.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router#router

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## 导入模块

```TypeScript
import { BackRouterOptions,DisableAlertBeforeBackPageOptions,RouterOptions,RouterState,EnableAlertBeforeBackPageOptions } from '@kit.ArkUI';
```

## back

```TypeScript
static back(options?: BackRouterOptions): void
```

Returns to the previous page or a specified page.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.router#back

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | BackRouterOptions | 否 | Options. |

## clear

```TypeScript
static clear(): void
```

Clears all historical pages and retains only the current page at the top of the stack.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.router#clear

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## disableAlertBeforeBackPage

```TypeScript
static disableAlertBeforeBackPage(options?: DisableAlertBeforeBackPageOptions): void
```

cancel enableAlertBeforeBackPage

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.router.router#hideAlertBeforeBackPage

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | DisableAlertBeforeBackPageOptions | 否 | Options. |

## enableAlertBeforeBackPage

```TypeScript
static enableAlertBeforeBackPage(options: EnableAlertBeforeBackPageOptions): void
```

Pop up dialog to ask whether to back

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.router.router#showAlertBeforeBackPage

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | EnableAlertBeforeBackPageOptions | 是 | Options. |

## getLength

```TypeScript
static getLength(): string
```

Obtains the number of pages in the current stack.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.router#getLength

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Number of pages in the stack. The maximum value is 32. |

## getParams

```TypeScript
static getParams(): ParamsInterface
```

Obtains information about the current page params.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.router.router#getParams

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ParamsInterface | Page params. |

## getState

```TypeScript
static getState(): RouterState
```

Obtains information about the current page state.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.router#getState

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RouterState | Page state. |

## push

```TypeScript
static push(options: RouterOptions): void
```

Navigates to a specified page in the application based on the page URL and parameters.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.router#push

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | RouterOptions | 是 | Options. |

## replace

```TypeScript
static replace(options: RouterOptions): void
```

Replaces the current page with another one in the application. The current page is destroyed after replacement.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.router.router#replace

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | RouterOptions | 是 | Options. |

