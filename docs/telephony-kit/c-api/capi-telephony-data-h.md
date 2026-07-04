# telephony_data.h

## Overview

Provides C interface for the telephony cellular data.

**Library**: libtelephony_data.so

**System capability**: SystemCapability.Telephony.CellularData

**Since**: 13

**Related module**: [Telephony](capi-telephony.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [int32_t OH_Telephony_GetDefaultCellularDataSlotId(void)](#oh_telephony_getdefaultcellulardataslotid) | Obtains the default cellular data slot id. |

## Function description

### OH_Telephony_GetDefaultCellularDataSlotId()

```c
int32_t OH_Telephony_GetDefaultCellularDataSlotId(void)
```

**Description**

Obtains the default cellular data slot id.

**System capability**: SystemCapability.Telephony.CellularData

**Since**: 13

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | the default cellular data slot id (0 for slot 1, 1 for slot 2). |


