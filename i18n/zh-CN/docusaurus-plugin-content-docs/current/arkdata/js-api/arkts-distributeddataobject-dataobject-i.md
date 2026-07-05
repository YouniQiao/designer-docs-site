# DataObject

Provides APIs for managing a distributed data object. Before using any API of this class, use create() to create a DataObject object.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## 导入模块

```TypeScript
import { distributedDataObject } from '@kit.ArkData';
```

## bindAssetStore

```TypeScript
bindAssetStore(assetKey: string, bindInfo: BindInfo, callback: AsyncCallback<void>): void
```

Binds joint assets. Currently, only the binding between an asset in a distributed data object and an asset in an RDB store is supported. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assetKey | string | 是 | Key of the joint asset in the distributed data object. |
| bindInfo | BindInfo | 是 | Information about the joint asset in the RDB store, including the RDB store name,  table name, primary key, column name, and asset name in the RDB store. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { commonType } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

class Note {
  title: string | undefined
  text: string | undefined
  attachment: commonType.Asset | undefined

  constructor(title: string | undefined, text: string | undefined, attachment: commonType.Asset | undefined) {
    this.title = title;
    this.text = text;
    this.attachment = attachment;
  }
}

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let attachment: commonType.Asset = {
      name: 'test_img.jpg',
      uri: 'file://com.example.myapplication/data/storage/el2/distributedfiles/dir/test_img.jpg',
      path: '/dir/test_img.jpg',
      createTime: '2024-01-02 10:00:00',
      modifyTime: '2024-01-02 10:00:00',
      size: '5',
      status: commonType.AssetStatus.ASSET_NORMAL
    }
    let note: Note = new Note('test', 'test', attachment);
    let g_object: distributedDataObject.DataObject = distributedDataObject.create(this.context, note);
    g_object.setSessionId('123456');

    const bindInfo: distributedDataObject.BindInfo = {
      storeName: 'notepad',
      tableName: 'note_t',
      primaryKey: {
        'uuid': '00000000-0000-0000-0000-000000000000'
      },
      field: 'attachment',
      assetName: attachment.name as string
    }

    g_object.bindAssetStore('attachment', bindInfo, (err: BusinessError) => {
      if (err) {
        console.error(`Failed to bind asset store. Code: ${err.code}, message: ${err.message}`);
      }
      console.info('bindAssetStore success.');
    });
  }
}

```

## bindAssetStore

```TypeScript
bindAssetStore(assetKey: string, bindInfo: BindInfo): Promise<void>
```

Binds joint assets. Currently, only the binding between an asset in a distributed data object and an asset in an RDB store is supported. This API uses a promise to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assetKey | string | 是 | Key of the joint asset in the distributed data object. |
| bindInfo | BindInfo | 是 | Information about the joint asset in the RDB store, including the RDB store name,  table name, primary key, column name, and asset name in the RDB store. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { commonType } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

class Note {
  title: string | undefined
  text: string | undefined
  attachment: commonType.Asset | undefined

  constructor(title: string | undefined, text: string | undefined, attachment: commonType.Asset | undefined) {
    this.title = title;
    this.text = text;
    this.attachment = attachment;
  }
}

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let attachment: commonType.Asset = {
      name: 'test_img.jpg',
      uri: 'file://com.example.myapplication/data/storage/el2/distributedfiles/dir/test_img.jpg',
      path: '/dir/test_img.jpg',
      createTime: '2024-01-02 10:00:00',
      modifyTime: '2024-01-02 10:00:00',
      size: '5',
      status: commonType.AssetStatus.ASSET_NORMAL
    }
    let note: Note = new Note('test', 'test', attachment);
    let g_object: distributedDataObject.DataObject = distributedDataObject.create(this.context, note);
    g_object.setSessionId('123456');

    const bindInfo: distributedDataObject.BindInfo = {
      storeName: 'notepad',
      tableName: 'note_t',
      primaryKey: {
        'uuid': '00000000-0000-0000-0000-000000000000'
      },
      field: 'attachment',
      assetName: attachment.name as string
    }

    g_object.bindAssetStore('attachment', bindInfo).then(() => {
      console.info('bindAssetStore success.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to bind asset store. Code: ${err.code}, message: ${err.message}`);
    });
  }
}

```

## off('change')

```TypeScript
off(type: 'change', callback?: (sessionId: string, fields: Array<string>) => void ): void
```

Unsubscribes from data changes of this distributed data object.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value is 'change', which indicates data changes. |
| callback | (sessionId: string, fields: Array&lt;string>) => void | 否 | Callback to unregister. If this parameter is not specified, this API unsubscribes  from all callbacks for data changes of this distributed object. sessionId indicates the session ID of  the distributed data object. fields indicates the changed properties of the distributed data object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
// 删除数据变更回调changeCallback
g_object.off('change', (sessionId: string, fields: Array<string>) => {
    console.info('change' + sessionId);
    if (g_object != null && fields != null && fields != undefined) {
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'status' | 是 | Event type. The value is 'status', which indicates the status change (online or  offline) of the distributed object. |
| callback | (sessionId: string, networkId: string, status: 'online' \| 'offline' ) => void | 否 | Callback to unregister. If this parameter is not specified, this API unsubscribes  from all callbacks for status changes of this distributed object. sessionId indicates the session ID  distributed data object. networkId identifies the distributed data object. status indicates the  indicates the object status, which can be online or offline. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
// 删除上下线回调changeCallback
g_object.off('status', (sessionId: string, networkId: string, status: 'online' | 'offline') => {
    console.info('status changed ' + sessionId + ' ' + status + ' ' + networkId);
});
// 删除所有的上下线回调
g_object.off('status');

```

## off('change')

```TypeScript
off(type: 'change', callback?: DataObserver): void
```

Unsubscribes from data changes of this distributed object.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value is 'change', which indicates data changes. |
| callback | DataObserver | 否 |  |

**示例：**

```TypeScript
const changeCallback1: distributedDataObject.DataObserver = (sessionId: string, fields: Array<string>) => {
  console.info('change callback1 ' + sessionId);
  if (fields != null && fields != undefined) {
      for (let index: number = 0; index < fields.length; index++) {
          console.info('change !' + fields[index]);
      }
  }
}

const changeCallback2: distributedDataObject.DataObserver = (sessionId: string, fields: Array<string>) => {
  console.info('change callback2 ' + sessionId);
  if (fields != null && fields != undefined) {
      for (let index: number = 0; index < fields.length; index++) {
          console.info('change !' + fields[index]);
      }
  }
}

try {
  // 删除单个数据变更回调函数
  g_object.on('change', changeCallback1);
  g_object.off('change', changeCallback1);

  // 删除所有数据变更回调函数
  g_object.on('change', changeCallback1);
  g_object.on('change', changeCallback2);
  g_object.off('change');
} catch (error) {
  console.error(`Failed to execute. Code: ${error.code}, message: ${error.message}`);
}

```

## off('status')

```TypeScript
off(type: 'status', callback?: StatusObserver): void
```

Unsubscribes from status changes of this distributed object.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'status' | 是 | Event type. The value is 'status', which indicates the status changes of a  distributed object. |
| callback | StatusObserver | 否 |  |

**示例：**

```TypeScript
const statusCallback1: distributedDataObject.StatusObserver = (sessionId: string, networkId: string, status: string) => {
  console.info('status callback1' + sessionId);
}

const statusCallback2: distributedDataObject.StatusObserver = (sessionId: string, networkId: string, status: string) => {
  console.info('status callback2' + sessionId);
}
try {
  // 删除单个状态变更回调函数
  g_object.on('status', statusCallback1);
  g_object.off('status', statusCallback1);

  // 删除所有状态变更回调函数
  g_object.on('status', statusCallback1);
  g_object.on('status', statusCallback2);
  g_object.off('status');
} catch (error) {
  console.error(`Failed to execute. Code: ${error.code}, message: ${error.message}`);
}

```

## off('progressChanged')

```TypeScript
off(type: 'progressChanged', callback?: ProgressObserver): void
```

Unsubscribes from asset transfer progress changes.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'progressChanged' | 是 | Event type. The value is 'progressChanged', which indicates the asset  transfer progress changes. |
| callback | ProgressObserver | 否 |  |

**示例：**

```TypeScript
const progressChangedCallback1: distributedDataObject.ProgressObserver = (sessionId: string, progress: number) => {
  console.info('progressChanged callback1' + sessionId);
  console.info('progressChanged callback1' + progress);
}

const progressChangedCallback2: distributedDataObject.ProgressObserver = (sessionId: string, progress: number) => {
  console.info('progressChanged callback2' + sessionId);
  console.info('progressChanged callback2' + progress);
}
try {
  g_object.on('progressChanged', progressChangedCallback1);
  // 取消对资产传输进度的监听
  g_object.off('progressChanged', progressChangedCallback1);

  g_object.on('progressChanged', progressChangedCallback1);
  g_object.on('progressChanged', progressChangedCallback2);
  // 取消对资产传输进度的所有监听
  g_object.off('progressChanged');
} catch (error) {
  console.error(`Failed to execute. Code: ${error.code}, message: ${error.message}`);
}

```

## offChange

```TypeScript
offChange(callback?: DataObserver): void
```

Off watch of change.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | DataObserver | 否 |  |

## offProgressChanged

```TypeScript
offProgressChanged(callback?: ProgressObserver): void
```

Unsubscribes from the asset sync progress.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ProgressObserver | 否 |  |

## offStatus

```TypeScript
offStatus(callback?: StatusObserver): void
```

Off watch of status.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | StatusObserver | 否 |  |

## on('change')

```TypeScript
on(type: 'change', callback: (sessionId: string, fields: Array<string>) => void ): void
```

Subscribes to data changes of this distributed data object.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value is 'change', which indicates data changes. sessionId |
| callback | (sessionId: string, fields: Array&lt;string>) => void | 是 | Callback used to return the changes of the distributed data object.  indicates the session ID of the distributed data object. fields indicates the changed properties of the  distributed data object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
g_object.on('change', (sessionId: string, fields: Array<string>) => {
    console.info('change' + sessionId);
    if (g_object != null && fields != null && fields != undefined) {
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'status' | 是 | Event type. The value is 'status', which indicates the status change (online or  offline) of the distributed object. |
| callback | (sessionId: string, networkId: string, status: 'online' \| 'offline' ) => void | 是 | Callback used to return the status change. sessionId indicates the session  ID of the distributed data object. networkId identifies the device. status indicates the object status,  which can be online or offline. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
g_object.on('status', (sessionId: string, networkId: string, status: 'online' | 'offline') => {
    console.info('status changed ' + sessionId + ' ' + status + ' ' + networkId);
});

```

## on('change')

```TypeScript
on(type: 'change', callback: DataObserver): void
```

Subscribes to data changes of this distributed data object.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'change' | 是 | Event type. The value is 'change', which indicates data changes. |
| callback | DataObserver | 是 | Callback used to listen for data changes of a distributed object. |

**示例：**

```TypeScript
const changeCallback1: distributedDataObject.DataObserver = (sessionId: string, fields: Array<string>) => {
  console.info('change callback1 ' + sessionId);
  if (fields != null && fields != undefined) {
      for (let index: number = 0; index < fields.length; index++) {
          console.info('change !' + fields[index]);
      }
  }
}
try {
  g_object.on('change', changeCallback1);
} catch (error) {
  console.error(`Failed to execute. Code: ${error.code}, message: ${error.message}`);
}

```

## on('status')

```TypeScript
on(type: 'status', callback: StatusObserver): void
```

Subscribes to the status changes of this distributed object.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'status' | 是 | Event type. The value is 'status', which indicates the status changes of a  distributed object. |
| callback | StatusObserver | 是 | Callback used to listen for status changes of a distributed object. |

**示例：**

```TypeScript
const statusCallback1: distributedDataObject.StatusObserver = (sessionId: string, networkId: string, status: string) => {
  console.info('status callback ' + sessionId);
}
try {
  g_object.on('status', statusCallback1);
} catch (error) {
  console.error(`Failed to execute. Code: ${error.code}, message: ${error.message}`);
}

```

## on('progressChanged')

```TypeScript
on(type: 'progressChanged', callback: ProgressObserver): void
```

Subscribes to the asset transfer progress changes.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'progressChanged' | 是 | Event type. The value is 'progressChanged', which indicates the asset  transfer progress changes. |
| callback | ProgressObserver | 是 | Callback used to listen for the asset transfer progress changes. |

**示例：**

```TypeScript
const progressChangedCallback: distributedDataObject.ProgressObserver = (sessionId: string, progress: number) => {
  console.info('progressChanged callback' + sessionId);
  console.info('progressChanged callback' + progress);
}
try {
  g_object.on('progressChanged', progressChangedCallback);
} catch (error) {
  console.error(`Failed to execute. Code: ${error.code}, message: ${error.message}`);
}

```

## onChange

```TypeScript
onChange(callback: DataObserver): void
```

On watch of change.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | DataObserver | 是 | The observer of object data changed. |

## onProgressChanged

```TypeScript
onProgressChanged(callback: ProgressObserver): void
```

Subscribes to the asset sync progress.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ProgressObserver | 是 | Observer to be registered. |

## onStatus

```TypeScript
onStatus(callback: StatusObserver): void
```

On watch of status.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | StatusObserver | 是 | The observer of object status changed. |

## revokeSave

```TypeScript
revokeSave(callback: AsyncCallback<RevokeSaveSuccessResponse>): void
```

Revokes the data of this distributed data object saved. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;RevokeSaveSuccessResponse> | 是 | Callback used to return  RevokeSaveSuccessResponse, which contains the session ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Incorrect parameter types. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
g_object.setSessionId('123456');
// 持久化数据
g_object.save('local', (err: BusinessError, result: distributedDataObject.SaveSuccessResponse) => {
    if (err) {
        console.error(`Failed to save. Code: ${err.code}, message: ${err.message}`);
    }
    console.info('save callback');
    console.info('save sessionId: ' + result.sessionId);
    console.info('save version: ' + result.version);
    console.info('save deviceId:  ' + result.deviceId);
});
// 删除持久化保存的数据
g_object.revokeSave((err: BusinessError, result: distributedDataObject.RevokeSaveSuccessResponse) => {
    if (err) {
      console.error(`Failed to revoke save. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('revokeSave callback');
    console.info('revokeSave sessionId ' + result.sessionId);
});

```

## revokeSave

```TypeScript
revokeSave(): Promise<RevokeSaveSuccessResponse>
```

Revokes the data of this distributed data object saved. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RevokeSaveSuccessResponse> | Promise used to return RevokeSaveSuccessResponse, which  contains the session ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
g_object.setSessionId('123456');
// 持久化数据
g_object.save('local').then((result: distributedDataObject.SaveSuccessResponse) => {
    console.info('save callback');
    console.info('save sessionId ' + result.sessionId);
    console.info('save version ' + result.version);
    console.info('save deviceId ' + result.deviceId);
}).catch((err: BusinessError) => {
    console.error(`Failed to save. Code: ${err.code}, message: ${err.message}`);
});
// 删除持久化保存的数据
g_object.revokeSave().then((result: distributedDataObject.RevokeSaveSuccessResponse) => {
    console.info('revokeSave callback');
    console.info('sessionId' + result.sessionId);
}).catch((err: BusinessError) => {
    console.error(`Failed to revoke save. Code: ${err.code}, message: ${err.message}`);
});

```

## save

```TypeScript
save(deviceId: string, callback: AsyncCallback<SaveSuccessResponse>): void
```

Saves a distributed data object. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the device where the data is stored. The value local indicates a local  device. |
| callback | AsyncCallback&lt;SaveSuccessResponse> | 是 | Callback used to return SaveSuccessResponse, which  contains information such as session ID, version, and device ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
g_object.setSessionId('123456');
g_object.save('local', (err: BusinessError, result:distributedDataObject.SaveSuccessResponse) => {
    if (err) {
        console.error(`Failed to save. Code: ${err.code}, message: ${err.message}`);
        return;
    }
    console.info('save callback');
    console.info('save sessionId: ' + result.sessionId);
    console.info('save version: ' + result.version);
    console.info('save deviceId:  ' + result.deviceId);
});

```

## save

```TypeScript
save(deviceId: string): Promise<SaveSuccessResponse>
```

Saves a distributed data object. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the device where the data is saved. The default value is local, which  indicates a local device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SaveSuccessResponse> | Promise used to return SaveSuccessResponse, which contains  information such as session ID, version, and device ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
g_object.setSessionId('123456');
g_object.save('local').then((callbackInfo: distributedDataObject.SaveSuccessResponse) => {
    console.info('save callback');
    console.info('save sessionId ' + callbackInfo.sessionId);
    console.info('save version ' + callbackInfo.version);
    console.info('save deviceId ' + callbackInfo.deviceId);
}).catch((err: BusinessError) => {
    console.error(`Failed to save. Code: ${err.code}, message: ${err.message}`);
});

```

## setAsset

```TypeScript
setAsset(assetKey: string, uri: string): Promise<void>
```

Sets the property information about a single asset in a distributed object. This API must be called before the setSessionId API is called. This API uses a promise to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assetKey | string | 是 | Property name of the asset in the distributed object. |
| uri | string | 是 | URI of the new asset to be set, indicating the distributed path for storing the asset.  The value must correspond to an existing asset. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15400002 | Parameter error. Possible causes:  1. The assetKey is invalid, such as "";  2. The uri is invalid, such as "". |
| 15400003 | The sessionId of the distributed object has been set. |

**示例：**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { commonType, distributedDataObject } from '@kit.ArkData';

class Note {
  title: string | undefined
  text: string | undefined
  attachment: commonType.Asset | undefined

  constructor(title: string | undefined, text: string | undefined, attachment: commonType.Asset | undefined) {
    this.title = title;
    this.text = text;
    this.attachment = attachment;
  }
}

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let attachment: commonType.Asset = {
      name: 'test_img.jpg',
      uri: 'file://com.example.myapplication/data/storage/el2/distributedfiles/dir/test_img.jpg',
      path: '/dir/test_img.jpg',
      createTime: '2024-01-02 10:00:00',
      modifyTime: '2024-01-02 10:00:00',
      size: '5',
      status: commonType.AssetStatus.ASSET_NORMAL
    }
    let note: Note = new Note('test', 'test', attachment);
    let g_object: distributedDataObject.DataObject = distributedDataObject.create(this.context, note);

    let uri = 'file://test/test.img';
    g_object.setAsset('attachment', uri).then(() => {
      console.info('setAsset success.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to set asset. Code: ${err.code}, message: ${err.message}`);
    });
  }
}

```

## setAssets

```TypeScript
setAssets(assetsKey: string, uris: Array<string>): Promise<void>
```

Sets the property information about multiple assets in a distributed object. This API must be called before the setSessionId API is called. The number of values contained in the uris array ranges from 1 to 50. This API uses a promise to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assetsKey | string | 是 | Property name of the assets in the distributed object. |
| uris | Array&lt;string> | 是 | URIs of the new asset array to be set, indicating the distributed paths for  storing each element of the asset. The number of array elements ranges from 1 to 50. The URI of an element  must be the distributed path corresponding to an actual asset. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 15400002 | Parameter error. Possible causes:  1. The assetsKey is invalid, such as "";  2. The uris is invalid, such as the length of uris is more than 50. |
| 15400003 | The sessionId of the distributed object has been set. |

**示例：**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { commonType, distributedDataObject } from '@kit.ArkData';

class Note {
  title: string | undefined
  text: string | undefined
  attachment: commonType.Asset | undefined

  constructor(title: string | undefined, text: string | undefined, attachment: commonType.Asset | undefined) {
    this.title = title;
    this.text = text;
    this.attachment = attachment;
  }
}

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let attachment: commonType.Asset = {
      name: 'test_img.jpg',
      uri: 'file://com.example.myapplication/data/storage/el2/distributedfiles/dir/test_img.jpg',
      path: '/dir/test_img.jpg',
      createTime: '2024-01-02 10:00:00',
      modifyTime: '2024-01-02 10:00:00',
      size: '5',
      status: commonType.AssetStatus.ASSET_NORMAL
    }
    let note: Note = new Note('test', 'test', attachment);
    let g_object: distributedDataObject.DataObject = distributedDataObject.create(this.context, note);

    let uris: Array<string> = ['file://test/test_1.txt', 'file://test/test_2.txt'];
    g_object.setAssets('attachment', uris).then(() => {
      console.info('setAssets success.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to set assets. Code: ${err.code}, message: ${err.message}`);
    });
  }
}

```

## setSessionId

```TypeScript
setSessionId(sessionId: string, callback: AsyncCallback<void>): void
```

Sets a session ID. This API uses an asynchronous callback to return the result. For the devices in the collaboration state in a trusted network, data of the distributed objects with the same session ID can be automatically synced across devices.

**起始版本：** 9

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 是 | ID of a distributed data object on a trusted network. The value can contain only  letters, digits, and underscores (_), and cannot exceed 128 characters. If this parameter is set to "" or  null, the distributed data object exits the network. |
| callback | AsyncCallback&lt;void> | 是 | Asynchronous callback invoked when the session ID is successfully set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types;  2. The sessionId allows only letters, digits, and underscores(_), and cannot exceed 128 in length. |
| 15400001 | Failed to create the in-memory database. |

**示例：**

```TypeScript
// g_object加入分布式组网
g_object.setSessionId(distributedDataObject.genSessionId(), () => {
    console.info('join session');
});
// g_object退出分布式组网
g_object.setSessionId('', () => {
    console.info('leave all session');
});

```

## setSessionId

```TypeScript
setSessionId(callback: AsyncCallback<void>): void
```

Exits all sessions. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

- API版本9 - 19： ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback invoked when the distributed data object exits all sessions. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. [since 9 - 19] |
| 401 | Parameter error. Incorrect parameter types. |
| 15400001 | Failed to create the in-memory database. |

**示例：**

```TypeScript
// g_object加入分布式组网
g_object.setSessionId(distributedDataObject.genSessionId(), () => {
    console.info('join session');
});
// 退出分布式组网
g_object.setSessionId(() => {
    console.info('leave all session.');
});

```

## setSessionId

```TypeScript
setSessionId(sessionId?: string): Promise<void>
```

Sets a session ID or exits the distributed network. This API uses a promise to return the result. If this parameter is set to "" or null, or left empty, the distributed data object exits the network. For the devices in the collaboration state in a trusted network, data of the distributed objects with the same session ID can be automatically synced across devices.

**起始版本：** 9

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 否 | ID of a distributed data object on a trusted network. The value can contain only  letters, digits, and underscores (_), and cannot exceed 128 characters. If this parameter is set to "" or  null, or left empty, the distributed data object exits the network. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types;  2. The sessionId allows only letters, digits, and underscores(_), and cannot exceed 128 in length. |
| 15400001 | Failed to create the in-memory database. |

**示例：**

```TypeScript
// g_object加入分布式组网
g_object.setSessionId(distributedDataObject.genSessionId()).then(() => {
    console.info('join session.');
}).catch((error: BusinessError) => {
    console.error(`Failed to set sessionId. Code: ${error.code}, message: ${error.message}`);
});
// 退出分布式组网
g_object.setSessionId().then(() => {
    console.info('leave all session.');
}).catch((error: BusinessError) => {
    console.error(`Failed to set sessionId. Code: ${error.code}, message: ${error.message}`);
});

```

## key

```TypeScript
[key: string]: Object | null | undefined
```

Get and set value of property.

**类型：** Object | null | undefined

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

