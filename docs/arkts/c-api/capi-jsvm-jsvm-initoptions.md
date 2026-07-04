# JSVM_InitOptions

```c
typedef struct JSVM_InitOptions {...} JSVM_InitOptions
```

## Overview

Init the JavaScript VM with init option.

**Since**: 11

**Related module**: [JSVM](capi-jsvm.md)

**Header file**: [jsvm_types.h](capi-jsvm-types-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const intptr_t* externalReferences | Optional nullptr-terminated array of raw adddresses in the embedder that theVM can match against during serialization and use for deserialization. Thisarray and its content must stay valid for the entire lifetime of the VMinstance. |
| int* argc | Flags for the VM. IF removeFlags is true, recognized flags will be removedfrom (argc, argv). Note that these flags are specific to VM.They are mainly used for development. Do not include them in production asthey might not take effect if the VM is different from the developmentenvironment. |
| char** argv | argv . |
| bool removeFlags | remove flags. |


