# create

## Modules to Import

```TypeScript
import { distributedDataObject } from '@ohos.data.distributedDataObject';
```

## create

```TypeScript
function create(context: Context, source: object): DataObject
```

Creates a distributed data object. The object properties support basic types (number, Boolean, and string) and complex types (array and nested basic types).

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model,see Context.For details about the application context of the stage model, see Context. |
| source | object | Yes | Properties of the distributed data object. |

**Return value:**

| Type | Description |
| --- | --- |
| DataObject | Distributed data object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |

**Example**

FA model:

```TypeScript
// Import the module.
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
// Obtain the context.
let context = featureAbility.getContext();
class SourceObject {
    name: string
    age: number
    isVis: boolean

    constructor(name: string, age: number, isVis: boolean) {
        this.name = name;
        this.age = age;
        this.isVis = isVis;
    }
}

let source: SourceObject = new SourceObject("jack", 18, false);
let g_object: distributedDataObject.DataObject = distributedDataObject.create(context, source);

```

Stage model:

```TypeScript
// Import the module.
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let g_object: distributedDataObject.DataObject|null = null;
class SourceObject {
    name: string
    age: number
    isVis: boolean

    constructor(name: string, age: number, isVis: boolean) {
        this.name = name;
        this.age = age;
        this.isVis = isVis;
    }
}

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
        let source: SourceObject = new SourceObject("jack", 18, false);
        g_object = distributedDataObject.create(this.context, source);
    }
}

```

