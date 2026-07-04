# TEEC_Context

```c
typedef struct TEEC_Context {...} TEEC_Context
```

## Overview

Defines the context, a logical connection between a CA and a TEE.

**Since**: 20

**Related module**: [TeeClient](capi-teeclient.md)

**Header file**: [tee_client_type.h](capi-tee-client-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| int32_t fd | File descriptor for the TA. |
| uint8_t *ta_path | Path to the Trusted Application (TA). |
| struct [ListNode](capi-teeclient-listnode.md) session_list | Linked list of sessions associated with the context. |
| struct [ListNode](capi-teeclient-listnode.md) shrd_mem_list | Linked list of shared memory regions associated with the context. |
| union | Union for either shared buffer or implementation data.<br>**Since**: 20 |


