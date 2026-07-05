# shared_mutex.h

## Overview

Declares the shared mutex interfaces in C.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 18

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [FFRT_C_API int ffrt_rwlock_init(ffrt_rwlock_t* rwlock, const ffrt_rwlockattr_t* attr)](#ffrt_rwlock_init) | Initializes a rwlock. |
| [FFRT_C_API int ffrt_rwlock_wrlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_wrlock) | Locks a write lock. |
| [FFRT_C_API int ffrt_rwlock_trywrlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_trywrlock) | Attempts to lock a write lock. |
| [FFRT_C_API int ffrt_rwlock_rdlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_rdlock) | Locks a read lock. |
| [FFRT_C_API int ffrt_rwlock_tryrdlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_tryrdlock) | Attempts to lock a read lock. |
| [FFRT_C_API int ffrt_rwlock_unlock(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_unlock) | Unlocks a rwlock. |
| [FFRT_C_API int ffrt_rwlock_destroy(ffrt_rwlock_t* rwlock)](#ffrt_rwlock_destroy) | Destroys a rwlock. |

## Function description

### ffrt_rwlock_init()

```c
FFRT_C_API int ffrt_rwlock_init(ffrt_rwlock_t* rwlock, const ffrt_rwlockattr_t* attr)
```

**Description**

Initializes a rwlock.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_rwlock_t](capi-ffrt-ffrt-rwlock-t.md)* rwlock | Indicates a pointer to the rwlock. |
| [const ffrt_rwlockattr_t](capi-ffrt-ffrt-rwlockattr-t.md)* attr | Indicates a pointer to the rwlock attribute, only supports default mode, set to null pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the rwlock is initialized and the attr is nullptr;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_rwlock_wrlock()

```c
FFRT_C_API int ffrt_rwlock_wrlock(ffrt_rwlock_t* rwlock)
```

**Description**

Locks a write lock.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_rwlock_t](capi-ffrt-ffrt-rwlock-t.md)* rwlock | Indicates a pointer to the rwlock. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the rwlock is locked;<br>         <b>ffrt_error_inval</b> or blocks the calling thread otherwise. |

### ffrt_rwlock_trywrlock()

```c
FFRT_C_API int ffrt_rwlock_trywrlock(ffrt_rwlock_t* rwlock)
```

**Description**

Attempts to lock a write lock.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_rwlock_t](capi-ffrt-ffrt-rwlock-t.md)* rwlock | Indicates a pointer to the rwlock. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the rwlock is locked;<br>         <b>ffrt_error_inval</b> or <b>ffrt_error_busy</b> otherwise. |

### ffrt_rwlock_rdlock()

```c
FFRT_C_API int ffrt_rwlock_rdlock(ffrt_rwlock_t* rwlock)
```

**Description**

Locks a read lock.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_rwlock_t](capi-ffrt-ffrt-rwlock-t.md)* rwlock | Indicates a pointer to the rwlock. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the rwlock is locked;<br>         <b>ffrt_error_inval</b> or blocks the calling thread otherwise. |

### ffrt_rwlock_tryrdlock()

```c
FFRT_C_API int ffrt_rwlock_tryrdlock(ffrt_rwlock_t* rwlock)
```

**Description**

Attempts to lock a read lock.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_rwlock_t](capi-ffrt-ffrt-rwlock-t.md)* rwlock | Indicates a pointer to the rwlock. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the rwlock is locked;<br>         <b>ffrt_error_inval</b> or <b>ffrt_error_busy</b> otherwise. |

### ffrt_rwlock_unlock()

```c
FFRT_C_API int ffrt_rwlock_unlock(ffrt_rwlock_t* rwlock)
```

**Description**

Unlocks a rwlock.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_rwlock_t](capi-ffrt-ffrt-rwlock-t.md)* rwlock | Indicates a pointer to the rwlock. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the rwlock is unlocked;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_rwlock_destroy()

```c
FFRT_C_API int ffrt_rwlock_destroy(ffrt_rwlock_t* rwlock)
```

**Description**

Destroys a rwlock.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_rwlock_t](capi-ffrt-ffrt-rwlock-t.md)* rwlock | Indicates a pointer to the rwlock. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the rwlock is destroyed;<br>         <b>ffrt_error_inval</b> otherwise. |


