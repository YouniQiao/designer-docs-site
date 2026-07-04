# Sequenceable

Writes objects of classes to a **MessageParcel** and reads them from the **MessageParcel** during IPC.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [Parcelable](arkts-ipc-parcelable-i.md#parcelable)

**System capability:** SystemCapability.Communication.IPC.Core

## Modules to Import

```TypeScript
import { rpc } from '@ohos.rpc';
```

## marshalling

```TypeScript
marshalling(dataOut: MessageParcel): boolean
```

Marshals the sequenceable object into a **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** marshalling(dataOut:

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataOut | MessageParcel | Yes | **MessageParcel** object to which the sequenceable object is to be marshaled. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageParcel: rpc.MessageParcel): boolean {
    messageParcel.writeInt(this.num);
    messageParcel.writeString(this.str);
    return true;
  }
  unmarshalling(messageParcel: rpc.MessageParcel): boolean {
    this.num = messageParcel.readInt();
    this.str = messageParcel.readString();
    return true;
  }
}

try {
  let sequenceable = new MySequenceable(1, "aaa");
  let data = rpc.MessageParcel.create();
  let result = data.writeSequenceable(sequenceable);
  hilog.info(0x0000, 'testTag', 'writeSequenceable is ' + result);
  let ret = new MySequenceable(0, "");
  let result2 = data.readSequenceable(ret);
  hilog.info(0x0000, 'testTag', 'readSequenceable is ' + result2);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## unmarshalling

```TypeScript
unmarshalling(dataIn: MessageParcel): boolean
```

Unmarshals this sequenceable object from a **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** unmarshalling(dataIn:

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | MessageParcel | Yes | **MessageParcel** object in which the sequenceable object is to be unmarshaled. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageParcel: rpc.MessageParcel): boolean {
    messageParcel.writeInt(this.num);
    messageParcel.writeString(this.str);
    return true;
  }
  unmarshalling(messageParcel: rpc.MessageParcel): boolean {
    this.num = messageParcel.readInt();
    this.str = messageParcel.readString();
    return true;
  }
}

try {
  let sequenceable = new MySequenceable(1, "aaa");
  let data = rpc.MessageParcel.create();
  let result = data.writeSequenceable(sequenceable);
  hilog.info(0x0000, 'testTag', 'writeSequenceable is ' + result);
  let ret = new MySequenceable(0, "");
  let result2 = data.readSequenceable(ret);
  hilog.info(0x0000, 'testTag', 'readSequenceable is ' + result2);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

