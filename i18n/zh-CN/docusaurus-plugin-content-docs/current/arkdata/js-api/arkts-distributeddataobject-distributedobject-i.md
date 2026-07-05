# DistributedObject

Provides APIs for managing a distributed data object. Before using any API of this class, use createDistributedObject() to create a DistributedObject object.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** null

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## 导入模块

```TypeScript
import { distributedDataObject } from '@kit.ArkData';
```

## off('change')

```TypeScript
off(type: 'change', callback?: (sessionId: string, fields: Array<string>) => void): void
```

Unsubscribes from data changes of this distributed data object.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** distributedDataObject.DataObject.off(type:

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value is 'change', which indicates data changes. |
| callback | (sessionId: string, fields: Array&lt;string>) => void | 否 | Callback to unregister. If this parameter is not specified, this API unsubscribes  from all callbacks for data changes of this distributed object.sessionId indicates the session ID of the  distributed data object. fields indicates the changed properties of the distributed data object. |

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
// 删除数据变更回调changeCallback
g_object.off('change', (sessionId: string, fields: Array<string>) => {
    console.info('change' + sessionId);
    if (fields != null && fields != undefined) {
        for (let index: number = 0; index < fields.length; index++) {
            console.info('changed !' + fields[index] + ' ' + g_object[fields[index]]);
        }
    }
});
// 删除所有的数据变更回调
g_object.off('change');

```

## off('status')

```TypeScript
off(
      type: 'status',
      callback?: (sessionId: string, networkId: string, status: 'online' | 'offline' ) => void
    ): void
```

Unsubscribes from the status change of this distributed data object.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** distributedDataObject.DataObject.off(

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'status' | 是 | Event type. The value is 'status', which indicates the status change (online or  offline) of the distributed object. |
| callback | (sessionId: string, networkId: string, status: 'online' \| 'offline' ) => void | 否 | Callback to unregister. If this parameter is not specified, this API unsubscribes  from all callbacks for status changes of this distributed object. sessionId indicates the session ID of the  distributed data object. networkId identifies the distributed data object. status indicates the object  status, which can be online or offline. |

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
// 删除上下线回调changeCallback
g_object.off('status', (sessionId: string, networkId: string, status: 'online' | 'offline') => {
    console.info('status changed ' + sessionId + ' ' + status + ' ' + networkId);
});
// 删除所有的上下线回调
g_object.off('status');

```

## on('change')

```TypeScript
on(type: 'change', callback: (sessionId: string, fields: Array<string>) => void): void
```

Subscribes to data changes of this distributed data object.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** distributedDataObject.DataObject.on(type:

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value is 'change', which indicates data changes. |
| callback | (sessionId: string, fields: Array&lt;string>) => void | 是 | Callback used to return the changes of the distributed data object. sessionId  indicates the session ID of the distributed data object. fields indicates the changed properties of the  distributed data object. |

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
g_object.on('change', (sessionId: string, fields: Array<string>) => {
    console.info('change' + sessionId);
    if (fields != null && fields != undefined) {
        for (let index: number = 0; index < fields.length; index++) {
            console.info('changed !' + fields[index] + ' ' + g_object[fields[index]]);
        }
    }
});

```

## on('status')

```TypeScript
on(
      type: 'status',
      callback: (sessionId: string, networkId: string, status: 'online' | 'offline' ) => void
    ): void
```

Subscribes to status changes of this distributed data object.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** distributedDataObject.DataObject.on(

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'status' | 是 | Event type. The value is 'status', which indicates the status change (online or  offline) of the distributed object. |
| callback | (sessionId: string, networkId: string, status: 'online' \| 'offline' ) => void | 是 | Callback used to return the status change. sessionId indicates the session ID of  the distributed data object. networkId identifies the device. status indicates the object status, which can  be online or offline. |

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

g_object.on('status', (sessionId: string, networkId: string, status: 'online' | 'offline') => {
    console.info('status changed ' + sessionId + ' ' + status + ' ' + networkId);
});

```

## setSessionId

```TypeScript
setSessionId(sessionId?: string): boolean
```

Sets a session ID. For the devices in the collaboration state in a trusted network, data of the distributed objects with the same session ID can be automatically synced across devices.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** distributedDataObject.DataObject.setSessionId(sessionId:

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 否 | ID of a distributed data object on a trusted network. To remove a distributed data  object from the network, set this parameter to "" or leave it empty. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the session ID is set successfully; returns false otherwise. |

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
// g_object加入分布式组网
g_object.setSessionId(distributedDataObject.genSessionId());
// 设置为""退出分布式组网
g_object.setSessionId('');

```

