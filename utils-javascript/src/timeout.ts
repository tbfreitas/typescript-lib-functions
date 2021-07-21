export const timeout = (ms: number, error: string, promise: Promise<number>) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(error))
    }, ms)

    promise
      .then((value: number) => {
        clearTimeout(timer)
        resolve(value)
      })
      .catch((reason: Error) => {
        reject(reason)
        clearTimeout(timer)
      })
  })
};