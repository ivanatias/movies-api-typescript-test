export function wrapAsyncFn<ARGS extends unknown[]>(
  fn: (...args: ARGS) => Promise<unknown>
): (...args: ARGS) => void {
  return (...args) => {
    void fn(...args)
  }
}

// This Asynchronous Function Wrapper utility servers the purpose of marking a promise as purposely dangling to avoid
// conflicts with typescript-eslint and also, avoid disabling the @typescript-eslint/no-misused-promises rule.
