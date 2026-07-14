# back

## Modules to Import

```TypeScript
import { router } from '@kit.ArkUI';
```

## back

```TypeScript
function back(options?: RouterOptions): void
```

Returns to the previous page or a specified page, which deletes all pages between the current page and the target page. > **NOTE** > > - Since API version 10, you can use the > [getRouter](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in > [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated > with the current UI context.

**Since:** 8

**Deprecated since:** 18

**Substitutes:** back(options?:

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | No | Description of the target page. The **url** parameter indicates the URL of thepage to return to. If the specified page does not exist in the navigation stack, no action is taken. If no URLis set, the application returns to the previous page, and the page is not rebuilt. Pages are only reclaimedafter being popped from the navigation stack. Setting **url** to the special value **"/"** has no effect. Ifthe named route is used, the provided URL must be the name of the named route. |

**Example**

```TypeScript
this.getUIContext().getRouter().back({ url: 'pages/detail' });

```


## back

```TypeScript
function back(index: number, params?: Object): void
```

Returns to the specified page, which deletes all pages between the current page and the target page. > **NOTE** > > - Since API version 12, you can use the > [getRouter](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in > [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated > with the current UI context.

**Since:** 12

**Deprecated since:** 18

**Substitutes:** back(index:

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the target page to navigate to. The index starts from 1 from the bottom to thetop of the stack. |
| params | Object | No | Parameters carried when returning to the page. |

**Example**

```TypeScript
this.getUIContext().getRouter().back(1);

```

```TypeScript
this.getUIContext().getRouter().back(1, { info: 'From Home' }); // Returning with parameters.

```

