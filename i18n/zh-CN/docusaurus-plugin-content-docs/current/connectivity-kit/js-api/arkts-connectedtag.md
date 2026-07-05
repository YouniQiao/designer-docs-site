# @ohos.connectedTag

Provides methods to operate or manage Connected Tag.

**起始版本：** 8

**系统能力：** SystemCapability.Communication.ConnectedTag

## 导入模块

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [init](arkts-connectedtag-init-f.md#init-1) | Initializes Connected Tag. |
| [initialize](arkts-connectedtag-initialize-f.md#initialize-1) | Initializes the connected NFC tag. |
| [off](arkts-connectedtag-off-f.md#off-1) | Unsubscribes NFC RF status change events. <p>All callback functions will be unregistered If there is no specific callback parameter.</p> |
| [on](arkts-connectedtag-on-f.md#on-1) | Subscribes NFC RF status change events. |
| [read](arkts-connectedtag-read-f.md#read-1) | Reads the NDEF data from the connected NFC tag. |
| [read](arkts-connectedtag-read-f.md#read-2) | Reads the NDEF data from the connected NFC tag. |
| [readNdefTag](arkts-connectedtag-readndeftag-f.md#readNdefTag-1) | Reads the NDEF Data. |
| [readNdefTag](arkts-connectedtag-readndeftag-f.md#readNdefTag-2) | Reads the NDEF Data. |
| [uninit](arkts-connectedtag-uninit-f.md#uninit-1) | UnInitializes Connected Tag. |
| [uninitialize](arkts-connectedtag-uninitialize-f.md#uninitialize-1) | Uninitializes the connected NFC tag. |
| [write](arkts-connectedtag-write-f.md#write-1) | Writes the NDEF data to the connected NFC tag. |
| [write](arkts-connectedtag-write-f.md#write-2) | Writes the NDEF data to the connected NFC tag. |
| [writeNdefTag](arkts-connectedtag-writendeftag-f.md#writeNdefTag-1) | Writes the NDEF Data. |
| [writeNdefTag](arkts-connectedtag-writendeftag-f.md#writeNdefTag-2) | Writes the NDEF Data. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [NfcRfType](arkts-connectedtag-nfcrftype-e.md) | Describes the NFC RF type. |

