# createDistributedObject

## createDistributedObject

```TypeScript
function createDistributedObject(source: object): DistributedObject
```

Creates a distributed data object.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** distributedDataObject.create

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| source | object | 是 | Properties of the distributed data object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DistributedObject | Distributed data object created. |

**示例：**

```TypeScript
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
let g_object: distributedDataObject.DistributedObject = distributedDataObject.createDistributedObject(source);

```

