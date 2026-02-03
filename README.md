# Moon WASM Trap Reproduction

This repo demonstrates a wasm trap issue when running `moon run :build` with the `packageManager` setting configured in `.moon/toolchain.yml`.

## Issue

When `.moon/toolchain.yml` has `packageManager: pnpm` configured in a monorepo with cross-package dependencies, running `moon run :build` fails with a wasm trap error.

## Steps to Reproduce

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the build:
   ```bash
   moon run :build
   ```

3. Observe the wasm trap error.

## Workaround

Remove or comment out the `packageManager` line in `.moon/toolchain.yml`:

```yaml
node:
  # packageManager: pnpm  # Comment this out
  version: 22.11.0
```

Then run `moon run :build` again - it should succeed.

## Structure

```
packages/
  pkg-a/          # Base package
  pkg-b/          # Depends on pkg-a
```

## Environment

- Moon: latest
- Node: 22.x
- pnpm: 10.x
