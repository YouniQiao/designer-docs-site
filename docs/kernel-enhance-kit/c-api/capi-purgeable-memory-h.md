# purgeable_memory.h

## Overview

provides memory management capabilities of purgeable memory.provides features include create, begin read ,end read, begin write, end write, rebuild, and so on.when using, it is necessary to link libpurgeable_memory_ndk.z.so

**Library**: libpurgeable_memory_ndk.z.so

**System capability**: SystemCapability.Kernel.Memory

**Since**: 10

**Related module**: [memory](capi-memory.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [PurgMem](capi-memory-purgmem.md) | OH_PurgeableMemory | Purgeable mem struct |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef bool (\*OH_PurgeableMemory_ModifyFunc)(void *, size_t, void *)](#oh_purgeablememory_modifyfunc) | OH_PurgeableMemory_ModifyFunc | @brief: function pointer, it points to a function which is used to build content of a PurgMem obj. |
| [OH_PurgeableMemory *OH_PurgeableMemory_Create(size_t size, OH_PurgeableMemory_ModifyFunc func, void *funcPara)](#oh_purgeablememory_create) | - | @brief: create a PurgMem obj. |
| [bool OH_PurgeableMemory_Destroy(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_destroy) | - | @brief: destroy a PurgMem obj. |
| [bool OH_PurgeableMemory_BeginRead(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_beginread) | - | @brief: begin read a PurgMem obj. |
| [void OH_PurgeableMemory_EndRead(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_endread) | - | @brief: end read a PurgMem obj. |
| [bool OH_PurgeableMemory_BeginWrite(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_beginwrite) | - | @brief: begin write a PurgMem obj. |
| [void OH_PurgeableMemory_EndWrite(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_endwrite) | - | @brief: end write a PurgMem obj. |
| [void *OH_PurgeableMemory_GetContent(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_getcontent) | - | @brief: get content ptr of a PurgMem obj. |
| [size_t OH_PurgeableMemory_ContentSize(OH_PurgeableMemory *purgObj)](#oh_purgeablememory_contentsize) | - | @brief: get content size of a PurgMem obj. |
| [bool OH_PurgeableMemory_AppendModify(OH_PurgeableMemory *purgObj, OH_PurgeableMemory_ModifyFunc func, void *funcPara)](#oh_purgeablememory_appendmodify) | - | @brief: append a modify to a PurgMem obj. |

## Function description

### OH_PurgeableMemory_ModifyFunc()

```c
typedef bool (*OH_PurgeableMemory_ModifyFunc)(void *, size_t, void *)
```

**Description**

@brief: function pointer, it points to a function which is used to build content of a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| (void \* | *: data ptr, points to start address of a PurgMem obj's content. |
| size_t | Data size of the content. |
| (void \* | *: other private parameters. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | @return: build content result, true means success, while false is fail. |

### OH_PurgeableMemory_Create()

```c
OH_PurgeableMemory *OH_PurgeableMemory_Create(size_t size, OH_PurgeableMemory_ModifyFunc func, void *funcPara)
```

**Description**

@brief: create a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| size_t size | Data size of a PurgMem obj's content. |
| [OH_PurgeableMemory_ModifyFunc](capi-purgeable-memory-h.md#oh_purgeablememory_modifyfunc) func | Function pointer, it is used to recover data when the PurgMem obj's content is purged. |
| void *funcPara | Parameters used by @func. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_PurgeableMemory *](capi-memory-purgmem.md) | @return: a PurgMem obj. |

### OH_PurgeableMemory_Destroy()

```c
bool OH_PurgeableMemory_Destroy(OH_PurgeableMemory *purgObj)
```

**Description**

@brief: destroy a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PurgeableMemory](capi-memory-purgmem.md) *purgObj | A PurgMem obj to be destroyed. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | @return: true is success, while false is fail. return true if @purgObj is NULL.<br> If return true, @purgObj will be set to NULL to avoid Use-After-Free. |

### OH_PurgeableMemory_BeginRead()

```c
bool OH_PurgeableMemory_BeginRead(OH_PurgeableMemory *purgObj)
```

**Description**

@brief: begin read a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PurgeableMemory](capi-memory-purgmem.md) *purgObj | A PurgMem obj. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | @return: return true if @purgObj's content is present.<br>          If content is purged(no present), system will recover its data,<br>          return false if content is purged and recovered failed.<br>          While return true if content recover success.<br> OS cannot reclaim the memory of @purgObj's content when this<br> function return true, until PurgMemEndRead() is called. |

### OH_PurgeableMemory_EndRead()

```c
void OH_PurgeableMemory_EndRead(OH_PurgeableMemory *purgObj)
```

**Description**

@brief: end read a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PurgeableMemory](capi-memory-purgmem.md) *purgObj | A PurgMem obj.OS may reclaim the memory of @purgObj's contentat a later time when this function returns. |

### OH_PurgeableMemory_BeginWrite()

```c
bool OH_PurgeableMemory_BeginWrite(OH_PurgeableMemory *purgObj)
```

**Description**

@brief: begin write a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PurgeableMemory](capi-memory-purgmem.md) *purgObj | A PurgMem obj. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | @return: return true if @purgObj's content is present.<br>          if content is purged(no present), system will recover its data,<br>          return false if content is purged and recovered failed.<br>          While return true if content is successfully recovered.<br> OS cannot reclaim the memory of @purgObj's content when this<br> function return true, until PurgMemEndWrite() is called. |

### OH_PurgeableMemory_EndWrite()

```c
void OH_PurgeableMemory_EndWrite(OH_PurgeableMemory *purgObj)
```

**Description**

@brief: end write a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PurgeableMemory](capi-memory-purgmem.md) *purgObj | A PurgMem obj.OS may reclaim the memory of @purgObj's contentat a later time when this function returns. |

### OH_PurgeableMemory_GetContent()

```c
void *OH_PurgeableMemory_GetContent(OH_PurgeableMemory *purgObj)
```

**Description**

@brief: get content ptr of a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PurgeableMemory](capi-memory-purgmem.md) *purgObj | A PurgMem obj. |

**Returns**:

| Type | Description |
| -- | -- |
| void * | @return: return start address of a PurgMem obj's content.<br>          Return NULL if @purgObj is NULL.<br> This function should be protect by PurgMemBeginRead()/PurgMemEndRead()<br> or PurgMemBeginWrite()/PurgMemEndWrite() |

### OH_PurgeableMemory_ContentSize()

```c
size_t OH_PurgeableMemory_ContentSize(OH_PurgeableMemory *purgObj)
```

**Description**

@brief: get content size of a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PurgeableMemory](capi-memory-purgmem.md) *purgObj | A PurgMem obj. |

**Returns**:

| Type | Description |
| -- | -- |
| size_t | @return: return content size of @purgObj.<br>          Return 0 if @purgObj is NULL. |

### OH_PurgeableMemory_AppendModify()

```c
bool OH_PurgeableMemory_AppendModify(OH_PurgeableMemory *purgObj, OH_PurgeableMemory_ModifyFunc func, void *funcPara)
```

**Description**

@brief: append a modify to a PurgMem obj.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PurgeableMemory](capi-memory-purgmem.md) *purgObj | A PurgMem obj. |
| [OH_PurgeableMemory_ModifyFunc](capi-purgeable-memory-h.md#oh_purgeablememory_modifyfunc) func | Function pointer, it will modify content of @PurgMem. |
| void *funcPara | Parameters used by @func. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | @return:  append result, true is success, while false is fail. |


