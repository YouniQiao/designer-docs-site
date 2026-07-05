# Panel

划词面板。

**Since:** 20

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { selectionManager } from '@kit.BasicServicesKit';
```

## hide

```TypeScript
hide(): Promise<void>
```

隐藏当前划词面板。使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

selectionPanel.hide().then(() => {
  console.info('Succeeded in hiding the panel.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hide panel: ${err.code}, error message: ${err.message}`);
});

```

## moveTo

```TypeScript
moveTo(x: int, y: int): Promise<void>
```

移动划词面板至屏幕指定位置。使用Promise异步回调。 > **说明：** > 从API version 20开始支持，从API version 24开始废弃。建议使用 > [moveToGlobalDisplay]selectionManager.Panel.moveToGlobalDisplay替代。

**Since:** 20

**Deprecated since:** 24

**Substitute:** selectionManager.Panel.moveToGlobalDisplay

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | int | Yes | x轴方向移动的值，单位为px。 |
| y | int | Yes | y轴方向移动的值，单位为px。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

try {
  selectionPanel.moveTo(200, 200).then(() => {
    console.info('Succeeded in moving the panel.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to move panel: ${err.code}, error message: ${err.message}`);
  });
} catch (err) {
  console.error(`Failed to move panel: ${err.code}, error message: ${err.message}`);
}

```

## moveToGlobalDisplay

```TypeScript
moveToGlobalDisplay(x: int, y: int): Promise<void>
```

移动划词面板至屏幕指定位置。使用Promise异步回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | int | Yes | x轴方向移动的值，单位为px。 |
| y | int | Yes | y轴方向移动的值，单位为px。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

try {
  selectionPanel.moveToGlobalDisplay(200, 200).then(() => {
    console.info('Succeeded in moving the panel.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to move panel: ${err.code}, error message: ${err.message}`);
  });
} catch (err) {
  console.error(`Failed to move panel: ${err.code}, error message: ${err.message}`);
}

```

## off('destroyed')

```TypeScript
off(type: 'destroyed', callback?: Callback<void>): void
```

取消订阅划词窗口销毁事件。使用callback异步回调。

**Since:** 20

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'destroyed' | Yes | 设置监听类型，固定取值为'destroyed'。 |
| callback | Callback&lt;void> | No |  |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

try {
  selectionPanel.off('destroyed');
} catch (err) {
  console.error(`Failed to unregister destroyed: ${err.code}, error message: ${err.message}`);
}

```

## off('hidden')

```TypeScript
off(type: 'hidden', callback?: Callback<void>): void
```

取消订阅划词窗口隐藏事件。使用callback异步回调。

**Since:** 20

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hidden' | Yes | 设置监听类型，固定取值为'hidden'。 |
| callback | Callback&lt;void> | No |  |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

try {
  selectionPanel.off('hidden');
} catch (err) {
  console.error(`Failed to unregister hidden: ${err.code}, error message: ${err.message}`);
}

```

## offDestroy

```TypeScript
offDestroy(callback?: Callback<void>): void
```

取消订阅划词窗口销毁事件。使用callback异步回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

## offHide

```TypeScript
offHide(callback?: Callback<void>): void
```

取消订阅划词窗口隐藏事件。使用callback异步回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

## on('destroyed')

```TypeScript
on(type: 'destroyed', callback: Callback<void>): void
```

订阅划词窗口销毁事件。使用callback异步回调。

**Since:** 20

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'destroyed' | Yes | 设置监听类型，固定取值为'destroyed'。 |
| callback | Callback&lt;void> | Yes | 回调函数，返回值为空。 |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

try {
  selectionPanel.on('destroyed', () => {
    console.info('Panel has been destroyed.');
  });
} catch (err) {
  console.error(`Failed to register destroyed callback: ${err.code}, error message: ${err.message}`);
}

```

## on('hidden')

```TypeScript
on(type: 'hidden', callback: Callback<void>): void
```

订阅划词窗口隐藏事件。使用callback异步回调。

**Since:** 20

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hidden' | Yes | 设置监听类型，固定取值为'hidden'。 |
| callback | Callback&lt;void> | Yes | 回调函数，返回值为空。 |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

try {
  selectionPanel.on('hidden', () => {
    console.info('Panel has been hidden.');
  });
} catch (err) {
  console.error(`Failed to register hidden callback: ${err.code}, error message: ${err.message}`);
}

```

## onDestroy

```TypeScript
onDestroy(callback: Callback<void>): void
```

订阅划词窗口销毁事件。使用callback异步回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | 回调函数，返回值为空。 |

## onHide

```TypeScript
onHide(callback: Callback<void>): void
```

订阅划词窗口隐藏事件。使用callback异步回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | 回调函数，返回值为空。 |

## setUiContent

```TypeScript
setUiContent(path: string): Promise<void>
```

为当前的划词面板加载具体页面内容。使用Promise异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 要加载到面板中的页面内容的路径，Stage模型下该路径需添加到工程的resources/base/profile/main_pages.json文件中，不支持FA模型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

try {
  selectionPanel.setUiContent('pages/Index').then(() => {
    console.info('Succeeded in setting the content.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to setUiContent: ${err.code}, error message: ${err.message}`);
  });
} catch (err) {
  console.error(`Failed to setUiContent: ${err.code}, error message: ${err.message}`);
}

```

## show

```TypeScript
show(): Promise<void>
```

显示划词面板。使用Promise异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

selectionPanel.show().then(() => {
  console.info('Succeeded in showing the panel.');
}).catch((err: BusinessError) => {
  console.error(`Failed to show panel: ${err.code}, error message: ${err.message}`);
});

```

## startMoving

```TypeScript
startMoving(): Promise<void>
```

使当前划词面板可以随鼠标拖动位置。使用Promise异步回调。该接口需要写在onTouch的回调函数中，并且事件类型为TouchType.Down。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

RelativeContainer() {
  /* 
   * Page layout content, which should be defined based on your actual needs.
   */
}
.onTouch((event: TouchEvent) => {
  if (event.type === TouchType.Down) {
    if (selectionPanel !== undefined) {
      selectionPanel.startMoving().then(() => {   // selectionPanel is the panel instance created by createPanel.
        console.info('Succeeded in startMoving the panel.');
      }).catch((err: BusinessError) => {
        console.error(`Failed to startMoving panel: ${err.code}, error message: ${err.message}`);
      });
    }
  }
})

```

