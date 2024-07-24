export interface ICourses {
  totalQuantity: number;
  totalAmount: number;
  discountAmount: number;
  leastAmount: number;
  coupons: string[] | null;
  CERTIFICATION?: {quantity: number};
  DEGREE?: {quantity: number};
  DIPLOMA?: {quantity: number};
}

export type CourseCategory = 'CERTIFICATION' | 'DEGREE' | 'DIPLOMA';
