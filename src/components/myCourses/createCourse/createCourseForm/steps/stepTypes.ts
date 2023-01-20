export interface IPricePlan {
  title: string
  price: number
  benefits: string[]
  description: { cloud: number; users: number }[]
}

export interface IFormAboutCourseStep1 {
  name: string
  category: string
  level: string
  description: string
}
