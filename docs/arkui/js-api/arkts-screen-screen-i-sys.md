# Screen

[物理屏](docroot://displaymanager/display-terminology.md#物理屏)屏幕实例。 下列API示例中都需先使用[getAllScreens()]screen.getAllScreens(callback: AsyncCallback<Array<Screen>>)、 [createVirtualScreen()]screen.createVirtualScreen(options:VirtualScreenOption, callback: AsyncCallback<Screen>) 中的任一方法获取到Screen实例，再通过此实例调用对应方法。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { screen } from '@kit.ArkUI';
```

## setDensityDpi

```TypeScript
setDensityDpi(densityDpi: double, callback: AsyncCallback<void>): void
```

设置屏幕的像素密度，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| densityDpi | double | Yes | 像素密度。支持的输入范围为[80, 640]，该参数仅支持整数输入。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置屏幕的像素密度成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let densityDpi: number = 320;
class VirtualScreenOption {
  name : string = '';
  width : number =  0;
  height : number = 0;
  density : number = 0;
  surfaceId : string = '';
  supportsFocus ?: boolean = true;
}

let option: VirtualScreenOption = {
  name: 'screen01',
  width: 1080,
  height: 2340,
  density: 2,
  surfaceId: '',
  supportsFocus: false
};

// Create a virtual screen.
screen.createVirtualScreen(option).then((data: screen.Screen) => {
  let screenClass: screen.Screen = data;
  console.info(`Succeeded in creating the virtual screen. Data: ${JSON.stringify(data)}`);
  // Set the screen pixel density.
  screenClass.setDensityDpi(densityDpi, (err: BusinessError) => {
    const errCode: number = err.code;
    if (errCode) {
      console.error(`Failed to set the pixel density of the screen to 320. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in setting the density dpi.');
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to create the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

## setDensityDpi

```TypeScript
setDensityDpi(densityDpi: double): Promise<void>
```

设置屏幕的像素密度，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| densityDpi | double | Yes | 像素密度。支持的输入范围为[80, 640]，该参数仅支持整数输入。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let densityDpi: number = 320;
class VirtualScreenOption {
  name : string = '';
  width : number =  0;
  height : number = 0;
  density : number = 0;
  surfaceId : string = '';
  supportsFocus ?: boolean = true;
}

let option: VirtualScreenOption = {
  name: 'screen01',
  width: 1080,
  height: 2340,
  density: 2,
  surfaceId: '',
  supportsFocus: false
};

// Create a virtual screen.
screen.createVirtualScreen(option).then((data: screen.Screen) => {
  let screenClass: screen.Screen = data;
  // Set the screen pixel density.
  let promise: Promise<void> = screenClass.setDensityDpi(densityDpi);
  promise.then(() => {
    console.info('Succeeded in setting the pixel density of the screen to 320.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set the pixel density of the screen to 320. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to create the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

## setOrientation

```TypeScript
setOrientation(orientation: Orientation, callback: AsyncCallback<void>): void
```

设置屏幕方向，使用callback异步回调。当设置的方向符合[应用旋转策略](docroot://quick-start/module-configuration-file.md#abilities标签)（可通过配置 module.json5文件中abilities标签的orientation字段设置应用旋转策略）时，屏幕方向才会发生改变；当设置方向不符合应用旋转策略时，屏幕方向不会发生变化，且接口不会抛异常。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orientation | Orientation | Yes | 屏幕方向。orientation值必须来自Orientation枚举方向。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置屏幕方向成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

class VirtualScreenOption {
  name : string = '';
  width : number =  0;
  height : number = 0;
  density : number = 0;
  surfaceId : string = '';
  supportsFocus ?: boolean = true;
}

let option: VirtualScreenOption = {
  name: 'screen01',
  width: 1080,
  height: 2340,
  density: 2,
  surfaceId: '',
  supportsFocus: false
};

// Create a virtual screen.
screen.createVirtualScreen(option).then((data: screen.Screen) => {
  let screenClass: screen.Screen = data;
  console.info(`Succeeded in creating the virtual screen. Data: ${JSON.stringify(data)}`);
  // Set the screen orientation to vertical.
  screenClass.setOrientation(screen.Orientation.VERTICAL, (err: BusinessError) => {
    const errCode: number = err.code;
    if (errCode) {
      console.error(`Failed to set the vertical orientation. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in setting the vertical orientation.');
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to create the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

## setOrientation

```TypeScript
setOrientation(orientation: Orientation): Promise<void>
```

设置屏幕方向，使用Promise异步回调。当设置的方向符合[应用旋转策略](docroot://quick-start/module-configuration-file.md#abilities标签)（可通过配置 module.json5文件中abilities标签的orientation字段设置应用旋转策略）时，屏幕方向才会发生改变；当设置方向不符合应用旋转策略时，屏幕方向不会发生变化，且接口不会抛异常。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orientation | Orientation | Yes | 屏幕方向。orientation值必须来自Orientation枚举方向。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

class VirtualScreenOption {
  name : string = '';
  width : number =  0;
  height : number = 0;
  density : number = 0;
  surfaceId : string = '';
  supportsFocus ?: boolean = true;
}

let option: VirtualScreenOption = {
  name: 'screen01',
  width: 1080,
  height: 2340,
  density: 2,
  surfaceId: '',
  supportsFocus: false
};

// Create a virtual screen.
screen.createVirtualScreen(option).then((data: screen.Screen) => {
  let screenClass: screen.Screen = data;
  console.info(`Succeeded in creating the virtual screen. Data: ${JSON.stringify(data)}`);
  // Set the screen orientation to vertical.
  let promise: Promise<void> = screenClass.setOrientation(screen.Orientation.VERTICAL);
  promise.then(() => {
    console.info('Succeeded in setting the vertical orientation.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set the vertical orientation. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to create the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

## setOrientation

```TypeScript
setOrientation(orientation: Orientation, orientationOptions?: OrientationOptions): Promise<void>
```

设置屏幕方向

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orientation | Orientation | Yes | 屏幕方向。方向值必须来自方向枚举值。 |
| orientationOptions | OrientationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let orientationOptions : screen.OrientationOptions = {
  needAnimation: true,
  ignoreRotationLock: false,
};

let screenClass: screen.Screen | null = null;
// Obtain all screen objects.
let screensPromise: Promise<Array<screen.Screen>> = screen.getAllScreens();
screensPromise.then((data: Array<screen.Screen>) => {
  if (data.length > 0) {
    screenClass = data[0];
    // Set the screen orientation to vertical, with animation and rotation lock not ignored.
    let promise: Promise<void> = screenClass.setOrientation(screen.Orientation.VERTICAL, orientationOptions);
    promise.then(() => {
      console.info('Succeeded in setting the vertical orientation with orientationOptions.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to set the vertical orientation with orientationOptions. Code: ${err.code}, message: ${err.message}`);
    });
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to get all screens. Code: ${err.code}, message: ${err.message}`);
});

```

## setScreenActiveMode

```TypeScript
setScreenActiveMode(modeIndex: long, callback: AsyncCallback<void>): void
```

设置屏幕当前显示模式，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modeIndex | long | Yes | 模式索引。模式索引的当前值和值的范围，会根据屏幕当前分辨率、刷新率和设备硬件差异产生变化，该参数仅支持整数输入。索引为screen中  [ScreenModeInfo]screen.ScreenModeInfo属性的模式id。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置屏幕当前显示模式成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

class VirtualScreenOption {
  name : string = '';
  width : number =  0;
  height : number = 0;
  density : number = 0;
  surfaceId : string = '';
  supportsFocus ?: boolean = true;
}

let option: VirtualScreenOption = {
  name: 'screen01',
  width: 1080,
  height: 2340,
  density: 2,
  surfaceId: '',
  supportsFocus: false
};

// Create a virtual screen.
screen.createVirtualScreen(option).then((data: screen.Screen) => {
  let screenClass: screen.Screen = data;
  console.info(`Succeeded in creating the virtual screen. Data: ${JSON.stringify(data)}`);
  let modeIndex: number = 0;
  // Set the current display mode of the screen.
  screenClass.setScreenActiveMode(modeIndex, (err: BusinessError) => {
    const errCode: number = err.code;
    if (errCode) {
      console.error(`Failed to set screen active mode 0. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in setting the screen active mode 0.');
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to create the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

## setScreenActiveMode

```TypeScript
setScreenActiveMode(modeIndex: long): Promise<void>
```

设置屏幕当前显示模式，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modeIndex | long | Yes | 模式索引。模式索引的当前值和值的范围，会根据屏幕当前分辨率、刷新率和设备硬件差异产生变化，该参数仅支持整数输入。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

class VirtualScreenOption {
  name : string = '';
  width : number =  0;
  height : number = 0;
  density : number = 0;
  surfaceId : string = '';
  supportsFocus ?: boolean = true;
}

let option: VirtualScreenOption = {
  name: 'screen01',
  width: 1080,
  height: 2340,
  density: 2,
  surfaceId: '',
  supportsFocus: false
};

// Create a virtual screen.
screen.createVirtualScreen(option).then((data: screen.Screen) => {
  let screenClass: screen.Screen = data;
  console.info(`Succeeded in creating the virtual screen. Data: ${JSON.stringify(data)}`);
  let modeIndex: number = 0;
  // Set the current display mode of the screen.
  let promise: Promise<void> = screenClass.setScreenActiveMode(modeIndex);
  promise.then(() => {
    console.info('Succeeded in setting screen active mode 0.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set screen active mode 0. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to create the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

## parent

```TypeScript
readonly parent: long
```

屏幕所属群组的id，该参数为整数。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## orientation

```TypeScript
readonly orientation: Orientation
```

屏幕方向。

**Type:** Orientation

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## serialNumber

```TypeScript
readonly serialNumber?: string
```

扩展屏幕的序列号，默认返回为空字符串。

**Type:** string

**Since:** 15

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## sourceMode

```TypeScript
readonly sourceMode: ScreenSourceMode
```

屏幕来源模式。

**Type:** ScreenSourceMode

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## activeModeIndex

```TypeScript
readonly activeModeIndex: long
```

当前屏幕所处模式索引。模式索引的当前值和值的范围，会根据屏幕当前分辨率、刷新率和设备硬件差异产生变化。该参数为整数。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## supportedModeInfo

```TypeScript
readonly supportedModeInfo: Array<ScreenModeInfo>
```

屏幕支持的模式集合。

**Type:** Array<ScreenModeInfo>

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## rsId

```TypeScript
readonly rsId: long
```

屏幕端口的id，该参数为整数。

**Type:** long

**Since:** 21

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## id

```TypeScript
readonly id: long
```

屏幕的id，该参数应为整数。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

