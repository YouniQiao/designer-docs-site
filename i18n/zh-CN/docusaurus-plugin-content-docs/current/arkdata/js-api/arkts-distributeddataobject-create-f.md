# create

## create

```TypeScript
function create(context: Context, source: object): DataObject
```

Creates a distributed data object. The object properties support basic types (number, Boolean, and string) and complex types (array and nested basic types).

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model,  see Context.For details about the application context of the stage model, see Context. |
| source | object | 是 | Properties of the distributed data object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataObject | Distributed data object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript

// 导入模块
import { featureAbility } from '@kit.AbilityKit';
// 获取context
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

let source: SourceObject = new SourceObject('jack', 18, false);
let g_object: distributedDataObject.DataObject = distributedDataObject.create(context, source);


// 导入模块
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
    let source: SourceObject = new SourceObject('jack', 18, false);
    g_object = distributedDataObject.create(this.context, source);
  }
}

```

