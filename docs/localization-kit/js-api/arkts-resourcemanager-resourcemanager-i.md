# ResourceManager

提供访问应用资源和系统资源的能力。 > **说明：** > > - ResourceManager涉及到的方法，仅限基于TS扩展的声明式开发范式使用。 > > - 资源文件在工程的resources目录中定义，通过resName、resId、Resource对象等可以获取对应的字符串、字符串数组、颜色等资源值，resName为资源名称，resId可通过`$r(资源地址).id`的方式 > 获取，例如`$r('app.string.test').id`。 > > - 单HAP包获取自身资源、跨HAP/HSP包获取资源，由于入参为Resource的接口相比于入参为resName、resId的接口耗时更长，因此更推荐使用参数为resName或resId的接口。跨HAP/HSP包获取资源， > **需要先使用[createModuleContext](../../apis-ability-kit/arkts-apis/arkts-application-createmodulecontext-f.md#createModuleContext-1)创建对应module的context** > ，再调用参数为resName或resId的接口。更多请参考[资源访问](docroot://quick-start/resource-categories-and-access.md#资源访问)。 > > - 在API version 22及之前版本，中间码HAR、字节码HAR通过资源ID相关接口访问资源时，因ID无效会抛出异常；从API version 23开始，中间码HAR、字节码HAR通过资源ID相关接口可以正常访问资源， > 更多请参考[资源访问](docroot://quick-start/resource-categories-and-access.md#资源访问)。 > > - 示例代码中test文件的具体内容请参考[附录](docroot://reference/apis-localization-kit/js-apis-resource-manager.md#附录)。

**Since:** 6

**System capability:** SystemCapability.Global.ResourceManager

## Modules to Import

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
```

## addResource

```TypeScript
addResource(path: string) : void
```

应用运行时加载指定的资源路径，实现资源覆盖。 > **说明** > > rawfile和resfile目录不支持资源覆盖。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 资源路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001010 | Invalid overlay path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace "/library1-default-signed.hsp" with the actual file path.
        let path = this.context.bundleCodeDir + "/library1-default-signed.hsp";
        try {
            this.context.resourceManager.addResource(path);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`addResource failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## closeRawFd

```TypeScript
closeRawFd(path: string, callback: _AsyncCallback<void>): void
```

关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |
| callback | _AsyncCallback&lt;void> | Yes | 回调函数。当关闭rawfile所在HAP的文件描述符（fd）成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      // Replace "test.txt" with the actual resource.
      let rawfile = this.context.resourceManager.getRawFdSync("test.txt");
      // Use rawfile resources based on the actual service scenario.
      this.context.resourceManager.closeRawFd("test.txt", (error: BusinessError) => {
        if (error != null) {
          console.error("error is " + error);
          return;
        }
        console.info('closeRawFd success.');
      });
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`callback closeRawFd failed, error code: ${code}, message: ${message}.`);
    }
  }
}

```

## closeRawFd

```TypeScript
closeRawFd(path: string): Promise<void>
```

关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      // Replace "test.txt" with the actual resource.
      let rawfile = this.context.resourceManager.getRawFdSync("test.txt");
      // Use rawfile resources based on the actual service scenario.
      this.context.resourceManager.closeRawFd("test.txt");
      console.info(`closeRawFd test success.`);
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`promise closeRawFd failed, error code: ${code}, message: ${message}.`);
    }
  }
}

```

## closeRawFdSync

```TypeScript
closeRawFdSync(path: string): void
```

关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径 。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      // Replace "test.txt" with the actual resource.
      let rawfile = this.context.resourceManager.getRawFdSync("test.txt");
      // Use rawfile resources based on the actual service scenario.

      this.context.resourceManager.closeRawFdSync("test.txt");
      console.info(`closeRawFdSync test success.`);
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`closeRawFdSync test failed, error code: ${code}, message: ${message}.`);
    }
  }
}

```

## closeRawFileDescriptor

```TypeScript
closeRawFileDescriptor(path: string, callback: AsyncCallback<void>): void
```

关闭resources/rawfile目录下rawfile文件的文件描述符（fd），使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.closeRawFd(path:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当关闭rawfile文件的文件描述符（fd）成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.closeRawFileDescriptor("test.txt", (error: Error) => {
        if (error != null) {
            console.error("error is " + error);
        }
    });
});

```

## closeRawFileDescriptor

```TypeScript
closeRawFileDescriptor(path: string): Promise<void>
```

关闭resources/rawfile目录下rawfile文件的文件描述符（fd），使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.closeRawFd(path:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.closeRawFileDescriptor("test.txt");
});

```

## getBoolean

```TypeScript
getBoolean(resId: long): boolean
```

获取指定资源ID值对应的布尔值，使用同步方式返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 资源ID值对应的布尔值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/boolean.json
{
  "boolean": [
    {
      "name": "boolean_test",
      "value": true
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.boolean.boolean_test' with the actual resource.
            let boolTest = this.context.resourceManager.getBoolean($r('app.boolean.boolean_test').id);
            console.info(`getBoolean, result: ${boolTest}`);
            // Print the output result: getBoolean, result: true
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getBoolean failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getBoolean

```TypeScript
getBoolean(resource: Resource): boolean
```

获取指定resource对象对应的布尔值，使用同步方式返回。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getBoolean(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | resource对象对应的布尔值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/boolean.json
{
  "boolean": [
    {
      "name": "boolean_test",
      "value": true
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.boolean.boolean_test').id
};
try {
  let boolTest = this.context.resourceManager.getBoolean(resource);
  console.info(`getBoolean, result: ${boolTest}`);
  // Print the output result: getBoolean, result: true
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getBoolean failed, error code: ${code}, message: ${message}.`);
}

```

## getBooleanByName

```TypeScript
getBooleanByName(resName: string): boolean
```

获取指定资源名称对应的布尔值，使用同步方式返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 资源名称对应的布尔值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/boolean.json
{
  "boolean": [
    {
      "name": "boolean_test",
      "value": true
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "boolean_test" with the actual resource.
            let boolTest = this.context.resourceManager.getBooleanByName("boolean_test");
            console.info(`getBooleanByName, result: ${boolTest}`);
            // Print the output result: getBooleanByName, result: true
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getBooleanByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getColor

```TypeScript
getColor(resId: long, callback: _AsyncCallback<long>): void
```

获取指定资源ID对应的颜色值，使用callback异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| callback | _AsyncCallback&lt;long> | Yes | 回调函数，返回资源ID值对应的颜色值（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

## getColor

```TypeScript
getColor(resId: long): Promise<long>
```

获取指定资源ID对应的颜色值，使用Promise异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回资源ID值对应的颜色值（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace 'app.color.test' with the actual resource.
        this.context.resourceManager.getColor($r('app.color.test').id)
            .then((value: number) => {
                console.info(`getColor, result: ${value}`);
                // Print the output result: getColor, result: 4294967295
            })
            .catch((error: BusinessError) => {
                console.error(`promise getColor failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}

```

## getColor

```TypeScript
getColor(resource: Resource, callback: _AsyncCallback<number>): void
```

获取指定resource对象对应的颜色值，使用callback异步回调。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getColor(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| callback | _AsyncCallback&lt;number> | Yes | 回调函数，返回resource对象对应的颜色值（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.color.test').id
};
this.context.resourceManager.getColor(resource, (error: BusinessError, value: number) => {
  if (error != null) {
    console.error(`callback getColor failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getColor, result: ${value}`);
    // Print the output result: getColor, result: 4294967295
  }
});

```

## getColor

```TypeScript
getColor(resource: Resource): Promise<number>
```

获取指定resource对象对应的颜色值，使用Promise异步回调。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getColor(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回resource对象对应的颜色值（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.color.test').id
};
this.context.resourceManager.getColor(resource)
  .then((value: number) => {
    console.info(`getColor, result: ${value}`);
    // Print the output result: getColor, result: 4294967295
  })
  .catch((error: BusinessError) => {
    console.error(`promise getColor failed, error code: ${error.code}, message: ${error.message}.`);
  });

```

## getColorByName

```TypeScript
getColorByName(resName: string, callback: _AsyncCallback<long>): void
```

获取指定资源名称对应的颜色值，使用callback异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| callback | _AsyncCallback&lt;long> | Yes | 回调函数，返回资源名称对应的颜色值（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace "test" with the actual resource.
        this.context.resourceManager.getColorByName("test", (error: BusinessError, value: number) => {
            if (error != null) {
                console.error(`callback getColorByName failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                console.info(`getColorByName, result: ${value}`);
                // Print the output result: getColorByName, result: 4294967295
            }
        });
    }
}

```

## getColorByName

```TypeScript
getColorByName(resName: string): Promise<long>
```

获取指定资源名称对应的颜色值，使用Promise异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回资源名称对应的颜色值（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace "test" with the actual resource.
        this.context.resourceManager.getColorByName("test")
            .then((value: number) => {
                console.info(`getColorByName, result: ${value}`);
                // Print the output result: getColorByName, result: 4294967295
            })
            .catch((error: BusinessError) => {
                console.error(`promise getColorByName failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}

```

## getColorByNameSync

```TypeScript
getColorByNameSync(resName: string) : long
```

获取指定资源名称对应的颜色值，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 资源名称对应的颜色值（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            let colorValue = this.context.resourceManager.getColorByNameSync("test");
            console.info(`getColorByNameSync, result: ${colorValue}`);
            // Print the output result: getColorByNameSync, result: 4294967295
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getColorByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getColorSync

```TypeScript
getColorSync(resId: long) : long
```

获取指定资源ID对应的颜色值，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 资源ID值对应的颜色值（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.color.test' with the actual resource.
            let colorValue = this.context.resourceManager.getColorSync($r('app.color.test').id);
            console.info(`getColorSync, result: ${colorValue}`);
            // Print the output result: getColorSync, result: 4294967295
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getColorSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getColorSync

```TypeScript
getColorSync(resource: Resource) : number
```

获取指定resource对象对应的颜色值，使用同步方式返回。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getColorSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | resource对象对应的颜色值（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.color.test').id
};
try {
  let colorValue = this.context.resourceManager.getColorSync(resource);
  console.info(`getColorSync, result: ${colorValue}`);
  // Print the output result: getColorSync, result: 4294967295
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getColorSync failed, error code: ${code}, message: ${message}.`);
}

```

## getConfiguration

```TypeScript
getConfiguration(callback: _AsyncCallback<Configuration>): void
```

获取设备的Configuration，使用callback异步回调。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | _AsyncCallback&lt;Configuration> | Yes | 回调函数，返回设备的Configuration。 |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getConfiguration((error: BusinessError, value: resourceManager.Configuration) => {
                if (error != null) {
                    console.error("getConfiguration callback error is " + error);
                } else {
                    let direction = value.direction;
                    let locale = value.locale;
                }
            });
        } catch (error) {
            console.error("getConfiguration callback error is " + error);
        }
    }
}

```

## getConfiguration

```TypeScript
getConfiguration(): Promise<Configuration>
```

获取设备的Configuration，使用Promise异步回调。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Configuration> | Promise对象，返回设备的Configuration。 |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getConfiguration().then((value: resourceManager.Configuration) => {
                let direction = value.direction;
                let locale = value.locale;
            }).catch((error: BusinessError) => {
                console.error("getConfiguration promise error is " + error);
            });
        } catch (error) {
            console.error("getConfiguration promise error is " + error);
        }
    }
}

```

## getConfigurationSync

```TypeScript
getConfigurationSync(): Configuration
```

获取设备的Configuration，使用同步形式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| Configuration | 设备的Configuration。 |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let value = this.context.resourceManager.getConfigurationSync();
            let direction = value.direction;
            let locale = value.locale;
        } catch (error) {
            console.error("getConfigurationSync error is " + error);
        }
    }
}

```

## getDeviceCapability

```TypeScript
getDeviceCapability(callback: _AsyncCallback<DeviceCapability>): void
```

获取设备的DeviceCapability，使用callback异步回调。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | _AsyncCallback&lt;DeviceCapability> | Yes | 回调函数，返回设备的DeviceCapability。 |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getDeviceCapability((error: BusinessError, value: resourceManager.DeviceCapability) => {
                if (error != null) {
                    console.error("getDeviceCapability callback error is " + error);
                } else {
                    let screenDensity = value.screenDensity;
                    let deviceType = value.deviceType;
                }
            });
        } catch (error) {
            console.error("getDeviceCapability callback error is " + error);
        }
    }
}

```

## getDeviceCapability

```TypeScript
getDeviceCapability(): Promise<DeviceCapability>
```

获取设备的DeviceCapability，使用Promise异步回调。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DeviceCapability> | Promise对象，返回设备的DeviceCapability。 |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getDeviceCapability().then((value: resourceManager.DeviceCapability) => {
                let screenDensity = value.screenDensity;
                let deviceType = value.deviceType;
            }).catch((error: BusinessError) => {
                console.error("getDeviceCapability promise error is " + error);
            });
        } catch (error) {
            console.error("getDeviceCapability promise error is " + error);
        }
    }
}

```

## getDeviceCapabilitySync

```TypeScript
getDeviceCapabilitySync(): DeviceCapability
```

获取设备的DeviceCapability，使用同步形式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| DeviceCapability | 设备的DeviceCapability。 |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let value = this.context.resourceManager.getDeviceCapabilitySync();
            let screenDensity = value.screenDensity;
            let deviceType = value.deviceType;
        } catch (error) {
            console.error("getDeviceCapabilitySync error is " + error);
        }
    }
}

```

## getDouble

```TypeScript
getDouble(resId: long): double
```

Obtains the number result with a specified resource ID.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | Indicates the resource ID. |

**Return value:**

| Type | Description |
| --- | --- |
| double | The number resource corresponding to the resource ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

## getDoubleByName

```TypeScript
getDoubleByName(resName: string): double
```

Obtains the number result with a specified resource name.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | Indicates the resource name. |

**Return value:**

| Type | Description |
| --- | --- |
| double | The number resource corresponding to the resource name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

## getDoublePluralStringByNameSync

```TypeScript
getDoublePluralStringByNameSync(resName: string, num: number, ...args: Array<string | number>): string
```

获取指定资源名称对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。 > **说明** > > - 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 > > - 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| num | number | Yes | 数量值（浮点数）。根据当前语言的  [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| args | Array&lt;string \| number> | Yes | 格式化字符串资源参数。  支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。  说明：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。  举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源名称对应的格式化单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |
| 9001008 | Failed to format the resource obtained based on the resource name. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // If num is 2.1, the single/plural type is other in the English environment.
            // The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is other is obtained.
            // Replace "format_test" with the actual resource.
            let pluralStr = this.context.resourceManager.getDoublePluralStringByNameSync("format_test", 2.1, 2, "basket", 0.6);
            console.info(`getDoublePluralStringByNameSync, result: ${pluralStr}`);
            // Print the output result: getDoublePluralStringByNameSync, result: There are 2 apples in the basket, the total amount is 0.6 kg.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDoublePluralStringByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getDoublePluralStringByNameSync

```TypeScript
getDoublePluralStringByNameSync(resName: string, num: double, ...args: (string | double)[]): string
```

Obtains a singular/plural string based on the specified resource name and number.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | Resource name. |
| num | double | Yes | Double floating-point number used to obtain the corresponding string  representation for the current language's plural rules. |
| args | (string \| double)[] | Yes | String resource formatting parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Singular/plural string obtained based on the specified resource name and number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |
| 9001008 | Failed to format the resource obtained based on the resource name. |

## getDoublePluralStringValueSync

```TypeScript
getDoublePluralStringValueSync(resId: number, num: number, ...args: Array<string | number>): string
```

获取指定资源ID对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。 > **说明** > > - 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 > > - 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| num | number | Yes | 数量值（浮点数）。根据当前语言的  [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| args | Array&lt;string \| number> | Yes | 格式化字符串资源参数。  支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。  说明：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。  举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源ID值对应的格式化单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // If num is 2.1, the single/plural type is other in the English environment.
            // The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is other is obtained.
            // Replace 'app.plural.format_test' with the actual resource.
            let pluralStr = this.context.resourceManager.getDoublePluralStringValueSync($r('app.plural.format_test').id, 2.1, 2, "basket", 0.6);
            console.info(`getDoublePluralStringValueSync, result: ${pluralStr}`);
            // Print the output result: getDoublePluralStringValueSync, result: There are 2 apples in the basket, the total amount is 0.6 kg.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDoublePluralStringValueSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getDoublePluralStringValueSync

```TypeScript
getDoublePluralStringValueSync(resId: long, num: double, ...args: (string | double)[]): string
```

Obtains a singular/plural string based on the specified resource ID and number.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | Resource ID. |
| num | double | Yes | Double floating-point number used to obtain the corresponding string  representation for the current language's plural rules. |
| args | (string \| double)[] | Yes | String resource formatting parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Singular/plural string obtained based on the specified resource ID and number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 |  |
| 9001002 |  |
| 9001006 |  |
| 9001007 |  |

## getDoublePluralStringValueSync

```TypeScript
getDoublePluralStringValueSync(resource: Resource, num: number, ...args: Array<string | number>): string
```

获取指定resource对象对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 18

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getDoublePluralStringValueSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| num | number | Yes | 数量值（浮点数）。根据当前语言的  [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| args | Array&lt;string \| number> | Yes | 格式化字符串资源参数。  支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。  说明：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。  举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | resource对象对应的格式化单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.format_test').id
};

try {
  // If num is 2.1, the single/plural type is other in the English environment.
  // The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is other is obtained.
  let pluralStr = this.context.resourceManager.getDoublePluralStringValueSync(resource, 2.1, 2, "basket", 0.6);
  console.info(`getDoublePluralStringValueSync, result: ${pluralStr}`);
  // Print the output result: getIntPluralStringValueSync, result: There are 2 apples in the basket, the total amount is 0.6 kg.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getDoublePluralStringValueSync failed, error code: ${code}, message: ${message}.`);
}

```

## getDrawableDescriptor

```TypeScript
getDrawableDescriptor(resId: long, density?: int, type?: int): DrawableDescriptor
```

获取指定资源ID对应的DrawableDescriptor对象，用于图标的显示，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| density | int | No | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |
| type | int | No | 图标类型。默认值为0。  0：表示获取应用自身图标资源。  1：表示获取主题资源包中应用的分层图标资源。 |

**Return value:**

| Type | Description |
| --- | --- |
| DrawableDescriptor | 资源ID值对应的DrawableDescriptor对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { DrawableDescriptor } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.icon' with the actual resource.
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor($r('app.media.icon').id);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
        }
        try {
            // Replace 'app.media.icon' with the actual resource.
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor($r('app.media.icon').id, 120);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
        }
        try {
            // Replace 'app.media.icon' with the actual resource.
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor($r('app.media.icon').id, 0, 1);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getDrawableDescriptor

```TypeScript
getDrawableDescriptor(resource: Resource, density?: number, type?: number): DrawableDescriptor
```

获取指定resource对应的DrawableDescriptor对象，用于图标的显示，使用同步方式返回。 > **说明** > > 从API version 10开始支持，从API version 20开始废弃，建议使用 > [getDrawableDescriptorByName]resourceManager.ResourceManager.getDrawableDescriptorByName或 > [getDrawableDescriptor]resourceManager.ResourceManager.getDrawableDescriptor(resId: long, density?: int, type?: int) > 替代。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getDrawableDescriptor(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| density | number | No | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |
| type | number | No | 图标类型。默认值为0。  0：表示获取应用自身图标资源。  1：表示获取主题资源包中应用的分层图标资源。 |

**Return value:**

| Type | Description |
| --- | --- |
| DrawableDescriptor | 资源ID值对应的DrawableDescriptor对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2  .Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { DrawableDescriptor } from '@kit.ArkUI';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.icon').id
};
try {
  let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor(resource);
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
}
try {
  let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor(resource, 120);
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
}
try {
  let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor(resource, 0, 1);
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
}

```

## getDrawableDescriptorByName

```TypeScript
getDrawableDescriptorByName(resName: string, density?: int, type?: int): DrawableDescriptor
```

获取指定资源名称对应的DrawableDescriptor对象，用于图标的显示，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| density | int | No | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |
| type | int | No | 图标类型。默认值为0。  0：表示获取应用自身图标资源。  1：表示获取主题资源包中应用的分层图标资源。 |

**Return value:**

| Type | Description |
| --- | --- |
| DrawableDescriptor | 资源名称对应的DrawableDescriptor对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { DrawableDescriptor } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "icon" with the actual resource.
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptorByName('icon');
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptorByName failed, error code: ${code}, message: ${message}.`);
        }
        try {
            // Replace "icon" with the actual resource.
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptorByName('icon', 120);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptorByName failed, error code: ${code}, message: ${message}.`);
        }
        try {
            // Replace "icon" with the actual resource.
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptorByName('icon', 0, 1);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptorByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getInt

```TypeScript
getInt(resId: long): int
```

Obtains the number result with a specified resource ID.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | Indicates the resource ID. |

**Return value:**

| Type | Description |
| --- | --- |
| int | The number resource corresponding to the resource ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

## getIntByName

```TypeScript
getIntByName(resName: string): int
```

Obtains the number result with a specified resource name.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | Indicates the resource name. |

**Return value:**

| Type | Description |
| --- | --- |
| int | The number resource corresponding to the resource name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

## getIntPluralStringByNameSync

```TypeScript
getIntPluralStringByNameSync(resName: string, num: number, ...args: Array<string | number>): string
```

获取指定资源名称对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。 > **说明** > > - 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 > > - 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| num | number | Yes | 数量值（整数）。根据当前语言的  [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| args | Array&lt;string \| number> | Yes | 格式化字符串资源参数。  支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。  说明：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。  举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源名称对应的格式化单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |
| 9001008 | Failed to format the resource obtained based on the resource name. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // If num is 1, the single/plural type is one in the English environment.
            // The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
            // Replace "format_test" with the actual resource.
            let pluralStr = this.context.resourceManager.getIntPluralStringByNameSync("format_test", 1, 1, "basket", 0.3);
            console.info(`getIntPluralStringByNameSync, result: ${pluralStr}`);
            // Print the output result: getIntPluralStringByNameSync, result: There is 1 apple in the basket, the total amount is 0.3 kg.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getIntPluralStringByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getIntPluralStringByNameSync

```TypeScript
getIntPluralStringByNameSync(resName: string, num: int, ...args: (string | double)[]): string
```

Obtains a singular/plural string based on the specified resource name and number.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | Resource name. |
| num | int | Yes | Integer number used to obtain the corresponding string representation for the  current language's plural rules. |
| args | (string \| double)[] | Yes | String resource formatting parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Singular/plural string obtained based on the specified resource name and number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |
| 9001008 | Failed to format the resource obtained based on the resource name. |

## getIntPluralStringValueSync

```TypeScript
getIntPluralStringValueSync(resId: number, num: number,...args: Array<string | number>): string
```

获取指定资源ID对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。 > **说明** > > - 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 > > - 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| num | number | Yes | 数量值（整数）。根据当前语言的  [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| args | Array&lt;string \| number> | Yes | 格式化字符串资源参数。  支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。  说明：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。  举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源ID值对应的格式化单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // If num is 1, the single/plural type is one in the English environment.
            // The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
            // Replace 'app.plural.format_test' with the actual resource.
            let pluralStr = this.context.resourceManager.getIntPluralStringValueSync($r('app.plural.format_test').id, 1, 1, "basket", 0.3);
            console.info(`getIntPluralStringValueSync, result: ${pluralStr}`);
            // Print the output result: getIntPluralStringValueSync, result: There is 1 apple in the basket, the total amount is 0.3 kg.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getIntPluralStringValueSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getIntPluralStringValueSync

```TypeScript
getIntPluralStringValueSync(resId: long, num: int,...args: (string | double)[]): string
```

Obtains the singular-plural character string represented by the ID string corresponding to the specified number.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | Indicates the resource ID. |
| num | int | Yes | an integer used to get the correct string for the current plural rules. |
| args | (string \| double)[] | Yes | Indicates the formatting string resource parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| string | The singular-plural character string represented by the ID string  corresponding to the specified number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

## getIntPluralStringValueSync

```TypeScript
getIntPluralStringValueSync(resource: Resource, num: number, ...args: Array<string | number>): string
```

获取指定resource对象对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 18

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getIntPluralStringValueSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| num | number | Yes | 数量值（整数）。根据当前语言的  [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| args | Array&lt;string \| number> | Yes | 格式化字符串资源参数。  支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。  说明：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。  举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | resource对象对应的格式化单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.format_test').id
};

try {
  // If num is 1, the single/plural type is one in the English environment.
  // The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
  let pluralStr = this.context.resourceManager.getIntPluralStringValueSync(resource, 1, 1, "basket", 0.3);
  console.info(`getIntPluralStringValueSync, result: ${pluralStr}`);
  // Print the output result: getIntPluralStringValueSync, result: There is 1 apple in the basket, the total amount is 0.3 kg.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getIntPluralStringValueSync failed, error code: ${code}, message: ${message}.`);
}

```

## getLocales

```TypeScript
getLocales(includeSystem?: boolean): Array<string>
```

获取应用的语言列表。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| includeSystem | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 返回获取的语言列表，列表中的字符串由语言、脚本（可选）、地区（可选），按照顺序使用中划线“-”连接组成。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getLocales(); // Obtain only the language list of application resources.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getLocales failed, error code: ${code}, message: ${message}.`);
        }

        try {
            resourceManager.getSysResourceManager().getLocales(); // Obtain only the language list of system resources.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getLocales failed, error code: ${code}, message: ${message}.`);
        }

        try {
            this.context.resourceManager.getLocales(true); // Obtain the language list of application resources and resources.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getLocales failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMedia

```TypeScript
getMedia(resId: number, callback: AsyncCallback<Uint8Array>): void
```

获取指定资源ID对应的媒体文件内容，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getMediaContent(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| callback | AsyncCallback&lt;Uint8Array> | Yes | 回调函数，返回资源ID值对应的媒体文件内容。 |

**Example**

```TypeScript
resourceManager.getResourceManager((error, mgr) => {
    mgr.getMedia($r('app.media.test').id, (error: Error, value: Uint8Array) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let media = value;
        }
    });
});

```

## getMedia

```TypeScript
getMedia(resId: number): Promise<Uint8Array>
```

获取指定资源ID对应的媒体文件内容，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getMediaContent(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回资源ID值对应的媒体文件内容。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getMedia($r('app.media.test').id).then((value: Uint8Array) => {
        let media = value;
    }).catch((error: BusinessError) => {
        console.error("getMedia promise error is " + error);
    });
});

```

## getMediaBase64

```TypeScript
getMediaBase64(resId: number, callback: AsyncCallback<string>): void
```

获取指定资源ID对应的图片资源Base64编码，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getMediaContentBase64(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数，返回资源ID值对应的图片资源Base64编码。 |

**Example**

```TypeScript
resourceManager.getResourceManager((error, mgr) => {
    mgr.getMediaBase64($r('app.media.test').id, ((error: Error, value: string) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let media = value;
        }
    });
});

```

## getMediaBase64

```TypeScript
getMediaBase64(resId: number): Promise<string>
```

获取指定资源ID对应的图片资源Base64编码，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getMediaContentBase64(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源ID值对应的图片资源Base64编码。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getMediaBase64($r('app.media.test').id).then((value: string) => {
        let media = value;
    }).catch((error: BusinessError) => {
        console.error("getMediaBase64 promise error is " + error);
    });
});

```

## getMediaBase64ByName

```TypeScript
getMediaBase64ByName(resName: string, callback: _AsyncCallback<string>): void
```

获取指定资源名称对应的图片资源Base64编码，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回资源名称的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaBase64ByName("test", (error: BusinessError, value: string) => {
                if (error != null) {
                    console.error("error is " + error);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaBase64ByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaBase64ByName

```TypeScript
getMediaBase64ByName(resName: string, density: int, callback: _AsyncCallback<string>): void
```

获取指定资源名称对应的指定屏幕密度图片资源Base64编码，使用callback异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| density | int | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回资源名称的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaBase64ByName("test", 120, (error: BusinessError, value: string) => {
                if (error != null) {
                    console.error(`callback getMediaBase64ByName failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaBase64ByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaBase64ByName

```TypeScript
getMediaBase64ByName(resName: string): Promise<string>
```

获取指定资源名称对应的图片资源Base64编码，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源名称对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaBase64ByName("test").then((value: string) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error("getMediaBase64ByName promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaBase64ByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaBase64ByName

```TypeScript
getMediaBase64ByName(resName: string, density: int): Promise<string>
```

获取指定资源名称对应的指定屏幕密度图片资源Base64编码，使用Promise异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| density | int | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源名称对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaBase64ByName("test", 120).then((value: string) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error(`promise getMediaBase64ByName failed, error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaBase64ByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaBase64ByNameSync

```TypeScript
getMediaBase64ByNameSync(resName: string, density?: int): string
```

获取指定资源名称对应的默认或指定的屏幕密度图片资源Base64编码，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| density | int | No | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源名称对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaBase64ByNameSync("test"); // Default screen density
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaBase64ByNameSync failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaBase64ByNameSync("test", 120); // Specified screen density
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaBase64ByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaByName

```TypeScript
getMediaByName(resName: string, callback: _AsyncCallback<Uint8Array>): void
```

获取指定资源名称对应的媒体文件内容，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| callback | _AsyncCallback&lt;Uint8Array> | Yes | 回调函数，返回资源名称对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaByName("test", (error: BusinessError, value: Uint8Array) => {
                if (error != null) {
                    console.error("error is " + error);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaByName

```TypeScript
getMediaByName(resName: string, density: int, callback: _AsyncCallback<Uint8Array>): void
```

获取指定资源名称对应的指定屏幕密度媒体文件内容，使用callback异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| density | int | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | _AsyncCallback&lt;Uint8Array> | Yes | 回调函数，返回资源名称对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaByName("test", 120, (error: BusinessError, value: Uint8Array) => {
                if (error != null) {
                    console.error(`callback getMediaByName failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaByName

```TypeScript
getMediaByName(resName: string): Promise<Uint8Array>
```

获取指定资源名称对应的媒体文件内容，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回资源名称对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaByName("test").then((value: Uint8Array) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error("getMediaByName promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaByName

```TypeScript
getMediaByName(resName: string, density: int): Promise<Uint8Array>
```

获取指定资源名称对应的指定屏幕密度媒体文件内容，使用Promise异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| density | int | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回资源名称对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaByName("test", 120).then((value: Uint8Array) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error(`promise getMediaByName failed, error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaByNameSync

```TypeScript
getMediaByNameSync(resName: string, density?: int): Uint8Array
```

获取指定资源名称对应的默认或指定的屏幕密度媒体文件内容，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| density | int | No | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 资源名称对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaByNameSync("test"); // Default screen density
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaByNameSync failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // Replace "test" with the actual resource.
            this.context.resourceManager.getMediaByNameSync("test", 120); // Specified screen density
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContent

```TypeScript
getMediaContent(resource: Resource, callback: _AsyncCallback<Uint8Array>): void
```

获取指定resource对象对应的媒体文件内容，使用callback异步回调。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContent(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| callback | _AsyncCallback&lt;Uint8Array> | Yes | 回调函数，返回resource对象对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContent(resource, (error: BusinessError, value: Uint8Array) => {
    if (error != null) {
      console.error("error is " + error);
    } else {
      let media = value;
    }
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`callback getMediaContent failed, error code: ${code}, message: ${message}.`);
}

```

## getMediaContent

```TypeScript
getMediaContent(resource: Resource, density: number, callback: _AsyncCallback<Uint8Array>): void
```

获取指定resource对象对应的指定屏幕密度媒体文件内容，使用callback异步回调。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContent(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| density | number | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | _AsyncCallback&lt;Uint8Array> | Yes | 回调函数，返回resource对象对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2  .Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContent(resource, 120, (error: BusinessError, value: Uint8Array) => {
    if (error != null) {
      console.error(`callback getMediaContent failed, error code: ${error.code}, message: ${error.message}.`);
    } else {
      let media = value;
    }
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`callback getMediaContent failed, error code: ${code}, message: ${message}.`);
}

```

## getMediaContent

```TypeScript
getMediaContent(resource: Resource): Promise<Uint8Array>
```

获取指定resource对象对应的媒体文件内容，使用Promise异步回调。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContent(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回resource对象对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContent(resource).then((value: Uint8Array) => {
    let media = value;
  }).catch((error: BusinessError) => {
    console.error("getMediaContent promise error is " + error);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`promise getMediaContent failed, error code: ${code}, message: ${message}.`);
}

```

## getMediaContent

```TypeScript
getMediaContent(resource: Resource, density: number): Promise<Uint8Array>
```

获取指定resource对象对应的指定屏幕密度媒体文件内容，使用Promise异步回调。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContent(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| density | number | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回resource对象对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2  .Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContent(resource, 120).then((value: Uint8Array) => {
    let media = value;
  }).catch((error: BusinessError) => {
    console.error(`promise getMediaContent failed, error code: ${error.code}, message: ${error.message}.`);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`promise getMediaContent failed, error code: ${code}, message: ${message}.`);
}

```

## getMediaContent

```TypeScript
getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>): void
```

获取指定资源ID对应的媒体文件内容，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| callback | _AsyncCallback&lt;Uint8Array> | Yes | 回调函数，返回资源ID对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContent($r('app.media.test').id,
                (error: BusinessError, value: Uint8Array) => {
                    if (error != null) {
                        console.error("error is " + error);
                    } else {
                        let media = value;
                    }
                });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContent

```TypeScript
getMediaContent(resId: long, density: int, callback: _AsyncCallback<Uint8Array>): void
```

获取指定资源ID对应的指定屏幕密度媒体文件内容，使用callback异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| density | int | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | _AsyncCallback&lt;Uint8Array> | Yes | 回调函数，返回资源ID对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContent($r('app.media.test').id, 120, (error: BusinessError, value: Uint8Array) => {
                if (error != null) {
                    console.error(`callback getMediaContent failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContent

```TypeScript
getMediaContent(resId: long): Promise<Uint8Array>
```

获取指定资源ID对应的媒体文件内容，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回资源ID值对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContent($r('app.media.test').id).then((value: Uint8Array) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error("getMediaContent promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContent

```TypeScript
getMediaContent(resId: long, density: int): Promise<Uint8Array>
```

获取指定资源ID对应的指定屏幕密度媒体文件内容，使用Promise异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| density | int | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回资源ID值对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContent($r('app.media.test').id, 120).then((value: Uint8Array) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error(`promise getMediaContent failed, error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContentBase64

```TypeScript
getMediaContentBase64(resource: Resource, callback: _AsyncCallback<string>): void
```

获取指定resource对象对应的图片资源Base64编码，使用callback异步回调。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContentBase64(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回resource对象对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64(resource, (error: BusinessError, value: string) => {
    if (error != null) {
      console.error("error is " + error);
    } else {
      let media = value;
    }
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`callback getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
}

```

## getMediaContentBase64

```TypeScript
getMediaContentBase64(resource: Resource, density: number, callback: _AsyncCallback<string>): void
```

获取指定resource对象对应的指定屏幕密度图片资源Base64编码，使用callback异步回调。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContentBase64(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| density | number | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回resource对象对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2  .Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64(resource, 120, (error: BusinessError, value: string) => {
    if (error != null) {
      console.error(`callback getMediaContentBase64 failed, error code: ${error.code}, message: ${error.message}.`);
    } else {
      let media = value;
    }
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`callback getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
}

```

## getMediaContentBase64

```TypeScript
getMediaContentBase64(resource: Resource): Promise<string>
```

获取指定resource对象对应的图片资源Base64编码，使用Promise异步回调。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContentBase64(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回resource对象对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64(resource).then((value: string) => {
    let media = value;
  }).catch((error: BusinessError) => {
    console.error("getMediaContentBase64 promise error is " + error);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`promise getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
}

```

## getMediaContentBase64

```TypeScript
getMediaContentBase64(resource: Resource, density: number): Promise<string>
```

获取指定resource对象对应的指定屏幕密度图片资源Base64编码，使用Promise异步回调。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContentBase64(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| density | number | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回resource对象对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2  .Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64(resource, 120).then((value: string) => {
    let media = value;
  }).catch((error: BusinessError) => {
    console.error(`promise getMediaContentBase64 failed, error code: ${error.code}, message: ${error.message}.`);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`promise getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
}

```

## getMediaContentBase64

```TypeScript
getMediaContentBase64(resId: long, callback: _AsyncCallback<string>): void
```

获取指定资源ID对应的图片资源Base64编码，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回资源ID值对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContentBase64($r('app.media.test').id, (error: BusinessError, value: string) => {
                if (error != null) {
                    console.error("error is " + error);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContentBase64

```TypeScript
getMediaContentBase64(resId: long, density: int, callback: _AsyncCallback<string>): void
```

获取指定资源ID对应的指定屏幕密度图片资源Base64编码，使用callback异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| density | int | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回资源ID值对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContentBase64($r('app.media.test').id, 120, (error: BusinessError, value: string) => {
                if (error != null) {
                    console.error(`callback getMediaContentBase64 failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContentBase64

```TypeScript
getMediaContentBase64(resId: long): Promise<string>
```

获取指定资源ID对应的图片资源Base64编码，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源ID值对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContentBase64($r('app.media.test').id).then((value: string) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error("getMediaContentBase64 promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContentBase64

```TypeScript
getMediaContentBase64(resId: long, density: int): Promise<string>
```

获取指定资源ID对应的指定屏幕密度图片资源Base64编码，使用Promise异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| density | int | Yes | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源ID值对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContentBase64($r('app.media.test').id, 120).then((value: string) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error(`promise getMediaContentBase64 failed, error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContentBase64Sync

```TypeScript
getMediaContentBase64Sync(resId: long, density?: int): string
```

获取指定资源ID对应的默认或指定的屏幕密度图片资源Base64编码，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| density | int | No | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源ID对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContentBase64Sync($r('app.media.test').id); // Default screen density
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaContentBase64Sync failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContentBase64Sync($r('app.media.test').id, 120); // Specified screen density
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaContentBase64Sync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContentBase64Sync

```TypeScript
getMediaContentBase64Sync(resource: Resource, density?: number): string
```

获取指定resource对象对应的默认或指定的屏幕密度图片资源Base64编码，使用同步方式返回。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContentBase64Sync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| density | number | No | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | resource对象对应的图片资源Base64编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2  .Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64Sync(resource); // Default screen density
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getMediaContentBase64Sync failed, error code: ${code}, message: ${message}.`);
}

try {
  this.context.resourceManager.getMediaContentBase64Sync(resource, 120); // Specified screen density
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getMediaContentBase64Sync failed, error code: ${code}, message: ${message}.`);
}

```

## getMediaContentSync

```TypeScript
getMediaContentSync(resId: long, density?: int): Uint8Array
```

获取指定资源ID对应的默认或指定的屏幕密度媒体文件内容，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| density | int | No | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 资源ID对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types;  2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContentSync($r('app.media.test').id); // Default screen density
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaContentSync failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // Replace 'app.media.test' with the actual resource.
            this.context.resourceManager.getMediaContentSync($r('app.media.test').id, 120); // Specified screen density
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaContentSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getMediaContentSync

```TypeScript
getMediaContentSync(resource: Resource, density?: number): Uint8Array
```

获取指定resource对象对应的默认或指定的屏幕密度媒体文件内容，使用同步方式返回。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getMediaContentSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| density | number | No | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | resource对象对应的媒体文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2  .Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentSync(resource); // Default screen density
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getMediaContentSync failed, error code: ${code}, message: ${message}.`);
}

try {
  this.context.resourceManager.getMediaContentSync(resource, 120); // Specified screen density
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getMediaContentSync failed, error code: ${code}, message: ${message}.`);
}

```

## getNumber

```TypeScript
getNumber(resId: number): number
```

获取指定资源ID对应的integer数值或者float数值，使用同步方式返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 资源ID值对应的数值。   integer对应的是原数值，float不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值，具体参考示例代码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/integer.json
{
  "integer": [
    {
      "name": "integer_test",
      "value": 100
    }
  ]
}


// Resource file path: src/main/resources/base/element/float.json
{
  "float": [
    {
      "name": "float_test",
      "value": "30.6vp"
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { display } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // An integer refers to the original value.
            // Replace 'app.integer.integer_test' with the actual resource.
            let intValue = this.context.resourceManager.getNumber($r('app.integer.integer_test').id);
            console.info(`getNumber, int value: ${intValue}`);
            // Print the output result: getNumber, int value: 100
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getNumber failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // A float number without a unit indicates the original value, and a float number with the unit of vp or fp indicates the px value (float number with the unit of vp or fp = original value x densityPixels).
            // Replace 'app.float.float_test' with the actual resource.
            let floatValue = this.context.resourceManager.getNumber($r('app.float.float_test').id);
            console.info(`getNumber, densityPixels: ${display.getDefaultDisplaySync().densityPixels}, float value: ${floatValue}`);
            // Print the output result: getNumber, densityPixels: 3.25, float value: 99.45000457763672
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getNumber failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getNumber

```TypeScript
getNumber(resource: Resource): number
```

获取指定resource对象对应的integer数值或者float数值，使用同步方式返回。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getNumber(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | resource对象对应的数值。  integer对应的是原数值，float不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/integer.json
{
  "integer": [
    {
      "name": "integer_test",
      "value": 100
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.integer.integer_test').id
};

try {
  let intValue = this.context.resourceManager.getNumber(resource);
  console.info(`getNumber, int value: ${intValue}`);
  // Print the output result: getNumber, int value: 100
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getNumber failed, error code: ${code}, message: ${message}.`);
}

```

## getNumberByName

```TypeScript
getNumberByName(resName: string): number
```

获取指定资源名称对应的integer数值或者float数值，使用同步方式返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 资源名称对应的数值。  integer对应的是原数值，float不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/integer.json
{
  "integer": [
    {
      "name": "integer_test",
      "value": 100
    }
  ]
}


// Resource file path: src/main/resources/base/element/float.json
{
  "float": [
    {
      "name": "float_test",
      "value": "30.6vp"
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { display } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // An integer refers to the original value.
            // Replace "integer_test" with the actual resource.
            let intValue = this.context.resourceManager.getNumberByName("integer_test");
            console.info(`getNumberByName, int value: ${intValue}`);
            // Print the output result: getNumberByName, int value: 100
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getNumberByName failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // A float number without a unit indicates the original value, and a float number with the unit of vp or fp indicates the px value (float number with the unit of vp or fp = original value x densityPixels).
            // Replace "float_test" with the actual resource.
            let floatValue = this.context.resourceManager.getNumberByName("float_test");
            console.info(`getNumberByName, densityPixels: ${display.getDefaultDisplaySync().densityPixels}, float value: ${floatValue}`);
            // Print the output result: getNumberByName, densityPixels: 3.25, float value: 99.45000457763672
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getNumberByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getOverrideConfiguration

```TypeScript
getOverrideConfiguration(): Configuration
```

获取差异化资源的配置，使用同步方式返回。普通资源管理对象与通过它的 [getOverrideResourceManager]resourceManager.ResourceManager.getOverrideResourceManager接口获取的差异化资源管理对象调用该方法 可获得相同的返回值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| Configuration | 差异化资源的配置。 |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let resMgr = this.context.resourceManager;
            let overrideConfig = resMgr.getOverrideConfiguration();
            overrideConfig.colorMode = resourceManager.ColorMode.DARK;
            let overrideResMgr = resMgr.getOverrideResourceManager(overrideConfig);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getOverrideResourceManager failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getOverrideResourceManager

```TypeScript
getOverrideResourceManager(configuration?: Configuration): ResourceManager
```

获取可以加载差异化资源的资源管理对象，使用同步方式返回。 普通的资源管理对象获取的资源的配置（语言、深浅色、分辨率、横竖屏等）是由系统决定的，而通过该接口返回的对象，应用可以获取符合指定配置的资源，即差异化资源，比如在浅色模式时可以获取深色资源。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configuration | Configuration | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ResourceManager | 可以加载差异化资源的资源管理对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let resMgr = this.context.resourceManager;
            let overrideConfig = resMgr.getOverrideConfiguration();
            overrideConfig.colorMode = resourceManager.ColorMode.DARK;
            let overrideResMgr = resMgr.getOverrideResourceManager(overrideConfig);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getOverrideResourceManager failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getPluralString

```TypeScript
getPluralString(resId: number, num: number, callback: AsyncCallback<string>): void
```

获取指定资源ID，指定资源数量的单复数字符串，使用callback异步回调。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getPluralStringValue(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数，返回资源ID值对应的指定数量的单复数字符串。 |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getPluralString($r("app.plural.test").id, 1, (error: Error, value: string) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let str = value;
        }
    });
});

```

## getPluralString

```TypeScript
getPluralString(resId: number, num: number): Promise<string>
```

获取指定资源ID，指定资源数量的单复数字符串，使用Promise异步回调。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getPluralStringValue(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源ID值对应的指定数量的单复数字符串。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getPluralString($r("app.plural.test").id, 1).then((value: string) => {
        let str = value;
    }).catch((error: BusinessError) => {
        console.error("getPluralString promise error is " + error);
    });
});

```

## getPluralStringByName

```TypeScript
getPluralStringByName(resName: string, num: number, callback: _AsyncCallback<string>): void
```

获取指定资源名称，指定资源数量的单复数字符串，使用callback异步回调。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 9

**Deprecated since:** 18

**Substitute:** resourceManager.ResourceManager.getIntPluralStringByNameSync(resName:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回资源名称对应的指定数量的单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}


import { BusinessError } from '@kit.BasicServicesKit';

// If num is 1, the single/plural type is one in the English environment.
// The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
this.context.resourceManager.getPluralStringByName("test", 1, (error: BusinessError, value: string) => {
  if (error != null) {
    console.error(`callback getPluralStringByName failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getPluralStringByName, result: ${value}`);
    // Print the output result: getPluralStringByName, result: 1 apple
  }
});

```

## getPluralStringByName

```TypeScript
getPluralStringByName(resName: string, num: number): Promise<string>
```

获取指定资源名称，指定资源数量的单复数字符串，使用Promise异步回调。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 9

**Deprecated since:** 18

**Substitute:** resourceManager.ResourceManager.getIntPluralStringByNameSync(resName:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | 根据传入的数量值，获取资源名称对应的字符串资源。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}


import { BusinessError } from '@kit.BasicServicesKit';

// If num is 1, the single/plural type is one in the English environment.
// The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
this.context.resourceManager.getPluralStringByName("test", 1)
  .then((value: string) => {
    console.info(`getPluralStringByName, result: ${value}`);
    // Print the output result: getPluralStringByName, result: 1 apple
  })
  .catch((error: BusinessError) => {
    console.error(`promise getPluralStringByName failed, error code: ${error.code}, message: ${error.message}.`);
  });

```

## getPluralStringByNameSync

```TypeScript
getPluralStringByNameSync(resName: string, num: number): string
```

获取指定资源名称，指定资源数量的单复数字符串，使用同步方式返回。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 10

**Deprecated since:** 18

**Substitute:** resourceManager.ResourceManager.getIntPluralStringByNameSync(resName:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 根据指定数量获取指定资源名称表示的单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}


import { BusinessError } from '@kit.BasicServicesKit';

try {
  // If num is 1, the single/plural type is one in the English environment.
  // The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
  let pluralValue = this.context.resourceManager.getPluralStringByNameSync("test", 1);
  console.info(`getPluralStringByNameSync, result: ${pluralValue}`);
  // Print the output result: getPluralStringByNameSync, result: 1 apple
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getPluralStringByNameSync failed, error code: ${code}, message: ${message}.`);
}

```

## getPluralStringValue

```TypeScript
getPluralStringValue(resource: Resource, num: number, callback: _AsyncCallback<string>): void
```

获取指定资源信息，指定资源数量的单复数字符串，使用callback异步回调。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 9

**Deprecated since:** 18

**Substitute:** resourceManager.ResourceManager.getIntPluralStringValueSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回resource对象对应的指定数量的单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.test').id
};
// If num is 1, the single/plural type is one in the English environment.
// The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
this.context.resourceManager.getPluralStringValue(resource, 1,
  (error: BusinessError, value: string) => {
    if (error != null) {
      console.error(`callback getPluralStringValue failed, error code: ${error.code}, message: ${error.message}.`);
    } else {
      console.info(`getPluralStringValue, result: ${value}`);
      // Print the output result: getPluralStringValue, result: 1 apple
    }
  });

```

## getPluralStringValue

```TypeScript
getPluralStringValue(resource: Resource, num: number): Promise<string>
```

获取指定资源信息，指定资源数量的单复数字符串，使用Promise异步回调。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 9

**Deprecated since:** 18

**Substitute:** resourceManager.ResourceManager.getIntPluralStringValueSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回resource对象对应的指定数量的单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.test').id
};
// If num is 1, the single/plural type is one in the English environment.
// The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
this.context.resourceManager.getPluralStringValue(resource, 1)
  .then((value: string) => {
    console.info(`getPluralStringValue, result: ${value}`);
    // Print the output result: getPluralStringValue, result: 1 apple
  })
  .catch((error: BusinessError) => {
    console.error(`promise getPluralStringValue failed, error code: ${error.code}, message: ${error.message}.`);
  });

```

## getPluralStringValue

```TypeScript
getPluralStringValue(resId: number, num: number, callback: _AsyncCallback<string>): void
```

获取指定资源ID，指定资源数量的单复数字符串，使用callback异步回调。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 9

**Deprecated since:** 18

**Substitute:** resourceManager.ResourceManager.getIntPluralStringValueSync(resId:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回资源ID值对应的指定数量的单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}


import { BusinessError } from '@kit.BasicServicesKit';

// If num is 1, the single/plural type is one in the English environment.
// The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
this.context.resourceManager.getPluralStringValue($r("app.plural.test").id, 1,
  (error: BusinessError, value: string) => {
    if (error != null) {
      console.error(`callback getPluralStringValue failed, error code: ${error.code}, message: ${error.message}.`);
    } else {
      console.info(`getPluralStringValue, result: ${value}`);
      // Print the output result: getPluralStringValue, result: 1 apple
    }
  });

```

## getPluralStringValue

```TypeScript
getPluralStringValue(resId: number, num: number): Promise<string>
```

获取指定资源ID，指定资源数量的单复数字符串，使用Promise异步回调。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 9

**Deprecated since:** 18

**Substitute:** resourceManager.ResourceManager.getIntPluralStringValueSync(resId:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源ID值对应的指定数量的单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}


import { BusinessError } from '@kit.BasicServicesKit';

// If num is 1, the single/plural type is one in the English environment.
// The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
this.context.resourceManager.getPluralStringValue($r("app.plural.test").id, 1)
  .then((value: string) => {
    console.info(`getPluralStringValue, result: ${value}`);
    // Print the output result: getPluralStringValue, result: 1 apple
  })
  .catch((error: BusinessError) => {
    console.error(`promise getPluralStringValue failed, error code: ${error.code}, message: ${error.message}.`);
  });

```

## getPluralStringValueSync

```TypeScript
getPluralStringValueSync(resId: number, num: number): string
```

获取指定资源ID，指定资源数量的单复数字符串，使用同步方式返回。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 10

**Deprecated since:** 18

**Substitute:** resourceManager.ResourceManager.getIntPluralStringValueSync(resId:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 根据指定数量获取指定ID字符串表示的单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}


import { BusinessError } from '@kit.BasicServicesKit';

try {
  // If num is 1, the single/plural type is one in the English environment.
  // The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
  let pluralValue = this.context.resourceManager.getPluralStringValueSync($r('app.plural.test').id, 1);
  console.info(`getPluralStringValueSync, result: ${pluralValue}`);
  // Print the output result: getPluralStringValueSync, result: 1 apple
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getPluralStringValueSync failed, error code: ${code}, message: ${message}.`);
}

```

## getPluralStringValueSync

```TypeScript
getPluralStringValueSync(resource: Resource, num: number): string
```

获取指定资源信息，指定资源数量的单复数字符串，使用同步方式返回。 > **说明** > > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考 > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**Since:** 10

**Deprecated since:** 18

**Substitute:** resourceManager.ResourceManager.getIntPluralStringValueSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| num | number | Yes | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见  [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 根据指定数量获取指定resource对象表示的单复数字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.test').id
};
try {
  // If num is 1, the single/plural type is one in the English environment.
  // The quantity field in the resource file indicates the single/plural type. Therefore, the string whose quantity is one is obtained.
  let pluralValue = this.context.resourceManager.getPluralStringValueSync(resource, 1);
  console.info(`getPluralStringValueSync, result: ${pluralValue}`);
  // Print the output result: getPluralStringValueSync, result: 1 apple
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getPluralStringValueSync failed, error code: ${code}, message: ${message}.`);
}

```

## getRawFd

```TypeScript
getRawFd(path: string, callback: _AsyncCallback<RawFileDescriptor>): void
```

获取resources/rawfile目录下对应rawfile文件所在HAP的文件描述符（fd），使用callback异步回调。 > **说明** > > 文件描述符（fd）使用完毕后需调用[closeRawFdSync]resourceManager.ResourceManager.closeRawFdSync或 > [closeRawFd]resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)关闭 > fd，避免资源泄露。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |
| callback | _AsyncCallback&lt;RawFileDescriptor> | Yes | 回调函数，返回的rawfile文件所在HAP的文件描述符（fd）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test.txt" with the actual resource.
            this.context.resourceManager.getRawFd("test.txt", (error: BusinessError, value: resourceManager.RawFileDescriptor) => {
                if (error != null) {
                    console.error(`callback getRawFd failed error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let fd = value.fd;
                    let offset = value.offset;
                    let length = value.length;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getRawFd failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getRawFd

```TypeScript
getRawFd(path: string): Promise<RawFileDescriptor>
```

获取resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用Promise异步回调。 > **说明** > > 文件描述符（fd）使用完毕后需调用[closeRawFdSync]resourceManager.ResourceManager.closeRawFdSync或 > [closeRawFd]resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)关闭 > fd，避免资源泄露。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RawFileDescriptor> | Promise对象，返回rawfile文件所在HAP的文件描述符（fd）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test.txt" with the actual resource.
            this.context.resourceManager.getRawFd("test.txt").then((value: resourceManager.RawFileDescriptor) => {
                let fd = value.fd;
                let offset = value.offset;
                let length = value.length;
            }).catch((error: BusinessError) => {
                console.error(`promise getRawFd error error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getRawFd failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getRawFdSync

```TypeScript
getRawFdSync(path: string): RawFileDescriptor
```

获取resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用同步方式返回。 > **说明** > > 文件描述符（fd）使用完毕后需调用[closeRawFdSync]resourceManager.ResourceManager.closeRawFdSync或 > [closeRawFd]resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)关闭 > fd，避免资源泄露。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| RawFileDescriptor | rawfile文件所在HAP的文件描述符（fd）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test.txt" with the actual resource.
            this.context.resourceManager.getRawFdSync("test.txt");
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getRawFdSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getRawFile

```TypeScript
getRawFile(path: string, callback: AsyncCallback<Uint8Array>): void
```

获取resources/rawfile目录下对应的rawfile文件内容，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getRawFileContent(path:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |
| callback | AsyncCallback&lt;Uint8Array> | Yes | 回调函数，返回rawfile文件内容。 |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getRawFile("test.txt", (error: Error, value: Uint8Array) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let rawFile = value;
        }
    });
});

```

## getRawFile

```TypeScript
getRawFile(path: string): Promise<Uint8Array>
```

获取resources/rawfile目录下对应的rawfile文件内容，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getRawFileContent(path:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回rawfile文件内容。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getRawFile("test.txt").then((value: Uint8Array) => {
        let rawFile = value;
    }).catch((error: BusinessError) => {
        console.error("getRawFile promise error is " + error);
    });
});

```

## getRawFileContent

```TypeScript
getRawFileContent(path: string, callback: _AsyncCallback<Uint8Array>): void
```

获取resources/rawfile目录下对应的rawfile文件内容，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |
| callback | _AsyncCallback&lt;Uint8Array> | Yes | 回调函数，返回获取的rawfile文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test.txt" with the actual resource.
            this.context.resourceManager.getRawFileContent("test.txt", (error: BusinessError, value: Uint8Array) => {
                if (error != null) {
                    console.error("error is " + error);
                } else {
                    let rawFile = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getRawFileContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getRawFileContent

```TypeScript
getRawFileContent(path: string): Promise<Uint8Array>
```

获取resources/rawfile目录下对应的rawfile文件内容，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回获取的rawfile文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test.txt" with the actual resource.
            this.context.resourceManager.getRawFileContent("test.txt").then((value: Uint8Array) => {
                let rawFile = value;
            }).catch((error: BusinessError) => {
                console.error("getRawFileContent promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getRawFileContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getRawFileContentSync

```TypeScript
getRawFileContentSync(path: string): Uint8Array
```

获取resources/rawfile目录下对应的rawfile文件内容，使用同步形式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 返回获取的rawfile文件内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test.txt" with the actual resource.
            this.context.resourceManager.getRawFileContentSync("test.txt");
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getRawFileContentSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getRawFileDescriptor

```TypeScript
getRawFileDescriptor(path: string, callback: AsyncCallback<RawFileDescriptor>): void
```

获取resources/rawfile目录下对应rawfile文件的文件描述符（fd），使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getRawFd(path:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |
| callback | AsyncCallback&lt;RawFileDescriptor> | Yes | 回调函数，返回rawfile文件的文件描述符（fd）。 |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getRawFileDescriptor("test.txt", (error: Error, value: resourceManager.RawFileDescriptor) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let fd = value.fd;
            let offset = value.offset;
            let length = value.length;
        }
    });
});

```

## getRawFileDescriptor

```TypeScript
getRawFileDescriptor(path: string): Promise<RawFileDescriptor>
```

获取resources/rawfile目录下对应rawfile文件的文件描述符（fd），使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getRawFd(path:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RawFileDescriptor> | Promise对象，返回rawfile文件的文件描述符（fd）。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getRawFileDescriptor("test.txt").then((value: resourceManager.RawFileDescriptor) => {
        let fd = value.fd;
        let offset = value.offset;
        let length = value.length;
    }).catch((error: BusinessError) => {
        console.error("getRawFileDescriptor promise error is " + error);
    });
});

```

## getRawFileList

```TypeScript
getRawFileList(path: string, callback: _AsyncCallback<Array<string>>): void
```

获取resources/rawfile目录下文件夹及文件列表，使用callback异步回调。 > **说明** > > 若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件夹路径。 |
| callback | _AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数，返回rawfile文件目录下的文件夹及文件列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Passing "" means to obtain the list of files in the root directory (that is, /rawfile). Assume that the test.txt file exists in the root directory.
        // Replace "" with the actual file path in the rawfile directory.
        this.context.resourceManager.getRawFileList("", (error: BusinessError, value: Array<string>) => {
            if (error != null) {
                console.error(`callback getRawFileList failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                console.info(`getRawFileList, result: ${JSON.stringify(value)}`);
                // Print the output result: getRawFileList, result: ["test.txt"].
            }
        });
    }
}

```

## getRawFileList

```TypeScript
getRawFileList(path: string): Promise<Array<string>>
```

获取resources/rawfile目录下文件夹及文件列表，使用Promise异步回调。 > **说明** > > 若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件夹路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回rawfile文件目录下的文件夹及文件列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Passing "" means to obtain the list of files in the root directory (that is, /rawfile). Assume that the test.txt file exists in the root directory.
        // Replace "" with the actual file path in the rawfile directory.
        this.context.resourceManager.getRawFileList("")
            .then((value: Array<string>) => {
                console.info(`getRawFileList, result: ${JSON.stringify(value)}`);
                // Print the output result: getRawFileList, result: ["test.txt"].
            })
            .catch((error: BusinessError) => {
                console.error(`promise getRawFileList failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}

```

## getRawFileListSync

```TypeScript
getRawFileListSync(path: string): Array<string>
```

获取resources/rawfile目录下文件夹及文件列表，使用同步形式返回。 > **说明** > > 若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile文件夹路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | rawfile文件目录下的文件夹及文件列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Passing "" means to obtain the list of files in the root directory (that is, /rawfile). Assume that the test.txt file exists in the root directory.
            // Replace "" with the actual file path in the rawfile directory.
            let fileList: Array<string> = this.context.resourceManager.getRawFileListSync("");
            console.info(`getRawFileListSync, result: ${JSON.stringify(fileList)}`);
            // Print the output result: getRawFileListSync, result: ["test.txt"]
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getRawFileListSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getResourceName

```TypeScript
getResourceName(resId: long): string
```

获取指定资源ID对应的资源名称。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源ID值对应的资源名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 | Invalid resource ID. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.string.test' with the actual resource.
            let resName: string = this.context.resourceManager.getResourceName($r('app.string.test').id);
            console.info(`getResourceName, result: ${resName}`);
            // Print the output result: getResourceName, result: test
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getResourceName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getString

```TypeScript
getString(resId: number, callback: AsyncCallback<string>): void
```

获取指定资源ID对应的字符串，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getStringValue(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数，返回资源ID值对应的字符串。 |

**Example**

```TypeScript
resourceManager.getResourceManager((error, mgr) => {
    mgr.getString($r('app.string.test').id, (error: Error, value: string) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let str = value;
        }
    });
});

```

## getString

```TypeScript
getString(resId: number): Promise<string>
```

获取指定资源ID对应的字符串，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getStringValue(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源ID值对应的字符串。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getString($r('app.string.test').id).then((value: string) => {
        let str = value;
    }).catch((error: BusinessError) => {
        console.error("getstring promise error is " + error);
    });
});

```

## getStringArray

```TypeScript
getStringArray(resId: number, callback: AsyncCallback<Array<string>>): void
```

获取指定资源ID对应的字符串数组，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getStringArrayValue(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数，返回资源ID值对应的字符串数组。 |

**Example**

```TypeScript
resourceManager.getResourceManager((error, mgr) => {
    mgr.getStringArray($r('app.strarray.test').id, (error: Error, value: Array<string>) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let strArray = value;
        }
    });
});

```

## getStringArray

```TypeScript
getStringArray(resId: number): Promise<Array<string>>
```

获取指定资源ID对应的字符串数组，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** resourceManager.ResourceManager.getStringArrayValue(resId:

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回资源ID值对应的字符串数组。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
      mgr.getStringArray($r('app.strarray.test').id).then((value: Array<string>) => {
        let strArray = value;
    }).catch((error: BusinessError) => {
        console.error("getStringArray promise error is " + error);
    });
});

```

## getStringArrayByName

```TypeScript
getStringArrayByName(resName: string, callback: _AsyncCallback<Array<string>>): void
```

获取指定资源名称对应的字符串数组，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| callback | _AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数，返回资源名称对应的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace "test" with the actual resource.
        this.context.resourceManager.getStringArrayByName("test", (error: BusinessError, value: Array<string>) => {
            if (error != null) {
                console.error(`callback getStringArrayByName failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                let strArray = value;
                console.info(`getStringArrayByName, result: ${value[0]}`);
                // Print the output result: getStringArrayByName, result: I'm one of the array's values.
            }
        });
    }
}

```

## getStringArrayByName

```TypeScript
getStringArrayByName(resName: string): Promise<Array<string>>
```

获取指定资源名称对应的字符串数组，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回资源名称对应的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace "test" with the actual resource.
        this.context.resourceManager.getStringArrayByName("test")
            .then((value: Array<string>) => {
                console.info(`getStringArrayByName, result: ${value[0]}`);
                // Print the output result: getStringArrayByName, result: I'm one of the array's values.
            })
            .catch((error: BusinessError) => {
                console.error(`promise getStringArrayByName failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}

```

## getStringArrayByNameSync

```TypeScript
getStringArrayByNameSync(resName: string): Array<string>
```

获取指定资源名称对应的字符串数组，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 对应资源名称的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            let strArray: Array<string> = this.context.resourceManager.getStringArrayByNameSync("test");
            console.info(`getStringArrayByNameSync, result: ${strArray[0]}`);
            // Print the output result: getStringArrayByNameSync, result: I'm one of the array's values.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringArrayByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getStringArrayValue

```TypeScript
getStringArrayValue(resource: Resource, callback: _AsyncCallback<Array<string>>): void
```

获取指定resource对象对应的字符串数组，使用callback异步回调。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getStringArrayValue(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| callback | _AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数，返回resource对象对应的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.strarray.test').id
};
this.context.resourceManager.getStringArrayValue(resource, (error: BusinessError, value: Array<string>) => {
  if (error != null) {
    console.error(`callback getStringArrayValue failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getStringArrayValue, result: ${value[0]}`);
    // Print the output result: getStringArrayValue, result: I'm one of the array's values.
  }
});

```

## getStringArrayValue

```TypeScript
getStringArrayValue(resource: Resource): Promise<Array<string>>
```

获取指定resource对象对应的字符串数组，使用Promise异步回调。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getStringArrayValue(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回resource对象对应的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.strarray.test').id
};
this.context.resourceManager.getStringArrayValue(resource)
  .then((value: Array<string>) => {
    console.info(`getStringArrayValue, result: ${value[0]}`);
    // Print the output result: getStringArrayValue, result: I'm one of the array's values.
  })
  .catch((error: BusinessError) => {
    console.error(`promise getStringArrayValue failed, error code: ${error.code}, message: ${error.message}.`);
  });

```

## getStringArrayValue

```TypeScript
getStringArrayValue(resId: long, callback: _AsyncCallback<Array<string>>): void
```

获取指定资源ID对应的字符串数组，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| callback | _AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数，返回资源ID值对应的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace 'app.strarray.test' with the actual resource.
        this.context.resourceManager.getStringArrayValue($r('app.strarray.test').id,
            (error: BusinessError, value: Array<string>) => {
                if (error != null) {
                    console.error(`callback getStringArrayValue failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    console.info(`getStringArrayValue, result: ${value[0]}`);
                    // Print the output result: getStringArrayValue, result: I'm one of the array's values.
                }
            });
    }
}

```

## getStringArrayValue

```TypeScript
getStringArrayValue(resId: long): Promise<Array<string>>
```

获取指定资源ID对应的字符串数组，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回资源ID值对应的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace 'app.strarray.test' with the actual resource.
        this.context.resourceManager.getStringArrayValue($r('app.strarray.test').id)
            .then((value: Array<string>) => {
                console.info(`getStringArrayValue, result: ${value[0]}`);
                // Print the output result: getStringArrayValue, result: I'm one of the array's values.
            })
            .catch((error: BusinessError) => {
                console.error(`promise getStringArrayValue failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}

```

## getStringArrayValueSync

```TypeScript
getStringArrayValueSync(resId: long): Array<string>
```

获取指定资源ID对应的字符串数组，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 资源ID值对应的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.strarray.test' with the actual resource.
            let strArray: Array<string> = this.context.resourceManager.getStringArrayValueSync($r('app.strarray.test').id);
            console.info(`getStringArrayValueSync, result: ${strArray[0]}`);
            // Print the output result: getStringArrayValueSync, result: I'm one of the array's values.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringArrayValueSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getStringArrayValueSync

```TypeScript
getStringArrayValueSync(resource: Resource): Array<string>
```

获取指定resource对象对应的字符串数组，使用同步方式返回。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getStringArrayValueSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | resource对象对应的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.strarray.test').id
};
try {
  let strArray: Array<string> = this.context.resourceManager.getStringArrayValueSync(resource);
  console.info(`getStringArrayValueSync, result: ${strArray[0]}`);
  // Print the output result: getStringArrayValueSync, result: I'm one of the array's values.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getStringArrayValueSync failed, error code: ${code}, message: ${message}.`);
}

```

## getStringByName

```TypeScript
getStringByName(resName: string, callback: _AsyncCallback<string>): void
```

获取指定资源名称对应的字符串，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| callback | _AsyncCallback&lt;string> | Yes | 返回获取的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace "test" with the actual resource.
        this.context.resourceManager.getStringByName("test", (error: BusinessError, value: string) => {
            if (error != null) {
                console.error(`callback getStringByName failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                console.info(`getStringByName, result: ${value}`);
                // Print the output result: getStringByName, result: I'm a test string resource.
            }
        });
    }
}

```

## getStringByName

```TypeScript
getStringByName(resName: string): Promise<string>
```

获取指定资源名称对应的字符串，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源名称对应的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace "test" with the actual resource.
        this.context.resourceManager.getStringByName("test").then((value: string) => {
            console.info(`getStringByName, result: ${value}`);
            // Print the output result: getStringByName, result: I'm a test string resource.
        }).catch((error: BusinessError) => {
            console.error(`promise getStringByName failed, error code: ${error.code}, message: ${error.message}.`);
        });
    }
}

```

## getStringByNameSync

```TypeScript
getStringByNameSync(resName: string): string
```

获取指定资源名称对应的字符串，使用同步方式返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源名称对应的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            let testStr = this.context.resourceManager.getStringByNameSync("test");
            console.info(`getStringByNameSync, result: ${testStr}`);
            // Print the output result: getStringByNameSync, result: I'm a test string resource.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getStringByNameSync

```TypeScript
getStringByNameSync(resName: string, ...args: Array<string | number>): string
```

获取指定资源名称对应的字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |
| args | Array&lt;string \| number> | Yes | 格式化字符串资源参数。  支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。  说明：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。  举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |
| 9001008 | Failed to format the resource obtained based on the resource Name. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a %1$s, format int: %2$d, format float: %3$f."
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "test" with the actual resource.
            let testStr = this.context.resourceManager.getStringByNameSync("test", "format string", 10, 98.78);
            console.info(`getStringByNameSync, result: ${testStr}`);
            // Print the output result: getStringByNameSync, result: I'm a format string, format int: 10, format float: 98.78.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getStringByNameSync

```TypeScript
getStringByNameSync(resName: string, ...args: (string | double)[]): string
```

Obtains a string resource based on the specified resource name.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | Resource name. |
| args | (string \| double)[] | Yes | Parameters used to populate placeholders in the string. |

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained based on the specified resource name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |
| 9001008 | Failed to format the resource obtained based on the resource Name. |

## getStringSync

```TypeScript
getStringSync(resId: long): string
```

获取指定资源ID对应的字符串，使用同步方式返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源ID值对应的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.string.test' with the actual resource.
            let testStr = this.context.resourceManager.getStringSync($r('app.string.test').id);
            console.info(`getStringSync, result: ${testStr}`);
            // Print the output result: getStringSync, result: I'm a test string resource.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getStringSync

```TypeScript
getStringSync(resId: number, ...args: Array<string | number>): string
```

获取指定资源ID对应的字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | number | Yes | 资源ID值。 |
| args | Array&lt;string \| number> | Yes | 格式化字符串资源参数。  支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。  说明：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。  举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 资源ID值对应的格式化字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a %1$s, format int: %2$d, format float: %3$f."
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'app.string.test' with the actual resource.
            let testStr = this.context.resourceManager.getStringSync($r('app.string.test').id, "format string", 10, 98.78);
            console.info(`getStringSync, result: ${testStr}`);
            // Print the output result: getStringSync, result: I'm a format string, format int: 10, format float: 98.78.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getStringSync

```TypeScript
getStringSync(resId: long, ...args: (string | double)[]): string
```

Obtains a string resource based on the specified resource ID.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | Resource ID. |
| args | (string \| double)[] | Yes | Parameters used to populate placeholders in the string. |

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained based on the specified resource ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9001001 |  |
| 9001002 |  |
| 9001006 |  |
| 9001007 |  |

## getStringSync

```TypeScript
getStringSync(resource: Resource): string
```

获取指定resource对象对应的字符串，使用同步方式返回。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getStringSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | resource对象对应的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.string.test').id
};
try {
  let testStr = this.context.resourceManager.getStringSync(resource);
  console.info(`getStringSync, result: ${testStr}`);
  // Print the output result: getStringSync, result: I'm a test string resource.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getStringSync failed, error code: ${code}, message: ${message}.`);
}

```

## getStringSync

```TypeScript
getStringSync(resource: Resource, ...args: Array<string | number>): string
```

获取指定resource对象对应的字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

**Since:** 10

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getStringSync(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| args | Array&lt;string \| number> | Yes | 格式化字符串资源参数。  支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。  说明：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。  举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | resource对象对应的格式化字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a %1$s, format int: %2$d, format float: %3$f."
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.string.test').id
};
try {
  let testStr = this.context.resourceManager.getStringSync(resource, "format string", 10, 98.78);
  console.info(`getStringSync, result: ${testStr}`);
  // Print the output result: getStringSync, result: I'm a format string, format int: 10, format float: 98.78.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getStringSync failed, error code: ${code}, message: ${message}.`);
}

```

## getStringValue

```TypeScript
getStringValue(resource: Resource, callback: _AsyncCallback<string>): void
```

获取指定resource对象对应的字符串，使用callback异步回调。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getStringValue(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回resource对象对应的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}


import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.string.test').id
};
this.context.resourceManager.getStringValue(resource, (error: BusinessError, value: string) => {
  if (error != null) {
    console.error(`callback getStringValue failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getStringValue, result: ${value}`);
    // Print the output result: getStringValue, result: I'm a test string resource.
  }
});

```

## getStringValue

```TypeScript
getStringValue(resource: Resource): Promise<string>
```

获取指定resource对象对应的字符串，使用Promise异步回调。

**Since:** 9

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getStringValue(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回resource对象对应的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.string.test').id
};
this.context.resourceManager.getStringValue(resource, (error: BusinessError, value: string) => {
  if (error != null) {
    console.error(`callback getStringValue failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getStringValue, result: ${value}`);
    // Print the output result: getStringValue, result: I'm a test string resource.
  }
});

```

## getStringValue

```TypeScript
getStringValue(resId: long, callback: _AsyncCallback<string>): void
```

获取指定资源ID对应的字符串，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |
| callback | _AsyncCallback&lt;string> | Yes | 回调函数，返回获取的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

## getStringValue

```TypeScript
getStringValue(resId: long): Promise<string>
```

获取指定资源ID对应的字符串，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回资源ID值对应的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}


import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace 'app.string.test' with the actual resource.
        this.context.resourceManager.getStringValue($r('app.string.test').id).then((value: string) => {
            console.info(`getStringValue, result: ${value}`);
            // Print the output result: getStringValue, result: I'm a test string resource.
        }).catch((error: BusinessError) => {
            console.error(`promise getStringValue failed, error code: ${error.code}, message: ${error.message}.`);
        });
    }
}

```

## getSymbol

```TypeScript
getSymbol(resId: long) : long
```

获取指定资源ID对应的[Symbol字符](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol)Unicode码，使用同步方式返回。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resId | long | Yes | 资源ID值。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 资源ID值对应的Symbol字符Unicode码（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace 'sys.symbol.message' with the actual resource.
            let symbolValue = this.context.resourceManager.getSymbol($r('sys.symbol.message').id);
            console.info(`getSymbol, result: ${symbolValue}`);
            // Print the output result: getSymbol, result: 983183
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getSymbol failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## getSymbol

```TypeScript
getSymbol(resource: Resource) : number
```

获取指定resource对象对应的[Symbol字符](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol)Unicode码，使用同步方式返回。

**Since:** 11

**Deprecated since:** 20

**Substitute:** resourceManager.ResourceManager.getSymbol(resId:

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | Resource | Yes | 资源信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | resource对象对应的Symbol字符Unicode码（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('sys.symbol.message').id
};
try {
  let symbolValue = this.context.resourceManager.getSymbol(resource);
  console.info(`getSymbol, result: ${symbolValue}`);
  // Print the output result: getSymbol, result: 983183
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getSymbol failed, error code: ${code}, message: ${message}.`);
}

```

## getSymbolByName

```TypeScript
getSymbolByName(resName: string) : long
```

获取指定资源名称对应的[Symbol字符](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol)Unicode码，使用同步方式返回。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resName | string | Yes | 资源名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 资源名称对应的Symbol字符Unicode码（十进制）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Replace "message" with the actual resource.
            let symbolValue = this.context.resourceManager.getSymbolByName("message");
            console.info(`getSymbolByName, result: ${symbolValue}`);
            // Print the output result: getSymbolByName, result: 983183
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getSymbolByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## isRawDir

```TypeScript
isRawDir(path: string): boolean
```

判断指定路径是否为rawfile下的目录，使用同步方式返回。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | rawfile路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否为rawfile下的目录。  - true：表示是rawfile下的目录。  - false：表示非rawfile下的目录。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // Assume that a non-empty folder named sub exists in the root directory (that is, /rawfile). The value of isRawDir is true in the return result.
            // Replace "sub" with the actual directory.
            let isRawDir = this.context.resourceManager.isRawDir("sub");
            // Print the output result: sub isRawDir, result: true
            console.info(`sub isRawDir, result: ${isRawDir}`);

            // If the test.txt file exists in the root directory, the value of isRawDir is false.
            // Replace "test.txt" with the actual resource.
            isRawDir = this.context.resourceManager.isRawDir("test.txt");
            // Print the output result: test.txt isRawDir, result: false
            console.info(`test.txt isRawDir, result: ${isRawDir}`);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`isRawDir failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## release

```TypeScript
release()
```

释放创建的resourceManager, 此接口暂不支持。

**Since:** 7

**Deprecated since:** 12

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Example**

```TypeScript
try {
  this.context.resourceManager.release();
} catch (error) {
  console.error("release error is " + error);
}

```

## removeResource

```TypeScript
removeResource(path: string) : void
```

应用运行时移除指定的资源路径，还原被覆盖前的资源。 > **说明** > > rawfile和resfile目录不支持资源覆盖。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 资源路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001010 | Invalid overlay path. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // Replace "/library1-default-signed.hsp" with the actual file path.
        let path = this.context.bundleCodeDir + "/library1-default-signed.hsp";
        try {
            this.context.resourceManager.removeResource(path);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`removeResource failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

## updateOverrideConfiguration

```TypeScript
updateOverrideConfiguration(configuration: Configuration): void
```

更新差异化资源配置。普通资源管理对象与通过它的 [getOverrideResourceManager]resourceManager.ResourceManager.getOverrideResourceManager接口获取的差异化资源管理对象调用该方法 均可更新差异化资源管理对象的配置。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configuration | Configuration | Yes | 指定差异化资源的配置。通过  [getOverrideConfiguration]resourceManager.ResourceManager.getOverrideConfiguration获取差异化配置后，根据需求修改配置项，  再作为参数传入。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let resMgr = this.context.resourceManager;
            let overrideConfig = resMgr.getOverrideConfiguration();
            overrideConfig.colorMode = resourceManager.ColorMode.DARK;
            let overrideResMgr = resMgr.updateOverrideConfiguration(overrideConfig);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`updateOverrideConfiguration failed, error code: ${code}, message: ${message}.`);
        }
    }
}

```

