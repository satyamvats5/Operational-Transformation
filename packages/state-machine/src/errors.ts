/**
 * No-op Error: Unexpected method call without any executable code.
 */
export class NoopError extends Error {
  readonly name: string = "No-op Encountered";
  readonly message: string = "This method should not have been called!";
}
