# Parcelable

Writes an object to a **MessageSequence** and reads it from the **MessageSequence** during IPC.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## marshalling

```TypeScript
marshalling(dataOut: MessageSequence): boolean
```

Marshals this **Parcelable** object into a **MessageSequence** object.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataOut | MessageSequence | 是 | MessageSequence object to which the Parcelable object is to be  marshaled. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyParcelable implements rpc.Parcelable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageSequence: rpc.MessageSequence): boolean {
    messageSequence.writeInt(this.num);
    messageSequence.writeString(this.str);
    return true;
  }
  unmarshalling(messageSequence: rpc.MessageSequence): boolean {
    this.num = messageSequence.readInt();
    this.str = messageSequence.readString();
    hilog.info(0x0000, 'testTag', 'readInt is ' + this.num + ' readString is ' + this.str);
    return true;
  }
}

try {
  let parcelable = new MyParcelable(1, "aaa");
  let data = rpc.MessageSequence.create();
  data.writeParcelable(parcelable);
  let ret = new MyParcelable(0, "");
  data.readParcelable(ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## unmarshalling

```TypeScript
unmarshalling(dataIn: MessageSequence): boolean
```

Unmarshals this **Parcelable** object from a **MessageSequence** object.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataIn | MessageSequence | 是 | MessageSequence object from which the Parcelable object is to be  unmarshaled. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyParcelable implements rpc.Parcelable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageSequence: rpc.MessageSequence): boolean {
    messageSequence.writeInt(this.num);
    messageSequence.writeString(this.str);
    return true;
  }
  unmarshalling(messageSequence: rpc.MessageSequence): boolean {
    this.num = messageSequence.readInt();
    this.str = messageSequence.readString();
    hilog.info(0x0000, 'testTag', 'readInt is ' + this.num + ' readString is ' + this.str);
    return true;
  }
}

try {
  let parcelable = new MyParcelable(1, "aaa");
  let data = rpc.MessageSequence.create();
  data.writeParcelable(parcelable);
  let ret = new MyParcelable(0, "");
  data.readParcelable(ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

