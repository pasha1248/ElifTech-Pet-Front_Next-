/** @format */

export const calculateTasks = (tasks: any[]) => {
  if (tasks.length === 0) return 0

  let amount = 0

  tasks.forEach((el: any) => {
    if (el.completed === true) {
      amount++
    }
  })

  return `${amount}/${tasks.length}`
}

export const calculatePercent = (tasks: any[]) => {
  if (tasks.length === 0) return 0

  let amount = 0

  tasks.forEach((el: any) => {
    if (el.completed === true) {
      amount++
    }
  })

  return (amount / tasks.length) * 100
}
