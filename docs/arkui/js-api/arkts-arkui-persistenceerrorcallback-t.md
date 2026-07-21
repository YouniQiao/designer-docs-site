# PersistenceErrorCallback

```TypeScript
export declare type PersistenceErrorCallback = (key: string, reason: 'quota' | 'serialization' | 'unknown', 
    message: string, oldValue?: string) => void
```

Defines a callback used to return the cause of the persistence failure.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-unnamed-export declare type PersistenceErrorCallback = (key: string, reason: 'quota' | 'serialization' | 'unknown', 
    message: string, oldValue?: string) => void--><!--Device-unnamed-export declare type PersistenceErrorCallback = (key: string, reason: 'quota' | 'serialization' | 'unknown', 
    message: string, oldValue?: string) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the error.  |
| reason | 'quota' \| 'serialization' \| 'unknown' | Yes | Reason of the error.  |
| message | string | Yes | Extra information about the error.  |
| oldValue | string | No | Old serialized data stored on the disk when deserialization fails. |

