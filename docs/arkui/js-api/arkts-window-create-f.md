# create

## create

```TypeScript
function create(id: string, type: WindowType, callback: AsyncCallback<Window>): void
```

创建子窗口，使用callback异步回调。 子窗口创建后默认是[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，参数id传入null或undefined时，可能会导致callback无法得到执行，建议使用 > [createWindow()]window.createWindow(config: Configuration, callback: AsyncCallback<Window>)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** window.createWindow(config:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | 窗口名字，即[Configuration](arkts-window-configuration-i.md#Configuration)中的name。 |
| type | WindowType | Yes | 窗口类型。 |
| callback | AsyncCallback&lt;Window> | Yes | 回调函数。返回当前创建的子窗口对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let windowClass: window.Window | undefined = undefined;
window.create('test', window.WindowType.TYPE_APP, (err: BusinessError, data) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to create the subWindow. Cause code: ${err.code}, message: ${err.message}`);
    return;
  }
  windowClass = data;
  console.info('Succeeded in creating the subWindow. Data: ' + JSON.stringify(data));
});

```

## create

```TypeScript
function create(id: string, type: WindowType): Promise<Window>
```

创建子窗口，使用Promise异步回调。 子窗口创建后默认是[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[createWindow()]window.createWindow(config: Configuration)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** window.createWindow(config:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | 窗口名字，即[Configuration](arkts-window-configuration-i.md#Configuration)中的name。 |
| type | WindowType | Yes | 窗口类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前创建的子窗口对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let windowClass: window.Window | undefined = undefined;
let promise = window.create('test', window.WindowType.TYPE_APP);
promise.then((data) => {
  windowClass = data;
  console.info('Succeeded in creating the subWindow. Data: ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error(`Failed to create the subWindow. Cause code: ${err.code}, message: ${err.message}`);
});

```

## create

```TypeScript
function create(ctx: BaseContext, id: string, type: WindowType): Promise<Window>
```

创建系统窗口，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[createWindow()]window.createWindow(config: Configuration)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** window.createWindow(config:

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | BaseContext | Yes | 当前应用上下文信息。 |
| id | string | Yes | 窗口名字，即[Configuration](arkts-window-configuration-i.md#Configuration)中的name。 |
| type | WindowType | Yes | 窗口类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前创建的子窗口对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let windowClass: window.Window | undefined = undefined;
let promise = window.create(globalThis.getContext(), 'test', window.WindowType.TYPE_SYSTEM_ALERT);
promise.then((data) => {
  windowClass = data;
  console.info('Succeeded in creating the window. Data:' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error(`Failed to create the Window. Cause code: ${err.code}, message: ${err.message}`);
});

```

## create

```TypeScript
function create(ctx: BaseContext, id: string, type: WindowType, callback: AsyncCallback<Window>): void
```

创建系统窗口，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [createWindow()]window.createWindow(config: Configuration, callback: AsyncCallback<Window>)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** window.createWindow(config:

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | BaseContext | Yes | 当前应用上下文信息。 |
| id | string | Yes | 窗口名字，即[Configuration](arkts-window-configuration-i.md#Configuration)中的name。 |
| type | WindowType | Yes | 窗口类型。 |
| callback | AsyncCallback&lt;Window> | Yes | 回调函数。返回当前创建的子窗口对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let windowClass: window.Window | undefined = undefined;
window.create(globalThis.getContext(), 'test', window.WindowType.TYPE_SYSTEM_ALERT, (err: BusinessError, data) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to create the window. Cause code: ${err.code}, message: ${err.message}`);
    return;
  }
  windowClass = data;
  console.info('Succeeded in creating the window. Data: ' + JSON.stringify(data));
  windowClass.resetSize(500, 1000);
});

```

