interface Values {
  value1: number
  value2: number
}

type Operation = (value1: number, value2: number) => number


class OperationNotSupportedError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "OperationNotSupportedError"
  }
}

const add = (value1: number, value2: number) => value1 + value2

const substract = (value1: number, value2: number) => value1 - value2

const multiply = (value1: number, value2: number) => value1 * value2

const power = (value1: number, value2: number) => value1 ** value2

const divide = (value1: number, value2: number) => value1 / value2


const supportedOperations: Record<string, Operation> = {
  add: add,
  substract: substract,
  multiply: multiply,
  divide: divide,
  power: power,
} 

const executeOperation = (operation: string, { value1, value2 }: Values): number => {
  const operationFn = supportedOperations[operation]
  if (!operationFn) {
    throw new OperationNotSupportedError(`Operation "${operation}" not supported, choice a valid operation [${Object.keys(supportedOperations).join(", ")}]`)
  }

  return operationFn(value1, value2)
}



const main = () => {
  try {
    const values: Values = {value1: 5, value2: 5}
    const operation1 = executeOperation("multiply", values)
    console.log(operation1)
  } catch (err) {
    console.error(err)
    }
}


main()
