// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const keyMissingWarn =
  (className: string) =>
    (value: any, name: string): string | undefined => {
      const message = `Params ${name} missing in ${className}`;
      if (typeof value === 'undefined' || value === null) {
        console.error(message);
        return message;
      }
    };
