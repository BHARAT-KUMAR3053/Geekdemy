import {ICourses} from '@geekdemy/controllers/main/interfaces';

const courses: ICourses = {
  totalQuantity: 0,
  totalAmount: 0,
  discountAmount: 0,
  leastAmount: 0,
  coupons: null,
};

const CERTIFICATION = 3000;
const DEGREE = 5000;
const DIPLOMA = 2500;

export { courses, CERTIFICATION, DEGREE, DIPLOMA };
