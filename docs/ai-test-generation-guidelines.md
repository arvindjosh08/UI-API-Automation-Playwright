# AI-Driven Test Generation Guidelines

## Table of Contents
- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Solution Framework](#solution)
- [Implementation Safeguards](#implementation-safeguards)
- [Conclusion](#conclusion)

---

## Overview

This document outlines the enhancement of AI prompts to enable intelligent decision-making during test generation.  
The enhanced prompts automatically analyze existing code, assess dependencies, and select the correct approach to prevent breaking changes while extending functionality.

---

## Problem Statement

When AI generates tests, it faces three critical scenarios with existing page objects:

1. **No existing page object**  
   *Simple creation*
2. **Existing page object suffices**  
   *Direct usage*
3. **Existing page object needs enhancement**  
   *In-place modification with dependency management*

**The Challenge:**  
Scenario 3 requires careful handling because modifying existing page objects can break dependent tests across the codebase.  
Therefore, the solution must use a structured framework that:

- Identifies all dependent files  
- Updates dependencies  
- Validates all impacted files  

---

## Solution

### Core Design Principles
1. **Backward Compatibility**  
   Never break existing functionality before making changes.
2. **Intelligent Analysis**  
   AI must analyze dependencies before creating or modifying tests.
3. **Clear Decision Framework**  
   Deterministic pattern selection based on analysis.

---

## File Analysis Framework

### Phase 1: Page Object Discovery
- **Technique:** `search_files` with pattern matching  
- **Purpose:** Identify existing page objects with similar functionality  
- **Output:** List of candidate page objects for modification or reuse  

### Phase 2: Dependency Analysis
- **Technique:** `search_files` for import statements  
- **Purpose:** Find ALL files that import the target page object  
- **Output:** Complete list of dependent files requiring updates  

### Phase 3: Pattern Selection
- **Technique:** Decision matrix based on analysis results  
- **Purpose:** Select appropriate modification pattern  
- **Output:** Clear pattern choice with justification  

### Phase 4: Dependency Management (Critical for Pattern C)
- **Technique:** File modification and import precision  
- **Purpose:** Update all dependent files when modifying existing page objects  
- **Output:** All dependent tests updated and validated  

---

## Modification Patterns

### **Pattern A: Clean Slate Creation**

``` bash
**Condition:** No existing page object  
**Action:** Create new page object with -genai suffix  
**Risk:** Low  
**Files:** new-feature-page-genai.ts
```
---

### **Pattern B: Direct Usage**
``` bash
**Condition:** Existing page object has all required functionality  
**Action:** Import and use the existing page object  
**Risk:** None  
**Files:** Use existing file as-is  
```
---

### **Pattern C: In-Place Modification with Dependency Management**
``` bash
**Condition:** Page object needs enhancement or refactoring  
**Action:**  Update existing file and rename with -genai suffix and update ALL dependent imports  
**Risk:** Medium — requires comprehensive dependency management  
**Files:**  existing-page.ts → existing-page-genai.ts (modified in-place)
**Dependencies:**  All dependent test files updated automatically  
```
---

## Implementation Safeguards

### Mandatory Validation Steps

1. **File Naming Compliance**  All AI-modified or AI-created files must have the -genai suffix.
2. **Dependency Management**  For Pattern C, identify and update ALL dependent files.
3. **Import Path Updates**  Update all import statements to reference modified files.
4. **Comprehensive Testing**  Re-run impacted tests to validate functionality.
5. **Pattern Documentation**  AI must document which pattern was used and why.
6. **Impact Documentation**  For Pattern C, document all files that were updated.


## Conclusion

This 3-pattern framework provides a systematic approach to AI-driven test generation that:

- Prevents breaking changes  
- Enables intelligent dependency management  
- Ensures safe enhancement of existing page objects  
- Supports scalable and maintainable automated test development  

---